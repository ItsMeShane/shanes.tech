import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Hero from './pages/hero/Hero';
import Assistant from './pages/assistant/Assistant';
import PageNotFound from './pages/error404/PageNotFound';
import NavBar from './navigation/Navigation';
import Projects from './pages/projects/Projects';
import PJShanesChat from './pages/projects/project-pages/PJ-ShanesChat';
import PJAILearnsToDrive from './pages/projects/project-pages/PJ-AILearnsToDrive';
import PJChess from './pages/projects/project-pages/PJ-Chess';
import PJ3DEngine from './pages/projects/project-pages/PJ-3DEngine';
import PJSpotifyTracker from './pages/projects/project-pages/PJ-SpotifyTracker';
import PJOpticalCharacterRecognition from './pages/projects/project-pages/PJ-OCR';

const PortfolioContent = () => {
   return (
      <>
         <section id='hero'>
            <Hero />
         </section>
         <section id='projects'>
            <Projects />
         </section>
         <section id='assistant'>
            <Assistant />
         </section>
      </>
   );
};
function App() {
   return (
      <BrowserRouter>
         <NavBar />
         <Routes>
            <Route path='*' element={<PageNotFound />} />
            <Route path='/' index element={<PortfolioContent />} />
            <Route path='/home' element={<PortfolioContent />} />
            <Route
               path='/projects/optical-character-recognition'
               element={<PJOpticalCharacterRecognition />}
            />
            <Route path='/projects/shanes-chat' element={<PJShanesChat />} />
            <Route path='/projects/ai-learns-to-drive' element={<PJAILearnsToDrive />} />
            <Route path='/projects/chess' element={<PJChess />} />
            <Route path='/projects/3d-rendering-engine' element={<PJ3DEngine />} />
            <Route path='/projects/spotify-tracker' element={<PJSpotifyTracker />} />
         </Routes>
      </BrowserRouter>
   );
}

export default App;
