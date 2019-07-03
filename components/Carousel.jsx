import React from "react";
import IAReactComponent from './IAReactComponent';

//TODO-CAROUSEL
/* Carousel using bootstrap I think
 */

class Carousel extends IAReactComponent {
    constructor(props) {
        super(props);
    }

    render() { return (
      <div className="details-carousel-wrapper">
          <section id="ia-carousel" className="carousel slide" data-ride="carousel"
                   data-interval="false" aria-label="Item image slideshow">
              <ol className="carousel-indicators"
                  style={{display:"none"}}>
                  <li data-target="#ia-carousel" data-slide-to="0" className=" active"
                      role="button" tabIndex="0" aria-label="Go to image 1"></li>
                  <li data-target="#ia-carousel" data-slide-to="1" className=""
                      role="button" tabIndex="0" aria-label="Go to image 2"></li>
                  <li data-target="#ia-carousel" data-slide-to="2" className=""
                      role="button" tabIndex="0" aria-label="Go to image 3"></li>
                  <li data-target="#ia-carousel" data-slide-to="3" className=""
                      role="button" tabIndex="0" aria-label="Go to image 4"></li>
                  <li data-target="#ia-carousel" data-slide-to="4" className=""
                      role="button" tabIndex="0" aria-label="Go to image 5"></li>
                  <li data-target="#ia-carousel" data-slide-to="5" className=""
                      role="button" tabIndex="0" aria-label="Go to image 6"></li>
                  <li data-target="#ia-carousel" data-slide-to="6" className=""
                      role="button" tabIndex="0" aria-label="Go to image 7"></li>
                  <li data-target="#ia-carousel" data-slide-to="7" className=""
                      role="button" tabIndex="0" aria-label="Go to image 8"></li>
                  <li data-target="#ia-carousel" data-slide-to="8" className=""
                      role="button" tabIndex="0" aria-label="Go to image 9"></li>
                  <li data-target="#ia-carousel" data-slide-to="9" className=""
                      role="button" tabIndex="0" aria-label="Go to image 10"></li>
                  <li data-target="#ia-carousel" data-slide-to="10" className=""
                      role="button" tabIndex="0" aria-label="Go to image 11"></li>
                  <li data-target="#ia-carousel" data-slide-to="11" className=""
                      role="button" tabIndex="0" aria-label="Go to image 12"></li>
                  <li data-target="#ia-carousel" data-slide-to="12" className=""
                      role="button" tabIndex="0" aria-label="Go to image 13"></li>
                  <li data-target="#ia-carousel" data-slide-to="13" className=""
                      role="button" tabIndex="0" aria-label="Go to image 14"></li>
                  <li data-target="#ia-carousel" data-slide-to="14" className=""
                      role="button" tabIndex="0" aria-label="Go to image 15"></li>
                  <li data-target="#ia-carousel" data-slide-to="15" className=""
                      role="button" tabIndex="0" aria-label="Go to image 16"></li>
                  <li data-target="#ia-carousel" data-slide-to="16" className=""
                      role="button" tabIndex="0" aria-label="Go to image 17"></li>
                  <li data-target="#ia-carousel" data-slide-to="17" className=""
                      role="button" tabIndex="0" aria-label="Go to image 18"></li>
                  <li data-target="#ia-carousel" data-slide-to="18" className=""
                      role="button" tabIndex="0" aria-label="Go to image 19"></li>
                  <li data-target="#ia-carousel" data-slide-to="19" className=""
                      role="button" tabIndex="0" aria-label="Go to image 20"></li>
                  <li data-target="#ia-carousel" data-slide-to="20" className=""
                      role="button" tabIndex="0" aria-label="Go to image 21"></li>
                  <li data-target="#ia-carousel" data-slide-to="21" className=""
                      role="button" tabIndex="0" aria-label="Go to image 22"></li>
                  <li data-target="#ia-carousel" data-slide-to="22" className=""
                      role="button" tabIndex="0" aria-label="Go to image 23"></li>
                  <li data-target="#ia-carousel" data-slide-to="23" className=""
                      role="button" tabIndex="0" aria-label="Go to image 24"></li>
                  <li data-target="#ia-carousel" data-slide-to="24" className=""
                      role="button" tabIndex="0" aria-label="Go to image 25"></li>
                  <li data-target="#ia-carousel" data-slide-to="25" className=""
                      role="button" tabIndex="0" aria-label="Go to image 26"></li>
                  <li data-target="#ia-carousel" data-slide-to="26" className=""
                      role="button" tabIndex="0" aria-label="Go to image 27"></li>
              </ol>

              <div className="carousel-inner">
                  <div className="item active">
                      <a className="carousel-image-wrapper"
                         href="/download/thetaleofpeterra14838gut/14838-h/images/peter04.jpg"
                         title="Open full sized image">
                          <img
                            className="rot0 carousel-image"
                            alt="item image #1"
                            src="/download/thetaleofpeterra14838gut/14838-h/images/peter04.jpg"/>
                      </a>
                      <div className="carousel-caption">
                          14838-h/images/peter04.jpg
                      </div>
                  </div>
                  <div className="item">
                      <a className="carousel-image-wrapper"
                         href="/download/thetaleofpeterra14838gut/14838-h/images/peter08.jpg"
                         title="Open full sized image">
                          <img
                            className="rot0 carousel-image"
                            alt="item image #2"
                            src="/download/thetaleofpeterra14838gut/14838-h/images/peter08.jpg"/>
                      </a>
                      <div className="carousel-caption">
                          14838-h/images/peter08.jpg
                      </div>
                  </div>
                  <div className="item">
                      <a className="carousel-image-wrapper"
                         href="/download/thetaleofpeterra14838gut/14838-h/images/peter11.jpg"
                         title="Open full sized image">
                          <img
                            className="rot0 carousel-image"
                            alt="item image #3"
                            src="/download/thetaleofpeterra14838gut/14838-h/images/peter11.jpg"/>
                      </a>
                      <div className="carousel-caption">
                          14838-h/images/peter11.jpg
                      </div>
                  </div>
                  <div className="item">
                      <a className="carousel-image-wrapper"
                         href="/download/thetaleofpeterra14838gut/14838-h/images/peter12.jpg"
                         title="Open full sized image">
                          <img
                            className="rot0 carousel-image"
                            alt="item image #4"
                            src="/download/thetaleofpeterra14838gut/14838-h/images/peter12.jpg"/>
                      </a>
                      <div className="carousel-caption">
                          14838-h/images/peter12.jpg
                      </div>
                  </div>
                  <div className="item">
                      <a className="carousel-image-wrapper"
                         href="/download/thetaleofpeterra14838gut/14838-h/images/peter15.jpg"
                         title="Open full sized image">
                          <img
                            className="rot0 carousel-image"
                            alt="item image #5"
                            src="/download/thetaleofpeterra14838gut/14838-h/images/peter15.jpg"/>
                      </a>
                      <div className="carousel-caption">
                          14838-h/images/peter15.jpg
                      </div>
                  </div>
                  <div className="item">
                      <a className="carousel-image-wrapper"
                         href="/download/thetaleofpeterra14838gut/14838-h/images/peter16.jpg"
                         title="Open full sized image">
                          <img
                            className="rot0 carousel-image"
                            alt="item image #6"
                            src="/download/thetaleofpeterra14838gut/14838-h/images/peter16.jpg"/>
                      </a>
                      <div className="carousel-caption">
                          14838-h/images/peter16.jpg
                      </div>
                  </div>
                  <div className="item">
                      <a className="carousel-image-wrapper"
                         href="/download/thetaleofpeterra14838gut/14838-h/images/peter19.jpg"
                         title="Open full sized image">
                          <img
                            className="rot0 carousel-image"
                            alt="item image #7"
                            src="/download/thetaleofpeterra14838gut/14838-h/images/peter19.jpg"/>
                      </a>
                      <div className="carousel-caption">
                          14838-h/images/peter19.jpg
                      </div>
                  </div>
                  <div className="item">
                      <a className="carousel-image-wrapper"
                         href="/download/thetaleofpeterra14838gut/14838-h/images/peter20.jpg"
                         title="Open full sized image">
                          <img
                            className="rot0 carousel-image"
                            alt="item image #8"
                            src="/download/thetaleofpeterra14838gut/14838-h/images/peter20.jpg"/>
                      </a>
                      <div className="carousel-caption">
                          14838-h/images/peter20.jpg
                      </div>
                  </div>
                  <div className="item">
                      <a className="carousel-image-wrapper"
                         href="/download/thetaleofpeterra14838gut/14838-h/images/peter23.jpg"
                         title="Open full sized image">
                          <img
                            className="rot0 carousel-image"
                            alt="item image #9"
                            src="/download/thetaleofpeterra14838gut/14838-h/images/peter23.jpg"/>
                      </a>
                      <div className="carousel-caption">
                          14838-h/images/peter23.jpg
                      </div>
                  </div>
                  <div className="item">
                      <a className="carousel-image-wrapper"
                         href="/download/thetaleofpeterra14838gut/14838-h/images/peter24.jpg"
                         title="Open full sized image">
                          <img
                            className="rot0 carousel-image"
                            alt="item image #10"
                            src="/download/thetaleofpeterra14838gut/14838-h/images/peter24.jpg"/>
                      </a>
                      <div className="carousel-caption">
                          14838-h/images/peter24.jpg
                      </div>
                  </div>
                  <div className="item">
                      <a className="carousel-image-wrapper"
                         href="/download/thetaleofpeterra14838gut/14838-h/images/peter27.jpg"
                         title="Open full sized image">
                          <img
                            className="rot0 carousel-image"
                            alt="item image #11"
                            src="/download/thetaleofpeterra14838gut/14838-h/images/peter27.jpg"/>
                      </a>
                      <div className="carousel-caption">
                          14838-h/images/peter27.jpg
                      </div>
                  </div>
                  <div className="item">
                      <a className="carousel-image-wrapper"
                         href="/download/thetaleofpeterra14838gut/14838-h/images/peter28.jpg"
                         title="Open full sized image">
                          <img
                            className="rot0 carousel-image"
                            alt="item image #12"
                            src="/download/thetaleofpeterra14838gut/14838-h/images/peter28.jpg"/>
                      </a>
                      <div className="carousel-caption">
                          14838-h/images/peter28.jpg
                      </div>
                  </div>
                  <div className="item">
                      <a className="carousel-image-wrapper"
                         href="/download/thetaleofpeterra14838gut/14838-h/images/peter31.jpg"
                         title="Open full sized image">
                          <img
                            className="rot0 carousel-image"
                            alt="item image #13"
                            src="/download/thetaleofpeterra14838gut/14838-h/images/peter31.jpg"/>
                      </a>
                      <div className="carousel-caption">
                          14838-h/images/peter31.jpg
                      </div>
                  </div>
                  <div className="item">
                      <a className="carousel-image-wrapper"
                         href="/download/thetaleofpeterra14838gut/14838-h/images/peter32.jpg"
                         title="Open full sized image">
                          <img
                            className="rot0 carousel-image"
                            alt="item image #14"
                            src="/download/thetaleofpeterra14838gut/14838-h/images/peter32.jpg"/>
                      </a>
                      <div className="carousel-caption">
                          14838-h/images/peter32.jpg
                      </div>
                  </div>
                  <div className="item">
                      <a className="carousel-image-wrapper"
                         href="/download/thetaleofpeterra14838gut/14838-h/images/peter35.jpg"
                         title="Open full sized image">
                          <img
                            className="rot0 carousel-image"
                            alt="item image #15"
                            src="/download/thetaleofpeterra14838gut/14838-h/images/peter35.jpg"/>
                      </a>
                      <div className="carousel-caption">
                          14838-h/images/peter35.jpg
                      </div>
                  </div>
                  <div className="item">
                      <a className="carousel-image-wrapper"
                         href="/download/thetaleofpeterra14838gut/14838-h/images/peter36.jpg"
                         title="Open full sized image">
                          <img
                            className="rot0 carousel-image"
                            alt="item image #16"
                            src="/download/thetaleofpeterra14838gut/14838-h/images/peter36.jpg"/>
                      </a>
                      <div className="carousel-caption">
                          14838-h/images/peter36.jpg
                      </div>
                  </div>
                  <div className="item">
                      <a className="carousel-image-wrapper"
                         href="/download/thetaleofpeterra14838gut/14838-h/images/peter39.jpg"
                         title="Open full sized image">
                          <img
                            className="rot0 carousel-image"
                            alt="item image #17"
                            src="/download/thetaleofpeterra14838gut/14838-h/images/peter39.jpg"/>
                      </a>
                      <div className="carousel-caption">
                          14838-h/images/peter39.jpg
                      </div>
                  </div>
                  <div className="item">
                      <a className="carousel-image-wrapper"
                         href="/download/thetaleofpeterra14838gut/14838-h/images/peter40.jpg"
                         title="Open full sized image">
                          <img
                            className="rot0 carousel-image"
                            alt="item image #18"
                            src="/download/thetaleofpeterra14838gut/14838-h/images/peter40.jpg"/>
                      </a>
                      <div className="carousel-caption">
                          14838-h/images/peter40.jpg
                      </div>
                  </div>
                  <div className="item">
                      <a className="carousel-image-wrapper"
                         href="/download/thetaleofpeterra14838gut/14838-h/images/peter43.jpg"
                         title="Open full sized image">
                          <img
                            className="rot0 carousel-image"
                            alt="item image #19"
                            src="/download/thetaleofpeterra14838gut/14838-h/images/peter43.jpg"/>
                      </a>
                      <div className="carousel-caption">
                          14838-h/images/peter43.jpg
                      </div>
                  </div>
                  <div className="item">
                      <a className="carousel-image-wrapper"
                         href="/download/thetaleofpeterra14838gut/14838-h/images/peter44.jpg"
                         title="Open full sized image">
                          <img
                            className="rot0 carousel-image"
                            alt="item image #20"
                            src="/download/thetaleofpeterra14838gut/14838-h/images/peter44.jpg"/>
                      </a>
                      <div className="carousel-caption">
                          14838-h/images/peter44.jpg
                      </div>
                  </div>
                  <div className="item">
                      <a className="carousel-image-wrapper"
                         href="/download/thetaleofpeterra14838gut/14838-h/images/peter47.jpg"
                         title="Open full sized image">
                          <img
                            className="rot0 carousel-image"
                            alt="item image #21"
                            src="/download/thetaleofpeterra14838gut/14838-h/images/peter47.jpg"/>
                      </a>
                      <div className="carousel-caption">
                          14838-h/images/peter47.jpg
                      </div>
                  </div>
                  <div className="item">
                      <a className="carousel-image-wrapper"
                         href="/download/thetaleofpeterra14838gut/14838-h/images/peter48.jpg"
                         title="Open full sized image">
                          <img
                            className="rot0 carousel-image"
                            alt="item image #22"
                            src="/download/thetaleofpeterra14838gut/14838-h/images/peter48.jpg"/>
                      </a>
                      <div className="carousel-caption">
                          14838-h/images/peter48.jpg
                      </div>
                  </div>
                  <div className="item">
                      <a className="carousel-image-wrapper"
                         href="/download/thetaleofpeterra14838gut/14838-h/images/peter51.jpg"
                         title="Open full sized image">
                          <img
                            className="rot0 carousel-image"
                            alt="item image #23"
                            src="/download/thetaleofpeterra14838gut/14838-h/images/peter51.jpg"/>
                      </a>
                      <div className="carousel-caption">
                          14838-h/images/peter51.jpg
                      </div>
                  </div>
                  <div className="item">
                      <a className="carousel-image-wrapper"
                         href="/download/thetaleofpeterra14838gut/14838-h/images/peter52.jpg"
                         title="Open full sized image">
                          <img
                            className="rot0 carousel-image"
                            alt="item image #24"
                            src="/download/thetaleofpeterra14838gut/14838-h/images/peter52.jpg"/>
                      </a>
                      <div className="carousel-caption">
                          14838-h/images/peter52.jpg
                      </div>
                  </div>
                  <div className="item">
                      <a className="carousel-image-wrapper"
                         href="/download/thetaleofpeterra14838gut/14838-h/images/peter55.jpg"
                         title="Open full sized image">
                          <img
                            className="rot0 carousel-image"
                            alt="item image #25"
                            src="/download/thetaleofpeterra14838gut/14838-h/images/peter55.jpg"/>
                      </a>
                      <div className="carousel-caption">
                          14838-h/images/peter55.jpg
                      </div>
                  </div>
                  <div className="item">
                      <a className="carousel-image-wrapper"
                         href="/download/thetaleofpeterra14838gut/14838-h/images/peter57.jpg"
                         title="Open full sized image">
                          <img
                            className="rot0 carousel-image"
                            alt="item image #26"
                            src="/download/thetaleofpeterra14838gut/14838-h/images/peter57.jpg"/>
                      </a>
                      <div className="carousel-caption">
                          14838-h/images/peter57.jpg
                      </div>
                  </div>
                  <div className="item">
                      <a className="carousel-image-wrapper"
                         href="/download/thetaleofpeterra14838gut/14838-h/images/peter58.jpg"
                         title="Open full sized image">
                          <img
                            className="rot0 carousel-image"
                            alt="item image #27"
                            src="/download/thetaleofpeterra14838gut/14838-h/images/peter58.jpg"/>
                      </a>
                      <div className="carousel-caption">
                          14838-h/images/peter58.jpg
                      </div>
                  </div>
              </div>

              <a className="left carousel-control" href="#ia-carousel" data-slide="prev" aria-label="Previous">
                  <span className="iconochive iconochive-left"></span>
              </a>
              <a className="right carousel-control" href="#ia-carousel" data-slide="next" aria-label="Next">
                  <span className="iconochive iconochive-right"></span>
              </a>
          </section>
      </div>
    )}
}
export {Carousel}