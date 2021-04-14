import React from 'react';
import { HeroContainer } from './hero.styles';
import Typewriter from 'typewriter-effect';



const Hero = () => {

	return ( 
        <HeroContainer>
            
        <div className='hero-container'>

         <div className='image'></div>

                <div className='hero-text'>
                    <h1 className='name-text'>Hi, I'm Otonye</h1>
                    <h1 className='front-text'>Frontend Developer web developer / Data Analyst with experience in :</h1>
                    <div className='typewriter'>
                    <Typewriter 
                       onInit={(typewriter) => {
                           typewriter.typeString('React Js,  React Native,  Javascript, Express Js, MongoDb').pauseFor(2000)
                           .deleteAll()
                           typewriter.typeString('Node Js, Graph Ql,  Html5,  Css3').pauseFor(2000)
                           .deleteAll()
                            typewriter.typeString('Python,  Redux,  Sass, Styled Components').pauseFor(2000)
                           .deleteAll()
                           typewriter.typeString('Pandas,  Numpy,  Matplotlib, Seaborn ').pauseFor(2000)
                           .deleteAll()
                           typewriter.typeString('Responsive Designs').pauseFor(2000)
                           .start();
                       }}
                    />
                    </div>
                </div>

        </div>
        </HeroContainer>
	   
	);
}; 


export default Hero;