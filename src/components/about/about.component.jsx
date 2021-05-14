import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Parallax from 'react-rellax';
import {AboutContainer } from './about.styles';
import Personal from  '../../assets/Services.svg';
import Linkedin from  '../../assets/linkedin.svg';
import Twitter from  '../../assets/twitter.svg';
import Github from  '../../assets/github.svg';


const About = () => {

    useEffect(() => (
        Aos.init({duration: 2000})
    ), [])

    const route = () => {
        window.location.href = 'https://github.com/otonye7'
    }

    const routeTwo = () => {
        window.location.href = 'https://www.linkedin.com/in/otonye-amietubodie-ab7a6518a/'
    }

    const routeThree = () => {
        window.location.href = 'https://twitter.com/lifeof_gaus'
    }

    return(
    <AboutContainer>
        <div data-aos='fade-up' className='overall-container'>
         <div  className='about-photo'>
         <Parallax speed={-2.3}>
             <img src={Personal} alt="" />
        </Parallax>
            
        </div>
         
        <div className='description-container'>
        <div className='about-me'>
        
            <h1 className='about-me-text'>About Me</h1>


             <div className='description'>
               Software developer with some years of experience in  developing websites and mobile applications. 
               I know many programming paradigms. Object-oriented programming and functional programming
               I'm pretty good with code investigation and debugging. In my architectural designs i always
               follow best pratices and write clean and readable codes  
            </div>    
       
        <div className='contacts'>
                <div onClick={routeThree} className='twitter'>
                    <img src={Twitter} alt="" />
                </div>

                <div onClick={routeTwo} className='linkedin'>
                    <img src={Linkedin} alt="" />
                </div>

                <div onClick={route} className='linkedin'>
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