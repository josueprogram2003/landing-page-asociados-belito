import civil from '../../assets/civil.jpg'
//import objetivo from '../../assets/objetivo.svg'

const Asesoria = () => {

  return (
    <div>
      <div className="w-100 curve" style={{zIndex:"-1" }}>
      <div style={{ height: '150px', overflow: 'hidden' }}>
        <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: '100%', width: '100%' }}>
          <path d="M-1.46,22.14 C391.87,145.16 332.05,-16.23 504.73,34.93 L500.00,149.60 L-0.00,149.60 Z" style={{ stroke: 'none', fill: '#2C3941' }} />
        </svg>
      </div>
      </div>
      <section className="container-asesoria p-5">
        <article className="d-flex flex-column flex-lg-row">
          <div className='w-100 w-lg-50 d-flex flex-column align-items-start ' data-aos="flip-right">
            <h3 className="text-white fs-1 title-asesoria">Asesoría especializada</h3>
            <div className='w-lg-75 w-100'>
              <p className="text-white fs-5 mt-5" style={{textAlign:"justify"}}>
              Hemos   asesorado a más de 2,000 clientes en el sector industrial, transporte, comercio, textil, alimentario, salud, agrario y servicios generales, desde la constitución de empresas, modificaciones de estatuto y reorganización de sociedad con la finalidad de seguir creando alianzas estratégicas comerciales en los emprendimientos peruanos. 
              </p>
            </div>
          </div>
          <div className='w-100 ms-lg-5 ms-0 d-none d-md-block' style={{height:"400px"}} data-aos="flip-right">
            <img src={civil} alt="" />
          </div>
        </article>
      </section>
      <div style={{backgroundColor:"#2C3941"}} className=' row d-flex pt-5 justify-content-evenly card-asesoria flex-column flex-lg-row w-100 m-0' >
        <div className='bg-white col-lg-3 col-10 p-5 shadow mx-auto mb-5 m-md-0' data-aos="flip-right">
          <header className='text-center'>
              {/* icon */}
              <svg enableBackground="new 0 0 30 30" height="80px" id="Capa_1" version="1.1" viewBox="0 0 30 30" width="80px" ><path d="M23,12.7c-0.4,0.1-0.6,0.6-0.4,1c0.5,1.2,0.7,2.5,0.7,3.8c0,6-4.9,10.8-10.8,10.8S1.7,23.5,1.7,17.5  S6.5,6.7,12.5,6.7c1.1,0,2.3,0.2,3.4,0.5c0.4,0.1,0.8-0.1,0.9-0.5c0.1-0.4-0.1-0.8-0.5-0.9c-1.2-0.4-2.5-0.6-3.8-0.6  c-6.8,0-12.3,5.5-12.3,12.3s5.5,12.3,12.3,12.3s12.3-5.5,12.3-12.3c0-1.5-0.3-3-0.8-4.4C23.9,12.8,23.4,12.6,23,12.7z M12.5,15  c0.4,0,0.8-0.3,0.8-0.8s-0.3-0.8-0.8-0.8c-2.2,0-4,1.8-4,4c0,2.2,1.8,4,4,4s4-1.8,4-4c0-0.4-0.3-0.8-0.8-0.8S15,17.1,15,17.5  c0,1.4-1.1,2.5-2.5,2.5S10,18.9,10,17.5C10,16.1,11.1,15,12.5,15z M16.2,11.1c0.2-0.4,0-0.8-0.4-1c-1-0.5-2.2-0.7-3.3-0.7  C8,9.4,4.3,13,4.3,17.5s3.7,8.2,8.2,8.2s8.2-3.7,8.2-8.2c0-1.2-0.2-2.3-0.7-3.3c-0.2-0.4-0.6-0.6-1-0.4c-0.4,0.2-0.5,0.6-0.4,1  c0.4,0.9,0.6,1.8,0.6,2.7c0,3.7-3,6.7-6.7,6.7s-6.7-3-6.7-6.7s3-6.7,6.7-6.7c1,0,1.9,0.2,2.7,0.6C15.6,11.6,16,11.4,16.2,11.1z   M29.8,6.1c-0.1-0.3-0.3-0.5-0.6-0.5l-4.1-0.7l-0.7-4.1c0-0.3-0.2-0.5-0.5-0.6c-0.3-0.1-0.6,0-0.8,0.2l-4.9,4.9  c-0.2,0.2-0.3,0.4-0.2,0.7l0.8,4.2l-6.3,6.3c0,0-0.1,0-0.1,0c-0.6,0-1.1,0.5-1.1,1.1s0.5,1.1,1.1,1.1c0.6,0,1.1-0.5,1.1-1.1  c0,0,0,0,0,0l6.4-6.4l4.1,0.8c0,0,0.1,0,0.1,0c0.2,0,0.4-0.1,0.5-0.2l4.9-4.9C29.8,6.7,29.9,6.4,29.8,6.1z M19.6,6l3.6-3.6l0.5,2.8  l-3.5,3.5L19.6,6z M24,10.4l-2.7-0.5l3.5-3.5l2.7,0.5L24,10.4z" fill="#2C3941"/></svg>
              <div className='w-100'>
                <h4 style={{textAlign:"left"}} className='mt-5 color-primary fw-bold fs-2'>Objetivo</h4>
              </div>
            </header>
            <main>
              <p className='color-primary fs-5 mt-5' style={{textAlign:"justify"}}>
              Brindar soporte legal de calidad a empresas y personas en diversos proyectos innovadores a un costo flexible y menor tiempo de ejecución.
              </p>
            </main>
        </div>
        <div className='bg-white col-lg-3 col-10 p-5 shadow mx-auto mb-5 m-md-0' data-aos="flip-right">
          <header className='text-center'>
              {/* icon */}
              <svg width="85" height="85" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z" fill="#2C3941"/>
              </svg>

              <div className='w-100'>
                <h4 style={{textAlign:"left"}} className='mt-5 color-primary fw-bold fs-2'>Experiencia</h4>
              </div>
            </header>
            <main>
              <p className='color-primary fs-5 mt-5' style={{textAlign:"justify"}}>
              Contamos con más de 10 años de experiencia en diversas áreas del sector civil, penal y administrativo.
              </p>
            </main>
        </div>
        <div className='bg-white col-lg-3 col-10 p-5 shadow mx-auto m-md-0' data-aos="flip-right">
          <header className='text-center'>
              {/* icon */}
              <svg width="85" height="85" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.222 19.8559C12.042 20.0359 11.722 20.0659 11.512 19.8559C11.332 19.6759 11.302 19.3559 11.512 19.1459L14.902 15.7559L13.492 14.3459L10.102 17.7359C9.91205 17.9359 9.59204 17.9259 9.39205 17.7359C9.18204 17.5259 9.21204 17.2059 9.39205 17.0259L12.782 13.6359L11.372 12.2259L7.98205 15.6159C7.80205 15.7959 7.48205 15.8259 7.27205 15.6159C7.08205 15.4259 7.08205 15.1059 7.27205 14.9059L10.662 11.5159L9.24204 10.1059L5.85205 13.4959C5.67205 13.6759 5.35205 13.7059 5.14205 13.4959C4.95204 13.2959 4.95204 12.9859 5.14205 12.7859L9.52205 8.40586L11.392 10.2659C12.342 11.2159 13.982 11.2059 14.932 10.2659C15.912 9.28586 15.912 7.70586 14.932 6.72586L13.072 4.86586L13.352 4.58586C14.132 3.80586 15.402 3.80586 16.182 4.58586L20.422 8.82586C21.202 9.60586 21.202 10.8759 20.422 11.6559L12.222 19.8559ZM21.832 13.0759C23.392 11.5159 23.392 8.98586 21.832 7.41586L17.592 3.17586C16.032 1.61586 13.502 1.61586 11.932 3.17586L11.652 3.45586L11.372 3.17586C9.81204 1.61586 7.28205 1.61586 5.71205 3.17586L2.17205 6.71586C0.752045 8.13586 0.622045 10.3459 1.77205 11.9059L3.22205 10.4559C2.83205 9.70586 2.96205 8.75586 3.59205 8.12586L7.13205 4.58586C7.91205 3.80586 9.18204 3.80586 9.96204 4.58586L13.522 8.14586C13.702 8.32586 13.732 8.64586 13.522 8.85586C13.312 9.06586 12.992 9.03586 12.812 8.85586L9.52205 5.57586L3.72205 11.3659C2.74205 12.3359 2.74205 13.9259 3.72205 14.9059C4.11205 15.2959 4.61205 15.5359 5.14205 15.6059C5.21205 16.1259 5.44205 16.6259 5.84205 17.0259C6.24205 17.4259 6.74205 17.6559 7.26205 17.7259C7.33205 18.2459 7.56205 18.7459 7.96205 19.1459C8.36205 19.5459 8.86204 19.7759 9.38204 19.8459C9.45204 20.3859 9.69204 20.8759 10.082 21.2659C10.552 21.7359 11.182 21.9959 11.852 21.9959C12.522 21.9959 13.152 21.7359 13.622 21.2659L21.832 13.0759Z" fill="#2C3941"/>
              </svg>

              <div className='w-100'>
                <h4 style={{textAlign:"left"}} className='mt-5 color-primary fw-bold fs-2'>Servicios</h4>
              </div>
            </header>
            <main>
              <p className='color-primary fs-5 m-0 mt-5' style={{textAlign:"justify"}}>
              Derecho Civil
              </p>
              <p className='color-primary fs-5 m-0' style={{textAlign:"justify"}}>
              Derecho Penal
              </p>
              <p className='color-primary fs-5 m-0' style={{textAlign:"justify"}}>
              Derecho Registral
              </p>
              <p className='color-primary fs-5 m-0' style={{textAlign:"justify"}}>
              Derecho Notarial
              </p>
              <p className='color-primary fs-5 m-0' style={{textAlign:"justify"}}>
              Derecho Inmobiliario
              </p>
              <p className='color-primary fs-5 m-0' style={{textAlign:"justify"}}>
              Derecho Corporativo
              </p>
            </main>
        </div>
      </div>
    </div>
  )
}

export default Asesoria