/* eslint-disable semi */
import log from '../util/log.js'
import AJS from '../archive/archive.js'
import '../util/center.js' // for $.center()

// eslint-disable-next-line import/no-named-as-default
import $ from '../util/jquery.js'

/**
 * Handles management of items from GUI/browser.
 */
class Manage {
  /**
   * Includes the component's companion CSS
   */
  static css() {
    const head = document.getElementsByTagName('head')[0]
    const e = document.createElement('link')
    e.media = 'screen'
    e.href = `/components/manage/manage.css`
    e.type = 'text/css'
    e.rel = 'stylesheet'
    head.appendChild(e)
  }

  /**
   * Append manager class and function on list/item tiles in pages:
   *   my favorites
   *   'My Library'
   *   search results (admins only)
   * @param {Boolean} extra - show extra options? (truthy/falsey OK)
   */
  static manage_items(extra) {
    // If in lists mode, convert to tiles
    if ($('body').hasClass('lists'))
      $('.tiles-button:visible').click()

    // make sure sanity - this is only for:
    // - removing favorites
    // - a user darking their own uploaded items
    const inTab = AJS.inTab()
    const search_results = $('body').hasClass('search-results-page')
    const favorites = (inTab === 'collection')
    const uploads = (inTab === 'uploads'  ||  'collections')
    const scope = (favorites ? 'to un-favorite' : 'to remove')
    // find the ../details/@[NAME].. portion from url so we can construct the fav-[NAME] identifier
    const favID = (uploads ? (location.href.match(/@[^&/#?]+/) || [''])[0].substring(1) : '')

    if (!favorites  &&  !uploads  &&  !search_results) {
      // eslint-disable-next-line  no-alert
      alert('removal feature only works for favorites and uploads')
      return
    }

    // special items can't be darked, removed etc.
    $(`.item-ia.new-item
      ${(uploads ? ', .item-ia.account-ia' : '')/* cant dark your own account item */}
      ${(favID !== '' ? `, .item-ia[data-id="fav-${favID}"]` : '')/* cant dark your own favorite item */}
    `).toggleClass('hidden-tiles')

    $('.columns-facets').toggleClass('opac30')

    if (!$('.item-ia .manage-check').length) {
      if ($('#manage-help').length && !$('.item-ia .hov').length) {
        // cancel editability
        $('.item-ia').removeClass('manage-item').unbind('click')
        $('.columns-items .co-top-row > div').toggle()
        $('.item-ia .manage-check, #manage-help').remove()
        $('.item-ia').off('contextmenu')
        return
      }
      // make all items editable on page
      $('.columns-items .co-top-row').prepend(`
<div id="manage-help" style="display:none">
  <div>
    Select items ${(search_results ? '' : scope)}
  </div>
  <div class="topinblock">
    <button class="btn btn-small btn-info"
      onclick="Manage.manage_items()">Cancel</button>
    <button class="btn btn-small btn-danger"
      onclick="Manage.remove_items_modal(${favorites ? 'true' : 'false'})">Remove selected items</button>
    ${(extra  &&  search_results ? `
      <button class="btn btn-small btn-warning"
        onclick="Manage.to_item_manager()">Item Manager the items</button>
      ` : '')}
  </div>
    ${(extra ? `
    <p class="topinblock">
      <a href="#" onclick="return Manage.toggle_checkboxes()">
        Toggle</br>all
      </a>
    </p>
    ` : '')}
</div>`)

      // visually swap the top row w/ new hidden 'item manager' top row above
      $('.columns-items .co-top-row > div').toggle()

      // show checkboxes in upper right of (manageable) tiles and make tile clicking _also_
      // react like you (un/)checked the checkbox
      $('.item-ia.task-pending').bind('click', Manage.tile_clicked)
      $(`.item-ia:not(.mobile-header):not(.new-item):not(.task-pending)${
        uploads ? ':not(.account-ia)' : ''
      }${
        favID !== '' ? `:not([data-id="fav-${favID}"])` : ''
      }`).addClass('manage-item').bind('click', Manage.tile_clicked).append(Manage.checkbox(search_results
        ? 'include item for item management'
        : 'remove this item from list'))

      // esp. to make QA easier - make tile right-click open item /details/ page in new tab
      $('.item-ia').on('contextmenu', (e) => {
        // logically go 'down' or 'up' from the clickee to find first link (to item /details page)
        const link = ($(e.target).find('a:first').attr('href')  ||  $(e.target).parents('a').attr('href'))
        log('right-click', link)
        window.open(link, '_blank')
      })
    } else {
      // cancel editability
      $('.item-ia').removeClass('manage-item').unbind('click')
      $('.columns-items .co-top-row > div').toggle()
      $('.item-ia .manage-check, #manage-help').remove()
      $('.item-ia').off('contextmenu')
    }
  }


  /**
   * Removes the item for the item /details/ page user is visiting from their favorites list.
   * This is when request comes from "Favorite toggle button".
   * @param {HTMLElement} element
   */
  static remove_favorite_item(element) {
    const $item = $(element)
    const identifier = $item.data('id')
    const itemName = $item.data('fav-collection')
    const apiUrl = location.protocol.concat(
      '//',
      location.host,
      '/details/',
      itemName,
    ).concat(`?remove_item=${encodeURIComponent(identifier)}&kind=favorite`)

    $item.removeClass('favorited')

    $.get(apiUrl, () => {
      // selector and favoriteUrl append to favorite again.
      const selector = $item.data().target
      const favoriteUrl = $item.data().favorite

      $item.attr({
        href: favoriteUrl,
        'data-original-title': 'Favorite',
      })

      // Configure "un-favorite" modal
      const conf = {}
      conf.title = 'Unfavorited'
      conf.body =  '<center><span style="font-size:100px;" class="iconochive-No_Favorite"></span></center>'

      AJS.modal_add(selector, conf)

      $(selector).modal('show')
      $(selector.concat(' .modal-dialog')).center() // vertically center
      setTimeout((() => $(selector).modal('hide')), AJS.modalInterval) // modal auto-close

      $(selector).on('hidden.bs.modal', () => {
        $(selector).remove()
      })
    })

    return false
  }


  /**
   * Renders a checkbox for an item tile
   * @param {string} title - what to display on hover
   */
  static checkbox(title) {
    return `
<div class="manage-check">
  <input
    type="checkbox"
    alt="${title}"
    title="${title}"/>
</div>`
  }


  /**
   * Treats any click on item tile like they hit the upper right checkbox
   * (when we're in 'manage' mode)
   *
   * @param {Object} evt
   */
  static tile_clicked(evt) {
    const $target = $(evt.target)

    if ($target.attr('type') === 'checkbox')
      return true // do default behaviour ;-)

    evt.stopPropagation()
    evt.preventDefault()

    // find the tile's checkbox and toggle it
    const checkbox = $target.parents('.item-ia').find('.manage-check input')
    checkbox.prop('checked', !checkbox.prop('checked'))

    return false
  }


  /**
   * Toggles any unchecked tile to checked (and vice-versa)
   */
  static toggle_checkboxes() {
    $('.manage-check input').prop('checked', (idx, val) => !val)
    return false
  }


  /**
   * Shows a modal to confirm 'remove all checked favorites/items?
   *
   * @param {boolean} favorites - are we removing favorites (or items)?
   */
  static remove_items_modal(favorites) {
    let body = ''
    // find all checked tiles and add each as a row to our modal confirm
    $('.item-ia[data-id]:has(:checked)').each((idx, e) => {
      const $e = $(e)
      const title = $e.find('.C2 a').text().trim()

      body += `
        <div>
          <div class="pull-right">
            ${$e.find('.pubdate > :first').text()}
          </div>
          <div>
            ${title.length ? title : '[untitled]'}
          </div>
          <hr/>
        </div>
      `
    })
    const title = (body === ''
      ? 'No items selected'
      : 'Are you sure you want to remove these items?'
    )
    if (body === '') {
      body = `
        <div class="alert alert-danger">
          Please select some items using checkboxes from the prior screen to remove.
        </div>`
    } else {
      body += `
        <button class="btn btn-small btn-danger"
          onclick="Manage.${favorites ? 'confirmed_remove_favorites' : 'confirmed_dark_items'}()">
          Remove items
        </button>`
    }

    AJS.modal_add(Manage.modalID, { title, body, headerClass: '' }).modal('show');
  }


  /**
   * Returns string CSV list of all (checked) identifiers in page
   */
  static checked_ids() {
    return $('.item-ia[data-id]:has(:checked)').toArray().reduce((a, b) => {
      const { id } = $(b).data()
      return a.concat((a ? ',' : ''), id)
    }, '')
  }


  /**
   * Submits search results items to item manager for invoking operations on the list
   */
  static to_item_manager() {
    const ids = Manage.checked_ids()
    log('to_item_manager:', ids)

    if (ids !== '') {
      // now make a form that we can POST to, with all the identifiers,
      // and post to /manage/ page
      const $form = $(`
        <form id="manage-ids" method="POST" action="/manage/">
          <input type="text" name="identifier" value="${ids}"/>
        </form>`)
      $('body').append($form) // NOTE: firefox needs it in DOM to submit
      $form.submit()
    }

    return false
  }


  /**
   * User has confirmed the items should be removed.  Homicide.
   */
  static confirmed_dark_items() {
    const data = {
      identifier: Manage.checked_ids(),
      admin: 'make_dark',
      'curation[state]': 'dark',
      'curation[comment]': `from ${location.pathname}`,
    }
    $.post('/manage/', data, Manage.update_tiles)
  }


  /**
   * Removes a list of identifiers from user's favorite list.
   * This is when user is looking at their /details/fav-... item.
   */
  static confirmed_remove_favorites() {
    const ids = Manage.checked_ids()

    const apiUrl = location.href.replace(/#.*$/, '').concat(`?kind=favorite&remove_item=${encodeURIComponent(ids)}`)

    $.get(apiUrl, Manage.update_tiles)

    return false
  }


  /**
   * Operation has been queued to system - now update results in page
   */
  static update_tiles() {
    $('.item-ia[data-id]:has(:checked)').remove()
    AJS.tiler()
    $(Manage.modalID).modal('hide')
  }


  /**
   * Adds marker to item tiles with a pending task
   *
   * @param {array} identifiers - list of identifiers w/ pending tasks
   */
  static decorate_pendings(identifiers) {
    if (!identifiers.length)
      return

    log('pending', identifiers)
    identifiers.forEach((id) => $(`.item-ia[data-id=${id}]`).addClass('task-pending'))
  }
} // end class Manage


/**
 * Does setup once DOM and JS ready
 */
$(() => {
  Manage.modalID = '#confirm-remove-items' // avoids static initializer until all browsers support
  Manage.css()

  if ($('body').hasClass('manage'))
    Manage.manage_items(1)
})

window.Manage = Manage // promote to global

export { Manage as default }
