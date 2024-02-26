import { Container, Nav, Navbar } from "react-bootstrap"
import logo from  '../../assets/logo.png'
import { Link } from "react-router-dom"
const NavBar = () => {
  return (
    <Navbar expand="lg" className="bg-navbar  rounded shadow-lg d-flex justify-content-around position-absolute " style={{top:"10%", left:"8%", width:"85%", zIndex:"2"}}>
      <picture className="logo-brand ms-5">
        <img src={logo} alt="" />
      </picture>
      <Container className="w-75 m-0 ms-4">
        <Navbar.Toggle aria-controls="basic-navbar-nav text-white bg-white" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="inicio" className="text-white mx-3 link-effect p-2"><span>Inicio</span></Link>
            <Link to="nosotros" className="text-white mx-3 link-effect p-2"><span>Nosotros</span></Link>
            <Nav.Link href="#link" className="text-white mx-3 link-effect"><span>Visión y Misión</span></Nav.Link>
            <Nav.Link href="#link" className="text-white mx-3 link-effect"><span>Servicios</span></Nav.Link>
            <Nav.Link href="#link" className="text-white mx-3 link-effect"><span>Contacto</span></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar