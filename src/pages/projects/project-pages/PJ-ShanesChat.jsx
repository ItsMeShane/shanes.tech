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
   CodeSnippet,
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
                  An alternative portfolio experience. This website showcases my projects
                  and skills through the lense of an iPhone. An alternative portfolio
                  experience. This website showcases my projects and skills through the
                  lense of an iPhone. An alternative portfolio experience. This website
                  showcases my projects and skills through the lense of an iPhone. An
                  alternative portfolio experience. This website showcases my projects and
                  skills through the lense of an iPhone. An alternative portfolio
                  experience. This website showcases my projects and skills through the
                  lense of an iPhone. An alternative portfolio experience.
               </p>
               <CodeSnippet>
                  {`
      const sendMessageToAssistant = async (threadId, text) => {
         try {
            await openai.beta.threads.messages.create(threadId, {
               role: 'user',
               content: text,
            });
            const run = await openai.beta.threads.runs.create(threadId, {
               assistant_id: process.env.REACT_APP_OPENAI_ASSISTANT_ID,
            });
      
            let runStatus = await openai.beta.threads.runs.retrieve(threadId, run.id);
            while (runStatus.status !== 'completed') {
               await new Promise((resolve) => setTimeout(resolve, 1000));
               runStatus = await openai.beta.threads.runs.retrieve(threadId, run.id);
            }
      
            const assistantResponse = (
               await openai.beta.threads.messages.list(threadId)
            ).data.find((message) => message.role === 'assistant');
      
            let assistantMessage = assistantResponse.content[0].text.value;
      
            return assistantMessage;
         } catch (error) {
            console.error(error);
            console.error('Failed to send message to OpenAI');
            return '';
         }
      };
 `}
               </CodeSnippet>
               <p>
                  An alternative portfolio experience. This website showcases my projects
                  and skills through the lense of an iPhone. An alternative portfolio
                  experience. This website showcases my projects and skills through the
                  lense of an iPhone. An alternative portfolio experience. This website
                  showcases my projects and skills through the lense of an iPhone. An
                  alternative portfolio experience. This website showcases my projects and
                  skills through the lense of an iPhone. An alternative portfolio
                  experience. This website showcases my projects and skills through the
                  lense of an iPhone. An alternative portfolio experience.
               </p>
            </Body>
         </PageContainer>
      </PageWrapper>
   );
};

export default PJShanesChat;
