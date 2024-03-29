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

const PJAILearnsToDrive = () => {
   return (
      <PageWrapper>
         <PageContainer>
            <Header>
               <InfoSection>
                  <TitleContainer>
                     <HeaderTitle>AI Learns to Drive</HeaderTitle>
                     <div className='button-container'>
                        <ButtonLink
                           style={{ '--background': '#549468' }}
                           href=''
                           target='_blank'
                           rel='noopener noreferrer'
                        >
                           <span>Visit Site</span>
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
                     You might learn from your mistakes, but AI learns faster! Watch in
                     real time as my AI learns how to drive through trial and error.
                  </Description>
                  <Tags>
                     <span style={{ '--background': '#3924ad' }}>JavaScript</span>
                     <span style={{ '--background': '#9d2195' }}>Neural Networks</span>
                     <span style={{ '--background': '#21809d' }}>No Libraries</span>
                  </Tags>
               </InfoSection>

               <ShowcasedImage src='/images/placeholder.png' width='400px' />
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
                  <img src='/images/placeholder.png' />
               </CodeContainer>
            </Body>
         </PageContainer>
      </PageWrapper>
   );
};

export default PJAILearnsToDrive;
