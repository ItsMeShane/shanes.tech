import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
   height: 75px;
   width:100%;
   display: flex;
   flex-direction: column;
   background-color:#333;
   align-items:center;
   justify-content:center;
   color: #eee;
`;


const Footer = () => {

   return (
      <Container>
         <span>© 2024 &nbsp; Made with ♥️ by Shane Koester</span>
      </Container>
   );
};

export default Footer;
