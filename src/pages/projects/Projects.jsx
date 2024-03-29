import React from 'react';
import { Intro, GridContainer, Container, Project, GridWrapper } from './ProjectsStyles';
import { Link } from 'react-router-dom';

const Projects = () => {
   return (
      <Container>
         <Intro>
            <h1>Featured Projects</h1>
         </Intro>
         <GridWrapper>
            <GridContainer>
               <Project id='project-0'>
                  <Link to='projects/optical-character-recognition' className='link-blanket' />
                  <span className='project-title'>Optical Character Recognition</span>
               </Project>
               <Project id='project-1'>
                  <Link to='projects/shanes-chat' className='link-blanket' />
                  <span className='project-title'>Shanes Chat</span>
               </Project>
               <Project id='project-2'>
                  <Link to='projects/ai-learns-to-drive' className='link-blanket' />
                  <span className='project-title'>AI Learns to Drive</span>
               </Project>
               <Project id='project-3'>
                  <Link to='projects/chess' className='link-blanket' />
                  <span className='project-title'>Chess</span>
               </Project>
               <Project id='project-4'>
                  <Link to='projects/3d-rendering-engine' className='link-blanket' />
                  <span className='project-title'>3D Rendering Engine</span>
               </Project>
               <Project id='project-5'>
                  <Link to='projects/spotify-tracker' className='link-blanket' />
                  <span className='project-title'>Spotify Tracker</span>
               </Project>
            </GridContainer>
         </GridWrapper>
      </Container>
   );
};

export default Projects;
