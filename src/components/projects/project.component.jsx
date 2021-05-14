import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import {ProjectContainer } from './project.styles';
import Sports from  '../../assets/men.png';
import Mercedes from  '../../assets/mercedes.png';
import Adams from  '../../assets/adams.png';




const Project = () => {

    useEffect(() => (
        Aos.init({duration: 2000})
    ), [])

    const route = () => {
        window.location.href = 'https://samo-sports.netlify.app'
    }

    const routeTwo = () => {
        window.location.href = 'https://mercedes-tales.netlify.app'
    }

    const routeThree = () => {
        window.location.href = 'https://adam-eats.netlify.app'
    }

    return(
    <ProjectContainer>
        <div data-aos='fade-left' className='container'>
            <div className='projects-title'>
                <h2 className='portfolio-text'>MY PROJECTS</h2>
            </div>

            <div className='image-container'>

              
            <div onClick={route} class="card">
               <img src={Sports} alt="Avatar" />
            <div class="container">
               <h3 className='text'>S^MO SPORTS</h3>
                <span className='span'>An E-commerce website built with react, redux, styled components, stripe and firebase</span>
            </div>
           </div>

           <br />
           <br />

           <div onClick={routeTwo}  class="card">
               <img src={Mercedes} alt="Avatar" />
            <div class="container">
               <h3 className='text'>Mercedez Tales</h3>
                <span className='span'>A Single page application built with react and styled components </span>
            </div>
           </div>

           <div onClick={routeThree} class="card">
               <img src={Adams} alt="Avatar" />
            <div class="container">
               <h3 className='text'>Adams Eats</h3>
                <span className='span'>Adams Eats is an iphone gallery built with react and styled components </span>
            </div>
           </div>


            </div>
        </div>
    </ProjectContainer>  
    )   
}; 


export default Project;