import React from "react";
import {JuliaSlider} from "./Slider/JuliaSlider";
import './Julia.css'
import './Julia-media.css'
import JulietteLogo from './images/Juliette-logo.png'

export function Julia () {
  return (
          <section className={'julia'}>
              <div className="container">
                  <div className={'julia__title'}>
                       <div className="project-name">
                           <img src={JulietteLogo} alt="Juliette Julia"/>
                       </div>
                      <hr/>
                      <div className="description">
                          <p>
                              Slide it to watch one of my project. It was portfolio-site for designer.
                          </p>
                      </div>
                  </div>
                  <JuliaSlider/>
              </div>
          </section>
  )
}