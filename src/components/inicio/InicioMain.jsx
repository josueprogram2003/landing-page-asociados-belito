import Header from '../shared/Header'
import InfoInicio from './InfoInicio'
import CardWall from './CardWall'
import CardsServices from './CardsServices'
import Anuncio from './Anuncio'
import Contactanos from '../shared/Contactanos'
import Footer from '../shared/Footer'
import imagen from '../../assets/wallpaper.jpg';
const InicioMain = () => {
  return (
    <div className='container-landing w-100'>
      <div className='w-100 wall'>
        <img className='wallpaper' src={imagen} alt="wallpaper" />
      </div>
      <div className='p-3 px-lg-5 pt-5' style={{position:"absolute", top:"0", left:"0"}}>
        <Header/>
        <InfoInicio/>
        <CardWall/>
      </div>
       <div className='main-inicio'>
       <CardsServices/>
        <Anuncio/>
        <Contactanos/>
        <Footer/>
       </div>
    </div>
  )
}

export default InicioMain