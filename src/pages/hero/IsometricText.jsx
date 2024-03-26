import React from 'react';
import styled, { keyframes } from 'styled-components';

const hoverEffect = keyframes`
  0%, 100% {
    transform: none;
  }
  50% {
    color: var(--highlight);
    transform: translateX(20px) translateZ(20px);
  }
`;

const Container = styled.div`
   width: fit-content;
   height: fit-content;
   display: flex;
   flex-direction: column;
   justify-content: center;
   @media (max-width: 1280px) {
      display: none;
   }
`;

const Word = styled.div`
   width: fit-content;
   height: fit-content;
   transform-style: preserve-3d;
   display: flex;
   gap: 10px;
   transition: 1s;
   transform: ${(props) =>
      props.style['--first']
         ? 'translateX(-80px) translateY(50px) skew(30deg, 165deg) rotateX(22.5deg)'
         : 'skew(30deg, 165deg) rotateX(22.5deg)'};
`;
const Letter = styled.div`
   width: fit-content;
   height: fit-content;
   transform-style: preserve-3d;
   cursor: pointer;
   color: #333;

   span {
      display: block;
      -webkit-text-stroke: 2px #111;
      font-family: Poppins;
      font-size: 7rem;
      font-weight: 800;
      letter-spacing: 1rem;
      text-shadow: -1px 1px 0px var(--shadow), -2px 2px 0px var(--shadow),
         -3px 3px 0px var(--shadow), -4px 4px 0px var(--shadow),
         -5px 5px 0px var(--shadow), -6px 6px 0px var(--shadow),
         -7px 7px 0px var(--shadow), -8px 8px 0px var(--shadow),
         -9px 9px 0px var(--shadow), -10px 10px 0px var(--shadow),
         -11px 11px 0px var(--shadow), -12px 12px 0px var(--shadow),
         -13px 13px 1px var(--shadow), -14px 14px 2px var(--shadow), -15px 15px 3px white;
      animation: ${hoverEffect} 2s ;
      animation-delay: calc(var(--letter-index) * 0.5s);
   }
   transition: 0.75s;
   &:hover {
      color: var(--highlight) !important;
      transform: translateX(20px) translateZ(20px);
   }
`;
const IsometricText = () => {
   const words = ['SHANE', 'KOESTER'];
   let letterCount = 0;
   return (
      <Container>
         {words.map((word, index) => (
            <Word key={index} style={{ '--first': index === 0 }}>
               {[...word].map((letter, index) => (
                  <Letter
                     key={index}
                     style={{
                        '--highlight': `hsl(${letterCount++ * 30}, 20%, 50%)`,
                        '--letter-index': letterCount,
                     }}
                  >
                     <span
                        style={{
                           '--shadow': '#444',
                           '--highlight': `hsl(${letterCount * 30}, 20%, 50%)`,
                        }}
                     >
                        {letter}
                     </span>
                  </Letter>
               ))}
            </Word>
         ))}
      </Container>
   );
};

export default IsometricText;
