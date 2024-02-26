import { Route, Routes } from "react-router-dom"
import NavBar from "../components/shared/NavBar"
import InicioMain from "../components/inicio/InicioMain"
import ContactoMain from "../components/contacto/ContactoMain"
import Nosotros from "../components/nosotros/nosotros"
import MisionVision from "../components/mision-vision/MisionVision"
import Servicio from "../components/servicios/Servicio"

const RouteLanding = () => {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path="/inicio" element={<InicioMain/>}>       
        </Route>
        <Route path="/nosotros" element={<Nosotros/>}>       
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