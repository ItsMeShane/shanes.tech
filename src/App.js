import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Hero from './pages/hero/Hero';
import Projects from './pages/projects/Projects';
import PageNotFound from './pages/PageNotFound';

function App() {
   return (
      <BrowserRouter>
         <Routes>
            <Route path='*' element={<PageNotFound />} />
            <Route path='/' index element={<Hero />} />
            <Route path='/projects' element={<Projects />} />
         </Routes>
      </BrowserRouter>
   );
}

export default App;
