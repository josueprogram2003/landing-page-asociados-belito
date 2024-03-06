import HeaderNosotros from '../nosotros/HeaderNosotros';
import Contactanos from '../shared/Contactanos';
import Footer from '../shared/Footer';
import Body from './Body';
import TextMisionVision from './TextMisionVision';
const MisionVision = () => {
    return (
      <div className='container-landing'>
      <div className='w-100 nosotros-effect'>
          <HeaderNosotros/>
      </div>
       <TextMisionVision/>
       <Body/>
       <Contactanos/>
       <Footer/>
     </div>
    )
  }
  
  export default MisionVision