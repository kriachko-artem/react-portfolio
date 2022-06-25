import React, {useEffect} from "react";
import arrowRight from './images/2303131_arrow_direction_forward_navigation_right_icon.png'
import arrowBottom from './images/2303135_arrow_back_left_refresh_renew_icon.png'
import gsap from 'gsap'

export function Arrow ({isChoosen}) {


    useEffect(()=>{
        if (isChoosen){
            gsap.to('.arrow-right',{
                rotate: 720,
                opacity: 0,
                duration: 0.6,
                ease: "power4.inOut",
            })
            gsap.to('.arrow-bottom',{
                rotate: 720,
                opacity: 1,
                duration: 0.6,
                ease: "power4.inOut",
            })
        }
    },[isChoosen])

  return (
      <div className={'arrow-holder'}>
          <img className={'arrow-right'} src={arrowRight} alt="Arrow"/>
          <img className={'arrow-bottom'} src={arrowBottom} alt="Arrow"/>
      </div>
  )
}