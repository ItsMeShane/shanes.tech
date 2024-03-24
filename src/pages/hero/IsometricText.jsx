import React from 'react';
import styled from 'styled-components';

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
   gap:10px;
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
   color: #333;
   cursor: pointer;
   transition: 0.75s;

   &:hover {
      color: #3C3C3C;
      transform: translateX(20px) translateZ(20px);
   }
`;

const Span = styled.span`
   display: block;
   -webkit-text-stroke: 2px #111;
   font-family: Poppins;
   font-size: 7rem;
   font-weight: 800;
   letter-spacing: 1rem;
   text-shadow: -1px 1px 0px var(--clr), -2px 2px 0px var(--clr),
      -3px 3px 0px var(--clr), -4px 4px 0px var(--clr), -5px 5px 0px var(--clr),
      -6px 6px 0px var(--clr), -7px 7px 0px var(--clr), -8px 8px 0px var(--clr),
      -9px 9px 0px var(--clr), -10px 10px 0px var(--clr), -11px 11px 0px var(--clr),
      -12px 12px 0px var(--clr), -13px 13px 1px var(--clr), -14px 14px 2px var(--clr),
      -15px 15px 3px white;
`;

const IsometricText = () => {
   const words = ['SHANE', 'KOESTER'];
   return (
      <Container>
         {words.map((word, index) => (
            <Word key={index} style={{ '--first': index === 0 }}>
               {[...word].map((letter, index) => (
                  <Letter key={index}>
                     <Span style={{ '--clr': '#444'}}>
                        {letter}
                     </Span>
                  </Letter>
               ))}
            </Word>
         ))}
      </Container>
   );
};

export default IsometricText;
