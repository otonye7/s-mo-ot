import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import {ProjectContainer } from './project.styles';
import Sports from  '../../assets/ecommerce.jpg';
import Lyft from  '../../assets/lyft.png';
import Adams from  '../../assets/adams.png';


const useStyles = makeStyles({
    root: {
      minWidth: 275,
    }
  });

const Project = () => {
    const classes = useStyles();

    useEffect(() => (
        Aos.init({duration: 2000})
    ), [])

    const route = () => {
        window.location.href = 'https://samo-sports.netlify.app'
    }

    const routeTwo = () => {
        window.location.href = 'https://lyyft.netlify.app'
    }

    const routeThree = () => {
        window.location.href = 'https://adam-eats.netlify.app'
    }

    return(
    <ProjectContainer data-aos='fade-left'>
      <div className='projects'>
        <h1 className='project-text'>Projects</h1>
      </div>
       <div className='card'>
       <Card className={classes.root} variant="outlined">
        <div onClick={routeThree} className='overall'>
               <img src={Adams} alt="Avatar" />
            <div class="container">
               <h3 className='text'>Adams Eats</h3>
                <span className='span'>Adams Eats is an iphone gallery built with react and styled components </span>
            </div>
           </div>
        </Card>

      <Card className={classes.root} variant="outlined">
      <div onClick={routeTwo} className='overall'>
               <img src={Lyft} alt="Avatar" />
            <div class="container">
               <h3 className='text'>Lyyft</h3>
                <span className='span'>Lyft Landing page built with react, styled components, material ui and material ui icons</span>
            </div>
           </div>
        </Card>

        <Card className={classes.root} variant="outlined">
        <div onClick={route} className='overall'>
               <img src={Sports} alt="Avatar" />
        <div class="container">
            <h3 className='text'>S^MO SPORTS</h3>
            <span className='span'>An E-commerce website built with react, redux, styled components, stripe and firebase</span>
        </div>
        </div>
        </Card>

        </div>
    </ProjectContainer>  
    )   
}; 


export default Project;




























