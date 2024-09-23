import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap"
import logo from  '../../assets/logo.png'
import pdf from '../../assets/prueba.pdf'
import { Link } from "react-router-dom"
const NavBar = () => {

  return (
    <Navbar expand="lg" className="bg-navbar  rounded shadow-lg d-flex justify-content-around position-absolute flex-row flex-nowrap" style={{top:"10%", left:"8%", width:"85%", zIndex:"10"}}>
      <picture className="logo-brand ms-5">
        <img src={logo} alt="" />
      </picture>
      <Container className="w-75 m-0 ms-4">
        <Navbar.Toggle aria-controls="basic-navbar-nav text-white bg-white" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="inicio" className="text-white mx-3 link-effect p-2"><span>Inicio</span></Link>
            <Link to="nosotros" className="text-white mx-3 link-effect p-2"><span>Nosotros</span></Link>
            <Link to="vision-mision" className="text-white mx-3 link-effect p-2"><span>Visión y Misión</span></Link>
            <NavDropdown title="Servicios" className="text-white">
            <Link to="servicio-civil" className="text-dark mx-3 link-effect p-2 d-block">Derecho Civil</Link>
            <Link to="servicio-penal" className="text-dark  link-effect mx-3 p-2 d-block">Derecho Penal</Link>
            <Link to="servicio-notarial" className="text-dark mx-3 link-effect p-2 d-block">Derecho Notarial</Link>
            <Link to="servicio-registral" className="text-dark mx-3 link-effect p-2 d-block">Derecho Registral</Link>
            <Link to="servicio-corporativo" className="text-dark mx-3 link-effect p-2 d-block">Derecho Corporativo</Link>
            <Link to="servicio-inmobiliario" className="text-dark mx-3 link-effect p-2 d-block">Derecho Inmobiliario</Link>  
            </NavDropdown>
            <Link to="contacto" className="text-white mx-3 link-effect p-2"><span>Contacto</span></Link>
            <a href={pdf} download  className="text-white mx-3 link--button py-2 px-4"><span> <i className="fa-solid fa-download me-3"></i> Brochure</span></a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar