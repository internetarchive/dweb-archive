/* eslint-disable react/no-danger */
import React from 'react';

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
const CommonWelcomeComponent = (props) => (
      <div className="welcome container container-ia width-max" style={{ backgroundColor: 'white' }}>
        <div className="container">
          <div className="row">
            <div className="col-xs-11 col-sm-10 welcome-left">
              <h1>{props.title}</h1>
              <h4>{props.byline}</h4>
              <div id="descript" style={{ maxHeight: '43px', cursor: 'pointer' }} dangerouslySetInnerHTML={{ __html: props.description }} />
            </div>
          </div>
        </div>
      </div>
  )
export { CommonWelcomeComponent };
