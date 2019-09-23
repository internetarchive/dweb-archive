//SEE-OTHER-ADDLANGUAGE
import waterfall from 'async/waterfall';
import {myanmar} from "../languages/myanmar";
import {english} from "../languages/english";
import {french} from "../languages/french";
import {german} from "../languages/german";
import {hindi} from "../languages/hindi";
import {japanese} from "../languages/japanese";
import {indonesian} from "../languages/indonesian";
import {spanish} from "../languages/spanish";
import {marathi} from "../languages/marathi";
import {portugese} from "../languages/portugese";
import {IAReactComponent} from "@internetarchive/ia-components/dweb-index";
import React from "react";
const debug = require('debug')('dweb-archive:languages');
import { ObjectFilter } from "@internetarchive/dweb-archivecontroller/Util";

// If you add a language here also add in dweb-archive-styles.css
//SEE-OTHER-ADDLANGUAGE
const languages = {
  'en': english,
  'fr': french,
  'de': german,
  'es': spanish,
  'hi': hindi,
  'id': indonesian,
  'ja': japanese,
  'mr': marathi,
  'my': myanmar,
  'pt': portugese,
}
//SEE-OTHER-ADDLANGUAGE
const languageConfig = {
  'en': { inEnglish: 'English', inLocal: 'English' },
  'fr': { inEnglish: 'French',  inLocal: 'Française' },
  'de': { inEnglish: 'German',  inLocal: 'Deutsche ' },
  'es': { inEnglish: 'Spanish', inLocal: 'Española' },
  'hi': { inEnglish: 'Hindi', inLocal: 'हिंदी'},
  'id': { inEnglish: 'Indonesian', inLocal: 'Bahasa'},
  'ja': { inEnglish: 'Japanese', inLocal: '日本語'},
  'mr': { inEnglish: 'Marathi', inLocal: 'मराठी' },
  'my': { inEnglish: 'Myanmar', inLocal: 'မြန်မာ' },
  'pt': { inEnglish: 'Portugese', inLocal: 'Portuguesa'},
}
if (!currentISO()) currentISO("en");

function setLanguage(lang) {
  const olditem = DwebArchive.page.state.item; // Should be an item, not a message
  DwebArchive.page.setState({message: <I8nSpan en="Changing language from"> {languages[currentISO()]._LanguageInEnglish}</I8nSpan>});
  waterfall([
    cb => setTimeout(cb, 300),
    cb => {
      DwebArchive.page.setState({message: <I8nSpan en="Changing language to"> {languages[lang]._LanguageInEnglish}</I8nSpan>});
      setTimeout(cb, 300); },
    cb => {
      currentISO(lang);
      DwebArchive.page.setState({message: <I8nSpan en="Changing language to">{languages[lang]._LanguageInLocal}</I8nSpan>});
      setTimeout(cb, 300); }
  ],(err)=>{
    if (err) {
      debug("Unable to change language %O", err);
    } else {
      DwebArchive.page.setState({item: olditem, message: undefined})
    }
  });
  //document.body.classList.remove(...Object.keys(languages));
  //document.body.classList.add(lang);
}
function currentISO(iso=undefined) {
  // Note where we store this might change, so use this if want to set or get the code
  if (iso) {
    global.language = iso;
  }
  return global.language;
}
function I8n(messageEnglish) {
  let l = currentISO();
  let s = languages[currentISO()][messageEnglish];
  if (!s) {
    l = "en";
    s = languages.en[messageEnglish];
    debug("%s missing %s", currentISO(), messageEnglish);
    if (!s) {
      s = messageEnglish; // Render key, its probably right
      debug("en missing %s", messageEnglish);
    }
  }
  return {s, l};
}
function I8nStr(messageEnglish) {
  return I8n(messageEnglish)["s"];
}
class I8nSpan extends IAReactComponent {
  /**
   * <I8nSpan en="Yes" ... />
   */
  constructor(props) {
    super(props);
  }
  render() {
      let {s, l} = I8n(this.props.en);
      const spanProps = ObjectFilter(this.props, (k,v)=> (k !== "en"));
      return <span lang={l} {...spanProps} >{s}{this.props.children}</span>
  }
}
class I8nIcon extends IAReactComponent {
  /**
   * <I8nIcon
   *    className="iconochive-xxxx"
   *    style={}
   *    iconref=function to use as ref for icon - this is used in NavWebDiv to set a hideable element in the search
   *    en=ENSTRING
   *    xs=ENSTRING
   * >
   *    optional children of span (already translated) and sr-only
   * </I8nIcon>
   */
  render() {
    return <>
      <span className={this.props.className} style={this.props.style} ref={this.props.iconref} aria-hidden="true"/>
      <I8nSpan className="sr-only" en={this.props.en}>{this.props.children}</I8nSpan>
      {!this.props.xs ? null :
        <>
        &nbsp;
        <I8nSpan className="hidden-xs-span" en={this.props.xs}/>
        </>
      }
    </>
  }
}

export { languages, languageConfig, currentISO, I8nSpan, setLanguage, I8n, I8nStr, I8nIcon }