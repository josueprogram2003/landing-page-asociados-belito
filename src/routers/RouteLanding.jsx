import { Route, Routes } from "react-router-dom"
import NavBar from "../components/shared/NavBar"
import InicioMain from "../components/inicio/InicioMain"
import ContactoMain from "../components/contacto/ContactoMain"
import NosotrosMain from "../components/nosotros/NosotrosMain"
import Servicio from "../components/servicios/Servicio"
import MisionVision from '../components/mision-vision/MisionVision'
import civil from '../assets/civil.jpg'
import registral from '../assets/registral.jpg'
import penal from '../assets/penal.jpg'
import notarial from '../assets/notarial.jpg'
import inmobiliario from '../assets/inmobiliario.jpg'
import corporativo from '../assets/coorporativo.jpg'
const RouteLanding = () => {
  const data =[
    {
      title: "Derecho Civil", img:civil,descripcion: "En este campo te ofrece un servicio integralde asesoría y patrocinio relacionado en el ámbito derecho procesal civil ylitigación que versan de procesos civiles concernientes con propiedades,contratos e indemnizaciones.",
    paragraph: "Entre los temas que trabajamos se encuentran:",items:[
      {1:"Desalojos, mejor derecho depropiedad, interdicto de recobrar y reivindicación."},
      {2:"Prescripción adquisitiva de dominio notarial y judicial.",},
      {3:"Resolución de contratos, nulidade ineficacia de acto jurídico.",},
      {4:"Sucesión intestada, partición de herencia y petición de herencia."},
      {5:"Rectificaciones de partidas."},
      {6:"Indemnizaciones por daños y perjuicios, lucro cesante, daño emergente y daño moral."}
    ]},
    {
      title: "Derecho Penal", img:penal,descripcion: "En este campo te ofrece un servicio integral de asesoría, consultoría y patrocinio de estrategias para las defensas penales y salvaguardar los bienes jurídicos protegidos.",
    paragraph: "Entre los temas que trabajamos se encuentran:",items:[
      {1:"Delitos patrimoniales: hurto, robo, estafa, apropiación ilícita y usurpación"},
      {2:"Delitos contra el cuerpo y la salud: lesiones, homicidio culposo y homicidio calificado",},
      {3:"Delitos contra la fe pública: falsificación de documentos y sellos, timbres y marcas oficiales.",},
      {4:"Delitos contra el honor: injuria, difamación, calumnia"}
    ]},
    {
      title:"Derecho Notarial",
      img:notarial ,
      descripcion:"En este campo te ofrece los servicios relacionados con la gestión, y planificación patrimonial de transferencia de bienes muebles en inmuebles, desde una perspectiva de índole personal y/o familiar. Asimismo, se brinda la asesoría de elaboración de minutas de representación procesal para diversas entidades privadas, públicas e internacional.",
      paragraph: "Entre los temas que trabajamos se encuentran:",
      items:[
        {1:"Poder procesal"},
        {2:"Poder para cobros a entidades",},
        {3:"Poder para amplio y general",},
        {4:"Poder consular"},
        {5:"Testamento"},
        {6:"Separación de Patrimonio"},
        {7:"Rectificación de calidad de bien"},
        {8:"Anticipo de Legitima"},
        {9:"Donación de propiedades"},
        {10:"Constitución de patrimonio familiar"},
        {11:"Redacción de minutas de constitución de empresa"},
        {12:"Redacción de minutas de transferencia de propiedad"},
        {13:"Sucesión intestada"},
        {14:"Rectificación de partidas inscritas en el Registro Civil"},
        {15:"Union de Hecho"},
        {16:"Divorcio Notarial"},
        {17:"Gestión de tramites notariales"},
      ]
    },
    {
      title:"Derecho Registral",
      img: registral,
      descripcion:"En este campo te ofrece los servicios relacionados con la asesoría integral, desde la redacción, revisión, formulación y gestión de tramites notariales, en procesos no contenciosas en sede notarial. Asimismo se brinda el servicio de asesoría registral, gestiones ante Sunarp y registro correspondiente de publicidad registral.",
      paragraph: "Entre los temas que trabajamos se encuentran:",
      items:[
        {1:"Estudio de títulos archivados"},
        {2:"Subsanación de títulos observados",},
        {3:"Presentación de formularios registrales",},
        {4:"Diversas gestiones administrativas en Sunarp"},
      ]
    },
    {
      title:"Derecho Corporativo",
      img: corporativo,
      descripcion:"En este campo te ofrece los servicios relacionados con la constitución y modificación de estatuto de sociedades y reorganización empresarial, asesoría integral desde la perspectiva comercial y tributaria.",
      paragraph: "Entre los temas que trabajamos se encuentran:",
      items:[
        {1:"Aumento de capital"},
        {2:"Acuerdos de accionistas y socios",},
        {3:"Constitución de sociedades (E.I.R.L / S.A.C / S.R.L / SA.)",},
        {4:"Constitución de asociaciones"},
        {5:"Modificación de Estatutos y reformas estatutarias"},
        {6:"Transformación de sociedades"},
        {7:"Reorganizaciones empresariales"},
        {8:"Recomposiciones accionarias"},
        {9:"Renuncia y Nombramiento de cargos"},
        {10:"Transferencia de acciones y particiones"},
      ]
    },
    {
      title:"Derecho Inmobiliario",
      img: inmobiliario,
      descripcion:"En este campo te ofrece los servicios relacionados con las diversas modalidades de transferencia de bienes inmuebles, operaciones de compraventa, asesoría integral desde la perspectiva comercial y financiera. Asimismo, saneamiento físico legal, otorgando soluciones viables y eficaces.",
      paragraph: "Entre los temas que trabajamos se encuentran:",
      items:[
        {1:"Arrendamiento"},
        {2:"Compraventa",},
        {3:"Comodato",},
        {4:"Donación"},
        {5:"Dación"},
        {6:"División, Partición y Adjudicación"},
        {7:"Permuta"},
        {8:"Usufructo"},
        {9:"Mutuo"},
        {10:"Constitución de hipoteca, levantamiento y cancelaciones por caducidad"},
      ]
    }
  ]
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path="/" element={<InicioMain />} />
        <Route path="/inicio" element={<InicioMain/>}>       
        </Route>
        <Route path="/nosotros" element={<NosotrosMain/>}>       
        </Route>
        <Route path="/vision-mision" element={<MisionVision/>}>       
        </Route>
        <Route path="/servicio-civil" element={<Servicio info={data[0]}/>}>       
        </Route>
        <Route path="/servicio-penal" element={<Servicio info={data[1]}/>}>       
        </Route>
        <Route path="/servicio-notarial" element={<Servicio info={data[2]}/>}>       
        </Route>
        <Route path="/servicio-registral" element={<Servicio info={data[3]}/>}>       
        </Route>
        <Route path="/servicio-corporativo" element={<Servicio info={data[4]}/>}>       
        </Route>
        <Route path="/servicio-inmobiliario" element={<Servicio info={data[5]}/>}>       
        </Route>
        <Route path="/contacto" element={<ContactoMain/>}>       
        </Route>
      </Routes>
      <div className="position-fixed" style={{bottom:"30px", right:"30px", cursor:"pointer"}}>
        <a href="https://wa.me/message/AY6IA7YPYPFAJ1 " className="btn-whatsapp d-flex justify-content-center align-items-center">
          <svg width="50" height="50" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.2871 3.6825C12.8846 2.2725 11.0171 1.5 9.02961 1.5C4.93461 1.5 1.59711 4.8375 1.59711 8.9325C1.59711 10.245 1.94211 11.52 2.58711 12.645L1.53711 16.5L5.47461 15.465C6.56211 16.0575 7.78461 16.3725 9.02961 16.3725C13.1246 16.3725 16.4621 13.035 16.4621 8.94C16.4621 6.9525 15.6896 5.085 14.2871 3.6825ZM9.02961 15.1125C7.91961 15.1125 6.83211 14.8125 5.87961 14.25L5.65461 14.115L3.31461 14.73L3.93711 12.45L3.78711 12.2175C3.17211 11.235 2.84211 10.095 2.84211 8.9325C2.84211 5.5275 5.61711 2.7525 9.02211 2.7525C10.6721 2.7525 12.2246 3.3975 13.3871 4.5675C14.5571 5.7375 15.1946 7.29 15.1946 8.94C15.2096 12.345 12.4346 15.1125 9.02961 15.1125ZM12.4196 10.4925C12.2321 10.4025 11.3171 9.9525 11.1521 9.885C10.9796 9.825 10.8596 9.795 10.7321 9.975C10.6046 10.1625 10.2521 10.5825 10.1471 10.7025C10.0421 10.83 9.92961 10.845 9.74211 10.7475C9.55461 10.6575 8.95461 10.455 8.24961 9.825C7.69461 9.33 7.32711 8.7225 7.21461 8.535C7.10961 8.3475 7.19961 8.25 7.29711 8.1525C7.37961 8.07 7.48461 7.935 7.57461 7.83C7.66461 7.725 7.70211 7.6425 7.76211 7.5225C7.82211 7.395 7.79211 7.29 7.74711 7.2C7.70211 7.11 7.32711 6.195 7.17711 5.82C7.02711 5.46 6.86961 5.505 6.75711 5.4975C6.64461 5.4975 6.52461 5.4975 6.39711 5.4975C6.26961 5.4975 6.07461 5.5425 5.90211 5.73C5.73711 5.9175 5.25711 6.3675 5.25711 7.2825C5.25711 8.1975 5.92461 9.0825 6.01461 9.2025C6.10461 9.33 7.32711 11.205 9.18711 12.0075C9.62961 12.2025 9.97461 12.315 10.2446 12.3975C10.6871 12.54 11.0921 12.5175 11.4146 12.4725C11.7746 12.42 12.5171 12.0225 12.6671 11.5875C12.8246 11.1525 12.8246 10.785 12.7721 10.7025C12.7196 10.62 12.6071 10.5825 12.4196 10.4925Z" fill="#248F41"/>
          </svg>
        </a>
      </div>
    </div>
  )
}

export default RouteLanding