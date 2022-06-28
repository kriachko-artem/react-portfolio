import React from "react";
import './Welcome.css'
import {WelcomeSVG} from "./images/WelcomeSVG";
import {Cursor} from "../Cursor/Cursor";
import {gsap} from "gsap";
import {Power2} from "gsap/gsap-core";
import finger from './images/finger.png'
import mouse from './images/mouse.png'
import {deviceOrientation3D} from "../../animations/animations";


export function Welcome ({setIsWelcome}) {
    const devices = new RegExp('Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini', "i");
    const message = ()=>{
        if(!devices.test(navigator.userAgent)){
            return 'Please, click to view my portfolio'
        } else return 'Please, tap to view my portfolio'
    };
    const getAccessMessage = 'This site uses device rotation'
    function getAccess(){
        if (typeof DeviceMotionEvent.requestPermission === 'function'){
            document.querySelector('.message').innerHTML = 'is Function'
            DeviceMotionEvent.requestPermission()
                .then(() =>{
                }).catch(permission =>{
            })
        }
    }
    function hideWelcome(){
        getAccess()
        gsap.to('.welcome > *',{
            opacity:0,
            translateY: -700,
            duration: 2,
            ease: Power2.easeIn,
            onComplete: ()=>{
                setIsWelcome(false)
            }
        })
    }
  return (
          <div onClick={hideWelcome} className="welcome">
              <WelcomeSVG/>
              <div className="message">
                  {Array.from(message()).map((item,index)=>{
                      if (item===' '){
                          return (<span key={index}>{item}</span>)
                      } else return (<span className={'letter'} key={index}>{item}</span>)
                  })}
              </div>
              {devices.test(navigator.userAgent)?( <div className={'ask-access'}>{
                  Array.from(getAccessMessage).map((item,index)=>{
                      if (item===' '){
                          return (<span key={index}>{item}</span>)
                      } else return (<span className={'letter'} key={index}>{item}</span>)
                  })
              }</div>):null}

              <div className="welcome_image-holder">
                  {!devices.test(navigator.userAgent)?(
                      <img src={mouse} alt="Mouse" className="mouse"/>
                  ):(
                      <img src={finger} alt="Finger" className="Finger"/>
                  )}
                  <span className={'little'}/>
                  <span className={'middle'}/>
                  <span className={'big'}/>
              </div>
              <Cursor/>
          </div>
      )
}