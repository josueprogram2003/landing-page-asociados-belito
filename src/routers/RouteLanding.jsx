import { Route, Routes } from "react-router-dom"
import NavBar from "../components/shared/NavBar"
import InicioMain from "../components/inicio/InicioMain"
import ContactoMain from "../components/contacto/ContactoMain"
import NosotrosMain from "../components/nosotros/NosotrosMain"
import Servicio from "../components/servicios/Servicio"
import MisionVision from '../components/mision-vision/MisionVision'

const RouteLanding = () => {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path="/inicio" element={<InicioMain/>}>       
        </Route>
        <Route path="/nosotros" element={<NosotrosMain/>}>       
        </Route>
        <Route path="/vision-mision" element={<MisionVision/>}>       
        </Route>
        <Route path="/servicio" element={<Servicio/>}>       
        </Route>
        <Route path="/contacto" element={<ContactoMain/>}>       
        </Route>
      </Routes>
    </div>
  )
}

export default RouteLanding