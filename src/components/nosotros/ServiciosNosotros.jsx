import civil from '../../assets/civil.jpg'

const ServiciosNosotros = () => {

  const services = [
    {
      id:1,
      name:"Derecho Civil",
      img: civil
    },
    {
      id:2,
      name:"Derecho Penal",
      img: civil
    },
    {
      id:3,
      name:"Derecho Notarial",
      img: civil
    },
    {
      id:4,
      name:"Derecho Registral",
      img: civil
    },
    {
      id:5,
      name:"Derecho Corporativo",
      img: civil
    },
    {
      id:5,
      name:"Derecho Inmobiliario",
      img: civil
    }
  ]

  return (
    <section className="px-5 pt-5">
      <header className="d-flex align-itenms-center">
        <div className="circle-nosotros shadow">
          <svg width="35" height="35" viewBox="0 0 42 41" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.33366 8.9259H0.166992V36.7531C0.166992 38.9395 2.04199 40.7284 4.33366 40.7284H33.5003V36.7531H4.33366V8.9259ZM37.667 0.975281H12.667C10.3753 0.975281 8.50033 2.76417 8.50033 4.95059V28.8024C8.50033 30.9889 10.3753 32.7778 12.667 32.7778H37.667C39.9587 32.7778 41.8337 30.9889 41.8337 28.8024V4.95059C41.8337 2.76417 39.9587 0.975281 37.667 0.975281ZM37.667 28.8024H12.667V4.95059H37.667V28.8024ZM16.8337 14.8889H33.5003V18.8642H16.8337V14.8889ZM16.8337 20.8518H25.167V24.8271H16.8337V20.8518ZM16.8337 8.9259H33.5003V12.9012H16.8337V8.9259Z" fill="#2C3941"/>
          </svg>
        </div>
        <div className="my-auto mx-4 w-50">
          <p className="fw-bold fs-4 m-0 d-inline">Contamos con experiencia en diversos servicios jurídicos:</p>
        </div>
      </header>
      <main className='mt-5 container-fluid'>
        <div className='row m-0 justify-content-center'>
        {
          services.map((element,index)=>{
            return(
              <section className="shadow col-5 m-3 p-0" style={{overflow: "hidden", borderRadius:"15px", position:"relative"}} key={index} data-aos="zoom-in-down">
                <div className='card-nosotros'>
                  <img  src={civil} alt="" />
                </div> 
                <main className='container-mame'>
                  <span className='fs-1 text-center fw-bold text-center'>{element.name}</span>
                  <div className='w-25 container-button d-flex flex-column align-items-center justify-content-center'>
                    <span className='text-dark text-center fs-5 fw-bold mb-4 text-uppercase'>Ver más</span>
                    <button type='button' className='btn-viewService'>
                      <svg width="35" height="35" viewBox="0 0 46 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.9997 4.91977C30.8955 4.91977 37.9372 9.15347 41.3747 15.8519C37.9372 22.5503 30.9163 26.784 22.9997 26.784C15.083 26.784 8.06218 22.5503 4.62467 15.8519C8.06218 9.15347 15.1038 4.91977 22.9997 4.91977ZM22.9997 0.944458C12.583 0.944458 3.68717 7.12606 0.0830078 15.8519C3.68717 24.5777 12.583 30.7593 22.9997 30.7593C33.4163 30.7593 42.3122 24.5777 45.9163 15.8519C42.3122 7.12606 33.4163 0.944458 22.9997 0.944458ZM22.9997 10.8827C25.8747 10.8827 28.208 13.1089 28.208 15.8519C28.208 18.5948 25.8747 20.821 22.9997 20.821C20.1247 20.821 17.7913 18.5948 17.7913 15.8519C17.7913 13.1089 20.1247 10.8827 22.9997 10.8827ZM22.9997 6.90742C17.833 6.90742 13.6247 10.9225 13.6247 15.8519C13.6247 20.7812 17.833 24.7963 22.9997 24.7963C28.1663 24.7963 32.3747 20.7812 32.3747 15.8519C32.3747 10.9225 28.1663 6.90742 22.9997 6.90742Z" fill="#1D282F"/>
                      </svg>
                    </button>
                  </div>
                </main>
              </section>
            )
          })
        }
        </div>
      </main>
    </section>
  )
}

export default ServiciosNosotros