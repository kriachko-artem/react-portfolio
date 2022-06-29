import React, {useEffect} from "react";
import './footer.css'
import certificate from './images/68668357_en.png'
import qrCode from './images/frame.png'
import CV from './images/CV KRIACHKO ARTEM React Frontend developer.pdf'
import downloadIco from './images/211720_download_cloud_icon.png'
import {setBigCursor} from "../../animations/animations";

export function Footer () {
    useEffect(()=>{
        setBigCursor('.footer .certificate img')
        setBigCursor('.footer .contacts-list li')
        setBigCursor('.CV img')
    },[])

    function showCloseImage(element){
        document.querySelector(element).classList.toggle('opened')
    }
  return (
      <section className={'footer'}>
          <div className="footer-main">
              <div className="contacts">
                  <h4>Contact me!</h4>
                  <ul className="contacts-list">
                      <li className={'phone'}>
                          <span className="label">Phone: </span>
                          <a href="tel:+380600876455">+38 (050) 087-64-55</a>
                      </li>
                      <li className={'mail'}>
                          <span className="label">E-mail: </span>
                          <a href="mailto:kriachkoartem@gmail.com">kriachkoartem@gmail.com</a>
                      </li>
                      <li className={'linked'}>
                          <span className="label">LinkedIn: </span>
                          <a href="https://www.linkedin.com/in/artem-kriachko/">https://www.linkedin.com/in/artem-kriachko/</a>
                      </li>
                  </ul>
              </div>
              <div className="certificate">
              <div className="image-holder" onClick={()=>{showCloseImage('.certificate .image-holder')}}>
                  <img src={certificate} alt="Certificate"/>
              </div>
          </div>
              <div className="qr-to-mobile">
                  <div className="qr-holder">
                      <img src={qrCode} alt="QR-Code"/>
                  </div>
              </div>
          </div>
          <div className="CV">
              <a href={CV}><img src={downloadIco} alt="Download"/></a>
              <h4>Download my CV</h4>
          </div>
      </section>
  )
}
