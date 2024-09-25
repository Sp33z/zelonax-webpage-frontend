import { useState } from 'react';
import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Lobby from './pages/Lobby';
import Home from './pages/subpages/Home';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Lobby><Home/></Lobby> }></Route>
        <Route path="/" element={ <Lobby/> }></Route>
      </Routes>
    </BrowserRouter>
  );
}

/*
<BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home/> }></Route>
      </Routes>
    </BrowserRouter>
*/

export default App;
