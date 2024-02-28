import imagen from '../../assets/wallpaper.jpg';
import Asesoria from './Asesoria';
import HeaderNosotros from "./HeaderNosotros";
import ServiciosNosotros from './ServiciosNosotros';
import PerfilFundation from './PerfilFundation';

const NosotrosMain = () => {
    return (
     <div className='container-landing'>
      <div className='w-100 nosotros-effect'>
       <img className='wallpaper' src={imagen} alt="wallpaper" />
      </div>
      <div className='px-5 pt-5'  style={{position:"absolute", top:"0", left:"0", zIndex:"3"}} >
         <HeaderNosotros/>
      </div> 
       <ServiciosNosotros/> 
       <Asesoria/>
      <PerfilFundation/>
     </div>
    )
  }
  
export default NosotrosMain