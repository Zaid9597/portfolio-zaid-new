import React from 'react'
import './Navbar.css'
import {Link} from 'react-scroll'
const Navbar = () => {
  return (
      <div className="n-wrapper">
          <div className="n-left">
              <div className="n-name">Zaid</div>
          </div>
          <div className="n-right">
              <div className="n-list">
                  <ul style={{listStyleType: 'none'}}>
                      <Link spy={true} to='Navbar' smooth={true}>
                          <li>Home</li>
                      </Link>
                      <Link spy={true} to='About' smooth={true}>
                          <li>About</li>
                      </Link>
                      <Link spy={true} to='Skills' smooth={true}>
                          <li>Skills</li>
                      </Link>
                      <Link spy={true} to='Portfolio' smooth={true}>
                          <li>Portfolio</li>
                      </Link>
                  </ul>
              </div>

              
                    <Link spy={true} to='Contact' smooth={true}>
                    <button className='button n-button'>Contact me</button>
                    </Link>
                  
              
         </div>
      </div>
  )
}

export default Navbar