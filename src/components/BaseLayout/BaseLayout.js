import React, {useEffect} from "react";
import {Poster} from "../Poster/Poster";
import {animateBody, changeBackground} from "../../animations/animations";
import {Julia} from "../Julia/Julia";
import {Footer} from "../Footer/Footer";
import {Cursor} from "../Cursor/Cursor";
import {Cards} from "../3D Cards/Cards";
import {Navbar} from "../Navbar/Navbar";





export function BaseLayout () {

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