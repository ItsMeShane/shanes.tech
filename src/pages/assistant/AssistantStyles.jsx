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
   color: #eeeeee;
`;

export const Container = styled.div`
   width: 800px;
   height: 600px;
   background-color: #333;
   display: flex;
   flex-direction: column;

   @media (max-width: 1000px) {
      width: 80%;
   }
`;

export const Header = styled.div`
   height: 100px;
   width: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
   background-color: #333;
   color: #00000088;
`;

export const Messages = styled.div`
   flex: 1;
   height: 100px;
   width: 100%;
   display: flex;
   flex-direction: column;
   overflow: auto;
   gap: 10px;
   padding:10px;

   span {
      background-color: #3a77a6;
      border-radius: 10px;
      width: fit-content;
      max-width: 70%;
      height: fit-content;
      font-size: 1rem;
      padding: 5px 10px;

      &.user {
         background-color: #007bff;
         color: #eee;
         border-radius: 10px 10px 0px 10px;
         align-self:flex-end;
      }
      &.assistant {
         background-color: #e6e6e6;
         color: #111;
         border-radius: 10px 10px 10px 0px;
      }
   }
`;

export const Input = styled.div`
   /* background-color: blue; */
   height: 100px;
   width: 100%;
   padding: 10px;
   gap: 10px;
   display: flex;

   button {
      background-color: transparent;
      height: 100%;
      cursor: pointer;
      font-size: 2.5rem;
      display: flex;
      align-items: center;
      border: none;
      justify-content: center;
      transition: scale 0.2s ease-in-out;
      &:active {
         scale: 1.1;
      }
   }
   textarea {
      flex: 1;
      min-width: 0;
      resize: none;
   }
`;
