import React, {useEffect} from "react";
import {burgerAnimation} from "../../animations/animations";
import './burger.css'

export function Burger ({isMenuOpened,setIsMenuOpened}) {

    useEffect(()=>{
        if (isMenuOpened){
            burgerAnimation.open()
        } else {
            burgerAnimation.close()
        }
    },[isMenuOpened])

  return (
      <div className={'burger'} onClick={()=>setIsMenuOpened(true)}>
          <span className={'side top'}/>
          <span className={'cross left'}/>
          <span className={'cross right'}/>
          <span className={'side bottom'}/>
      </div>
  )
}