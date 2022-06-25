import React from "react";
import './progress.css'
import progressIco from './images/4552618_cogwheel_gear_setting_icon.svg'


export function Progress () {

  return (
      <div className={'progress'}>
          <div className="image-holder">
              <img className={'progress_left'} src={progressIco} alt="Gear"/>
              <img className={'progress_right'} src={progressIco} alt="Gear"/>
          </div>
          <span>Sorry, this site under development</span>
      </div>
  )
}