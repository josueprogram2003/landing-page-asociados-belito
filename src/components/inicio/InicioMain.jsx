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
    <div className='container-landing '>
      <picture className='w-100 wall'>
        <img className='wallpaper' src={imagen} alt="wallpaper" />
      </picture>
      <div className='px-5 pt-5'>
        <Header/>
        <InfoInicio/>
        <CardWall/>
      </div>
        <CardsServices/>
        <Anuncio/>
        <Contactanos/>
        <Footer/>
    </div>
  )
}

export default InicioMain