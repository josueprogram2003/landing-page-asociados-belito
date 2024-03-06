import HeaderNosotros from "../nosotros/HeaderNosotros";
import Footer from '../shared/Footer';
import FormContacto from './FormContacto';

const ContactoMain = () => {
  return (
    <div className='container-landing'>
      <div className='w-100 nosotros-effect'>
         <HeaderNosotros/>
      </div>
      <FormContacto/>
      <Footer/>
     </div>
  )
}

export default ContactoMain