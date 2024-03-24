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
   }
`;

export const GridWrapper = styled.div`
   height: 100vh;
   width: 100vh;
`;

export const GridContainer = styled.div`
   display: grid;
   grid-template: 1fr 1fr 1fr 1fr 1fr / 1fr 1fr 1fr;
   gap: 30px;
   height: 100%;
   width: 100%;
`;

export const Project = styled.div`
   width: 100%;
   height: 100%;
   border-radius: 1rem;
   background-size: cover;
   background-position: center;
   transition: filter 0.5s ease-out;

   display: flex;

   .blur {
      filter: blur(2px);
      background-color: #333333aa;
   }
   .project-title {
      font-size: 2em;
      height: fit-content;
      align-self: flex-end;
      margin: 5px;

      padding: 0 5px;

      color: #eee;
      -webkit-text-stroke: 1px #111;
      text-shadow: 0 0 5px rgba(0, 0, 0, 1);
      font-weight: 700;
   }

   filter: grayscale(60%) brightness(80%);
   &:hover {
      filter: grayscale(0%) brightness(120%);
   }
   &#project-0 {
      background-color: #dcb7d8;
      grid-row: 1 / 2;
      grid-column: 1 / 3;
      background-image: url('./images/projects/pj0.png');
   }
   &#project-1 {
      background-color: #75b5ea;
      grid-row: 1 / 3;
      grid-column: 3 / 4;
      background-image: url('./images/projects/pj1.png');
   }
   &#project-2 {
      background-color: #f799db;
      grid-row: 2 / 4;
      grid-column: 1 / 3;
      background-image: url('./images/projects/pj2.png');
   }
   &#project-3 {
      background-color: #59567a;
      grid-row: 4 / 6;
      grid-column: 1 / 2;
      background-image: url('./images/projects/pj6.png');
   }
   &#project-4 {
      background-color: #775ca8;
      grid-row: 4 / 6;
      grid-column: 2 / 4;
      background-image: url('./images/projects/pj8.png');
   }
   &#project-5 {
      background-color: #989bec;
      grid-row: 3 / 4;
      grid-column: 3 / 4;
      background-image: url('./images/projects/pj5.png');
   }
`;
