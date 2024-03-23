import styled from 'styled-components';

export const Container = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
`;
export const IntroSection = styled.section`
   height: 50vh;
   display: flex;
   justify-content: center;
   align-items: center;
   color: #eee;

   div {
         text-align: center;
   }
`;

export const ProjectSection = styled.section`
   width: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
   padding-bottom:200px;
`;

export const ProjectContainer = styled.div`
   margin: 50px;
   height: 600px;
   width: 60%;
   background-color: #bfbfbf;
   border-radius: 35px;

   display: flex;
   justify-content: space-evenly;
   align-items: center;

   @media (max-width: 768px) {
      margin: 25px;
      flex-direction: column;
      width: 85%;
      height: fit-content;
   }
`;

export const Images = styled.div`
   width: 45%;
   height: 90%;
   background-color: #adadad;
   border-radius: 35px;
   padding: 20px;

   img {
      width: 100%;
      height: 100%;
      max-width: 100%;
      max-height: 100%;
      object-fit: cover;
      border-radius: 35px;
   }

   @media (max-width: 768px) {
      margin: 25px;
      width: 85%;
   }
`;
export const Information = styled.div`
   width: 45%;
   height: 90%;
   background-color: #adadad;
   border-radius: 35px;
   padding: 20px;

   span {
      width:100%;
      text-align:center;
      text-transform:uppercase;
      font-size:2.5rem;
   }

   @media (max-width: 768px) {
      margin: 25px;
      width: 85%;
   }
`;
