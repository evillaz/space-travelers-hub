import MissionsList from './MissionsList';

const MissionsTable = () => {
  const head = ['Mission', 'Description', 'Status', ''];
  return (
    <table className="missions-display">
      <thead className="missions-header">
        <tr>
          {head.map((title) => (
            <th className={title} key={title}>{title}</th>
          ))}
        </tr>
      </thead>
      <tbody className="missions-list">
        <MissionsList />
      </tbody>
    </table>
  );
};

export default MissionsTable;
