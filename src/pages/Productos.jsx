import { Link, Outlet } from "react-router-dom";
const Productos = () => {
  return (
    <div className="container">
    <h2>Productos</h2>
    <nav className="hombre-mujer">
      <Link to="hombre">Hombre</Link>
      <br />
      <Link to="mujer">Mujer</Link>
      <Outlet />
      </nav>
  
    </div>
  )
}

export default Productos
