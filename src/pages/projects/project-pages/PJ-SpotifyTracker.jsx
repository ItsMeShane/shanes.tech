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

const PJSpotifyTracker = () => {
   return (
      <PageWrapper>
         <PageContainer>
            <Header>
               <InfoSection>
                  <TitleContainer>
                     <HeaderTitle>Spotify Tracker</HeaderTitle>
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
                     Ever wanted to get insights to your listening patterns and see
                     statistics about the music you listen to? Great! Upload your Spotify
                     streaming data and get visualizations showing your top songs,
                     artists, albums, and more.
                  </Description>
                  <Tags>
                     <span style={{ '--background': '#3924ad' }}>JavaScript</span>
                     <span style={{ '--background': '#219d4a' }}>Spotify API</span>
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

export default PJSpotifyTracker;
