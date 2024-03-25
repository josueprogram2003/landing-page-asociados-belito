import ida from '../../assets/idaBG.png'
const PerfilFundation = () => {
  return (
    <div className="bg-white py-5 row d-flex align-items-center justify-content-center flex-column flex-md-row m-0" >
      <div className='col-10 col-lg-3 d-flex justify-content-center justify-content-lg-evenly' data-aos="flip-up">
        <div className='container-rounded'>
          <div className='container-profile'>
            <img src={ida} alt="" className='image-profile' /> 
          </div>
        </div>
      </div>
      <div className='col-10 col-lg-6 ms-0 ms-lg-5 mt-5 mt-lg-0'>
        <h1 className='color-primary fw-bold fs-1 name'>Ida Belito</h1>
        <p className='color-primary fw-bold fst-italic fs-5'>Fundadora y CEO  de Estudio Jurídico Belito & Asociados</p>
        <p className='color-primary fs-5'>De profesión abogada especialista en Derecho Notarial, Derecho Registral, Derecho Inmobiliario y Derecho corporativo, con más de 10 años de servicio en diversas notarías, empresas, estudios jurídicos, brindando asesoría legal y respaldo jurídico en el ámbito civil, administrativo y conciliatorio.</p>
      </div>
    </div>
  )
}

export default PerfilFundation