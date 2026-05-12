import { Routes, Route } from 'react-router-dom';
import './App.css'
import Header from './Components/Header'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

import Inicio from "./pages/Inicio";
import Productos from "./pages/Productos";
import Hombre from "./pages/Hombre";
import Mujer from "./pages/Mujer";
import Contacto from "./pages/Contacto";



const App = () => {
  return (
    <>
      <Header/>
      <Navbar/>
      <Routes>

        <Route path="/inicio" element={<Inicio />} />

        <Route path="/productos" element={<Productos />}>

          <Route path="hombre" element={<Hombre />} />

          <Route path="mujer" element={<Mujer />} />

        </Route>

        <Route path="/contacto" element={<Contacto />} />

        </Routes>



      <Footer/>

    </>
  )
}

export default App
