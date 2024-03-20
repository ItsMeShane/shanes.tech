import styled from 'styled-components';

export const Wrapper = styled.div`
   height: 100vh;
   width: 100vw;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   font-size: 2rem;
   font-weight: 600;
`;

export const Header = styled.span`
   width: 500px;
   color: #fff;
   z-index: 1;
   position: absolute;
   top: 9%;

   @media (max-width: 768px) {
      width: 90%;
      text-align: center;
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
   pointer-events: none;
   flex: 1;
   z-index:1;
`;
export const Link = styled.a`
   padding: 15px 25px;
   position: relative;
   display: flex;
   justify-content: center;
   align-items: center;
   text-decoration: none;
   background-color: #333333;
   border-radius: 40px;
   width: 350px;
   height: fit-content;
   transition: color 0.25s, background-color 1s;
   color: #ffffff55;

   &:hover {
      color: #ffffffcc;
      background-color: var(--clr);
      &::before {
         width: 700px;
         height: 700px;
         top: 50%;
         left: 50%;
         top: var(--y, -300px);
         left: var(--x);
         transform: translate(-50%, -50%);
      }
   }

   &::before {
      content: '';
      position: absolute;
      transform: translate(-50%, -50%);
      background-color: var(--clr);
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

   @media (max-width: 768px) {
      width: 90%;

      &:hover {
         background-color: var(--clr);
      }
   }
`;
