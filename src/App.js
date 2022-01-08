import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Screens/Home/Home';
import { ContentFull } from './Screens/Content/ContentFull';
import './App.css'
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/content" element={<ContentFull />} />
    </Routes>
  );
}

export default App;
