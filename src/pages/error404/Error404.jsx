import React from 'react';
import styled, { keyframes } from 'styled-components';

const spinAnimation = keyframes`
  100% {
    transform: rotate(360deg);
  }
  `;

const Container = styled.div`
   z-index: -1;
   display: flex;
   justify-content: center;
   user-select: none;
`;

const Circle = styled.div`
   margin: 30px;
   margin-bottom: 50px;
   margin-top: 10px;
   width: 200px;
   height: 200px;
   border-radius: 50%;
   background: linear-gradient(to right, blue, magenta);
   animation: ${spinAnimation} 2s linear infinite;
   filter: blur(5px);

   &::after {
      content: '';
      position: absolute;
      width: 190px;
      height: 180px;
      background-color: #222222;
      border-radius: 50%;
   }

   @media (max-width: 768px), (max-height: 500px) {
      width: 100px;
      height: 100px;
      &::after {
         content: '';
         position: absolute;
         width: 90px;
         height: 90px;
      }
   }
   @media (max-height: 500px) {
      display: none;
   }
`;

const Four = styled.h1`
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
         <Four style={{ '--clr': '#ff00cc77' }}>4</Four>
         <Circle className='circle' />
         <Four style={{ '--clr': '#3333ff77' }}>4</Four>
      </Container>
   );
};

export default Error404;
