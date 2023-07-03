import React from 'react'
import style from './Footer.module.css'
import {BiLogoFacebook,BiLogoTwitter} from 'react-icons/bi'
import {BsInstagram} from 'react-icons/bs'
const Footer = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.socialmedia_icons}>
       <h1 className={style.heading}>GYM</h1>
       <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
       <span><BiLogoFacebook/></span>
       <span><BsInstagram/></span>
       <span> <BiLogoTwitter/></span>
      
      </div>
      <div className={style.right_section}>
          <ul>
            <li>Lorem, ipsum.</li>
            <li>Loresum</li>
            <li>Loresum ipsum</li>
            <li>lorem</li>
            <li>Loresum ipsum</li>
          </ul>
          <ul>
            <li>lorem</li>
            <li>lorem</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
          </ul>
          <ul>
          <li>lorem</li>
            <li>lorem</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
          </ul>
      </div>
      
      <div className={style.copyrights}>
      <hr className={style.line}/>
        <p>&copy;2023 body building GYM all rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
