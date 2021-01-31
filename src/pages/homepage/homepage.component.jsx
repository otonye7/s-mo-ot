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
              <About />
              <Skill />
              <Project />
              <Footer />
            </div>
            </HomepageContainer> 
	);
}; 


export default Homepage;