import styled from 'styled-components';

export const PageWrapper = styled.div`
   display: flex;
   justify-content: center;
`;
export const PageContainer = styled.div`
   width: 100%;
   max-width: 1100px;
   padding: 100px 0;
   display: flex;
   align-items: center;
   flex-direction: column;
   color: #eee;
`;

export const Header = styled.div`
   width: 100%;
   min-height: 75vh;
   padding: 50px;
   display: flex;
   justify-content: space-between;

   @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
      gap: 50px;
      padding: 10px;
   }
`;
export const InfoSection = styled.div`
   flex-shrink: 0;
   display: flex;
   flex-direction: column;
   @media (max-width: 768px) {
      padding: 0 10px;
   }
`;
export const TitleContainer = styled.div`
   display: flex;
   flex-direction: column;

   .button-container {
      display: flex;
      gap: 25px;
   }
`;

export const HeaderTitle = styled.span`
   font-size: 4rem;
   font-weight: 600;
   -webkit-text-stroke: 2px #111;
   text-shadow: 0 0 10px rgba(0, 0, 0, 1);
   max-width: 500px;
   line-height:1.25;
   padding-bottom:10px;
   @media (max-width: 768px) {
      font-size: 3rem;
      font-weight: 600;
      -webkit-text-stroke: 1px #111;
      text-shadow: none;
   }
`;
export const ShowcasedImage = styled.img`
   object-fit: contain;
   height: fit-content;
`;

export const ButtonLink = styled.a`
   display: flex;
   align-items: center;
   justify-content: space-between;
   gap: 5px;
   padding: 5px 10px;
   background-color: var(--background);
   border-radius: 0.5rem;
   text-decoration: none;
   color: #111;
   font-size: 1.3rem;

   &:hover {
      box-shadow: inset 0 0 0 2px #eee;
   }
   &:active {
      filter: brightness(120%);
   }
`;

export const Description = styled.p`
   font-size: 1.1rem;
   padding: 25px 0;
   width: 400px;

   @media (max-width: 768px) {
      width: 325px;
   }
`;
export const Tags = styled.div`
   font-size: 1.1rem;
   max-width: 350px;
   min-width: 215px;
   width: fit-content;
   display: flex;
   justify-content: space-evenly;
   flex-wrap: wrap;
   gap: 5px;
   border: 2px solid #eee;
   border-radius: 0.5rem;
   padding: 25px 20px;
   span {
      background-color: var(--background);
      padding: 5px 15px;
      border-radius: 10px;
   }
   &::before {
      content: 'Developed With:';
      position: absolute;
      background-color: #222;
      padding: 0 10px;
      margin-top: -40px;
   }
   @media (max-width: 768px) {
      align-self: center;
   }
`;

export const Body = styled.div`
   width: 100%;
   max-width: 900px;
   padding: 30px;
   background-color: #333;
   display: flex;
   flex-direction: column;
   gap: 20px;
   p {
      font-size: 1rem;
      /* line-height:1.5rem; */
   }
`;

export const BodyTitle = styled.span`
   font-size: 3rem;
   font-weight: 600;
   -webkit-text-stroke: 1px #111;
   text-shadow: none;
   @media (max-width: 768px) {
      font-size: 2rem;
   }
`;

export const CodeContainer = styled.div`
   align-self: center;
   background-color: #555;
   padding: 10px;
   border-radius: 4px;
   border: 1px solid #ccc;
   width: 90%;
   height: fit-content;
   display: flex;
   img {
      object-fit: cover;
      max-width: 100%;
      max-height: 100%;
      width: 100%;
   }
`;
