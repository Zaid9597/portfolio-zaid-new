import React from 'react'
import './Intro.css'
import Github from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import boy from '../../img/zaid_transparent.png'
import {Link} from 'react-scroll'

const Intro = () => {
  return (
      <div className="intro" id='Navbar'>
          <div className="i-left">
              <div className="i-name">
                  <span>Hey! I'm</span>
                  <span>Zaid Patel</span>
                  <span>I am an aspiring Data Scientist.</span>
              </div>
                <Link spy={true} to='Contact' smooth={true}>
                <button className="button i-button">Hire me</button>
                </Link>
              <div className="i-icons">
                  
                  <a href="https://github.com/Zaid9597">
                    <img src={Github} alt="" />
                  </a>
                  <a href="https://www.linkedin.com/in/zaid-parvej-p-b563a8132/">
                    <img src={LinkedIn} alt="" />
                  </a>
                  <a href='https://www.instagram.com/zaid_patel6899/'>
                    <img src={Instagram} alt="" />
                  </a>
                  
              </div>
          </div>
          <div className="i-right">
              <img src={Vector1} alt="" />
              <img src={Vector2} alt="" />
              <img src={boy} alt="" />
              <div 
              className="blur" 
              style={{background: 'rgb(238 210 255)'}}>
              </div>
              <div className="blur"
              style={{
                background: '#C1F5FF',
                top:'17rem',
                width:'21rem',
                height:'11rem',
                left:'-9rem'
              }}></div>
          </div>
      </div>
  )
}

export default Intro