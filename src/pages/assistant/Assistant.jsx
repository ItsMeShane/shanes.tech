import React from 'react';
import { Box, Container, Header, Input, Messages, Wrapper } from './AssistantStyles';

const Assistant = () => {
   return (
      <Wrapper>
         <h1>Assistant</h1>
         <Container>
            <Header>
               <span>Send a message!</span>
            </Header>
            <Messages>
               <span className='user'>Hey, I'm the user</span>
               <span className='assistant'>Hey, I'm the assistant</span>
               <span className='user'>Hey, I'm the user</span>
               <span className='assistant'>Hey, I'm the assistant</span>
               <span className='user'>Hey, I'm the user</span>
               <span className='assistant'>Hey, I'm the assistant</span>
               <span className='user'>Hey, I'm the user</span>
               <span className='assistant'>Hey, I'm the assistant</span>
               <span className='user'>Hey, I'm the user</span>
               <span className='assistant'>Hey, I'm the assistant</span>
               <span className='user'>Hey, I'm the user</span>
               <span className='assistant'>Hey, I'm the assistant</span>
            </Messages>
            <Input>
               <textarea placeholder='Ask about Shane!' />
               <button>
                  <ion-icon name={'send-outline'}></ion-icon>
               </button>
               <button>🎲</button>
            </Input>
         </Container>
      </Wrapper>
   );
};

export default Assistant;
