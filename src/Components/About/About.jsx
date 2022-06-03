import React from 'react'
import './About.css'
import HeartEmoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import Card from '../Card/Card'
import Resume from './Resume.pdf'
import {motion} from 'framer-motion'

const About = () => {
const transition = {duration:1,type:'spring'}
  return (
      <div className="about" id='About'>
          <div className="about-me">
              <span>About</span>
              <span>Me</span>
              <spane>
                  I am currently a graduate student pursuing
                  <br/>
                  Master's of Science in Computer Science from 
                  <br/>
                  NYU's Tandon School of Engineering.
                  <br/>
                  I aspire on building a career as a Software Development Engineer and Data Scientist. 
                  <br/>
                  I have a deep passion for cooking.
              </spane>
              <a href={Resume}  download>
                    <button className="button s-button">Download My Resume</button>
              </a>
              <div className="blur s-blur" style={{background: "#ABF1FF94"}}></div>
          </div>
          <div className="cards">
            <motion.div
                whileInView = {{left: '18rem'}}
                initial={{left: '30rem'}}
                transition={transition}
                style={{left: '18rem'}}
                >
                <Card
                 emoji = {HeartEmoji}
                 heading = {'Data Science'}
                 detail = {'Machine Learning, Artificial Intelligence, Deep Learning'}
                 />
            </motion.div>

            <motion.div
             whileInView = {{left: '3rem'}}
             initial={{top: '10rem',left: '-6rem'}}
             transition={transition}
             style={{left: '3rem'}}>
                <Card
                 emoji = {Glasses}
                 heading = {'Developer'}
                 detail = {'HTML, CSS, JavaScript, React'}
                 />
            </motion.div>

            <motion.div 
            whileInView = {{left: '20rem'}}
            initial={{top: '18rem',left: '40rem'}}
            transition={transition}
            style={{left: '20rem'}}
             >
                <Card
                 emoji = {Humble}
                 heading = {'Cooking'}
                 detail = {'Indian, Italian, Mediterranean, Chinese'}
                 />
            </motion.div>
            <div className="blur s-blur2" style={{background: 'var(--purple)'}}></div>


          </div>
      </div>
  )
}

export default About
