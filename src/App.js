import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Hero from './pages/hero/Hero';
import Portfolio from './pages/portfolio/Portfolio';
import Collection from './pages/collection/Collection';
import PageNotFound from './pages/error404/PageNotFound';

function App() {
   return (
      <BrowserRouter>
         <Routes>
            <Route path='*' element={<PageNotFound />} />
            <Route path='/' index element={<Hero />} />
            <Route path='/home' index element={<Hero />} />
            <Route path='/portfolio' element={<Portfolio />} />
            <Route path='/collection' element={<Collection />} />
         </Routes>
      </BrowserRouter>
   );
}

export default App;
