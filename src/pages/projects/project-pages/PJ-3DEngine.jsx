import React from 'react';
import {
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
                           href='https://drive.google.com/drive/folders/1MG5rai0nvQjz_sweQyv6sNwxut0zVaFz?usp=sharing'
                           target='_blank'
                           rel='noopener noreferrer'
                        >
                           <span>Download .exe</span>
                           <ion-icon name='open-outline'></ion-icon>
                        </ButtonLink>
                        <ButtonLink
                           style={{ '--background': '#5e5494' }}
                           href='https://github.com/ItsMeShane/DEMO_3D'
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
                  src='/images/projects/engine 3d/showcase1.png' 
                  alt='3d engine'
                  width='600px'
               />
            </Header>
         </PageContainer>
      </PageWrapper>
   );
};

export default PJ3DEngine;
