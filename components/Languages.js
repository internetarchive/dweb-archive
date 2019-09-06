import {burmese} from "../languages/burmese";
import {english} from "../languages/english";
import {french} from "../languages/french";
import {german} from "../languages/german";
import {spanish} from "../languages/spanish";
import {marathi} from "../languages/marathi";
import {IAReactComponent} from "@internetarchive/ia-components/dweb-index";
import React from "react";

// If you add a language here also add in dweb-archive-styles.css
const languages = {
  'my': burmese,
  'fr': french,
  'es': spanish,
  'de': german,
  'en': english,
  'mr': marathi,
}

function setLanguage(lang) {
  document.body.classList.remove(...Object.keys(languages));
  document.body.classList.add(lang)
}

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

class I8span extends IAReactComponent {
  /**
   * <I8span en="Yes" />
   */
  constructor(props) {
    super(props);
    this.translations=languages["en"][this.props.en];
    this.translations=Object.fromEntries(Object.entries(languages).map(kv => [kv[0], kv[1][this.props.en]]));
  }

  render() {
    return <span className={Object.keys(this.translations).join(" ")}>
      { Object.entries(this.translations).map(kv => <span key={kv[0]} lang={kv[0]}>{kv[1]}</span>) }
      {this.props.children}
    </span>
  }
}


export {languages, I8span, setLanguage }