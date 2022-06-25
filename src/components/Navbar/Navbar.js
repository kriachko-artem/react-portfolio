import React, {useEffect, useState} from "react";
import {NavbarLinks} from "./Navbar_links";
import './navbar.css'
import './navbar-media.css'
import {Sidebar} from "../Sidebar/Sidebar";
import {sidebarData} from "../../Data/mamalbury.data";
import {setBigCursor} from "../../animations/animations";
import {Menu} from "./NavbarMobile/Menu";
import {Burger} from "../Burger/Burger";
import {Logo} from "../Logo/Logo";


export function Navbar () {


    const [menu, setMenu] = useState(null);
    const [isMenuOpened,setIsMenuOpened] = useState(false);

    useEffect(()=>{
        if (menu){
            document.querySelector('html').style.overflow = 'hidden'
        } else {document.querySelector('html').style.overflow = 'unset'}
    },[menu])

    useEffect(()=>{
        setBigCursor('.header-navbar button')
    },[])

    const handleChangeMenu = (event)=>{
        document.querySelectorAll('.header-navbar ul li button')
            .forEach(item=>{
                item.classList.remove('active')
            })
        event.target.classList.add('active')

        setMenu(()=>{
            const obj = sidebarData.find(item=>{
                return item.navLink === event.target.textContent
            })
            return obj.list
        })
    }
  return (
          <nav className={'header-navbar'}>
              <div className="container">
                  {window.innerWidth <= 500? (
                      <>
                          <Burger isMenuOpened={isMenuOpened} setIsMenuOpened={setIsMenuOpened}/>
                          {isMenuOpened? <Menu setIsMenuOpened={setIsMenuOpened}/> : null}
                      </>
                  ): (
                      <>
                          <NavbarLinks links={sidebarData} setMenu={handleChangeMenu}/>
                          {menu? <Sidebar list={menu} setMenu={setMenu}/> : null}
                      </>
                  )}
                  <Logo/>
              </div>
          </nav>
  )
}