import React, { useRef, useEffect } from 'react';
import {
   Container,
   ProjectContainer,
   LinkWrapper,
   Button,
   ButtonContainer,
   Title,
} from './ProjectsStyles';
import { Link } from 'react-router-dom';
import { projects } from './ProjectData';

const Project = ({ title, buttons }) => (
   <ProjectContainer>
      <ButtonContainer>
         {buttons.map((button, index) => (
            <LinkWrapper key={index}>
               <Link to={button.link} target={button.target} rel='noopener noreferrer'>
                  <Button
                     className='button'
                     style={{ '--clr1': button.clr1, '--clr2': button.clr2 }}
                  >
                     <span>{button.label}</span>
                     <i className={button.icon}></i>
                  </Button>
               </Link>
            </LinkWrapper>
         ))}
      </ButtonContainer>
      <Title className='mask-effect'>{title}</Title>
   </ProjectContainer>
);

const Projects = () => {
   const containerRef = useRef(null);

   useEffect(() => {
      const wrapper = containerRef.current;
      if (!wrapper) return;

      const links = wrapper.querySelectorAll('.button');
      const handleMouseMove = (e) => {
         links.forEach((link) => {
            let mx = e.pageX - link.offsetLeft;
            let my = e.pageY - link.offsetTop;
            link.style.setProperty(`--x`, mx + `px`);
            link.style.setProperty(`--y`, my + `px`);
         });
      };

      wrapper.addEventListener('mousemove', handleMouseMove);
      return () => {
         wrapper.removeEventListener('mousemove', handleMouseMove);
      };
   }, []);

   return (
      <Container ref={containerRef}>
         {projects.map((project, index) => (
            <Project key={index} title={project.title} buttons={project.buttons} />
         ))}
      </Container>
   );
};

export default Projects;
