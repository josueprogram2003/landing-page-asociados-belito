import anuncio from '../../assets/celular.png'

const Contactanos = () => {
  return (
    <section className='d-flex justify-content-center align-items-center bg-contact' >
      <div className='contact__image'>
        <img src={anuncio} alt="celular" />
      </div>
      <div className='contact__form'>
        <form className='py-3 px-2'>
          <div>
            <h3 className='text-uppercase text-center fs-1 text-customise fw-bolder'>Contactanos</h3>
            <p className='text-center fs-5 text-customise'>Si tienes alguna consulta, déjanos tus datos para poder contactarnos</p>
          </div>
          <section className='w-100 d-flex flex-column align-items-center'>
            <div className='w-50 mb-4'>
                <input type="text" placeholder='Ingrese Nombre Completo' className='w-100 p-2 bg-white border border-0 shadow-sm ' />
            </div>
            <div className='w-50 mb-4'>
                <input type="email" placeholder='Ingrese Email' className='w-100 p-2 bg-white border border-0 shadow-sm '/>
            </div>
            <div className='w-50 mb-4'>
                <textarea name="caso" id="caso" cols="20" rows="5" placeholder='Ingrese su Caso' className='w-100 p-2 bg-white border border-0 shadow-sm '></textarea>
            </div>
            <div className='w-50'>
              <input type='submit' className='w-100 p-2 text-white border border-0 shadow-sm ' value={"Enviar"}/>
            </div>
          </section>
        </form>
      </div>
    </section>
  )
}

export default Contactanos