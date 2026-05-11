import { Link, Outlet } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">Inicio</Link>
      <Link to="/productos">Productos</Link>
      <Link to="/contacto">Contacto</Link>
    </nav>
  );
};

export default Navbar
