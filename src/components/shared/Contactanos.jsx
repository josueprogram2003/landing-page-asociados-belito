import { useState } from 'react';
import anuncio from '../../assets/celular.png'
import emailjs from '@emailjs/browser';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
const Contactanos = () => {
  
  const [name,setName] = useState("");
  const [number, setNumber] = useState("")
  const [caso,setCaso] = useState("")


  const notifySuccess = () => toast.success("¡Enviado correctamente!");
  const notifyError = () => toast.error("¡Ha ocurrido un error al enviar!");
  const notifyInfo = () => toast.error("Falta llenar datos..!!!");

  const handleGmail= async () =>{
    if (!name && !number && !caso) {
      notifyInfo();
    }else{
      try {
        await emailjs.send("service_c7e0w96","template_85kq0ww",{
          nombres: name,
          caso: caso,
          numero: number,
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
  }

  return (
    <section className='d-flex justify-content-center align-items-center bg-contact flex-column flex-lg-row' >
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
      <div className='contact__image'>
        <img src={anuncio} alt="celular" />
      </div>
      <div className='contact__form'>
        <form className='py-3 px-2' >
          <div>
            <h3 className='text-uppercase text-center fs-1 text-customise fw-bolder'>Contactanos</h3>
            <p className='text-center fs-5 text-customise'>Si tienes alguna consulta, déjanos tus datos para poder contactarnos</p>
          </div>
          <section className='w-100 d-flex flex-column align-items-center'>
            <div className='w-md-50 w-75 mb-4'>
                <input type="text" placeholder='Ingrese Nombre Completo' className='w-100 p-2 bg-white border border-0 shadow-sm ' value={name} onChange={(e)=>setName(e.target.value)}/>
            </div>
            <div className='w-md-50 w-75 mb-4'>
                <input type="number" placeholder='Ingrese Numero Telefónico' className='w-100 p-2 bg-white border border-0 shadow-sm ' value={number} onChange={(e)=>setNumber(e.target.value)}/>
            </div>
            <div className='w-md-50 w-75 mb-4'>
                <textarea name="caso" id="caso" cols="20" rows="5" placeholder='Ingrese su Caso' className='w-100 p-2 bg-white border border-0 shadow-sm' value={caso} onChange={(e)=>setCaso(e.target.value)}></textarea>
            </div>
            <div className='w-md-50 w-75'>
              <button type='button' className='w-100 p-2 text-white border border-0 shadow-sm ' onClick={handleGmail}>Enviar</button>
            </div>
          </section>
        </form>
      </div>
    </section>
  )
}

export default Contactanos