import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import {ProjectContainer } from './project.styles';
import Meal from  '../../assets/beer.png';
import Podradio from  '../../assets/podradio.jpg';
import Food from  '../../assets/foody.png';



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

                <div className='image-one'>
                   <img src={Meal} alt="" />
                </div>

                <div className='image-two'>
                   <img src={Podradio} alt="" />
                </div>

                <div className='image-three'>
                   <img src={Food} alt="" />
                </div>


            </div>
        </div>
    </ProjectContainer>  
    )   
}; 


export default Project;