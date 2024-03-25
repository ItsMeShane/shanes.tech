import React, { useEffect, useRef } from 'react';
import './NavStyles.css';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

export default function NavBar() {
   const navbarLinksRef = useRef(null);
   const menuRef = useRef(null);

   useEffect(() => {
      const handleClickOutside = (event) => {
         if (
            navbarLinksRef.current &&
            !navbarLinksRef.current.contains(event.target) &&
            menuRef.current &&
            !menuRef.current.contains(event.target)
         ) {
            navbarLinksRef.current.classList.remove('menu-open');
         }
      };
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
         document.removeEventListener('mousedown', handleClickOutside);
      };
   }, []);

   const handleToggleButtonClick = () => {
      navbarLinksRef.current.classList.toggle('menu-open');
   };

   const handleLinkClick = (event, targetId) => {
      goToSection(event, targetId);
      navbarLinksRef.current.classList.remove('menu-open');
   };

   return (
      <nav className='navbar'>
         <Link to='/' className='name' onClick={(e) => handleLinkClick(e, '#hero')}>
            Shane Koester
         </Link>
         <div className='toggle-menu' ref={menuRef} onClick={handleToggleButtonClick}>
            <ion-icon name='menu-outline'></ion-icon>
         </div>
         <div className='navbar-links' ref={navbarLinksRef}>
            <ul>
               <li>
                  <a href='#chat' onClick={(e) => handleLinkClick(e, '#chat')}>
                     Chat
                  </a>
               </li>
               <li>
                  <a href='#projects' onClick={(e) => handleLinkClick(e, '#projects')}>
                     Projects
                  </a>
               </li>
               <li>
                  <a
                     href='#experience'
                     onClick={(e) => handleLinkClick(e, '#experience')}
                  >
                     Experience
                  </a>
               </li>
               <li>
                  <a href='#about' onClick={(e) => handleLinkClick(e, '#about')}>
                     About
                  </a>
               </li>
            </ul>
         </div>
      </nav>
   );
}

// function CustomLink({ to, children, onClick, ...props }) {
//    const resolvedPath = useResolvedPath(to);
//    const isActive = useMatch({ path: resolvedPath.pathname, end: true });
//    return (
//       <li className={isActive ? 'active' : ''}>
//          <Link to={to} onClick={onClick} {...props}>
//             {children}
//          </Link>
//       </li>
//    );
// }

export const goToSection = (event, targetId) => {
   event.preventDefault();
   const targetElement = document.querySelector(targetId);
   if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
   }
};