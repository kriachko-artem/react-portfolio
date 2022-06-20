import React, {useEffect} from "react";
import './cards.css'
import firstCardImg from './images/first.png'
import secondCardImg from './images/second.png'
import thirdCardImg from './images/third.png'
import {setBigCursor} from "../../animations/animations";
import {card3D} from "../../animations/animations";

function getAccess(){
    DeviceOrientationEvent.requestPermission()
        .then(() =>{
            alert('good')
        }).catch(permission =>{
        console.log(permission)
    })
}

export function Cards () {
    useEffect(()=>{


        setBigCursor('.card_img-holder img')
        card3D('.card_img-holder')
    },[])

  return (
      <section className={'cards'}>
          <div className="container">
            <hr/>
              <div className="cards_content">
                  <h2 className="cards_content__tittle">3D cards</h2>
                  <button onClick={getAccess} className={'get-access'}>Start 3D</button>
                  <div className="cards_content__main">
                     <h4>You can move mouse on this cards to see the my custom 3D effect to card</h4>
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
                                 Card name
                              </h5>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
  )
}
