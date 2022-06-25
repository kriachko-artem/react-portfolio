import React, {useEffect} from "react";
import './cards.css'
import firstCardImg from './images/first.png'
import secondCardImg from './images/second.png'
import thirdCardImg from './images/third.png'

import {deviceOrientation3D, setBigCursor} from "../../animations/animations";
import {mouseMoveCard3D} from "../../animations/animations";

const devices = new RegExp('Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini', "i");
const isMobile = devices.test(navigator.userAgent);
function getAccess(){
    DeviceMotionEvent.requestPermission()
        .then(() =>{
            deviceOrientation3D('.card_img-holder')
        }).catch(permission =>{
        // deviceOrientation3D('.card_img-holder')
        console.log(permission)
    })
}

export function Cards () {
    useEffect(()=>{
        if (isMobile === false){
            setBigCursor('.card_img-holder img')
            mouseMoveCard3D('.card_img-holder')
        }

    },[])

  return (
      <section className={'cards'}>
          <div className="container">
            <hr/>
              <div className="cards_content">
                  <div className="cards_content__tittle">
                      <h2>3D cards</h2>
                      <div className="cards_content__description">
                          {isMobile? (
                              <>
                                  <h4 className={'description-rotate'}>You can rotate your phone to see the my custom 3D effect to card</h4>
                                  <button onClick={getAccess} className={'get-access'}>Start 3D</button>
                              </>
                          ):(
                              <h4>You can move mouse on this cards to see the my custom 3D effect to card</h4>
                          )}
                      </div>
                  </div>
                  <div className="cards_content__main__cards">
                      {isMobile? (
                          <div className="card">
                              <div className="card_img-holder">
                                  <span className={'left'}/>
                                  <span className={'right'}/>
                                  <span className={'top'}/>
                                  <span className={'bottom'}/>
                                  <span className={'back'}/>
                                  <div className="card-3d">
                                      <img src={firstCardImg} alt="Plan your trip"/>
                                  </div>
                              </div>
                              <h5 className="card_name">
                                  Card name
                              </h5>
                          </div>
                      ):(
                          <>
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
                          </>
                      )}

                  </div>
              </div>
          </div>
      </section>
  )
}
