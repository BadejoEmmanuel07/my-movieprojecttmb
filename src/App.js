import React from 'react';
import './App.css';
import Main from './component/Main'; 
import Trailer from './component/Trailer'; 

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        {/* Update the route for Trailer to include a movie ID parameter */}
        <Route path="/Trailer/:movieId" element={<Trailer />} />
      </Routes>
    </Router>
  );
}

export default App;


