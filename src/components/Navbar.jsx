import { NavLink } from 'react-router-dom';
import '../assets/Navbar.css';
import logo from '../assets/AR.png'; // Adjust the path to your logo

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <NavLink to="/">
          <img src={logo} alt="AR Logo" />
        </NavLink>
      </div>
      <div className="navbar-links">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/portfolio">Portfolio</NavLink>
      </div>
    </nav>
  );
}