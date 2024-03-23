import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, Container, LinkWrapper, Title, Wrapper } from './HeroStyles';

const Hero = () => {
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
      <Wrapper ref={wrapperRef}>
         <Container>
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
                     <Title>LinkedIn</Title>
                     <ion-icon name='open-outline'></ion-icon>
                  </Card>
               </a>
            </LinkWrapper>
            <LinkWrapper>
               <a
                  href='https://www.github.com/ItsMeShane'
                  target='_blank'
                  rel='noopener noreferrer'
               >
                  <Card
                     className='link'
                     style={{ '--clr1': '#545994', '--clr2': '#22243b' }}
                  >
                     <Title>GitHub</Title>
                     <ion-icon name='open-outline'></ion-icon>
                  </Card>
               </a>
            </LinkWrapper>
            <LinkWrapper>
               <Link to='/portfolio'>
                  <Card
                     className='link'
                     style={{ '--clr1': '#945489', '--clr2': '#3b2237' }}
                  >
                     <Title>Portfolio</Title>
                     <ion-icon name='arrow-forward-circle-outline'></ion-icon>
                  </Card>
               </Link>
            </LinkWrapper>
            <LinkWrapper>
               <Link to='/projects'>
                  <Card
                     className='link'
                     style={{ '--clr1': '#6e5494', '--clr2': '#211668' }}
                  >
                     <Title>Projects</Title>
                     <ion-icon name='arrow-forward-circle-outline'></ion-icon>
                  </Card>
               </Link>
            </LinkWrapper>
         </Container>
      </Wrapper>
   );
};

export default Hero;
