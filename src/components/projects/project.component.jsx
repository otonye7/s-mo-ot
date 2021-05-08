import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import {ProjectContainer } from './project.styles';
import  { Link} from 'react-router-dom';
import Sports from  '../../assets/men.png';
import Mercedes from  '../../assets/mercedes.png';




const Project = () => {

    useEffect(() => (
        Aos.init({duration: 2000})
    ), [])

    return(
    <ProjectContainer>
        <div data-aos='fade-left' className='container'>
            <div className='projects-title'>
                <h2 className='portfolio-text'>MY PROJECTS</h2>
            </div>

            <div className='image-container'>

              
            <Link to='samo-sports.netlify.app' class="card">
               <img src={Sports} alt="Avatar" />
            <div class="container">
               <h3 className='text'>S^MO SPORTS</h3>
                <span className='span'>An E-commerce website built with react, redux, styled components and firebase</span>
            </div>
           </Link>
           <br />
           <br />
           <Link to='https://samo-sports.netlify.app' class="card">
               <img src={Mercedes} alt="Avatar" />
            <div class="container">
               <h3 className='text'>Mercedez Tales</h3>
                <span className='span'>A Single page application built with react and styled components </span>
            </div>
           </Link>


            </div>
        </div>
    </ProjectContainer>  
    )   
}; 


export default Project;