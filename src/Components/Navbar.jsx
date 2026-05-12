import {Link} from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/inicio">Inicio</Link>
      <Link to="/productos">Productos</Link>
      <Link to="/contacto">Contacto</Link>
    </nav>
  );
};

export default Navbar
