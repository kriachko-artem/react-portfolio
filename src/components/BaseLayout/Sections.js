import React, {useEffect} from "react";
import {Navbar} from "../Navbar/Navbar";
import {Poster} from "../Poster/Poster";
import {Julia} from "../Julia/Julia";
import {Cards} from "../3D Cards/Cards";
import {Footer} from "../Footer/Footer";
import {Cursor} from "../Cursor/Cursor";
import {animateBody, changeBackground, showElementsByScroll} from "../../animations/animations";

export function Sections () {

    useEffect(()=>{
        animateBody()
        changeBackground()
        showElementsByScroll('section')
    },[])

  return (
      <div className='wrapper'>
          <Navbar/>
          <Poster/>
          <Julia/>
          <Cards/>
          <Footer/>
          <Cursor/>
      </div>
  )
}