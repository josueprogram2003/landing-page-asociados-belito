import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import RouteLanding from './routers/RouteLanding';
import { BrowserRouter } from 'react-router-dom';
function App() {

  useEffect( ()=>{
    AOS.init()
  })

  return (
    <>
      <BrowserRouter>
        <RouteLanding/>
      </BrowserRouter>
    </>
  )
}

export default App
