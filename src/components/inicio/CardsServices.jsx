import civil from '../../assets/civil.jpg'

const CardsServices = () => {

  let data = [
    {
      nombre: 'CIVIL',
      descripcion: [
        {
          desc1: '*Desalojo, mejor de propiedad.',
          desc2: '*Preescripción adquisitiva de dominio    notarial y judicial.',
          desc3: '*Resolución de contratos.',
          desc4: '*Indemnización por daños y prejuicios',
        }
      ]
    },
    {
      nombre: 'PENAL',
      descripcion: [
        {
          desc1: '*Delitos patrimoniales.',
          desc2: '*Delitos contra el cuerpo y la salud.',
          desc3: '*Delitos contra la fe pública.',
          desc4: '*Delitos contra el honor.',
        }
      ]
    },
    {
      nombre: 'NOTARIAL',
      descripcion: [
        {
          desc1: '*Poder procesal.',
          desc2: '*Poder para cobros a entidades.',
          desc3: '*Poder amplio y general.',
          desc4: '*Separación de patrimonio',
        }
      ]
    },
    {
      nombre: 'CIVIL',
      descripcion: [
        {
          desc1: '*Desalojo, mejor de propiedad.',
          desc2: '*Preescripción adquisitiva de dominio    notarial y judicial.',
          desc3: '*Resolución de contratos.',
          desc4: '*Indemnización por daños y prejuicios',
        }
      ]
    },
    {
      nombre: 'PENAL',
      descripcion: [
        {
          desc1: '*Delitos patrimoniales.',
          desc2: '*Delitos contra el cuerpo y la salud.',
          desc3: '*Delitos contra la fe pública.',
          desc4: '*Delitos contra el honor.',
        }
      ]
    },
    {
      nombre: 'NOTARIAL',
      descripcion: [
        {
          desc1: '*Poder procesal.',
          desc2: '*Poder para cobros a entidades.',
          desc3: '*Poder amplio y general.',
          desc4: '*Separación de patrimonio',
        }
      ]
    }
  ]
  return (
    <div className="mt-5">
      <h2 className="fw-bold text-center">SERVICIOS JURÍDICOS</h2>
      <section className="container">
        <div className='row w-100 justify-content-center' >
          {
            data.map((data,index)=>{
            return(
              <div key={index} className="mt-5 mb-5 mx-5 card-service shadow col-3 p-0 " data-aos="zoom-in-down">
              <div className='card__image w-100 overflow-hidden h-50'>
                <img src={civil} alt="" />
              </div>
              <div className="bg-card p-4 d-flex flex-column overflow-hidden h-50 justify-content-between ">
               <div className='d-flex flex-column'>
                <header>
                  <h3 className="text-white text-uppercase fw-bold text-center mb-3 service__title">{data.nombre}</h3>
                </header>
                  <div className="text-white">
                    {
                      data.descripcion.map((paragraph,index)=>{
                       return(
                       <div key={index}>
                          <p className="m-0 ">{paragraph.desc1}</p>
                          <p className="m-0 ">{paragraph.desc2}</p>
                          <p className="m-0 ">{paragraph.desc3}</p>
                          <p className="m-0 ">{paragraph.desc4}</p>
                       </div>
                       )
                      })
                    }
                  </div> 
               </div>
                <div className="mt-3 position-absolute container-button">
                  <button type="button" className="btn btn-view text-white  fw-bold px-4">Ver Más</button>
                </div>
              </div>
            </div>
            )
            })
          }
        </div>
      </section>
    </div>
  )
}

export default CardsServices