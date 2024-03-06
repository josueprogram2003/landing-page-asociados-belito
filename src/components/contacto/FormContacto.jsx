import { useState } from 'react';
import anuncio from '../../assets/celular.png'
import emailjs from '@emailjs/browser';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const FormContacto = () => {
  const [name,setName] = useState("");
  const [number, setNumber] = useState("")
  const [caso,setCaso] = useState("")
  const [gmail,setGmail] = useState("")
  const [service,setService] = useState("0")

  const notifySuccess = () => toast.success("¡Enviado correctamente!");
  const notifyError = () => toast.error("¡Ha ocurrido un error al enviar!");
  const notifyInfo = () => toast.error("Falta llenar datos..!!!");




  const handleGmail= async () =>{
    if (!name && !number && !caso && !service && !gmail) {
      notifyInfo();
    }else{
      try {
        await emailjs.send("service_wq8fdyn","template_wjz6jz8",{
          nombres: name,
          servicio: service,
          caso: caso,
          numero: number,
          gmail: gmail,
          })
        notifySuccess()
      } catch (error) {
        console.error('FAILED...', error);
        notifyError();
      }
      cleanForm()
    }
  }

  const cleanForm = () =>{
    setName("")
    setNumber("")
    setCaso("") 
    setGmail("")
    setService("0")
  }


  return (
    <section className='d-flex justify-content-center align-items-center bg-contact flex-column flex-lg-row' >
    <div className='row m-0 p-5'>
    <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className='p-0 row justify-content-center mb-3'>
        <div className='col-11 px-lg-4'>
            <h3 className='text-uppercase text-lg-start text-center fs-1 text-customise fw-bolder'>Contactanos</h3>
            <p className='text-lg-start text-center fs-5 text-customise'>Si tienes alguna consulta, déjanos tus datos para poder contactarnos</p>
        </div>
      </div>
      <section className='row m-0 p-0'>
        <form className=" col-12 py-3 px-2 col-lg-5">
          <section className='w-100 d-flex flex-column align-items-center'>
            <div className='w-md-50 w-75 mb-4'>
                <input type="text" placeholder='Ingrese Nombre Completo' className='w-100 p-2 bg-white border border-0 shadow-sm ' value={name} onChange={(e)=>setName(e.target.value)} />
            </div>
            <div className='w-md-50 w-75 mb-4'>
                <select name="servicio" id="servicio"  className='w-100 p-2 bg-white border border-0 shadow-sm '  onChange={(e)=>setService(e.target.value)}  defaultValue="0">
                  <option value="0" disabled>Seleccione Opción</option>
                  <option value="civil">Derecho Civil</option>
                  <option value="penal">Derecho Penal</option>
                  <option value="notarial">Derecho Notarial</option>
                  <option value="registral">Derecho Registral</option>
                  <option value="corporativo">Derecho Corporativo</option>
                  <option value="inmobiliario">Derecho Inmobiliario</option>
                </select>
            </div>
            <div className='w-md-50 w-75 mb-4'>
                <input type="number" placeholder='Ingrese Número Telefónico' className='w-100 p-2 bg-white border border-0 shadow-sm ' value={number} onChange={(e)=>setNumber(e.target.value)} maxLength={"9"} />
            </div>
            <div className='w-md-50 w-75 mb-4'>
                <input type="email" placeholder='Ingrese Email' className='w-100 p-2 bg-white border border-0 shadow-sm ' value={gmail} onChange={(e)=>setGmail(e.target.value)}/>
            </div>
            <div className='w-md-50 w-75 mb-4'>
                <textarea name="caso" id="caso" cols="20" rows="5" placeholder='Ingrese su Caso' className='w-100 p-2 bg-white border border-0 shadow-sm ' value={caso} onChange={(e)=>setCaso(e.target.value)}></textarea>
            </div>
            <div className='w-md-50 w-75'>
            <button type='button' className='w-100 p-2 text-white border border-0 shadow-sm ' onClick={handleGmail}>Enviar</button>
            </div>
          </section>
        </form>
        <div className='d-none d-lg-block col-12 col-lg-7 d-flex justify-content-center align-items-center'>
          <div className='container-form-image'>
            <img src={anuncio} alt="celular" />
          </div>
        </div>
      </section>
    </div>
  </section>
  )
}

export default FormContacto