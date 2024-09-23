/* eslint-disable react/prop-types */
import { useEffect } from 'react';
const BodyServicios = ({info}) => {

  useEffect(()=>{
    // console.log(info)
  })
  return (
    <section className='p-5'>
      <header>
        <h3 className='fw-bold fs-1 color-primary mision-title'>{info.title}</h3>
      </header>
      <main className='pt-5 d-flex service-container flex-column flex-lg-row row m-0'>
       <div className='service-desc fs-5 px-4 d-flex justify-content-center flex-column col-lg-7 col-12'>
        <p className='color-primary' style={{textAlign:"justify"}}>{info.descripcion}</p>
        <p className=' color-primary'>{info.paragraph}</p>
        <ul>
            {
              info.items.map((element,index)=>{
                return (
                  <li className=' color-primary' key={index}>{Object.values(element)[0]}</li>
                )
              })
            }
        </ul>
       </div>
       <div className='service-image d-none d-lg-block shadow col-lg-5 p-0 m-0' >
        <img src={info.img} alt="" />
       </div>
      </main>
    </section>
  )
}

export default BodyServicios