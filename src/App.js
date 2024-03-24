import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Hero from './pages/hero/Hero';
import Experience from './pages/experience/Experience';
import PageNotFound from './pages/error404/PageNotFound';
import NavBar from './navigation/Navigation';
import Projects from './pages/projects/Projects';

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
         </Routes>
      </BrowserRouter>
   );
}

export default App;
