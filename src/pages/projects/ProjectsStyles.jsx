import styled from 'styled-components';

export const Container = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   padding-top: 100px;
`;
export const Intro = styled.div`
   width: 100%;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   color: #eee;
   text-align: center;
   h1 {
      color: #555;
      -webkit-text-stroke: 2px #111;
      font-size: 4.5rem;
      font-weight: 800;
      padding-bottom: 50px;
      @media (max-width: 768px) {
         font-size: 3rem;
      }
   }
`;

export const GridWrapper = styled.div`
   height: 100vh;
   width: 100vw;
   max-width: 1280px;
   display: flex;
   justify-content: center;
   @media (max-width: 1000px) {
      height: 140vh;
   }
   @media (max-width: 768px), (max-height: 500px) {
      height: 140vh;
   }
`;

export const GridContainer = styled.div`
   display: grid;
   grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
   grid-template-columns: 1fr 1fr 1fr;
   gap: 30px;
   height: 100%;
   width: 80%;
   @media (max-width: 1000px) {
      grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
      grid-template-columns: 1fr 1fr;
   }
   @media (max-width: 768px), (max-height: 500px) {
      display: flex;
      flex-direction: column;
      align-items: center;
   }
`;

export const Project = styled.div`
   /* cursor: pointer; */
   width: 100%;
   height: 100%;
   border-radius: 1rem;
   background-size: cover;
   background-position: center;
   transition: filter 0.5s ease-out, transform 0.5s ease-out;
   display: flex;
   filter: brightness(95%);
   &:hover {
      filter: brightness(110%);
      transform: scale(1.025);
   }

   .project-title {
      font-size: 2em;
      height: fit-content;
      align-self: flex-end;
      margin: 5px;
      padding: 0 5px;
      color: #eee;
      -webkit-text-stroke: 1px #111;
      text-shadow: 0 0 5px rgba(0, 0, 0, 0.8);
      font-weight: 700;
      z-index:1;
      @media (max-width: 768px) {
         align-self: flex-start;
         font-size: 1.8rem;
      }
   }
   .link-blanket {
      position: absolute;
      height: 100%;
      width: 100%;
      border-radius: 1rem;
   }

   &#project-0 {
      grid-row: 1 / 2;
      grid-column: 1 / 3;
      background-image: url('./images/projects/OCR.png');
      @media (max-width: 1000px) {
         grid-row: 1 / 2;
         grid-column: 1 / 3;
      }
   }
   &#project-1 {
      grid-row: 1 / 3;
      grid-column: 3 / 4;
      background-image: url('./images/projects/shanes-chat.png');
      @media (max-width: 1000px) {
         grid-row: 2 / 4;
         grid-column: 1 / 2;
      }
   }
   &#project-2 {
      grid-row: 2 / 4;
      grid-column: 1 / 3;
      background-image: url('./images/projects/ai-learns-to-drive.png');
      @media (max-width: 1000px) {
         grid-row: 2 / 4;
         grid-column: 2 / 3;
      }
   }
   &#project-3 {
      grid-row: 4 / 6;
      grid-column: 1 / 2;
      background-image: url('./images/projects/chess.png');
      @media (max-width: 1000px) {
         grid-row: 5 / 7;
         grid-column: 1 / 2;
      }
   }
   &#project-4 {
      grid-row: 4 / 6;
      grid-column: 2 / 4;
      background-image: url('./images/projects/engine-3d.png');
      @media (max-width: 1000px) {
         grid-row: 4 / 5;
         grid-column: 1 / 3;
      }
   }
   &#project-5 {
      grid-row: 3 / 4;
      grid-column: 3 / 4;
      background-image: url('./images/projects/spotify-tracker.png');
      @media (max-width: 1000px) {
         grid-row: 5 / 7;
         grid-column: 2 / 3;
      }
   }
`;
