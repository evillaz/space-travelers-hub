import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HeaderBar from './components/HeaderBar';
import Rockets from './components/Rockets';
import Missions from './components/Missions';
import Profile from './components/Profile';
import './components/style.css';

function App() {
  return (
    <>
      <HeaderBar />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
