import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
   z-index: -1;
   display: flex;
   justify-content: center;
   user-select: none;
`;

const Char = styled.h1`
   font-size: 20rem;
   color: var(--clr);
   line-height: 75%;

   @media (max-width: 768px) {
      font-size: 9rem;
      margin: 10px;
   }
   @media (max-height: 500px) {
      display: none;
   }
`;

const Error404 = () => {
   return (
      <Container>
         <Char style={{ '--clr': '#ff55dd' }}>4</Char>
         <Char style={{ '--clr': '#5569ff' }}>0</Char>
         <Char style={{ '--clr': '#7777ff' }}>4</Char>
      </Container>
   );
};

export default Error404;
