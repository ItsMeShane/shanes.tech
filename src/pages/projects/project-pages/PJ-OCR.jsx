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

const PJOpticalCharacterRecognition = () => {
   return (
      <PageWrapper>
         <PageContainer>
            <Header>
               <InfoSection>
                  <TitleContainer>
                     <HeaderTitle>Optical Character Recognition</HeaderTitle>
                     <div className='button-container'>
                        {/* <ButtonLink
                           style={{ '--background': '#549468' }}
                           href=''
                           target='_blank'
                           rel='noopener noreferrer'
                        >
                           <span>Link to Demo</span>
                           <ion-icon name='open-outline'></ion-icon>
                        </ButtonLink> */}
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
                     contains a message and see the image get transcribed to text with 98%
                     accuracy.
                  </Description>
                  <Tags>
                     <span style={{ '--background': '#3924ad' }}>Python</span>
                     <span style={{ '--background': '#9d2195' }}>Numpy</span>
                  </Tags>
               </InfoSection>

               <ShowcasedImage
                  src='/images/projects/optical character recognition/showcase1.png'
                  alt='optical character recognition'
                  width='400px'
               />
            </Header>
         </PageContainer>
      </PageWrapper>
   );
};

export default PJOpticalCharacterRecognition;
