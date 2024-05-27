import React from 'react';
import styled from 'styled-components';
import InteractiveButtons from './InteractiveButtons';
import IsometricText from './IsometricText';

const Hero = () => {
   return (
      <Wrapper>
         <Container>
            <IsometricText />
            <InteractiveButtons />
         </Container>
      </Wrapper>
   );
};

export default Hero;

export const Wrapper = styled.div`
   height: 100vh;
   width: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
   font-size: 2rem;
   font-weight: 600;
`;

export const Container = styled.div`
   width: 100%;
   height: 100%;
   display: flex;
   justify-content: space-evenly;
   align-items: center;
`;
