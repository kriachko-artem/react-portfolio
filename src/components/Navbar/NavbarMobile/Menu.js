import React, {useEffect, useState} from "react";
import {sidebarData} from "../../../Data/mamalbury.data";
import gsap from 'gsap'
import CustomEase from "gsap/CustomEase";
import './menu.css'
import {MenuList} from "./MenuList";
import {accessScroll} from "../../../animations/animations";

gsap.registerPlugin(CustomEase)
export function Menu ({setIsMenuOpened}) {

    const [list,setList] = useState(null);
    useEffect(()=>{
        accessScroll.deny()
        openMenuAnimation()
        return (accessScroll.grant)
    },[])

    function closeMenuAnimation(event){
        if (event.target.className.includes('menu-container')){
            gsap.to('.navbar-menu-mobile',{
                translateY: '-100%',
                duration: 0.6,
                ease:CustomEase.create("custom", "M0,0,C0.702,0,0.3,1,1,1"),
                opacity: 0,
                onComplete:()=>{
                gsap.to('.menu-container',{
                    // backgroundColor: 'rgba(56, 56, 56, 0',
                    width: 0,
                    height: 0,
                    borderRadius: '50%',
                    duration: 0.6,
                    onComplete: ()=>{
                        setIsMenuOpened(false)},
                })
            }
        })


        }
    }
    function openMenuAnimation(){
        gsap.to('.menu-container',{
            // backgroundColor: 'rgba(0, 0, 0, 1',
            width: '200vh',
            height: '200vh',
            duration: 0.6,
            onComplete:()=>{
                gsap.to('.menu-container',{
                    borderRadius: 0
                })
                gsap.to('.navbar-menu-mobile',{
                    opacity: 1,
                    duration: 0,
                })
                gsap.to('.navbar-menu-mobile',{

                    translateY: 0,
                    duration: 0.6,
                    ease: CustomEase.create("custom", "M0,0,C0.702,0,0.3,1,1,1"),
                })
            }
        })
    }
    function findList(id){
        document.querySelectorAll('.navbar-menu-mobile__list li')
            .forEach(item=>{
                item.classList.remove('active')
            })
        document.getElementById(id).classList.add('active')

        setList(()=>{
            const obj =
                sidebarData.find(item=>{
                return item.id === id})
            return obj
        })
    }
  return (
      <div className={'menu-container'} onClick={closeMenuAnimation}>
          <div className={'navbar-menu-mobile'} >
              <div className="list-area">
                  {list? <MenuList list={list}/> : null}
              </div>
              <div className="navbar-menu-mobile__main">
                    <ul className={'navbar-menu-mobile__list'}>
                        {sidebarData.map(item=>{
                           return (
                               <li key={item.id} id={item.id} onClick={()=>findList(item.id)}>
                                   <div className="img-holder">
                                       <img src={item.icon} alt={item.navLink}/>
                                   </div>
                               </li>
                           )
                        })}
                    </ul>
              </div>
          </div>
      </div>
  )
}