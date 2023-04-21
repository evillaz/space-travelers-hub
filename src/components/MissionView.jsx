import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import MissionsTable from './MissionsTable';
import { getMissions } from '../Redux/missions/missionsSlice';

const MissionView = () => {
  const { missions } = useSelector((store) => store.missions);
  const dispatch = useDispatch();
  useEffect(() => {
    if (missions.length === 0) {
      dispatch(getMissions());
    }
  }, [missions.length, dispatch]);

  return (
    <>
      <MissionsTable />
    </>
  );
};

export default MissionView;
