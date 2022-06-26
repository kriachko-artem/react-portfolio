import React, {useEffect} from "react";
import './Welcome.css'
import {WelcomeSVG} from "./images/WelcomeSVG";
import {Cursor} from "../Cursor/Cursor";
import {gsap} from "gsap";
import {Power2} from "gsap/gsap-core";
import {ClickSVG} from "./images/ClickSVG";

export function Welcome ({setIsWelcome}) {
    const message = 'Please, click to view my portfolio';
    useEffect(()=>{

    },[])
    function hideWelcome(){
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
              <ClickSVG/>
              <div className="message">
                  {Array.from(message).map((item,index)=>{
                      if (item===' '){
                          return (<span key={index}>{item}</span>)
                      } else return (<span className={'letter'} key={index}>{item}</span>)
                  })}
              </div>

              <Cursor/>
          </div>
      )
}