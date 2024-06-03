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

const PJShanesChat = () => {
   return (
      <PageWrapper>
         <PageContainer>
            <Header>
               <InfoSection>
                  <TitleContainer>
                     <HeaderTitle>Shane's Chat</HeaderTitle>
                     <div className='button-container'>
                        <ButtonLink
                           style={{ '--background': '#549468' }}
                           href='https://www.shanes.chat'
                           target='_blank'
                           rel='noopener noreferrer'
                        >
                           <span>Visit Website</span>
                           <ion-icon name='open-outline'></ion-icon>
                        </ButtonLink>
                        <ButtonLink
                           style={{ '--background': '#5e5494' }}
                           href='https://github.com/ItsMeShane/shanes.chat'
                           target='_blank'
                           rel='noopener noreferrer'
                        >
                           <span>GitHub</span>
                           <ion-icon name='logo-github'></ion-icon>
                        </ButtonLink>
                     </div>
                  </TitleContainer>
                  <Description>
                     An alternative portfolio experience. This website showcases my
                     projects and skills through the lense of an iPhone.
                  </Description>
                  <Tags>
                     <span style={{ '--background': '#3924ad' }}>React.js</span>
                     <span style={{ '--background': '#21719d' }}>GPT-4</span>
                     <span style={{ '--background': '#1c744f' }}>Styled Components</span>
                  </Tags>
               </InfoSection>

               <ShowcasedImage
                  src='/images/projects/shanes chat/showcase1.png'
                  width='275px'
                  alt='shanes chat'
               />
            </Header>
         </PageContainer>
      </PageWrapper>
   );
};

export default PJShanesChat;
