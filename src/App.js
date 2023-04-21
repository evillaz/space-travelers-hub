import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
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

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="profile" element={<Profile />} />
          <Route path="missions" element={<Missions />} />
          <Route path="/" element={<Rockets />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
