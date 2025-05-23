import { Routes, Route } from 'react-router-dom';
import Hero from './pages/hero/Hero';
import Projects from './pages/projects/Projects';
import Assistant from './pages/assistant/Assistant';
import PageNotFound from './pages/error404/PageNotFound';
import PJShanesChat from './pages/projects/project-pages/PJ-ShanesChat';
import PJAILearnsToDrive from './pages/projects/project-pages/PJ-AILearnsToDrive';
import PJChess from './pages/projects/project-pages/PJ-Chess';
import PJ3DEngine from './pages/projects/project-pages/PJ-3DEngine';
import PJSpotifyTracker from './pages/projects/project-pages/PJ-SpotifyTracker';
import PJOpticalCharacterRecognition from './pages/projects/project-pages/PJ-OCR';
import Navigation from './nav/Navigation';

function App() {
   return (
      <>
      <Navigation />
      <Routes>
         <Route path='/' index element={<Hero />} />
         <Route path='/chat' element={<Assistant />} />
         <Route path='/projects' element={<Projects />} />
         <Route
            path='/projects/p/optical-character-recognition'
            element={<PJOpticalCharacterRecognition />}
         />
         <Route path='/projects/p/shanes-chat' element={<PJShanesChat />} />
         <Route path='/projects/p/ai-learns-to-drive' element={<PJAILearnsToDrive />} />
         <Route path='/projects/p/chess' element={<PJChess />} />
         <Route path='/projects/p/3d-rendering-engine' element={<PJ3DEngine />} />
         <Route path='/projects/p/spotify-tracker' element={<PJSpotifyTracker />} />
         <Route path='*' element={<PageNotFound />} />
      </Routes>
      </>
   );
}

export default App;
