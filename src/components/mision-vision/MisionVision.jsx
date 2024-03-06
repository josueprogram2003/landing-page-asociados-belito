import imagen from '../../assets/wallpaper.jpg';
import HeaderNosotros from '../nosotros/HeaderNosotros';
import Contactanos from '../shared/Contactanos';
import Footer from '../shared/Footer';
import Body from './Body';
import TextMisionVision from './TextMisionVision';
const MisionVision = () => {
    return (
      <div className='container-landing'>
      <div className='w-100 nosotros-effect'>
       <img className='wallpaper' src={imagen} alt="wallpaper" />
      </div>
      <div className='px-lg-5 px-4 pt-5 w-100'  style={{position:"absolute", top:"0", left:"0", zIndex:"3"}} >
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