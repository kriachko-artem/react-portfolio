import React from "react";

export function NavbarLinks ({links, setMenu}) {

  return (
          <ul className={'navlinks'}>
              {
                  links.map(item=>{
                      return (<li key={item.id} onClick={setMenu}><button >{item.navLink}</button></li>)
                  })
              }
          </ul>
  )
}
