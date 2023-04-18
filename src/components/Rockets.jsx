import { useSelector } from 'react-redux';
import './style.css';

const Rockets = () => {
  const { RocketDatile } = useSelector((store) => store.rocket);
  return (
    <div className="rocket-container">
      {RocketDatile.map((item) => (
        <div className="rocket-items" key={item.name}>
          <img src={item.image} alt="Rocket" />
          <ul className="rocket-detail">
            <li><h2 className="rocket-name">{item.name}</h2></li>
            <li><p className="rocket-des">{item.des}</p></li>
            <li><button type="button" className="reserve-bttn">reserve rocket</button></li>
          </ul>
        </div>
      ))}

    </div>
  );
};

export default Rockets;
