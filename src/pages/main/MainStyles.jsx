import styled from 'styled-components';

export const Container = styled.div`
   display: flex;
   width: 100vw;
   height: 100vh;
   flex-direction: row;

   @media (max-width: 768px) {
      flex-direction: column; /* Stack vertically on small screens */
      height: auto; /* Allow scrolling */
   }
`;

export const LeftContainer = styled.div`
   flex: 1;
   display: flex;
   flex-direction: column;

   @media (max-width: 768px) {
      flex: none; /* Allow natural height for scrolling */
      width: 100%;
   }
`;

export const TopSection = styled.div`
   flex: 1; /* Takes up 50% of the left container's height */
   display: flex;
   align-items: center;
   justify-content: center;
`;

export const BottomSection = styled.div`
   flex: 1; /* Takes up the other 50% */
   display: flex;
   align-items: center;
   justify-content: center;
`;

export const RightContainer = styled.div`
   flex: 1;
   display: flex;
   align-items: center;
   justify-content: center;
   overflow-y:scroll;

   @media (max-width: 768px) {
      flex: none; /* Allow natural height for scrolling */
      width: 100%;
   }
`;
