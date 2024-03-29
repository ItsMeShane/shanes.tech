import React from 'react';
import {
   Body,
   ButtonLink,
   Description,
   Header,
   InfoSection,
   PageContainer,
   PageWrapper,
   ShowcasedImage,
   Tags,
   HeaderTitle,
   TitleContainer,
   BodyTitle,
   CodeContainer,
} from './ProjectPageStyles';

const PJ3DEngine = () => {
   return (
      <PageWrapper>
         <PageContainer>
            <Header>
               <InfoSection>
                  <TitleContainer>
                     <HeaderTitle>3D Rendering Engine</HeaderTitle>
                     <div className='button-container'>
                        <ButtonLink
                           style={{ '--background': '#549468' }}
                           href=''
                           target='_blank'
                           rel='noopener noreferrer'
                        >
                           <span>Download .exe</span>
                           <ion-icon name='open-outline'></ion-icon>
                        </ButtonLink>
                        <ButtonLink
                           style={{ '--background': '#5e5494' }}
                           href='https://github.com/ItsMeShane/'
                           target='_blank'
                           rel='noopener noreferrer'
                        >
                           <span>GitHub</span>
                           <ion-icon name='logo-github'></ion-icon>
                        </ButtonLink>
                     </div>
                  </TitleContainer>
                  <Description>
                     My own 3D engine! Specular lighting, procedural terrain, water
                     animations, particle effects, normal mapping, and more.
                  </Description>
                  <Tags>
                     <span style={{ '--background': '#3924ad' }}>Java</span>
                     <span style={{ '--background': '#9d2195' }}>LWJGL</span>
                     <span style={{ '--background': '#21809d' }}>OpenGL</span>
                     <span style={{ '--background': '#21809d' }}>GLSL</span>
                  </Tags>
               </InfoSection>

               <ShowcasedImage
                  src='/images/placeholder.png'
                  alt='placeholder'
                  width='400px'
               />
            </Header>
            <Body>
               <BodyTitle>Some Code Analysis</BodyTitle>
               <p>This "blog" post is currently a work in progress.</p>
               <p>
                  I put a lot of time and effort into writing these so it takes a lot of
                  time.
               </p>
               <p>More posts coming soon!</p>
               <CodeContainer>
                  <img src='/images/placeholder.png' alt='placeholder' />
               </CodeContainer>
            </Body>
         </PageContainer>
      </PageWrapper>
   );
};

export default PJ3DEngine;
