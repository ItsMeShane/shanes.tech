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

const PJChess = () => {
   return (
      <PageWrapper>
         <PageContainer>
            <Header>
               <InfoSection>
                  <TitleContainer>
                     <HeaderTitle>Chess</HeaderTitle>
                     <div className='button-container'>
                        <ButtonLink
                           style={{ '--background': '#549468' }}
                           href='https://drive.google.com/drive/folders/1pVmdou1kw2y4AhkqtpiVMmmTOnrkGcHR?usp=sharing'
                           target='_blank'
                           rel='noopener noreferrer'
                        >
                           <span>Download .exe</span>
                           <ion-icon name='open-outline'></ion-icon>
                        </ButtonLink>
                        <ButtonLink
                           style={{ '--background': '#5e5494' }}
                           href='https://github.com/ItsMeShane/Chess_Engine'
                           target='_blank'
                           rel='noopener noreferrer'
                        >
                           <span>GitHub</span>
                           <ion-icon name='logo-github'></ion-icon>
                        </ButtonLink>
                     </div>
                  </TitleContainer>
                  <Description>
                     Your classic chess game. Play against my AI, built from scratch and
                     capable of beating most novice players.
                  </Description>
                  <Tags>
                     <span style={{ '--background': '#3924ad' }}>Java</span>
                     <span style={{ '--background': '#21809d' }}>Swing</span>
                  </Tags>
               </InfoSection>

               <ShowcasedImage
                  src='/images/projects/chess/showcase1.png'
                  width='450px'
                  alt='chess'
               />
            </Header>
         </PageContainer>
      </PageWrapper>
   );
};

export default PJChess;
