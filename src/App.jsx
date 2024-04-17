// App.js
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StoriesList from './components/StoryList';
import StoryDetails from './components/StoryDetails';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StoriesList />} />
        <Route path="/story/:id" element={<StoryDetails />} />
      </Routes>
    </Router>
  );
}

export default App;