import HeaderNosotros from "../nosotros/HeaderNosotros"
import imagen from '../../assets/wallpaper.jpg';
import BodyServicios from "./BodyServicios";
import Contactanos from "../shared/Contactanos";
import Footer from "../shared/Footer";
// eslint-disable-next-line react/prop-types
const Servicio = ({info}) => {
    return (
      <div className='container-landing'>
        <div className='w-100 nosotros-effect'>
          <img className='wallpaper' src={imagen} alt="wallpaper" />
        </div>
        <div className='px-lg-5 px-4 pt-5 w-100'  style={{position:"absolute", top:"0", left:"0", zIndex:"3"}} >
          <HeaderNosotros/>
        </div> 
        <BodyServicios info={info}/>
        <Contactanos/>
        <Footer/>
      </div>
    )
  }
  
  export default Servicio