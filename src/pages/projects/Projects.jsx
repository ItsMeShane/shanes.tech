import React from 'react';
import {
   IntroSection,
   ProjectSection,
   ProjectContainer,
   Container,
   Images,
   Information,
} from './ProjectsStyles';

const Projects = () => {
   return (
      <Container>
         <IntroSection>
            <div>
               <h1>Welcome to My Projects</h1>
               <p>
                  A collection of live and video demos, showcasing my different projects
                  and skills
               </p>
            </div>
         </IntroSection>
         <ProjectSection>
            <ProjectContainer>
               <Images>
                  <img src='./images/projects/pj1.png' alt='Project 1' title='Project Image' />
               </Images>
               <Information>
                  <span>Project 1</span>
               </Information>
            </ProjectContainer>

            <ProjectContainer>
               <Images>
               <img src='./images/projects/pj0.png' alt='Project 1' title='Project Image' />
               </Images>
               <Information>
                  <span>Project 2</span>
               </Information>
            </ProjectContainer>

            <ProjectContainer>
               <Images>
               <img src='./images/projects/pj8.png' alt='Project 1' title='Project Image' />
               </Images>
               <Information>
                  <span>Project 3</span>
               </Information>
            </ProjectContainer>
         </ProjectSection>
      </Container>
   );
};

export default Projects;
