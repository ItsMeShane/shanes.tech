import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

const NavigationContainer = styled.div`
   position: fixed;
   display: flex;
   gap: 10px;
   background: transparent;
   z-index: 2;
   width: 100%;
   justify-content: space-between;
`;

const Buttons = styled.div`
   display: flex;
   margin: 10px;
   gap: 10px;
`;
const NavButton = styled.button`
   width: 50px;
   height: 50px;
   border: none;
   background-color: transparent;
   color: #222;
   font-size: 3rem;
   display: flex;
   align-items: center;
   justify-content: center;
   cursor: pointer;
`;

const NavLink = styled(Link)`
   margin: 10px;
   width: 50px;
   height: 50px;
   border: none;
   background-color: transparent;
   color: #222;
   font-size: 3rem;
   display: flex;
   align-items: center;
   justify-content: center;
   cursor: pointer;
   text-decoration: none;
`;

const Navigation = () => {
   const [isNightMode, setIsNightMode] = useState(false);
   const [isFullscreen, setIsFullscreen] = useState(false);
   const location = useLocation();

   const toggleNightMode = () => {
      setIsNightMode(!isNightMode);
   };

   const toggleFullscreen = () => {
      if (!isFullscreen) {
         // Enter fullscreen mode
         if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen();
         } else if (document.documentElement.mozRequestFullScreen) {
            /* Firefox */
            document.documentElement.mozRequestFullScreen();
         } else if (document.documentElement.webkitRequestFullscreen) {
            /* Chrome Safari and Opera */
            document.documentElement.webkitRequestFullscreen();
         } else if (document.documentElement.msRequestFullscreen) {
            /* Edge */
            document.documentElement.msRequestFullscreen();
         }
      } else {
         // Exit fullscreen mode
         if (document.exitFullscreen) {
            document.exitFullscreen();
         } else if (document.mozCancelFullScreen) {
            /* Firefox */
            document.mozCancelFullScreen();
         } else if (document.webkitExitFullscreen) {
            /* Chrome Safari and Opera */
            document.webkitExitFullscreen();
         } else if (document.msExitFullscreen) {
            /* Edge */
            document.msExitFullscreen();
         }
      }

      setIsFullscreen(!isFullscreen);
   };

   // Check if the current location is not the home page
   const isNotHomePage = location.pathname !== '/';

   return (
      <NavigationContainer>
         {isNotHomePage && (
            <NavLink to='/'>
               <i className='fa-solid fa-house'></i>
            </NavLink>
         )}
         {!isNotHomePage && <div />}
         <Buttons>
            {!isNightMode && (
               <NavButton onClick={toggleNightMode}>
                  <i className='fa-sharp fa-solid fa-moon'></i>
               </NavButton>
            )}
            {isNightMode && (
               <NavButton onClick={toggleNightMode}>
                  <i className='fa-solid fa-sun'></i>
               </NavButton>
            )}
            {!isFullscreen && (
               <NavButton onClick={toggleFullscreen}>
                  <i className='fa-solid fa-expand'></i>
               </NavButton>
            )}
            {isFullscreen && (
               <NavButton onClick={toggleFullscreen}>
                  <i className='fa-solid fa-compress'></i>
               </NavButton>
            )}
         </Buttons>
      </NavigationContainer>
   );
};

export default Navigation;
