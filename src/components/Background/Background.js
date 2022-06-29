import React, {useEffect} from "react";
import './background.css'
import {animateBackgroundCircles} from "../../animations/animations";


export function Background () {


    let circles = [];
    const colors = ['green','yellow', 'red'];
    for(let i = 0; i < 20; i++ ){
        let size = 50*(Math.floor(Math.random() * (4 - 1) + 1))+'px',
            color = colors[Math.floor(Math.random() * colors.length)];
        let circle = {
            id:i,
            speed: Math.random() * (4 - 1) + 1,
            direction: Math.random()>0.5?1:-1,
            styles:{
                width: size,
                height: size,
                backgroundColor: color,
                top: Math.floor(Math.random() * (100-10)+10)+'%',
                left: Math.floor(Math.random() * 90)+'%',
                boxShadow: `0 0 10px 10px ${color}`
            }
        }
        circles.push(circle)
    }
    const windowHeight = window.innerHeight;

    const rotation = {
        x: 0,
        y: 0,
    };

    function moveCircle(){
        const initialOffset = {
            x: 0,
            y: 0,
        };
        window.addEventListener('devicemotion',({rotationRate: {alpha, beta, gamma}})=>{
            initialOffset.x += Math.round(alpha/10);
            initialOffset.y += Math.round(beta/10)
            if ((initialOffset.x > -180 && initialOffset.x < 180)&&
                (initialOffset.y > -90 && initialOffset.y < 90)){
                rotation.x=initialOffset.x/5;
                rotation.y=initialOffset.y/5;
            }
        })
    }

    useEffect(()=>{
        moveCircle()
        animateBackgroundCircles('.background span',rotation.x,rotation.y)
    },[])


  return (
      <div className={'background'}
           style={{minHeight: windowHeight}}
      >
          {
              circles.map(item=>{
                  return <span key={item.id} style={item.styles} data-speed={item.speed} data-direction={item.direction}/>
              })
          }
      </div>
  )
}