import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import Error404 from './Error404';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   height: 100vh;
   width: 100vw;
`;
const Container = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   height: fit-content;
   a {
      text-decoration: none;
   }
`;

const ErrorMessage = styled.p`
   font-size: 2rem;
   color: #eeeeee;
   text-align: center;
   margin-bottom: 40px;
`;

const Card = styled.div`
   overflow: hidden;
   cursor: pointer;
   position: relative;
   display: flex;
   justify-content: center;
   align-items: center;
   width: 300px;
   height: 75px;
   color: #ffffff;
   border-radius: 3rem;
   padding: 10px 20px;
   background: #333333;
   transition: color 0.25s, background-color 1s;
   color: #ffffff55;

   &:hover {
      color: #ffffffcc;
      background-color: #991ae677;
      &::before {
         width: 700px;
         height: 700px;
         top: 50%;
         left: 50%;
         top: var(--y, -300px);
         left: var(--x);
         transform: translate(-50%, -50%);
      }
   }
   &::before {
      content: '';
      position: absolute;
      transform: translate(-50%, -50%);
      background: linear-gradient(to right, #ff00cc77, #3333ff77);
      width: 0;
      height: 0;
      border-radius: 50%;
      top: var(--y, -300px);
      left: var(--x);
      filter: blur(5px);
      transition: width 1s, height 1s;
      @media (max-width: 768px) {
         display: none;
      }
   }
   span {
      font-size: 2rem;
      font-weight: 600;
      z-index: 1;
   }
`;

const PageNotFound = () => {
   const wrapperRef = useRef(null);
   const linkRef = useRef(null);
   useEffect(() => {
      const wrapper = wrapperRef.current;
      const handleMouseMove = (e) => {
         let link = linkRef.current;
         let mx = e.pageX - link.offsetLeft;
         let my = e.pageY - link.offsetTop;
         link.style.setProperty(`--x`, mx + `px`);
         link.style.setProperty(`--y`, my + `px`);
      };
      wrapper.addEventListener('mousemove', handleMouseMove);
      return () => {
         wrapper.removeEventListener('mousemove', handleMouseMove);
      };
   }, []);

   return (
      <Wrapper ref={wrapperRef}>
         <Container>
            <Error404 />
            <ErrorMessage>Whoops, that URL does not exist.</ErrorMessage>
            <Link to='/' ref={linkRef}>
               <Card>
                  <span>Hero Page</span>
               </Card>
            </Link>
         </Container>
      </Wrapper>
   );
};

export default PageNotFound;
