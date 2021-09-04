import React from 'react';
import { HeroContainer } from './hero.styles';
import Typewriter from 'typewriter-effect';
import First from  '../../assets/headerimage.svg';




const Hero = () => {

	return ( 
        <HeroContainer>
            
        <div className='hero-container'>

                <div className='hero-text'>
                    {/* <h1 className='name-text'>Hi, I'm Otonye</h1> */}
                    <h1 className='typewriter'>
                    <Typewriter autoStart={true}
                       onInit={(typewriter) => {
                          typewriter.typeString(`Hi, I'm Otonye   `)
                           typewriter.typeString('Software Developer With Experience In ')
                           typewriter.typeString('React Js,  React Native,  Javascript, Express Js, MongoDb, ')
                           typewriter.typeString('Node Js, Graph Ql,  Html5,  Css3, ')
                           typewriter.typeString('Python,  Redux,  Sass, Styled Components ')
                           .start();
                       }}
                    />
                    </h1>
                </div>

        
        <div className='image'>
                <img src={First} alt="" />
         </div>

        </div>
        </HeroContainer>
	   
	);
}; 


export default Hero;