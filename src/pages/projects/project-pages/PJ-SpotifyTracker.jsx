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
                           <span>Visit Website</span>
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

               <ShowcasedImage
                  src='/images/placeholder.png'
                  alt='placeholder'
                  width='400px'
               />
            </Header>
         </PageContainer>
      </PageWrapper>
   );
};

export default PJSpotifyTracker;
