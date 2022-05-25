import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import {BottomScrollListener} from 'react-bottom-scroll-listener'
import './App.css';
import HomePage from './Pages/HomePage/HomePage';
import TvShowPage from './Pages/TvShowPage/TvShow';
import Upcoming from './Pages/UpcomingPage/Upcoming';
import SearchedPage from './Pages/SearchedPage/SearchedPage';
import {AnimatePresence} from 'framer-motion'
import Footer from './Components/Footer/Footer';

function App() {
  

  return (
    <div className="App" >
      <AnimatePresence exitBeforeEnter={true}>
      <BrowserRouter>
      <Routes>
     < Route path='/' element={<HomePage/>}/>
     < Route path='/tv-show' element={<TvShowPage/>}/>
     < Route path='/upcoming' element={<Upcoming/>}/>
     < Route path='/searched' element={<SearchedPage/>}/>
      </Routes>
     </BrowserRouter>
    
     </AnimatePresence>
    </div>
  );
}

export default App;

