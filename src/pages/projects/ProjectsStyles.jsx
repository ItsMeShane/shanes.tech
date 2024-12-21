import styled from 'styled-components';

export const Container = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   gap: 50px;
   padding: 20px;
`;
export const Title = styled.span`
   display: flex;
   justify-content: left;
   width:100%;
   align-items: center;
   text-align:left;
   max-width: 750px;
   font-size: 100px;
   color:#222;

   &.mask-effect {
      mask-image: radial-gradient(
         circle,
         transparent -10%,
         black 35%,
         black 65%,
         transparent 100%
      );
      -webkit-mask-image: radial-gradient(
         circle,
         transparent -10%,
         black 35%,
         black 65%,
         transparent 100%
      );
   }
   &.center {
      justify-content: center;
   }

   @media (max-width: 1100px) {
      font-size: 50px;
      text-align:center;
      justify-content:center;

      &.mask-effect {
         mask-image: none;
         -webkit-mask-image: none;
      }
   }
`;

export const ProjectContainer = styled.div`
   width: 100%;
   height: 500px;
   display: flex;
   justify-content: space-evenly;

   @media (max-width: 1100px) {
      flex-direction: column-reverse;
      justify-content: center;
      align-items: center;
      padding: 0 50px;
   }
`;

export const ButtonContainer = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;

   @media (max-width: 768px) {
      height: fit-content;
   }
`;

export const Button = styled.div`
   height: 75px;
   font-size: 2rem;
   font-weight: 510;
   overflow: hidden;
   user-select: none;
   padding: 15px 25px;
   position: relative;
   display: flex;
   justify-content: space-between;
   align-items: center;
   text-decoration: none;
   background: linear-gradient(to right, var(--clr1), var(--clr2));
   transition: color 0.25s, background-color 1s, transform 0.5s,
      text-shadow 0.25s ease-out;
   color: #ffffff55;
   z-index: 1;
   &:hover {
      color: #ffffffcc;
      text-shadow: 0 0 5px rgba(0, 0, 0, 1);
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
      left: 0px;
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
   span,
   i {
      pointer-events: none;
      z-index: 1;
      white-space: nowrap;
   }
`;

export const LinkWrapper = styled.div`
   width: 350px;
   height: 75px;
   transition: 1s;
   margin: 10px;

   &:hover {
      ${Button} {
         transition-delay: 0.2s;
         transform: translateX(20px);
         @media (max-width: 768px), (max-height: 500px) {
            transform: translateX(0);
            transition: 0s;
         }
      }
   }
   a {
      text-decoration: none;
   }
`;
