import React , { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import {SkillContainer } from './skill.styles';
import Html from  '../../assets/html.svg';
import Css from  '../../assets/css3.svg';
import Javascript from  '../../assets/javascript.svg';
import python from  '../../assets/python.svg';
import react from  '../../assets/react.svg';
import Github from  '../../assets/github.svg';



const Skill = () => {

    useEffect(() => (
        Aos.init({duration: 2000})
    ), [])

    return(
    <SkillContainer data-aos='fade-right'>

        {/* <div  className='skill-title'>
            <h3>Skills</h3>
        </div> */}

           <div className='first-container'>
                <img src={Html} alt="" />
                <h5 className='text'>Html</h5>
            </div>

            <div className='second-image'>
                <img src={Css} alt="" />
                <h5 className='text'>Css</h5>
            </div>
            
            <div className='third-image'>
                <img src={Javascript} alt="" />
                <h5 className='text'>javaScript</h5>
            </div>

            <div className='fourth-image'>
                <img src={python} alt="" />
                <h5 className='text'>python</h5>
            </div>

            <div className='fifth-image'>
                <img src={react} alt="" />
            </div>

            <div className='sixth-image'>
                <img src={Github} alt="" />
                <h5 className='text'>Github</h5>
            </div>

        
    </SkillContainer>  
    )   
}; 


export default Skill;