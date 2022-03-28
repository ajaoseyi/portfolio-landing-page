import React, { useState } from 'react'
import './Home.css'
import Fade from 'react-reveal/Fade'
import { Bounce } from 'react-reveal'
import { Link } from 'react-scroll'
import Particles from 'react-particles-js'
import Typewriter from 'typewriter-effect'
import ArrowDropDownCircleIcon from '@material-ui/icons/ArrowDropDownCircle'
import Navbar from '../navbar/Navbar'
import config from '../../config'
import profile from '../../images/social/memoji.webp'
import linkedin from '../../images/social/linkedin1.gif'
import github from '../../images/social/github1.png'
import whatsapp from "../../images/social/whatsapp1.png"

const Home = () => {
  const [imageLoaded, setImageLoaded] = useState(false)
  return (
    <div className="home-wrapper">
      <Navbar />
      <div className="home">
        <Particles className="particles" params={config.particles} />
        <div className={`greeting${!imageLoaded ? ' hide' : ''}`}>
          <Fade bottom distance="40px">
            <img
              className="profile"
              alt="m.jigalin profile"
              src={profile}
              onLoad={() => setImageLoaded(true)}
            />
            <h1 className="greeting-text">
              Hi, I'm <span className="name">Abdulsamad Ajao</span>.{' '}
              <span className="wave-emoji" role="img" aria-label="waving hand">
                👋
              </span>
            </h1>
            <h1 className="greeting-text">
              <Typewriter
                options={{
                  strings: [
                    'I am a Front-End Developer.',
                    'I love everything React.',
                    'I am very proefficent with Tailwind CSS.',
                    'I create unique digital experiences.',
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 10,
                  cursor: '<',
                  delay: 100,
                }}
              />
            </h1>
            <Bounce cascade>
              <div className="links">
                <a
                  href="www.linkedin.com/in/abdulsamad-ajao-9279a11b8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={linkedin} alt="Linkedin Logo" width="50px" />
                </a>
                <a
                  href="www.linkedin.com/in/abdulsamad-ajao-9279a11b8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={github} alt="Github Logo" width="50px" />
                </a>
                 <a
                  href="www.linkedin.com/in/abdulsamad-ajao-9279a11b8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={whatsapp} alt="Github Logo" width="50px" />
                </a>
              </div>
            </Bounce>
            <div className="scroll-down">
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-63}
                duration={500}
              >
                <ArrowDropDownCircleIcon
                  fontSize="large"
                  style={{ pointerEvents: 'fill', cursor: 'pointer' }}
                />
              </Link>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  )
}

export default Home
