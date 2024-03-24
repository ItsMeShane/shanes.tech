import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
   font-size: 2rem;
   font-weight: 600;
   width: fit-content;
   height: fit-content;
   display: flex;
   flex-direction: column;
   overflow-x: hidden;
   overflow-y: auto;
   gap: 40px;
   padding-right: 20px;
   @media (max-width: 768px) {
      padding-right: 0;
   }
   @media (max-height: 500px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 10px;
      padding-right: 0;
   }
`;

const Card = styled.div`
   overflow: hidden;
   padding: 15px 25px;
   position: relative;
   display: flex;
   justify-content: center;
   align-items: center;
   text-decoration: none;
   background-color: #333;
   background: linear-gradient(to right, var(--clr1), var(--clr2));
   height: fit-content;
   min-height: 50px;
   transition: color 0.25s, background-color 1s, transform 0.5s;
   color: #ffffff55;
   z-index: 1;
   &:hover {
      color: #ffffffcc;
      &::before {
         width: 700px;
         height: 700px;
         top: 50%;
         left: 50%;
         top: var(--y, -300px);
         left: var(--x);
         transform: translate(-50%, -50%);
      }
      &::after {
         opacity: 0;
      }
   }
   &::after {
      content: '';
      position: absolute;
      background-color: #333333;
      width: 100%;
      height: 100%;
      transition: all 1s;
      z-index: -1;
   }
   &::before {
      content: '';
      position: absolute;
      transform: translate(-50%, -50%);
      background: linear-gradient(to right, var(--clr1), var(--clr2));
      width: 0;
      height: 0;
      border-radius: 50%;
      top: var(--y, -300px);
      left: var(--x);
      filter: blur(5px);
      transition: width 1s, height 1s;
      @media (max-width: 768px) {
         display: none;
      }
   }
   @media (max-width: 768px), (max-height: 500px) {
      &:hover {
         background: linear-gradient(to right, var(--clr1), var(--clr2));
      }
      &::after {
         transition: 0s;
      }
   }
   span {
      pointer-events: none;
      flex: 1;
      z-index: 1;
      white-space: nowrap;
   }
`;

const LinkWrapper = styled.div`
   width: 350px;
   transition: 1s;
   margin-left: calc(var(--offset));

   &:hover {
      ${Card} {
         transition-delay: 0.2s;
         transform: translateX(20px);
         @media (max-width: 768px), (max-height: 500px) {
            transform: translateX(0);
            transition: 0s;
         }
      }
   }
   a {
      text-decoration: none;
   }
   @media (max-width: 768px), (max-height: 500px) {
      margin-left: 0;
   }
`;

const InteractiveButtons = () => {
   const wrapperRef = useRef(null);

   useEffect(() => {
      const wrapper = wrapperRef.current;
      if (!wrapper) return;

      const links = wrapper.querySelectorAll('.link');
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
      <Container ref={wrapperRef}>
         <LinkWrapper>
            <a
               href='https://www.linkedin.com/in/shanekoester/'
               target='_blank'
               rel='noopener noreferrer'
            >
               <Card
                  className='link'
                  style={{ '--clr1': '#0082b5', '--clr2': '#003448' }}
               >
                  <span>LinkedIn</span>
                  <ion-icon name='open-outline'></ion-icon>
               </Card>
            </a>
         </LinkWrapper>
         <LinkWrapper style={{ '--offset': '20px' }}>
            <a
               href='https://www.github.com/ItsMeShane'
               target='_blank'
               rel='noopener noreferrer'
            >
               <Card
                  className='link'
                  style={{ '--clr1': '#545994', '--clr2': '#22243b' }}
               >
                  <span>GitHub</span>
                  <ion-icon name='open-outline'></ion-icon>
               </Card>
            </a>
         </LinkWrapper>
         <LinkWrapper style={{ '--offset': '40px' }}>
            <Link to='/portfolio'>
               <Card
                  className='link'
                  style={{ '--clr1': '#945489', '--clr2': '#3b2237' }}
               >
                  <span>Portfolio</span>
                  <ion-icon name='arrow-forward-circle-outline'></ion-icon>
               </Card>
            </Link>
         </LinkWrapper>
         <LinkWrapper style={{ '--offset': '60px' }}>
            <Link to='/projects'>
               <Card
                  className='link'
                  style={{ '--clr1': '#6e5494', '--clr2': '#211668' }}
               >
                  <span>Projects</span>
                  <ion-icon name='arrow-forward-circle-outline'></ion-icon>
               </Card>
            </Link>
         </LinkWrapper>
      </Container>
   );
};

export default InteractiveButtons;
