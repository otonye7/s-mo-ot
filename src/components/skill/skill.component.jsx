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
    <SkillContainer>

        <div  className='skill-title'>
            <h3>Skills</h3>
        </div>

        <div data-aos='fade-right' className='skills'>
            <div className='html'>
              <img src={Html} alt="" />
               <h3  className='texxt'>Html5</h3>
           </div>

            <div data-aos='fade-right' className='css'>
              <img src={Css} alt="" />
              <h3  className='texxt'>Css3</h3>
            </div>

            <div data-aos='fade-right' className='javascript'>
               <img src={Javascript} alt="" />
               <h3>Javascript</h3>
            </div>
        </div>

        <div data-aos='fade-right' className='skillset'>
           <div  className='python'>
               <img src={python} alt="" />
               <h3 className='texxt'>Python</h3>
            </div>

            <div className='react'>
               <img src={react} alt="" />
               <h3  className='texxt'>React</h3>
            </div>

            <div  className='github'>
               <img src={Github} alt="" />
               <h3  className='texxt'>Github</h3>
            </div>
        </div>
    </SkillContainer>  
    )   
}; 


export default Skill;