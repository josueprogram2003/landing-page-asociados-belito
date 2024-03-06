import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div className="d-flex flex-column" style={{marginTop:"140px"}}> 
      <div className="px-3 py-4 border-golden">
        <header className="pe-5">
          <h1 className="text-white text-uppercase fw-bold">Estudio Jurídico</h1>
          <h1 className="text-white text-uppercase fw-bold"><span className="title--golden">Belito</span> & <span className="title--golden">Asociados</span></h1>
        </header>
      </div>
      <div className="info-inicio">
        <Link to="/contacto" className="link-button  text-white fw-bold mt-5" style={{backgroundColor:"#AA8646",padding:"0.7rem 2rem"}}>
        Contactanos 
          <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon-sm">
            <path d="M0.499999 8.71952L12.3083 8.71952L9.325 13.0605L10.5 14.7655L15.5 7.51033L10.5 0.255155L9.325 1.96012L12.3083 6.30113L0.499999 6.30113L0.499999 8.71952Z" fill="white"/>
          </svg>
        </Link> 
      </div>
    </div>
  )
}

export default Header