import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Hero from './pages/hero/Hero';
import Experience from './pages/experience/Experience';
import PageNotFound from './pages/error404/PageNotFound';
import NavBar from './navigation/Navigation';
import Projects from './pages/projects/Projects';
import PJ_ShanesChat from './pages/projects/project-pages/PJ-ShanesChat';
import AILearnsToDrive from './pages/projects/project-pages/PJ-AILearnsToDrive';
import PJ_Chess from './pages/projects/project-pages/PJ-Chess';
import PJ_3DEngine from './pages/projects/project-pages/PJ-3DEngine';
import PJ_SpotifyTracker from './pages/projects/project-pages/PJ-SpotifyTracker';
import PJ_OCR from './pages/projects/project-pages/PJ-OCR';

const PortfolioContent = () => {
   return (
      <>
         <div id='hero'>
            <Hero />
         </div>
         <div id='chat'></div>
         <div id='projects'>
            <Projects />
         </div>
         <div id='experience'>
            <Experience />
         </div>
         <div id='about'></div>
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
            <Route path='/projects/optical-character-recognition' element={<PJ_OCR />} />
            <Route path='/projects/shanes-chat' element={<PJ_ShanesChat />} />
            <Route path='/projects/ai-learns-to-drive' element={<AILearnsToDrive />} />
            <Route path='/projects/chess' element={<PJ_Chess />} />
            <Route path='/projects/3d-rendering-engine' element={<PJ_3DEngine />} />
            <Route path='/projects/spotify-tracker' element={<PJ_SpotifyTracker />} />
         </Routes>
      </BrowserRouter>
   );
}

export default App;
