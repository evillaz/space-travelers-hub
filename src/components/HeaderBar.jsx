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
        <li className="list-item"><NavLink to="/" style={{ color: '#000' }}>rockets</NavLink></li>
        <li className="list-item"><NavLink to="missions" style={{ color: '#000' }}>missions</NavLink></li>
        <li className="list-item"><NavLink to="profile" style={{ color: '#000' }}>my profile</NavLink></li>
      </ul>
    </nav>
  </div>
);

export default HeaderBar;
