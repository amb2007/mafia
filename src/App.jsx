import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Game from  './components/Game';
import Intro from './components/Intro';
import NavBar from './components/NavBar';
import Gameplay from './components/Gameplay';
import BadEnding from './components/finals/BadEnding';
import  GoodEnding from './components/finals/GoodEnding';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import Footer from './components/Footer';

function App() {
  const [players, setPlayers] = useState([
    { id: 0, name: "", role: "" },
    { id: 1, name: "", role: "" },
    { id: 2, name: "", role: "" },
    { id: 3, name: "", role: "" },
    { id: 4, name: "", role: "" },
    { id: 5, name: "", role: "" },
  ]);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/home" element={<><NavBar /><Home /><Footer  /></>} />
          <Route path="/game" element={<><NavBar /><Game players={players} setPlayers={setPlayers} /> <Footer /></>} />
          <Route path="/gameplay" element={<><NavBar /><Gameplay players={players} setPlayers = {setPlayers}></Gameplay></>} />
          <Route path="/bad-ending" element={<><NavBar /><BadEnding/></>}/>
          <Route path="/good-ending" element={<><NavBar /><GoodEnding/></>}/>
        </Routes>
      </Router>
      <ToastContainer />
    </>
  );

}

export default App
