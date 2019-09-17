import waterfall from 'async/waterfall';
import {burmese} from "../languages/burmese";
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
const languages = {
  'my': burmese,
  'fr': french,
  'es': spanish,
  'de': german,
  'en': english,
  'mr': marathi,
}

if (!global.language) global.language = "en";

function setLanguage(lang) {
  const olditem = DwebArchive.page.state.item; // Should be an item, not a message
  DwebArchive.page.setState({message: <I8span en="Changing language from"> {languages[global.language]._LanguageInEnglish}</I8span>});
  waterfall([
    cb => setTimeout(cb, 300),
    cb => {
      DwebArchive.page.setState({message: <I8span en="Changing language to"> {languages[lang]._LanguageInEnglish}</I8span>});
      setTimeout(cb, 300); },
    cb => {
      global.language = lang;
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

// Deprecated
class I8spanA extends IAReactComponent {
  /**
   * <I8span en="Yes" fr="Out" de="Da" es="Yo" />
   */
  render() {
    return <span className={Object.keys(this.props).join(" ")}>
      { Object.entries(this.props).map(kv => <span key={kv[0]} lang={kv[0]}>{kv[1]}</span>) }
    </span>
  }
}

class I8spanB extends IAReactComponent {
  /**
   * <I8span en="Yes" />
   */
  constructor(props) {
    super(props);
    this.translations=Object.fromEntries(Object.entries(languages).map(kv => [kv[0], kv[1][this.props.en]]));
  }
  componentDidMount() {
    super.componentDidMount();

  }

  render() {
    return <span className={Object.keys(this.translations).join(" ")}>
      { Object.entries(this.translations).map(kv => <span key={kv[0]} lang={kv[0]}>{kv[1]}</span>) }
      {this.props.children}
    </span>
  }
}
function i8nLang(en) {

}
function I8n(en) {
  let lang = global.language;
  let mess = languages[global.language][this.props.en];
  if (!mess) {
    lang = "en";
    mess = languages.en[this.props.en];
    debug("%s missing %s", global.language, this.props.en);
    if (!mess) {
      mess = this.props.en; // Render key, its probably right
      debug("en missing %s", "en", this.props.en);
    }
  }
  return {mess, lang};
}
class I8span extends IAReactComponent {
  /**
   * <I8span en="Yes" ... />
   */
  render() {
      let {mess, lang} = I8n(this.props.en);
      const spanProps = ObjectFilter(this.props, (k,v)=> (k !== "en"));
      return <span lang={lang} {...spanProps} >{mess}{this.props.children}</span>
  }
}

export { languages, I8span, setLanguage, I8n }