import React from 'react';
import Header from '../../components/header/header.component';
import Hero from '../../components/hero/hero.component';
import About from '../../components/about/about.component';
import Skill from '../../components/skill/skill.component';
import { HomepageContainer } from './homepage.styles';
import Project from '../../components/projects/project.component';
import Footer from '../../components/footer/footer.component';

const Homepage = () => {

	return ( 
          <HomepageContainer>
           <div>
              <Header />
              <Hero />
              <br />
              <br />
            <div className='about'>
               <About />
            </div>
            <br />
            <br />
            <div className='skills'>
               <Skill />
            </div>
            <br />
            <br />
            <div className='projects'>
               <Project />
            </div>
              
              <Footer />
            </div>
            </HomepageContainer> 
	);
}; 


export default Homepage;