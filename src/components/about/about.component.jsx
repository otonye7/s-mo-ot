import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import {AboutContainer } from './about.styles';
import Personal from  '../../assets/geek.png';
import Linkedin from  '../../assets/linkedin.svg';
import Twitter from  '../../assets/twitter.svg';
import Github from  '../../assets/github.svg';


const About = () => {

    useEffect(() => (
        Aos.init({duration: 2000})
    ), [])

    return(
    <AboutContainer>
        <div data-aos='fade-up' className='overall-container'>
         <div  className='about-photo'>
            <img src={Personal} alt="" />
        </div>
         
        <div className='description-container'>
        <div className='about-me'>
            <h1 className='about-me-text'>About Me</h1>

        <div className='description'>
           Hi! I am Amietubodie Collins Otonye. A software developer. I can build fully customized professional websites and mobile applications which provides engaging user experience; like blogs or e-commerce stores, to name a few.
           To find out more about me, what services I can offer, see my work below.
        </div>
        <div className='contacts'>
                <div className='twitter'>
                    <img src={Twitter} alt="" />
                </div>

                <div className='linkedin'>
                    <img src={Linkedin} alt="" />
                </div>

                <div className='linkedin'>
                    <img src={Github} alt="" />
                </div>

            </div>
        </div>
        </div>
        </div>
    </AboutContainer>  
    )   
}; 


export default About;