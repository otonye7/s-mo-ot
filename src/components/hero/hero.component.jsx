import React from 'react';
import { HeroContainer } from './hero.styles';
import Typewriter from 'typewriter-effect';
import Bg from  '../../assets/background-portfolio.png';


const Hero = () => {

	return ( 
        <HeroContainer>
            
        <div className='hero-container'>

            <div className='cover-photo'>
                <img src={Bg} alt="" />

                <div className='hero-text'>
                    <h1 className='name-text'>Hi, I'm Otonye</h1>
                    <h1 className='front-text'>Frontend Developer that specializes in:</h1>
                    <div className='typewriter'>
                    <Typewriter 
                       onInit={(typewriter) => {
                           typewriter.typeString('React Js,  React Native,  Javascript').pauseFor(2000)
                           .deleteAll()
                           typewriter.typeString('Node Js,  Html5,  Css3').pauseFor(2000)
                           .deleteAll()
                           typewriter.typeString('Pandas,  Numpy,  Matplotlib, Seaborn ').pauseFor(2000)
                           .deleteAll()
                           typewriter.typeString('Welcome to my website').pauseFor(2000)
                           .start();
                       }}
                    />
                    </div>
                </div>

            </div>

        </div>
        </HeroContainer>
	   
	);
}; 


export default Hero;