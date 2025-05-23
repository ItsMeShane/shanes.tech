import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import VanillaTilt from 'vanilla-tilt';
import { Link } from 'react-router-dom';
import { Title } from '../projects/ProjectsStyles';

const Hero = () => {
   const containerRef = useRef(null);

   useEffect(() => {
      const buttonLinks = containerRef.current.querySelectorAll('.tilt');
      VanillaTilt.init(buttonLinks, {
         max: 30,
         speed: 400,
         glare: true,
      });
   }, []);

   const handleMouseEnter = (color) => {
      containerRef.current.style.backgroundColor = color;
   };

   const handleMouseLeave = () => {
      containerRef.current.style.backgroundColor = 'transparent';
   };

   return (
      <Wrapper>
         <Container ref={containerRef}>
            <Title className='center'>Shane Koester</Title>
            <List>
               <li style={{ '--clr': '#4fa2a8' }}>
                  <ButtonLink
                     to='https://www.linkedin.com/in/shanekoester/'
                     target='_blank'
                     rel='noopener noreferrer'
                     className='tilt'
                     onMouseEnter={() => handleMouseEnter('#4fa2a8')}
                     onMouseLeave={handleMouseLeave}
                  >
                     <i className='fa-brands fa-linkedin-in'></i>
                  </ButtonLink>
               </li>
               <li style={{ '--clr': '#5b4fa8' }}>
                  <ButtonLink
                     to='https://www.github.com/ItsMeShane'
                     target='_blank'
                     rel='noopener noreferrer'
                     className='tilt'
                     onMouseEnter={() => handleMouseEnter('#5b4fa8')}
                     onMouseLeave={handleMouseLeave}
                  >
                     <i className='fa-brands fa-github'></i>
                  </ButtonLink>
               </li>
               <li style={{ '--clr': '#a84f4f' }}>
                  <ButtonLink
                     to='/projects'
                     className='tilt'
                     onMouseEnter={() => handleMouseEnter('#a84f4f')}
                     onMouseLeave={handleMouseLeave}
                  >
                     <i className='fa-solid fa-layer-group'></i>
                  </ButtonLink>
               </li>
               <li style={{ '--clr': '#69a84f' }}>
                  <ButtonLink
                     to='/chat'
                     className='tilt'
                     onMouseEnter={() => handleMouseEnter('#69a84f')}
                     onMouseLeave={handleMouseLeave}
                  >
                     <i className='fa-solid fa-message'></i>
                  </ButtonLink>
               </li>
            </List>
         </Container>
      </Wrapper>
   );
};

export default Hero;

const Wrapper = styled.div`
   height: 100dvh;
   width: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
`;

const Container = styled.div`
   width: 100%;
   height: 100%;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   transition: background-color 0.5s;
   gap: 50px;
`;


const List = styled.ul`
   position: relative;
   display: flex;
   gap: 40px;
   flex-wrap: wrap;
   justify-content: center;

   li {
      list-style: none;
      flex: 1 0 auto;
      max-width: 150px;
      margin-bottom: 20px;
   }

   * {
      transform-style: preserve-3d;
      border-radius: 10px;
   }
`;

const ButtonLink = styled(Link)`
   position: relative;
   display: flex;
   justify-content: center;
   align-items: center;
   height: 150px;
   width: 150px;
   background: #fff;
   color: #333;
   font-size: 4rem;
   text-decoration: none;
   box-shadow: 0 25px 35px rgba(0, 0, 0, 0.1);
   transition: background-color 0.25s;

   i {
      transition: 0.5s;
      pointer-events: none;
   }

   &:hover {
      background: var(--clr);
      box-shadow: 0 25px 35px rgba(0, 0, 0, 0.25);
      border: 5px solid rgba(0, 0, 0, 0.2);
      i {
         transform: scale(1.5) translateZ(50px);
         color: #fff;
      }
   }
`;
