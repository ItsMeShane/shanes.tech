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
   color: #eeeeee;
   position: relative;
   margin-bottom: 0.5rem;
   text-align: center;

   @media (max-width: 768px) {
      width: 90%;
   }
`;

export const Container = styled.div`
   width: 500px;
   width: fit-content;
   height: fit-content;
   display: flex;
   flex-direction: column;
   align-items: center;
   overflow-y: auto;
   gap: 40px;
   padding: 60px;
   border: 10px solid;
   border-image: linear-gradient(to right, #b50b93, #2d2db5);
   border-image-slice: 1;
   @media (max-width: 768px) {
      width: 75%;
      border-image-slice: 1 0;
      padding: 50px;
   }
   @media (max-height: 500px) {
      width: 90%;
      height: 70%;
      border-image-slice: 1 0;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 10px;
      width: 90%;
      height: 70%;
      border-image-slice: 1 0;
      padding: 20px;
   }
`;

export const Link = styled.a`
   padding: 15px 25px;
   position: relative;
   display: flex;
   justify-content: center;
   align-items: center;
   text-decoration: none;
   background-color: #333333;
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
`;

export const LinkWrapper = styled.div`
   width: 350px;
   overflow: visible;
   transition: 1s;
   &:hover {
      ${Link} {
         transition-delay: 0.2s;
         transform: translateX(15px);
         @media (max-width: 768px), (max-height: 500px) {
            transform: translateX(0);
            transition: 0s;
         }
      }
   }
   @media (max-width: 768px), (max-height: 500px) {
      width: 80%;
      min-width: 275px;
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
   z-index: 1;
   white-space: nowrap;
`;
