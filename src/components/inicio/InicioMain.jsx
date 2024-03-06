import Header from '../shared/Header'
import InfoInicio from './InfoInicio'
import CardWall from './CardWall'
import CardsServices from './CardsServices'
import Anuncio from './Anuncio'
import Contactanos from '../shared/Contactanos'
import Footer from '../shared/Footer'
const InicioMain = () => {
  return (
    <div className='container-landing w-100'>
      <div className='w-100 wall'>
        <div style={{position:"relative" , zIndex:"9" , paddingTop:"150px" , height:"100%"}}>
          <Header/>
          <InfoInicio/>
          <CardWall/>
        </div>
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