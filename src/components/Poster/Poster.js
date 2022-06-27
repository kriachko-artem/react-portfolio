import React, {useEffect} from "react";
import poster from './images/poster.png'
import cloudOne from './images/cloud-1.png'
import cloudTwo from './images/cloud-2.png'
import cloudThree from './images/cloud-3.png'
import './poster.css'
import './poster-media.css'
import {gsap} from "gsap";

export function Poster () {



    let startPosition;
    useEffect(()=>{
        let posterMainTitle = document.querySelector('.poster_main__label'),
            posterMain = document.querySelector('.poster_main'),
            posterMainImage = document.querySelector('.poster_main .img-holder');


        parallaxElement(posterMainImage,posterMainTitle,0)
        animatePoster(posterMainImage,posterMain,posterMainTitle)


        moveCloud('.cloud-one',400,7,120)
        moveCloud('.cloud-two', 0,10,150)
        moveCloud('.cloud-three',-300,13,210)
    },[])




    function moveCloud(element,start,opacityDuration,animationDuration){

       const areaWidth = document.querySelector(element).parentNode.offsetWidth;

       gsap.to(element,{
           opacity: 1,
           duration: opacityDuration,
       })
        gsap.fromTo(element,{
            x:start,
        },{
            x:areaWidth,
            duration: animationDuration,
            repeat: -1,
            ease: 'linear'
        })
    }
    function parallaxElement(area,element,offset = 0){
        startPosition = area.getBoundingClientRect().top/5-50;
        window.addEventListener('scroll', ()=>{
            const areaPosition = {
                top: area.getBoundingClientRect().top,
                bottom: area.getBoundingClientRect().bottom,
            };
            startPosition = area.getBoundingClientRect().top/5-50;
            if ((areaPosition.top - window.innerHeight < 0)&&
                (areaPosition.bottom > 0)){
                gsap.to(element,{
                   translateY: startPosition,
                    duration:0.3,
                })
            }
            }
        )
    }


    function animatePoster(elem1,elem2,elem3){
        gsap.fromTo(elem1, {translateY:50}, {translateY:0 ,duration: 1.8, ease: 'power2.out'});
        gsap.fromTo(elem2,{translateY:400}, {translateY:0 ,duration: 2, ease: 'power3.out'});
        gsap.fromTo(elem3, {translateY:400}, {translateY:startPosition ,duration: 1.5, ease: 'power1.out'});
    }

  return (
          <section className="poster">
              <div className="container">
              <div className="poster_title">
                  <hr/>
                  <h3>{new Date().toLocaleDateString('en-EN',{ weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</h3>
              </div>
              <div className="poster_main">
                  <div className="img-holder">
                      <span className='cloud cloud-one'>
                          <img src={cloudOne} alt="Cloud"/>
                      </span>
                      <span className=' cloud cloud-two'>
                          <img src={cloudTwo} alt="Cloud"/>
                      </span>
                      <span className=' cloud cloud-three'>
                          <img src={cloudThree} alt="Cloud"/>
                      </span>
                      <img src={poster} alt="Poster"/>
                  </div>
              </div>

                  <h2 className={'poster_main__label'}>
                      <span>Front End</span>
                      <span>Developer</span>
                      <span>Artem</span>
                      <span>Kriachko</span>
                  </h2>
              <div className="poster__author-info">
                  <span className={'name'}>Hello!</span>
                  <span>I'm Frontend developer with experience of</span>
                  <span>developing professional HTML</span>
                  <span>Responsive Landing pages and Custom Websites.</span>
                  <span>I'm looking for a long-term relationship with the employer.</span>
              </div>
              </div>
          </section>


  )
}