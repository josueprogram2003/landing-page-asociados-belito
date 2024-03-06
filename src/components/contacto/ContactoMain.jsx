import imagen from '../../assets/wallpaper.jpg';
import HeaderNosotros from "../nosotros/HeaderNosotros";
import Footer from '../shared/Footer';
import FormContacto from './FormContacto';

const ContactoMain = () => {
  return (
    <div className='container-landing'>
      <div className='w-100 nosotros-effect'>
       <img className='wallpaper' src={imagen} alt="wallpaper" />
      </div>
      <div className='px-lg-5 px-4 pt-5 w-100'  style={{position:"absolute", top:"0", left:"0", zIndex:"3"}} >
         <HeaderNosotros/>
      </div> 
      <FormContacto/>
      <Footer/>
     </div>
  )
}

export default ContactoMain