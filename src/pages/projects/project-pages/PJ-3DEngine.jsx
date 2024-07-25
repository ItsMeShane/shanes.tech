import React from 'react';
import { ProjectPage } from './ProjectPage';

const images = [
   {
      src: 'https://media.giphy.com/media/4gmfI8wXlqMQt7BDUb/giphy.gif',
   },
   {
      src: 'https://media.giphy.com/media/qduv40oZ997wNDrQr5/giphy.gif',
   },
   {
      src: 'https://media.giphy.com/media/uHUvG769NmRRDWrTlr/giphy.gif',
   },
];

const PJ3DEngine = () => {
   return <ProjectPage title='3D Rendering Engine' images={images} />;
};

export default PJ3DEngine;
