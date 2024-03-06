import imagen from '../../assets/wallpaper.jpg';
import Asesoria from './Asesoria';
import HeaderNosotros from "./HeaderNosotros";
import ServiciosNosotros from './ServiciosNosotros';
import PerfilFundation from './PerfilFundation';
import Contactanos from '../../components/shared/Contactanos'
import Footer from '../shared/Footer';

const NosotrosMain = () => {
    return (
     <div className='container-landing'>
      <div className='w-100 nosotros-effect'>
       <img className='wallpaper' src={imagen} alt="wallpaper" />
      </div>
      <div className='px-lg-5 px-4 pt-5 w-100'  style={{position:"absolute", top:"0", left:"0", zIndex:"3"}} >
         <HeaderNosotros/>
      </div> 
       <ServiciosNosotros/> 
       <Asesoria/>
      <PerfilFundation/>
      <Contactanos/>
      <Footer/>
     </div>
    )
  }
  
export default NosotrosMain