import { Link } from "react-router-dom"

const CardWall = () => {
  return (
    <div className="d-flex flex-column flex-lg-row justify-content-center container-card-wall px-4 px-lg-0">
      <section className="bg-white p-4 p-lg-4 rounded card-wall shadow" data-aos="fade-up">
        <header className="d-flex justify-content-between">
          <p className="fw-bold fs-5">Nosotros</p>
          <picture>
            <svg width="28" height="26" viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M24.667 22.8448V0.238647H3.33366V22.8448H0.666992V25.6706H27.3337V22.8448H24.667ZM19.3337 8.71597H22.0003V11.5417H19.3337V8.71597ZM16.667 11.5417H6.00033V8.71597H16.667V11.5417ZM22.0003 5.89019H19.3337V3.06442H22.0003V5.89019ZM16.667 3.06442V5.89019H6.00033V3.06442H16.667ZM6.00033 22.8448V14.3675H16.667V16.939C16.067 17.3911 15.667 18.1258 15.667 18.9594C15.667 20.3299 16.707 21.4319 18.0003 21.4319C19.2937 21.4319 20.3337 20.3299 20.3337 18.9594C20.3337 18.1258 19.9337 17.377 19.3337 16.939V14.3675H22.0003V22.8448H6.00033Z" fill="#2C3941"/>
            </svg>
          </picture>
        </header>
        <main>
          <p className="describe-card">
            Brindamos soporte y defensa legal de calidad a empresas y personas naturales en diversos proyectos innovadores a un soto flexible y menor tiempo de ejecución.
          </p>
        </main>
        <footer className="d-flex justify-content-end">
          <picture>
            <Link to="/nosotros">
              <svg width="30" height="28" viewBox="0 0 30 28" fill="none" xmlns="http://www.w3.org/2000/svg"  className='icon-svg'>
                <path d="M16.4163 7.29083H13.583V12.5999H7.91634V15.2544H13.583V20.5634H16.4163V15.2544H22.083V12.5999H16.4163V7.29083ZM14.9997 0.654541C7.17967 0.654541 0.833008 6.60065 0.833008 13.9271C0.833008 21.2536 7.17967 27.1997 14.9997 27.1997C22.8197 27.1997 29.1663 21.2536 29.1663 13.9271C29.1663 6.60065 22.8197 0.654541 14.9997 0.654541ZM14.9997 24.5452C8.75217 24.5452 3.66634 19.7803 3.66634 13.9271C3.66634 8.07391 8.75217 3.30905 14.9997 3.30905C21.2472 3.30905 26.333 8.07391 26.333 13.9271C26.333 19.7803 21.2472 24.5452 14.9997 24.5452Z" fill="#2C3941"/>
              </svg>
            </Link>
          </picture>
        </footer>
      </section>
      <section className="bg-white p-4 rounded card-wall shadow" data-aos="fade-up">
        <header className="d-flex justify-content-between">
          <p className="fw-bold fs-5">Misión</p>
          <picture>
            <svg width="28" height="26" viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M24.667 22.8448V0.238647H3.33366V22.8448H0.666992V25.6706H27.3337V22.8448H24.667ZM19.3337 8.71597H22.0003V11.5417H19.3337V8.71597ZM16.667 11.5417H6.00033V8.71597H16.667V11.5417ZM22.0003 5.89019H19.3337V3.06442H22.0003V5.89019ZM16.667 3.06442V5.89019H6.00033V3.06442H16.667ZM6.00033 22.8448V14.3675H16.667V16.939C16.067 17.3911 15.667 18.1258 15.667 18.9594C15.667 20.3299 16.707 21.4319 18.0003 21.4319C19.2937 21.4319 20.3337 20.3299 20.3337 18.9594C20.3337 18.1258 19.9337 17.377 19.3337 16.939V14.3675H22.0003V22.8448H6.00033Z" fill="#2C3941"/>
            </svg>
          </picture>
        </header>
        <main>
          <p className="describe-card">
          Optimizar los procedimientos notariales, registrales, inmobiliarios y administrativos a nivel nacional.
          </p>
        </main>
        <footer className="d-flex justify-content-end"  style={{position:"absolute",bottom:"20px", right:"20px"}}>
          <picture>
            <Link to="/vision-mision">
              <svg width="30" height="28" viewBox="0 0 30 28" fill="none" xmlns="http://www.w3.org/2000/svg" className='icon-svg'>
                <path d="M16.4163 7.29083H13.583V12.5999H7.91634V15.2544H13.583V20.5634H16.4163V15.2544H22.083V12.5999H16.4163V7.29083ZM14.9997 0.654541C7.17967 0.654541 0.833008 6.60065 0.833008 13.9271C0.833008 21.2536 7.17967 27.1997 14.9997 27.1997C22.8197 27.1997 29.1663 21.2536 29.1663 13.9271C29.1663 6.60065 22.8197 0.654541 14.9997 0.654541ZM14.9997 24.5452C8.75217 24.5452 3.66634 19.7803 3.66634 13.9271C3.66634 8.07391 8.75217 3.30905 14.9997 3.30905C21.2472 3.30905 26.333 8.07391 26.333 13.9271C26.333 19.7803 21.2472 24.5452 14.9997 24.5452Z" fill="#2C3941"/>
              </svg>
            </Link>
          </picture>
        </footer>
      </section>
      <section className="bg-white p-4 rounded card-wall shadow" data-aos="fade-up">
        <header className="d-flex justify-content-between">
          <p className="fw-bold fs-5">Visión</p>
          <picture>
              <svg width="28" height="26" viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24.667 22.8448V0.238647H3.33366V22.8448H0.666992V25.6706H27.3337V22.8448H24.667ZM19.3337 8.71597H22.0003V11.5417H19.3337V8.71597ZM16.667 11.5417H6.00033V8.71597H16.667V11.5417ZM22.0003 5.89019H19.3337V3.06442H22.0003V5.89019ZM16.667 3.06442V5.89019H6.00033V3.06442H16.667ZM6.00033 22.8448V14.3675H16.667V16.939C16.067 17.3911 15.667 18.1258 15.667 18.9594C15.667 20.3299 16.707 21.4319 18.0003 21.4319C19.2937 21.4319 20.3337 20.3299 20.3337 18.9594C20.3337 18.1258 19.9337 17.377 19.3337 16.939V14.3675H22.0003V22.8448H6.00033Z" fill="#2C3941"/>
              </svg>
          </picture>
        </header>
        <main>
          <p className="describe-card">
          Optimizar los procedimientos notariales, registrales, inmobiliarios y administrativos a nivel nacional.
          </p>
        </main>
        <footer className="d-flex justify-content-end" style={{position:"absolute",bottom:"20px", right:"20px"}}>
          <picture>
           <Link to="/vision-mision">
            <svg width="30" height="28" viewBox="0 0 30 28" fill="none" xmlns="http://www.w3.org/2000/svg" className='icon-svg'>
                <path d="M16.4163 7.29083H13.583V12.5999H7.91634V15.2544H13.583V20.5634H16.4163V15.2544H22.083V12.5999H16.4163V7.29083ZM14.9997 0.654541C7.17967 0.654541 0.833008 6.60065 0.833008 13.9271C0.833008 21.2536 7.17967 27.1997 14.9997 27.1997C22.8197 27.1997 29.1663 21.2536 29.1663 13.9271C29.1663 6.60065 22.8197 0.654541 14.9997 0.654541ZM14.9997 24.5452C8.75217 24.5452 3.66634 19.7803 3.66634 13.9271C3.66634 8.07391 8.75217 3.30905 14.9997 3.30905C21.2472 3.30905 26.333 8.07391 26.333 13.9271C26.333 19.7803 21.2472 24.5452 14.9997 24.5452Z" fill="#2C3941"/>
              </svg>
           </Link>
          </picture>
        </footer>
      </section>
    </div>
  )
}

export default CardWall