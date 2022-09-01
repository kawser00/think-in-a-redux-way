import React from 'react';
import Footer from './components/layouts/Footer';
import Navbar from './components/layouts/Navbar';
import Home from './pages/Home';
import Video from './pages/Video';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/videos/:videoId" element={<Video />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
