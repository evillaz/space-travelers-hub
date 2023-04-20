import { useDispatch, useSelector } from 'react-redux';
import { joinMission, leaveMission } from '../Redux/missions/missionsSlice';

const MissionsList = () => {
  const { missions } = useSelector((store) => store.missions);
  const dispatch = useDispatch();

  return (
    <>
      {missions.map((mission) => (
        <tr className="mission-item" key={mission.mission_id}>
          <td className="mission-name">{mission.mission_name}</td>
          <td className="mission-description">{mission.description}</td>
          {!mission.reserved && (
          <>
            <td className="badge-wrapper">
              <button type="button" className="mission-badge">
                NOT A MEMBER
              </button>
            </td>
            <td className="button-wrapper">
              <button className="mission-button" type="button" onClick={() => dispatch(joinMission(mission.mission_id))}>
                Join mission
              </button>
            </td>
          </>
          )}
          {mission.reserved && (
          <>
            <td className="badge-wrapper">
              <button type="button" className="mission-badge reserved">
                Active Member
              </button>
            </td>
            <td className="button-wrapper">
              <button className="mission-button reserved" type="button" onClick={() => dispatch(leaveMission(mission.mission_id))}>
                Leave mission
              </button>
            </td>
          </>
          )}
        </tr>
      ))}
    </>
  );
};

export default MissionsList;
