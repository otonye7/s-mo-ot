import React , { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import {SkillContainer } from './skill.styles';
import Html from  '../../assets/html.jpg';
import Css from  '../../assets/css.png';
import Javascript from  '../../assets/js.png';
// import python from  '../../assets/python.png';
import react from  '../../assets/react.png';
// import Github from  '../../assets/github.svg';



const Skill = () => {

    useEffect(() => (
        Aos.init({duration: 2000})
    ), [])

    return(
    <SkillContainer data-aos='fade-right'>
        <div className='projects'>
        <h1 className='project-text'>Skills</h1>
      </div>
          <div className='container'>
           <div className='image'>
                <img src={Html} alt="" />
            </div>

            <div className='image'>
                <img src={Css} alt="" />
            </div>
            
            <div className='image'>
                <img src={Javascript} alt="" />
            </div>

            <div className='image'>
                <img src={react} alt="" />
            </div>
        </div>
        
    </SkillContainer>  
    )   
}; 


export default Skill;