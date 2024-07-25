import React from 'react';
import { ProjectPage } from './ProjectPage';

const images = [
   {
      src: 'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExamcxNjc5NGwyMDhodjAwNHM1eWdudnV1d2hwN3BjeGVhbmxzZ3NmZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/2Cce6hv9NcFTW/giphy.gif',
   },
   {
      src: 'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExOWY4bjgyeTN2aDJkM3lrNmR0M2FlOXB0dHZ2NmcxYjJyM21veG02eSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3og0IDoDo2TeidxKbm/giphy.gif',
   },
   {
      src: 'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExMmt5aXdqcXhjYWNwMm8wZDB5ZmV4dXI2Z25rNTdybjJ1NHgycndkYyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/lRRvqQ8R9e8czFJyIw/giphy-downsized-large.gif',
   },
]

const PJAILearnsToDrive = () => {
   return <ProjectPage title='AI Learns to Drive' images={images}/>;
};

export default PJAILearnsToDrive;
