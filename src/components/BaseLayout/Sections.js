import React, {useEffect} from "react";
import {Navbar} from "../Navbar/Navbar";
import {Poster} from "../Poster/Poster";
import {Julia} from "../Julia/Julia";
import {Cards} from "../3D Cards/Cards";
import {Footer} from "../Footer/Footer";
import {Cursor} from "../Cursor/Cursor";
import {animateBody, changeBackground} from "../../animations/animations";

export function Sections () {

    useEffect(()=>{
        animateBody()
        changeBackground()
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