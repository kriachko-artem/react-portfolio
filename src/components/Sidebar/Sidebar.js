import React, {useEffect} from "react";
import './sidebar.css'
import {gsap} from "gsap";
import {SidebarList} from "./SidebarList";
import CustomEase from "gsap/CustomEase";



export function Sidebar ({list, setMenu}) {

    useEffect(()=>{
        const navlinks = document.querySelectorAll('.header-navbar button');
        navlinks.forEach(item=>item.style.color = 'black')
        openSidebar()

        return ()=>{
            document.querySelectorAll('.header-navbar ul li button')
                .forEach(item=>item.classList.remove('active'))
            navlinks.forEach(item=>item.style.color = 'unset')
                }
    },[])


    function openSidebar(){
        gsap.to('.sidebar hr',{scaleX: 1, duration: 1.5,ease: 'power4.out'})
        gsap.to('.sidebar__container',{backgroundColor: 'rgba(56, 56, 56, 0.41'})
        gsap.to('.sidebar',{translateX: 0,duration: 0.5, ease: CustomEase.create("custom", "M0,0,C0.702,0,0.3,1,1,1")})
    }
    function closeSidebar (event){
        if (event.target.className.includes('sidebar__container')){
            gsap.to('.sidebar',{translateX: '-100%',duration: 0.5, ease: CustomEase.create("custom", "M0,0,C0.702,0,0.3,1,1,1", )})
            gsap.to('.sidebarContainer',{backgroundColor: 'rgba(56, 56, 56, 0',duration: 0.5,ease: CustomEase.create("custom", "M0,0,C0.702,0,0.3,1,1,1"),onComplete: ()=>setMenu(null)})
        }
    }


  return (
      <div className={'sidebar__container'} onClick={closeSidebar}>
          <div className={'sidebar'}>
              <SidebarList list={list}/>
          </div>
      </div>
  )
}