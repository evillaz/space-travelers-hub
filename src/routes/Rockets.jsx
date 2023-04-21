import { useDispatch, useSelector } from 'react-redux';
import '../styles/style.css';
import { reserveActive, cancelReserve } from '../Redux/RocketsSlice/RocketSlice';

const Rockets = () => {
  const { RocketDatile } = useSelector((store) => store.rocket);
  const dispatch = useDispatch();

  return (
    <div className="rocket-container">
      {RocketDatile.map((item) => (
        <div className="rocket-items" key={item.id}>
          <img src={item.image} alt={item.name} />
          <ul className="rocket-detail">
            <li><h2 className="rocket-name">{item.name}</h2></li>

            <li>
              {item.reserved && (
              <span className="reserve-active">Reserved</span>
              )}
              <p className="rocket-des">{item.description}</p>
            </li>

            {item.reserved && (
              <button
                type="button"
                onClick={() => dispatch(cancelReserve(item.id))}
                className="cancle-reserve"
              >

                cancel Reservation
              </button>
            )}
            {!item.reserved && (
              <button
                type="button"
                onClick={() => dispatch(reserveActive(item.id))}
                className="reserve-bttn"
              >
                Reserve Rocket
              </button>
            )}
          </ul>
        </div>
      ))}

    </div>
  );
};

export default Rockets;
