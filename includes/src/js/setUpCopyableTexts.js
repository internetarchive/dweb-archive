import ClipboardJS from 'clipboard'

/**
 * Shows a message indicating the status of the copy operation
 *
 * Sets proper ARIA properties to ensure the status is read out by
 * accessible technologies
 *
 * @param {HTMLElement} copyableText
 * @param {String}      message
 */
function showStatusMessage(copyableText, message) {
  let output = copyableText.querySelector('output')

  if (!output) {
    output = document.createElement('output')
    output.setAttribute('role', 'alert')
    copyableText.appendChild(output)
  }

  // Empty it first to trigger accessibility technologies to read out the
  // value even if it's the same as before
  output.textContent = ''
  output.textContent = message
}

/**
 * Creates a copy button with an event listener that triggers the
 * copy operation
 *
 * @param {HTMLElement} copyableText
 */
function createButton(copyableText) {
  const button = document.createElement('button')
  button.type = 'button'
  button.textContent = 'Copy'
  button.title = 'Copy to clipboard'
  button.setAttribute('data-clipboard-target', `#${copyableText.querySelector('input').id}`)

  return button
}

/**
 * Sets up a specific copyable text component
 *
 * @param {HTMLElement} copyableText
 */
function setUpCopyableText(copyableText) {
  // No <input> to copy, abort
  if (!copyableText.querySelector('input')) return

  copyableText.appendChild(createButton(copyableText))

  // Mark it as "ready" so we can avoid double-initializing
  copyableText.setAttribute('data-copyable-text-ready', '')
}

/**
 * Initialize ClipboardJS behavior for all buttons and attach event listeners to show statuses
 */
function setUpClipboardJS() {
  const clipboard = new ClipboardJS('[data-copyable-text] [data-clipboard-target]')

  clipboard.on('success', (event) => {
    const copyableText = event.trigger.parentElement

    const message = (
      copyableText.getAttribute('data-copyable-text-success-message') ||
      'Text copied to clipboard.'
    )

    showStatusMessage(copyableText, message)
  })

  clipboard.on('error', (event) => {
    const copyableText = event.trigger.parentElement

    const message = (
      copyableText.getAttribute('data-copyable-text-error-message') ||
      'Something went wrong.'
    )

    showStatusMessage(copyableText, message)
  })
}

/**
 * Read-only text input component with a button to copy the text to the
 * user's clipboard
 *
 * Progressively enhances the input by generating the button and status
 * message entirely in the JavaScript.
 *
 * Currently only supports <input>s but it can be easily modified to support
 * <textarea>s in the future.
 *
 * @see copyable-text.less
 */
function setUpCopyableTexts() {
  const copyableTexts = document.querySelectorAll('[data-copyable-text]:not([data-copyable-text-ready])')

  // No components found, abort
  if (copyableTexts.length <= 0) return

  // Browser cannot programmatically copy, abort
  if (!ClipboardJS.isSupported()) return

  // Turn into an array so we can use forEach()
  [...copyableTexts].forEach(setUpCopyableText)
  setUpClipboardJS()
}

export default setUpCopyableTexts
