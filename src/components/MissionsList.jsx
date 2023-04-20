import { useSelector } from 'react-redux';
import '../styles/style.css';

const MissionsList = () => {
  const { missions } = useSelector((store) => store.missions);

  return (
    <>
      {missions.map((mission) => (
        <tr key={mission.mission_id}>
          <td className="mission-tab">{mission.mission_name}</td>
          <td className="mission-des">{mission.description}</td>
          <td><button type="button" className="memeber-status">not a memeber</button></td>
          <td>
            <button type="button" className="join-bttn">
              join mission
            </button>
          </td>
        </tr>
      ))}
    </>
  );
};

export default MissionsList;
