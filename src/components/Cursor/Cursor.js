import React, {useEffect} from "react";
import './cursor.css'
import {setCursorPosition} from "../../animations/animations";

const devices = new RegExp('Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini', "i");

export function Cursor () {

    useEffect(()=>{
        if (!devices.test(navigator.userAgent)){
            setCursorPosition()
        }
    },[])


    return !devices.test(navigator.userAgent)? (
        <>
            <div id="cursor"/>
            <div id="cursor-point"/>
        </>
  ) : null
}