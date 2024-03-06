import HeaderNosotros from "../nosotros/HeaderNosotros"
import BodyServicios from "./BodyServicios";
import Contactanos from "../shared/Contactanos";
import Footer from "../shared/Footer";
// eslint-disable-next-line react/prop-types
const Servicio = ({info}) => {
    return (
      <div className='container-landing'>
        <div className='w-100 nosotros-effect'>
         <HeaderNosotros/>
        </div>
        <BodyServicios info={info}/>
        <Contactanos/>
        <Footer/>
      </div>
    )
  }
  
  export default Servicio