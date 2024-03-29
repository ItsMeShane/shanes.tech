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
                           href=''
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
                  src='/images/projects/chess/chess2.png'
                  width='400px'
                  alt='chess'
               />
            </Header>
            <Body>
               <BodyTitle>Some Code Analysis</BodyTitle>
               <p>
                  One of my favorite parts about chess programming is the use of the
                  Mini-Max algorithm with Alpha Beta Pruning. These alorithms work great
                  in two-player turn-based games like chess, checkers, and tic-tac-toe.
               </p>
               <p>
                  Below you can see a variation of these algorithms used together to
                  create our search algorithm. Note that this is a stripped down version
                  for the purpose of presentation.
               </p>
               <CodeContainer>
                  <img src='/images/projects/chess/code1.png' alt='code snippet' />
               </CodeContainer>
               <p>Let's break this code down piece by piece. </p>
            </Body>
         </PageContainer>
      </PageWrapper>
   );
};

export default PJChess;
