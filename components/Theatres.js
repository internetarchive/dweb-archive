import React from 'react';
import IAReactComponent from './IAReactComponent';
import { CherModal } from './CherModal';
import { BookReaderWrapper } from './BookReaderWrapper';
import { Carousel }  from '@internetarchive/ia-components/dweb-index.js';

class BookReaderTheatre extends IAReactComponent {
  // Props: mediatype, identifier, creator, title, item
  render() {
    return (
        <div id="theatre-ia" className="container">
          <div className="row">
            <div className="xs-col-12">
              <TheatreControls identifier={this.props.identifier} mediatype={this.props.mediatype} />
              <BookReaderWrap item={this.props.item} page={this.props.page} />
              <CherModal identifier={this.props.identifier} creator={this.props.creator} mediatype={this.props.mediatype} title={this.props.title}/>
              <center style={{color:"white", marginBottom:"10px"}}>
              </center>
            </div>
          </div>
        </div>
    );
  }
}
class CarouselTheatre extends IAReactComponent {
  // Props: identifier, slides, creator, mediatype, title
  render() {
    return (
        <div id="theatre-ia" className="container">
          <div className="row">
            <div className="xs-col-12">
              <div id="theatre-controls"></div>
              <Carousel identifier={this.props.identifier} slides={this.props.slides}/>
              <CherModal identifier={this.props.identifier} creator={this.props.creator} mediatype={this.props.mediatype} title={this.props.title}/>
              <center style={{color:"white", marginBottom: "10px"}}>
              </center>
            </div>
          </div>
        </div>
    );
  }
}
export { BookReaderTheatre, CarouselTheatre }