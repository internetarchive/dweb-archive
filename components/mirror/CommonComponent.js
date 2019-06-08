import React from 'react';
import IAReactComponent from '../IAReactComponent';
//const debug = require('debug')('dweb-archive:CommonComponent');

class CommonWelcomeComponent extends IAReactComponent {
  /*  static propTypes = {
          title: PropTypes.string,
          byline: PropTypes.object,
          description: PropTypes.object,
      };
  */

  render() { return (
    <div className="welcome container container-ia width-max" style={{'backgroundColor':'white'}}>
      <div className="container">
        <div className="row">
          <div className="col-xs-11 col-sm-10 welcome-left">
            <h1>{this.props.title}</h1>
            <h4>{this.props.byline}</h4>{/*TODO get name of server from info*/}
            <div id="descript" style={{maxHeight:"43px", cursor:'pointer'}} dangerouslySetInnerHTML={{__html: this.props.description}}>
            </div>
          </div>
        </div>
      </div>
    </div>
  )}
}

export {CommonWelcomeComponent};

