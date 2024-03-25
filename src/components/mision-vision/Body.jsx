const Body = () => {
  return (
    <section className="row flex-column align-items-center m-0 py-5" data-aos="zoom-in-up">
      <header className="col-12 col-md-6 my-5 d-flex align-items-center justify-content-around" style={{position:"relative"}}>
        <div className="container-iconmision mx-2">
          <svg width="40" height="40" viewBox="0 0 58 70" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M29 0.166626L0.5 12.8333V31.8333C0.5 49.4083 12.66 65.8433 29 69.8333C45.34 65.8433 57.5 49.4083 57.5 31.8333V12.8333L29 0.166626ZM22.6667 50.8333L10 38.1666L14.465 33.7016L22.6667 41.8716L43.535 21.0033L48 25.5L22.6667 50.8333Z" fill="#2C3941"/>
          </svg>
        </div>
        <h3 className="text-uppercase fs-2 fw-bold color-primary text-center title-body  ms-md-0">¿Por qué elegirnos? </h3>
      </header>
      <main className="col-10 col-md-6 py-5 px-lg-5 px-4 mb-5" style={{borderLeft:"4px solid #98722E"}}>
        <p className="color-primary text-body-main">
        Contamos con una amplia experiencia en rubro notarial, registral, inmobiliario coporativo y administrativo. Asimismo, absolvemos consultas legales, redacción de minutos, redacción de contratos, redacción de documentos administrativos, redacción de actas juntas general, directorio, asambleas para todo tipo de empresas, entre otros. Además, brindamos respaldo legal en el derecho administrativo y proceso conciliatorio.
        </p>
        <p className="color-primary text-body-main">
        Hemos   asesorado a más de 2000 clientes en el sector industrial, transporte, comercio, textil, alimentario, salud, agrario y servicios generales, desde la constitución de empresas, modificaciones de estatuto y reorganización de sociedad con la finalidad de seguir creando alianzas estratégicas comerciales en los emprendimientos peruanos. 
        </p>
      </main>
    </section>
  )
}

export default Body