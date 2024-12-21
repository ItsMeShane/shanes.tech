import React from 'react';
import {
   BottomSection,
   Container,
   LeftContainer,
   RightContainer,
   TopSection,
} from './MainStyles';
import Hero from './components/hero/Hero';
import Projects from '../projects/Projects';
import Assistant from './components/assistant/Assistant';

const Main = () => {
   return (
      <Container>
         {/* Left Side */}
         <LeftContainer>
            <TopSection>
               <Hero />
            </TopSection>
            <BottomSection>
               <Assistant />
            </BottomSection>
         </LeftContainer>

         {/* Right Side */}
         <RightContainer>
            <Projects />
         </RightContainer>
      </Container>
   );
};

export default Main;
