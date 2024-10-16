import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Game from  './components/Game';
import Intro from './components/Intro';
import NavBar from './components/NavBar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <>
    <Router>
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/home" element={
          <>
          <NavBar />
          <Home />

          </>} />
          <Route path="/game" element={
          <>
          <NavBar />
          <Game />

          </>} />
        </Routes>
    </Router>
    <ToastContainer></ToastContainer>
    </>
  )
}

export default App
