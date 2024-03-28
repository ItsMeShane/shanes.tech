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
                     <span style={{ '--background': '#21719d' }}>OpenAI</span>
                     <span style={{ '--background': '#1c744f' }}>Styled Components</span>
                  </Tags>
               </InfoSection>

               <ShowcasedImage
                  src='/images/projects/shanes-chat/shanes-chat-transparent.png'
                  width='275px'
               />
            </Header>
            <Body>
               <BodyTitle>Some Code Analysis</BodyTitle>
               <p>
                  One of the more interesting aspects of this project is my use of an
                  assistant chatbot; trained on my own personal data, my assistant can
                  help users navigate the website and answer any questions about me.
                  Seeing the rise and hype around LLMs such as Gemini, Copilot, and
                  ChatGPT is what initially inspired me to start this project. With that
                  said, I'd like to share with you my assistant chatbot implementation
                  using OpenAI's Assistant API.
               </p>
               <CodeContainer>
                  <img src='/images/projects/shanes-chat/code1.png' />
               </CodeContainer>
               <CodeContainer>
                  <img src='/images/projects/shanes-chat/code2.png' />
               </CodeContainer>
               <CodeContainer>
                  <img src='/images/projects/shanes-chat/code3.png' />
               </CodeContainer>
               <CodeContainer>
                  <img src='/images/projects/shanes-chat/code4.png' />
               </CodeContainer>
               <p></p>
            </Body>
         </PageContainer>
      </PageWrapper>
   );
};

export default PJShanesChat;
