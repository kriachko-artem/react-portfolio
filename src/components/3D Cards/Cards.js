import React, {useEffect} from "react";
import './cards.css'
import firstCardImg from './images/first.png'
import secondCardImg from './images/second.png'
import thirdCardImg from './images/third.png'
import {setBigCursor} from "../../animations/animations";
import {card3D} from "../../animations/animations";



export function Cards () {
    let isMobile = false;

    useEffect(()=>{
        setTimeout(()=>{
            if (typeof DeviceOrientationEvent.requestPermission === 'function'){
                isMobile = true;
            }
        },500)


        setBigCursor('.card_img-holder img')
        card3D('.card_img-holder',isMobile)
    },[])

  return (
      <section className={'cards'}>
          <div className="container">
            <hr/>
              <div className="cards_content">
                  <h2 className="cards_content__tittle">3D cards</h2>
                  <div className="cards_content__main">
                      {isMobile? (
                          <>
                          <button id={'get-access'}>
                              Start 3D
                          </button>
                          </>
                      ): <h4>You can move mouse on this cards to see the my custom 3D effect to card</h4>}
                      <div className="cards_content__main__cards">
                          <div className="card">
                              <div className="card_img-holder">
                                  <div className="card-3d">
                                      <img src={firstCardImg} alt="Plan your trip"/>
                                      <span className={'left'}/>
                                      <span className={'right'}/>
                                      <span className={'top'}/>
                                      <span className={'bottom'}/>
                                      <span className={'back'}/>
                                  </div>
                              </div>
                              <h5 className="card_name">
                                 Card one
                              </h5>
                          </div>
                          <div className="card">
                              <div className="card_img-holder">
                                  <div className="card-3d">
                                      <img src={secondCardImg} alt="Plan your trip"/>
                                      <span className={'left'}/>
                                      <span className={'right'}/>
                                      <span className={'top'}/>
                                      <span className={'bottom'}/>
                                      <span className={'back'}/>
                                  </div>
                              </div>
                              <h5 className="card_name">
                                  Card two
                              </h5>
                          </div>
                          <div className="card">
                              <div className="card_img-holder">
                                  <div className="card-3d">
                                      <img src={thirdCardImg} alt="Plan your trip"/>
                                      <span className={'left'}/>
                                      <span className={'right'}/>
                                      <span className={'top'}/>
                                      <span className={'bottom'}/>
                                      <span className={'back'}/>
                                  </div>
                              </div>
                              <h5 className="card_name">
                                  Card three
                              </h5>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
  )
}
