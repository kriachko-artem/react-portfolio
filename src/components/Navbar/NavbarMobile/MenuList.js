import React, {useEffect} from "react";
import {animateList} from "../../../animations/animations";

export function MenuList ({list}) {

    useEffect(()=>{
        animateList('.menu-list li')

    },[list])
  return (
          <ul className={'menu-list'}>
              {list.map((item,index)=>{
                  return <li key={index}>{item}</li>
              })}
          </ul>
  )
}