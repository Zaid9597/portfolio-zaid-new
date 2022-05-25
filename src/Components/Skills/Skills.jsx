import React from 'react'
import './Skills.css'
import Python from '../../img/newpython.png'
import CPP from '../../img/cpp_nobg.png'
import HTML from '../../img/html_nobg.png'
import Reeact from '../../img/react_nobg.png'
import SQL from '../../img/sql_nobg.png'
import AWS from '../../img/aws_nobg.png'
import R from '../../img/Rnew.png'
import {motion} from 'framer-motion'
import {Link} from 'react-scroll'

const Skills = () => {
  return (
      <div className="skills" id='Skills'>
          <div className="awesome">
              <span>Technical</span>
              <span>Skills</span>
              <spane>
                  Given a background in computing since undergrad
                  <br/>
                  I have strong technical skills developed over the years.
              </spane>
              <Link spy={true} to='Contact' smooth={true}>
              <button className="button s-button">Hire Me</button>
              </Link>
              
              <div className="blur s-blur" style={{background: "#ABF1FF94"}}></div>
          </div>

          <div className="w-right">
            <motion.div
            initial={{rotate:90}}
            whileInView={{rotate:0}}
            viewport={{margin:'-40px'}}
            transition={{duration:3.5, type:'spring'}}
            className="w-mainCircle">
                  <div className="w-secCircle">
                      <img src={Python} alt="" />
                  </div>
                  <div className="w-secCircle">
                      <img src={R} alt="" />
                  </div>
                  <div className="w-secCircle">
                      <img src={HTML} alt="" />
                  </div>
                  <div className="w-secCircle">
                      <img src={CPP} alt="" />
                  </div>
                  <div className="w-secCircle">
                      <img src={SQL} alt="" />
                  </div>
                  <div className="w-secCircle">
                      <img src={AWS} alt="" />
                  </div>
                  <div className="w-secCircle">
                      <img src={Reeact} alt="" />
                  </div>
              </motion.div>

              <div className="w-backCircle blueCircle"></div>
              <div className="w-backCircle yellowCircle"></div>
          </div>
      </div>
  )
}

export default Skills