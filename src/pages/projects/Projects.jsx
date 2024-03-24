import React from 'react';
import { Intro, GridContainer, Container, Project, GridWrapper } from './ProjectsStyles';

const Projects = () => {
   return (
      <Container>
         <Intro>
            <h1>Featured Projects</h1>
         </Intro>
         <GridWrapper>
            <GridContainer>
               <Project id='project-0'>
                  <span className='project-title'>Optical Character Recognition</span>
               </Project>
               <Project id='project-1'>
                  <span className='project-title'>Shanes.chat</span>
               </Project>
               <Project id='project-2'>
                  <span className='project-title'>AI Learns to Drive</span>
               </Project>
               <Project id='project-3'>
                  <span className='project-title'>Chess</span>
               </Project>
               <Project id='project-4'>
                  <span className='project-title'>3D Rendering Engine</span>
               </Project>
               <Project id='project-5'>
                  <span className='project-title'>Spotify Tracker</span>
               </Project>
            </GridContainer>
         </GridWrapper>
      </Container>
   );
};

export default Projects;
