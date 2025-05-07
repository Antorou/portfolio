import { NavLink } from 'react-router-dom';
import '../assets/Navbar.css'; // Make sure this path matches your folder structure

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">Antoine Rousselot</div>
      <div className="navbar-links">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/portfolio">Portfolio</NavLink>
      </div>
    </nav>
  );
}