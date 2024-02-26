import { Route, Routes } from "react-router-dom"
import NavBar from "../components/shared/NavBar"
import InicioMain from "../components/inicio/InicioMain"
import ContactoMain from "../components/contacto/ContactoMain"

const RouteLanding = () => {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path="/inicio" element={<InicioMain/>}>       
        </Route>
        <Route path="/nosotros" element={<ContactoMain/>}>       
        </Route>
      </Routes>
    </div>
  )
}

export default RouteLanding