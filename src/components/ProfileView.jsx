import { useSelector } from 'react-redux';

const ProfileView = () => {
  const RocketData = useSelector((state) => state.rocket.RocketDatile.filter((item) => {
    if (item.reserved) {
      return true;
    }
    return false;
  }));

  return (
    <div className="profile-container">
      <div className="my-subtab">
        <h3 className="profile-heading">My Missions</h3>

      </div>
      <div className="my-subtab">
        <h3 className="profile-heading">My Rockets</h3>
        <ul className="rocket-list">
          {RocketData.length > 0 ? (
            RocketData.map((item) => (
              <li className="rocketList-item" key={item.id}>{item.name}</li>
            ))
          ) : (
            <li className="rocketList-item" style={{ border: 'none' }}>not rocket yet</li>
          )}

        </ul>

      </div>
    </div>

  );
};

export default ProfileView;
