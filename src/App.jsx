import { useState } from 'react';
import './App.css';
import '@picocss/pico/css/pico.min.css';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Email from './Pages/Email';
import Mobile from './Pages/Mobile';
import Username from './Pages/Username';
import Summary from './Pages/Summary';
import About from './Pages/About';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <main className='container'>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/email' element={<Email />}></Route>
            <Route path='/mobile' element={<Mobile />}></Route>
            <Route path='/username' element={<Username />}></Route>
            <Route path='/summary' element={<Summary />}></Route>
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
