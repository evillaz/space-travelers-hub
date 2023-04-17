import { Link } from 'react-router-dom';
import spaceLogo from './Images/planet.png';
import './style.css';

const HeaderBar = () => (
  <div className="header-bar">
    <Link to="/" style={{ color: '#000' }}>
      <div className="logo">
        <img src={spaceLogo} alt="Space Logo" />
        <h1>Space Travelers Hub</h1>
      </div>
    </Link>
    <nav className="nav-items">
      <ul>
        <li className="list-item"><Link to="/" style={{ color: '#000' }}>rockets</Link></li>
        <li className="list-item"><Link to="/missions" style={{ color: '#000' }}>missions</Link></li>
        <li className="list-item"><Link to="/profile" style={{ color: '#000' }}>my profile</Link></li>
      </ul>
    </nav>
  </div>
);

export default HeaderBar;
