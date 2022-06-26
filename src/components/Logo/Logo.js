import React, {useState} from "react";
import logo from "./logo.png";
import './logo.css'
import logoWhite from './logo-white.png'

export function Logo () {
    const [logoImage,setLogoImage] = useState(logo);
    window.addEventListener("scroll", ()=>{
        if (getComputedStyle(document.documentElement)
            .getPropertyValue('--main-bg-color') === 'black'){
            setLogoImage(logoWhite)
        } else setLogoImage(logo)
    })
  return (
      <div className="logo">
          <img src={logoImage} alt="AK"/>
      </div>
  )
}