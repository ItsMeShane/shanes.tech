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

const PJOpticalCharacterRecognition = () => {
   return (
      <PageWrapper>
         <PageContainer>
            <Header>
               <InfoSection>
                  <TitleContainer>
                     <HeaderTitle>Optical Character Recognition</HeaderTitle>
                     <div className='button-container'>
                        <ButtonLink
                           style={{ '--background': '#549468' }}
                           href=''
                           target='_blank'
                           rel='noopener noreferrer'
                        >
                           <span>Link to Demo</span>
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
                     Convert images to text with OCR. Upload (or take) a photo that
                     contains text and see the image get transcribed to text.
                  </Description>
                  <Tags>
                     <span style={{ '--background': '#3924ad' }}>Love</span>
                     <span style={{ '--background': '#9d2195' }}>Care</span>
                     <span style={{ '--background': '#21809d' }}>Affection</span>
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

export default PJOpticalCharacterRecognition;
