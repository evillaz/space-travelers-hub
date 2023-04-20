import { NavLink } from 'react-router-dom';
import spaceLogo from './Images/planet.png';
import '../styles/style.css';

const HeaderBar = () => (
  <div className="header-bar">
    <NavLink to="/" style={{ color: '#000' }}>
      <div className="logo">
        <img src={spaceLogo} alt="Space Logo" />
        <h1>Space Travelers Hub</h1>
      </div>
    </NavLink>
    <nav className="nav-items">
      <ul>
        <li className="list-item"><NavLink to="rockets" style={{ color: '#000' }}>Rockets</NavLink></li>
        <li className="list-item"><NavLink to="missions" style={{ color: '#000' }}>Missions</NavLink></li>
        <li className="list-item"><NavLink to="/" style={{ color: '#000' }}>My Profile</NavLink></li>
      </ul>
    </nav>
  </div>
);

export default HeaderBar;
