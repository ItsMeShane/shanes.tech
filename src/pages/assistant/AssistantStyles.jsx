import styled from 'styled-components';

export const Wrapper = styled.div`
   height: 100dvh;
   width: 100%;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   color: #eeeeee;
`;

export const Container = styled.div`
   width: 800px;
   height: 600px;
   background-color: #aaa;
   display: flex;
   flex-direction: column;
   border-radius: 10px;

   @media (max-width: 1000px) {
      width: 80%;
   }
`;

export const Header = styled.div`
   height: 100px;
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding: 0 20px;

   span {
      color: #eee;
      text-shadow: 0 0 5px rgba(0, 0, 0, 0.8);
      flex: 1;
      text-align: center;
      font-size: 2rem;
      font-weight: 600;
      @media (max-width: 768px) {
         font-size: 1.5rem;
      }
   }
   button {
      background-color: transparent;
      height: 100%;
      cursor: pointer;
      font-size: 2.5rem;
      display: flex;
      align-items: center;
      border: none;
      justify-content: center;
      transition: transform 0.2s ease-in-out;

      &:active {
         transform: scale(1.1);
      }
   }
`;
export const Messages = styled.div`
   flex: 1;
   height: 100px;
   width: 100%;
   display: flex;
   flex-direction: column;
   overflow: auto;
   gap: 10px;
   padding: 10px;

   span {
      background-color: #aaaaaa;
      border-radius: 10px;
      width: fit-content;
      max-width: 70%;
      height: fit-content;
      font-size: 1rem;
      padding: 5px 10px;
      white-space: pre-wrap;

      &.user {
         background-color: #1163bb;
         color: #eee;
         border-radius: 10px 10px 0px 10px;
         align-self: flex-end;
      }
      &.assistant {
         background-color: #e6e6e6aa;
         color: #111;
         border-radius: 10px 10px 10px 0px;
      }
   }
`;

export const Input = styled.div`
   height: 100px;
   width: 100%;
   gap: 30px;
   padding: 10px;
   display: flex;

   textarea {
      font-size: 1rem;
      background-color: #eeeeee;
      flex: 1;
      min-width: 0;
      resize: none;
      padding: 0px 10px;
      outline: none;
      border: 1px #222 solid;
      border-radius: 5px;

      &::placeholder {
         color: #2a2a2a;
      }

      @media (max-width: 420px) {
         padding: 0px 5px;
         &:focus {
            + button {
               display: none;
            }
         }
      }
   }
`;
export const InputButton = styled.button`
   background-color: transparent;
   height: 100%;
   cursor: pointer;
   font-size: 2.5rem;
   display: flex;
   align-items: center;
   border: none;
   justify-content: center;
   transition: scale 0.2s ease-in-out, width 0.5s;

   &:active {
      scale: 1.1;
   }

   @media (max-width: 420px) {
      /* Hide buttons when textarea is focused */
      ${Input}:focus-within & {
         display: none;
      }
   }
`;
