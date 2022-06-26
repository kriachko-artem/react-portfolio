import React, {useEffect, useState} from "react";
import {sidebarData} from "../../../Data/mamalbury.data";
import gsap from 'gsap'
import CustomEase from "gsap/CustomEase";
import './menu.css'
import {MenuList} from "./MenuList";
import {Arrow} from "./Arrow";

gsap.registerPlugin(CustomEase)
export function Menu ({setIsMenuOpened}) {

    const [list,setList] = useState(null);
    useEffect(()=>{

        openMenuAnimation()
    },[])

    function closeMenuAnimation(event){
        if (event.target.className.includes('menu-container')){
        gsap.to('.menu-container',{
            backgroundColor: 'rgba(56, 56, 56, 0',
            duration: 0.6,
        })
        gsap.to('.navbar-menu-mobile',{
            translateY: '-100%',
            duration: 0.6,
            ease:CustomEase.create("custom", "M0,0,C0.702,0,0.3,1,1,1"),
            onComplete: ()=>{setIsMenuOpened(false)},
        })
        }
    }
    function openMenuAnimation(){
        gsap.to('.menu-container',{
            backgroundColor: 'rgba(56, 56, 56, 0.41',
            duration: 0.6,
        })
        gsap.to('.navbar-menu-mobile',{
            translateY: 0,
            duration: 0.6,
            ease: CustomEase.create("custom", "M0,0,C0.702,0,0.3,1,1,1"),
        })
    }
    function findList(event){
        document.querySelectorAll('.navbar-menu-mobile__list li')
            .forEach(item=>{
                item.classList.remove('active')
            })
        event.target.classList.add('active')

        setList(()=>{
            const obj = sidebarData.find(item=>{
                return item.navLink === event.target.textContent
            })
            return obj.list
        })
    }
  return (
      <div className={'menu-container'} onClick={closeMenuAnimation}>
          <div className={'navbar-menu-mobile'} >
              <div className="navbar-menu-mobile__main">
                  <div className={'navbar-menu-mobile__description'}>
                      {!Boolean(list)?(
                          <h4 className={'message'}>Choose one from list</h4>
                      ):(
                          <h4 className={'message'}>Look here</h4>
                      )}

                      <Arrow isChoosen={Boolean(list)}/>
                  </div>
                    <ul className={'navbar-menu-mobile__list'}>
                        {sidebarData.map(item=>{
                           return <li key={item.id} onClick={findList}>{item.navLink}</li>
                        })}
                    </ul>
              </div>
              {list? <MenuList list={list}/> : null}
          </div>
      </div>
  )
}