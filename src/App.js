import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getMissions } from './Redux/missions/missionsSlice';
import Layout from './components/Layout';
import Rockets from './routes/Rockets';
import Missions from './routes/Missions';
import Profile from './routes/Profile';
import './styles/style.css';
import { rocketItems } from './Redux/RocketsSlice/RocketSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(rocketItems());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getMissions());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Profile />} />
          <Route path="missions" element={<Missions />} />
          <Route path="rockets" element={<Rockets />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
