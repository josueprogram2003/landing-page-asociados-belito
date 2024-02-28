import Header from "../shared/Header"
import imagen from '../../assets/wallpaper.jpg';

const ContactoMain = () => {
  return (
    <div className='container-landing '>
    <picture className='w-100 wall'>
      <img className='wallpaper' src={imagen} alt="wallpaper" />
    </picture>
    <div className='px-5 pt-5'>
      <Header/>
    </div>
  </div>
  )
}

export default ContactoMain