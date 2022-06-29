import React, {useEffect} from "react";
import './background.css'
import {animateBackgroundCircles, moveCircleByRotation} from "../../animations/animations";


export function Background () {


    let circles = [];
    const colors = ['green','yellow', 'red'];
    for(let i = 0; i < 20; i++ ){
        let size = 50*(Math.floor(Math.random() * (4 - 1) + 1))+'px',
            color = colors[Math.floor(Math.random() * colors.length)];
        let circle = {
            id:i,
            holderPosition:{
                left: Math.floor(Math.random() * 90)+'%',
                top: Math.floor(Math.random() * (100-10)+10)+'%',
            },
            holderSpeed: Math.random() * (5 - 2) + 2,
            speed: Math.random() * (4 - 1) + 1,
            direction: Math.random()>0.5?1:-1,
            styles:{
                width: size,
                height: size,
                backgroundColor: color,
                boxShadow: `0 0 10px 10px ${color}`
            }
        }
        circles.push(circle)
    }
    const windowHeight = window.innerHeight;


    useEffect(()=>{
        animateBackgroundCircles('.background span')
        moveCircleByRotation('.background .circle-holder')
    },[])


  return (
      <div className={'background'}
           style={{minHeight: windowHeight}}
      >
          {
              circles.map(item=>{
                  return (
                      <div key={item.id} className={'circle-holder'} style={item.holderPosition} data-speed={item.holderSpeed}>
                        <span key={item.id} style={item.styles} data-speed={item.speed} data-direction={item.direction}/>
                      </div>
                  )
              })
          }
      </div>
  )
}