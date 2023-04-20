import { useSelector } from 'react-redux';

const MissionsList = () => {
  const { missions } = useSelector((store) => store.missions);

  return (
    <>
      {missions.map((mission) => (
        <tr key={mission.mission_id}>
          <td>{mission.mission_name}</td>
          <td>{mission.description}</td>
          <td>status</td>
          <td>
            <button type="button">
              Join mission
            </button>
          </td>
        </tr>
      ))}
    </>
  );
};

export default MissionsList;
