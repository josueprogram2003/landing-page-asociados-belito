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