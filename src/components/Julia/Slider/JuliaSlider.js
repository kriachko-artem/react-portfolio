import React, {useEffect} from "react";
import Slider from "react-slick";
import './slider.css'
import screenOne from './../images/s1.png'
import screenTwo from './../images/s2.png'
import screenThree from './../images/s3.png'
import screenFour from './../images/s4.png'
import screenFive from './../images/s5.png'

import {setBigCursor} from "../../../animations/animations";

export function JuliaSlider () {
  const settings = {
      infinite: false,
      arrows:false,
      speed: 500,
      slidesToShow: 1.5,
      slidesToScroll: 1,
      swipeToSlide: true,
      centerMode: false,
  };

  useEffect(()=>{
      setBigCursor('.slider-item')
  })

  return (
      <>
          <div className="julia_slider">
              <Slider {...settings}>
                  <div className={'slider-item'}>
                        <div className="image-holder">
                            <img src={screenOne} alt="gut_feeling"/>
                        </div>
                </div>
                <div className={'slider-item'}>
                        <div className="image-holder">
                            <img src={screenTwo} alt="Wonder_Cupboards"/>
                        </div>
                </div>
               <div className={'slider-item'}>
                       <div className="image-holder">
                            <img src={screenThree} alt="National_Photography"/>
                       </div>
                </div>
                <div className={'slider-item'}>
                        <div className="image-holder">
                            <img src={screenFour} alt="Sketch"/>
                        </div>
                </div>
                <div className={'slider-item'}>
                      <div className="image-holder">
                          <img src={screenFive} alt="Sketch"/>
                      </div>
                </div>
              </Slider>
          </div>
      </>
  )
}
