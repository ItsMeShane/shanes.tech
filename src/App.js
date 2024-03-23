import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Hero from './pages/hero/Hero';
import Portfolio from './pages/portfolio/Portfolio';
import PageNotFound from './pages/error404/PageNotFound';
import NavBar from './navigation/Navigation';
import Projects from './pages/projects/Projects';

function App() {
   return (
      <BrowserRouter>
      <NavBar />
         <Routes>
            <Route path='*' element={<PageNotFound />} />
            <Route path='/' index element={<Hero />} />
            <Route path='/home' index element={<Hero />} />
            <Route path='/portfolio' element={<Portfolio />} />
            <Route path='/projects' element={<Projects />} />
         </Routes>
      </BrowserRouter>
   );
}

export default App;
