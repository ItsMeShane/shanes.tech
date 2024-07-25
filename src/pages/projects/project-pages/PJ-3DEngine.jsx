import React from 'react';
import { ProjectPage } from './ProjectPage';

const images = [
   {
      src: 'https://i.imgur.com/bvydIqT.gif',
   },
   {
      src: 'https://i.imgur.com/gzTwOpi.gif',
   },
   {
      src: 'https://i.imgur.com/AMBDveF.gif',
   },
   {
      src: 'https://i.imgur.com/T6riAkB.png',
   },
   {
      src: 'https://i.imgur.com/UA5RWXU.png',
   },
];

const PJ3DEngine = () => {
   return <ProjectPage title='3D Rendering Engine' images={images} />;
};

export default PJ3DEngine;
