import civil from '../../assets/civil.jpg'
import registral from '../../assets/registral.jpg'
import penal from '../../assets/penal.jpg'
import notarial from '../../assets/notarial.jpg'
import inmobiliario from '../../assets/inmobiliario.jpg'
import corporativo from '../../assets/coorporativo.jpg'
import { Link } from 'react-router-dom'


const CardsServices = () => {

  let data = [
    {
      nombre: 'CIVIL',
      url:"/servicio-civil",
      imagen: civil,
      descripcion: [
        {
          desc2: '*Prescripción adquisitiva de dominio    notarial y judicial.',
          desc3: '*Resolución de contratos.',
          desc4: '*Indemnización por daños y prejuicios',
        }
      ]
    },
    {
      nombre: 'PENAL',
      url:"/servicio-penal",
      imagen: penal,
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
      url:"/servicio-notarial",
      imagen: notarial,
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
      nombre: 'REGISTRAL',
      url:"/servicio-registral",
      imagen: registral,
      descripcion: [
        {
          desc1: '*Estudio de títulos archivados.',
          desc2: '*Subsanación de títulos observados.',
          desc3: '*Diversas gestiones administrativas en Sunarp',
        }
      ]
    },
    {
      nombre: 'CORPORATIVO',
      imagen: corporativo,
      url:"/servicio-corporativo",
      descripcion: [
        {
          desc1: '*Aumento de Capital.',
          desc2: '*Acuerdos de accionistas y socios.',
          desc3: '*Constitución de asociaciones.',
          desc4: '*Transformación de sociedades.',
        }
      ]
    },
    {
      nombre: 'INMOBILIARIO',
      imagen: inmobiliario,
      url:"/servicio-inmobiliario",
      descripcion: [
        {
          desc1: '*Arrendamiento.',
          desc2: '*Compraventa.',
          desc3: '*Comodato.',
          desc4: '*Donación',
        }
      ]
    }
  ]
  return (
    <div className="services">
      <h2 className="fw-bold text-center">SERVICIOS JURÍDICOS</h2>
      <section className="container-fluid p-xxl-4 p-5 w-100">
        <div className='row w-100 justify-content-center m-0' >
          {
            data.map((data,index)=>{
            return(
              <div key={index} className="m-xxl-5 m-sm-4 m-xl-4  m-lg-5 mb-5 card-service shadow col-sm-8 col-md-5 col-lg-5 col-xl-3  col-xxl-3 p-0 " data-aos="zoom-in-down">
              <div className='card__image w-100 overflow-hidden h-50'>
                <img src={data.imagen} alt="" />
              </div>
              <div className="bg-card p-4 d-flex flex-column overflow-hidden h-50 justify-content-between ">
               <div className='d-flex flex-column'>
                <header className=' mb-2 d-flex justify-content-center'>
                  <h3 className="text-white text-uppercase fw-bold text-center mb-3 service__title d-inline fs-3">{data.nombre}</h3>
                </header>
                  <div className="text-white  pb-5">
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
                <div className="mt-3 container-buttonInicio">
                <Link to={data.url} className="btn btn-view text-white  position-absolute  fw-bold px-4"  style={{left:"0" , bottom:0}}>
                Ver Más 
                </Link> 
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