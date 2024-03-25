import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import RouteLanding from './routers/RouteLanding';
import { BrowserRouter } from 'react-router-dom';
import emailjs from '@emailjs/browser';
function App() {

  useEffect( ()=>{
    AOS.init()
  })
  emailjs.init({
    publicKey: 'Gi9-8bKGpqXKtZ7rL',
  });

  return (
    <>
      <BrowserRouter>
        <RouteLanding/>
      </BrowserRouter>
    </>
  )
}

export default App
