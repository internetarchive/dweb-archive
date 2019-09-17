import React from 'react';
import {IAReactComponent } from "@internetarchive/ia-components/dweb-index.js";
import { I8span } from '../Languages';

class CommonWelcomeComponent extends IAReactComponent {
  /**
   * <CommonWelcomeComponent
   *    title=I8STRING|NODE
   *    byline=I8STRING|NODE
   *    descriptions=SANITIZEDHTML   Description which may contain HTML but should have been preprocessed to remove bad HTML
   * />
   *
   * Renders a banner at top of a special item (like settings) that is logically similar to that at top of a Details page
   * - see similar style/HTML in CommonWelcome CollectionBanner and AccountBanner
   */


  render() { return (
    <div className="welcome container container-ia width-max" style={{'backgroundColor':'white'}}>
      <div className="container">
        <div className="row">
          <div className="col-xs-11 col-sm-10 welcome-left">
            <h1>{this.props.title}</h1>
            <h4>{this.props.byline}</h4>
            <div id="descript" style={{maxHeight:"43px", cursor:'pointer'}} dangerouslySetInnerHTML={{__html: this.props.description}}>
            </div>
          </div>
        </div>
      </div>
    </div>
  )}
}

export {CommonWelcomeComponent};

