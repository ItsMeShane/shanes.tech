import React, { useRef, useEffect } from 'react';
import { Card, Container, Header, Link, LinkWrapper, Title, Wrapper } from './HeroStyles';

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
         <Header>Shane Koester</Header>
         <Container>
            <LinkWrapper>
               <Link
                  className='link'
                  href='https://www.linkedin.com/in/shanekoester/'
                  target='_blank'
                  rel='noopener noreferrer'
                  style={{ '--clr1': '#0082b5', '--clr2': '#003448' }}
               >
                  <Card>
                     <Title>LinkedIn</Title>
                     <ion-icon name='open-outline'></ion-icon>
                  </Card>
               </Link>
            </LinkWrapper>
            <LinkWrapper>
               <Link
                  className='link'
                  href='https://www.github.com/ItsMeShane'
                  target='_blank'
                  rel='noopener noreferrer'
                  style={{ '--clr1': '#545994', '--clr2': '#22243b' }}
               >
                  <Card>
                     <Title>GitHub</Title>
                     <ion-icon name='open-outline'></ion-icon>
                  </Card>
               </Link>
            </LinkWrapper>
            <LinkWrapper>
               <Link
                  className='link'
                  href='/portfolio'
                  style={{ '--clr1': '#945489', '--clr2': '#3b2237' }}
               >
                  <Card>
                     <Title>Portfolio</Title>
                     <ion-icon name='arrow-forward-circle-outline'></ion-icon>
                  </Card>
               </Link>
            </LinkWrapper>
            <LinkWrapper>
               <Link
                  className='link'
                  href='/collection'
                  style={{ '--clr1': '#6e5494', '--clr2': '#211668' }}
               >
                  <Card>
                     <Title>Collection</Title>
                     <ion-icon name='arrow-forward-circle-outline'></ion-icon>
                  </Card>
               </Link>
            </LinkWrapper>
         </Container>
      </Wrapper>
   );
};

export default Hero;
