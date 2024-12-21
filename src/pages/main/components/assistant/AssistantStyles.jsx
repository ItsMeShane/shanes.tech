import styled from 'styled-components';

export const Container = styled.div`
   width: 80%;
   height: 50dvh;
   min-height: 500px;
   display: flex;
   flex-direction: column;
   border-radius: 10px;
   padding-bottom: 20px;

   #resetThread {
      background-color: transparent;
      border: 1px solid #aaa;
      border-radius: 5px;
      transition: background-color 0.1s;
      &:active {
         background-color: #ccc;
      }
   }

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
   height: 100%;
   width: 100%;
   display: flex;
   flex-direction: column;
   overflow: auto;
   gap: 10px;
   padding: 10px 45px;

   span {
      border-radius: 10px;
      width: fit-content;
      max-width: 70%;
      height: fit-content;
      font-size: 1.1rem;
      padding: 5px 10px;
      white-space: pre-wrap;
      position: relative;
      border-radius: 10px;

      &.user {
         background-color: #007aff;
         color: #eee;
         align-self: flex-end;

         // Tail for user messages
         &::before {
            content: '';
            position: absolute;
            bottom: 0;
            right: -10px;
            width: 20px;
            height: 20px;
            background-color: #007aff;
            border-bottom-left-radius: 15px;
         }
         &::after {
            content: '';
            position: absolute;
            bottom: 0;
            right: -10px;
            width: 10px;
            height: 20px;
            background-color: #eee;
            border-bottom-left-radius: 10px;
         }
      }

      &.assistant {
         background-color: #1c8436;
         color: #eee;

         // Tail for assistant messages
         &::before {
            content: '';
            position: absolute;
            bottom: 0;
            left: -10px;
            width: 20px;
            height: 20px;
            background-color: #1c8436;
            border-bottom-right-radius: 15px;
         }
         &::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: -10px;
            width: 10px;
            height: 20px;
            background-color: #eee;
            border-bottom-right-radius: 10px;
         }
      }
   }
`;

export const Input = styled.div`
   height: 100px;
   width: 100%;
   gap: 30px;
   display: flex;
   align-items: center;
   border-radius: 50px;
   border: 2px #333 solid;
   padding: 0px 30px;

   textarea {
      font-size: 1.3rem;
      background-color: transparent;
      flex: 1;
      min-width: 0;
      resize: none;
      outline: none;
      border: none;
      overflow-y: auto;
      height: 32px;
      max-height: 100px;

      &::placeholder {
         color: #353535;
      }

      @media (max-width: 600px) {
      height: 25px;
      font-size: 1rem;
      &:focus {
            ~ button {
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
   transition: scale 0.1s ease-in-out;

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
