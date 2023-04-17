import spaceLogo from './Images/planet.png';
import './style.css';

const HeaderBar = () => (
  <div className="header-bar">
    <div className="logo">
      <img src={spaceLogo} alt="Space Logo" />
      <h1>Space Travelers Hub</h1>
    </div>
    <nav className="nav-items">
      <ul>
        <li className="list-item">rockets</li>
        <li className="list-item">missions</li>
        <li className="list-item">my profile</li>
      </ul>
    </nav>
  </div>
);

export default HeaderBar;
