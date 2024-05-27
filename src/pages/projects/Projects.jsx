import React from 'react';
import { Intro, GridContainer, Container, ProjectLink, GridWrapper } from './ProjectsStyles';

const Projects = () => {
   return (
      <Container>
         <Intro>
            <h1>Featured Projects</h1>
         </Intro>
         <GridWrapper>
            <GridContainer>
               <ProjectLink id='project-0' to='projects/optical-character-recognition'>
                  <span className='project-title'>Optical Character Recognition</span>
               </ProjectLink>
               <ProjectLink id='project-1' to='projects/shanes-chat'>
                  <span className='project-title'>Shanes Chat</span>
               </ProjectLink>
               <ProjectLink id='project-2' to='projects/ai-learns-to-drive'>
                  <span className='project-title'>AI Learns to Drive</span>
               </ProjectLink>
               <ProjectLink id='project-3' to='projects/chess'>
                  <span className='project-title'>Chess</span>
               </ProjectLink>
               <ProjectLink id='project-4' to='projects/3d-rendering-engine'>
                  <span className='project-title'>3D Rendering Engine</span>
               </ProjectLink>
               <ProjectLink id='project-5' to='projects/spotify-tracker'>
                  <span className='project-title'>Spotify Tracker</span>
               </ProjectLink>
            </GridContainer>
         </GridWrapper>
      </Container>
   );
};

export default Projects;
