import React from 'react';
import { ProjectPage } from './ProjectPage';

const images = [
   {
      src: 'https://imgur.com/1VDZ8FO.png',
   },
   {
      src: 'https://imgur.com/x7OSIq4.png',
   },
   {
      src: 'https://imgur.com/EU8ZuP8.png',
   },
   {
      src: 'https://imgur.com/TRb7yby.png',
   },
]

const PJOpticalCharacterRecognition = () => {
   return <ProjectPage title='Optical Character Recognition' images={images} />;
};

export default PJOpticalCharacterRecognition;
