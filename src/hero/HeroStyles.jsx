import styled from 'styled-components';

export const Wrapper = styled.div`
   height: 100vh;
   width: 100vw;
   display: flex;
   justify-content: center;
   align-items: center;
   background-color: #222222;

   &::before {
      content: '';
      position: absolute;
      top: var(--y, -300px);
      left: var(--x);
      transform: translate(-50%, -50%);
      background-color: #2e2e2e;
      width: 200px;
      height: 200px;
      border-radius: 50%;
      filter: blur(5px);
      @media (max-width: 768px) {
         display: none;
      }
   }
`;

export const Container = styled.div`
   width: 500px;
   height: 70%;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   gap: 40px;
   overflow: hidden;

   &::after {
      content: '';
      position: absolute;
      pointer-events: none;
      width: 70%;
      max-width: 500px;
      height: inherit;
      border: 10px solid;
      border-image: linear-gradient(to right, #ff00cc, #3333ff) 1;

      @media (max-width: 768px) {
         border-image-slice: 1 0;
      }
   }

   @media (max-width: 768px) {
      width: 90%;
      height: 70%;
   }
`;

export const Card = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: center;
   align-items: center;
   width: 100%;
`;

export const Title = styled.span`
   font-weight: 600;
   pointer-events: none;
   flex: 1;
`;

export const Link = styled.a`
   padding: 15px 25px;
   font-size: 2rem;
   position: relative;
   display: flex;
   justify-content: center;
   align-items: center;
   text-decoration: none;
   background-color: #333333;
   border-radius: 40px;
   width: 350px;
   height: fit-content;
   transition: color 0.25s;
   color: #ffffff55;
   overflow: hidden;

   &:hover {
      color: #ffffffee;
   }

   &::before {
      content: '';
      position: absolute;
      transform: translate(-50%, -50%);
      background-color: var(--clr);
      width: 200px;
      height: 200px;
      border-radius: 50%;
      top: var(--y, -300px);
      left: var(--x);
      filter: blur(5px);
      @media (max-width: 768px) {
         display: none;
      }
   }

   @media (max-width: 768px) {
      width: 90%;

      &:hover {
         color: var(--clr);
      }
   }
`;
