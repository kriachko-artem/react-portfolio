import React, {useEffect} from "react";
import {animateList, setBigCursor} from "../../animations/animations";


export function SidebarList ({list}) {

    useEffect(()=>{
        animateList('.sidebar__list ul li')
        setBigCursor('.sidebar__list ul li')
    },[list])


  return (
      <div className={'sidebar__list'}>
          <hr/>
          <ul className={'sidebar__list__list'}>
              {
                  list.map((item,index)=>{
                      return (
                              <li key={index}><a href="#">{item}</a></li>
                      )
                  })
              }
          </ul>
      </div>
  )
}