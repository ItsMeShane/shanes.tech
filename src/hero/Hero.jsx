import React, { useRef, useEffect } from 'react';
import { Card, Container, Header, Link, Title, Wrapper } from './HeroStyles';

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
            <Link
               className='link'
               href='https://www.linkedin.com/in/shanekoester/'
               target='_blank'
               rel='noopener noreferrer'
               style={{ '--clr': '#2badef77' }}
            >
               <Card>
                  <Title>LinkedIn</Title>
                  <ion-icon name='open-outline'></ion-icon>
               </Card>
            </Link>
            <Link
               className='link'
               href='https://www.github.com/ItsMeShane'
               target='_blank'
               rel='noopener noreferrer'
               style={{ '--clr': '#2b42ef77' }}
            >
               <Card>
                  <Title>GitHub</Title>
                  <ion-icon name='open-outline'></ion-icon>
               </Card>
            </Link>
            <Link
               className='link'
               href='https://www.shanes.chat'
               target='_blank'
               rel='noopener noreferrer'
               style={{ '--clr': '#2bef7d77' }}
            >
               <Card>
                  <Title>Portfolio</Title>
                  <ion-icon name='open-outline'></ion-icon>
               </Card>
            </Link>
            <Link
               className='link'
               href='shane_koester_resume.pdf'
               download='shane_koester_resume.pdf'
               target='_blank'
               rel='noopener noreferrer'
               style={{ '--clr': '#df2bef77' }}
            >
               <Card>
                  <Title>Résumé</Title>
                  <ion-icon name='download-outline'></ion-icon>{' '}
               </Card>
            </Link>
         </Container>
      </Wrapper>
   );
};

export default Hero;
