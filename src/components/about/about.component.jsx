import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import {AboutContainer } from './about.styles';
import Personal from  '../../assets/Thinkstock-programmer.jpg';
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
            Front End Web Developer
            My name is Amietubodie Otonye and I am a passionate Front End Web Developer from Los Angeles,
            California. I graduated with an Associate's degree in Web Publishing from American Public University.
            I worked for a small medical supplier as a Web Developer and I am currently learning in becoming a self-taught MERN Full Stack Web Developer.
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