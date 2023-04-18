import { useDispatch, useSelector } from 'react-redux';
import './style.css';
import { useEffect } from 'react';
import { rocketItems } from './Redux/RocketsSlice/RocketSlice';

const Rockets = () => {
  const { RocketDatile } = useSelector((store) => store.rocket);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(rocketItems());
  }, [dispatch]);

  return (
    <div className="rocket-container">
      {RocketDatile.map((item) => (
        <div className="rocket-items" key={item.rocket_id}>
          <img src={item.flickr_images[0]} alt="Rocket" />
          <ul className="rocket-detail">
            <li><h2 className="rocket-name">{item.rocket_name}</h2></li>
            <li><p className="rocket-des">{item.description}</p></li>
            <li><button type="button" className="reserve-bttn">reserve rocket</button></li>
          </ul>
        </div>
      ))}

    </div>
  );
};

export default Rockets;
