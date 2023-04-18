import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getMissions } from './Redux/missions/missionsSlice';
import Layout from './components/Layout';
import Rockets from './routes/Rockets';
import Missions from './routes/Missions';
import Profile from './routes/Profile';
import './styles/style.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMissions());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="rockets" element={<Rockets />} />
          <Route path="missions" element={<Missions />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
