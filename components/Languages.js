//SEE-OTHER-ADDLANGUAGE
import waterfall from 'async/waterfall';
import {myanmar} from "../languages/myanmar";
import {english} from "../languages/english";
import {french} from "../languages/french";
import {german} from "../languages/german";
import {spanish} from "../languages/spanish";
import {marathi} from "../languages/marathi";
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
  'mr': marathi,
  'my': myanmar,
}
//SEE-OTHER-ADDLANGUAGE
const languageConfig = {
  'en': { inEnglish: 'English', inLocal: 'English' },
  'fr': { inEnglish: 'French',  inLocal: 'Française' },
  'de': { inEnglish: 'German',  inLocal: 'Deutsche ' },
  'es': { inEnglish: 'Spanish', inLocal: 'Española' },
  'mr': { inEnglish: 'Marathi', inLocal: 'मराठी' },
  'my': { inEnglish: 'Myanmar', inLocal: 'မြန်မာ' },
}
if (!currentISO()) currentISO("en");

function setLanguage(lang) {
  const olditem = DwebArchive.page.state.item; // Should be an item, not a message
  DwebArchive.page.setState({message: <I8span en="Changing language from"> {languages[currentISO()]._LanguageInEnglish}</I8span>});
  waterfall([
    cb => setTimeout(cb, 300),
    cb => {
      DwebArchive.page.setState({message: <I8span en="Changing language to"> {languages[lang]._LanguageInEnglish}</I8span>});
      setTimeout(cb, 300); },
    cb => {
      currentISO(lang);
      DwebArchive.page.setState({message: <I8span en="Changing language to">{languages[lang]._LanguageInLocal}</I8span>});
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
      debug("en missing %s", "en", messageEnglish);
    }
  }
  return {s, l};
}
function I8nStr(messageEnglish) {
  return I8n(messageEnglish)["s"];
}
class I8span extends IAReactComponent {
  /**
   * <I8span en="Yes" ... />
   */
  render() {
      let {s, l} = I8n(this.props.en);
      const spanProps = ObjectFilter(this.props, (k,v)=> (k !== "en"));
      return <span lang={l} {...spanProps} >{s}{this.props.children}</span>
  }
}

export { languages, languageConfig, currentISO, I8span, setLanguage, I8n, I8nStr }