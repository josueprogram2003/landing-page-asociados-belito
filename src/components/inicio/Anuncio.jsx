import anuncio from "../../assets/anuncio.jpg";

const Anuncio = () => {
  return (
   <>
    <section className="anuncio w-100 mt-5">
      <div className="anuncio__image">
        <img src={anuncio} alt="" className="w-100 h-100"/>
      </div>
      <div className="anuncio__description w-100 h-100 d-flex flex-column align-items-center justify-content-center">
        <p className="fs-1 text-center w-75 fw-bold text-white">ASESORÍA ESPECIALIZADA PARA EL SERVICIO INTEGRAL DE PATROCINIO LEGAL PARA EMPRESAS Y PERSONAS.</p>
        <button type="button" className="py-3 px-5 text-white fw-bold mt-5">Conversemos</button>
      </div>
    </section>
    <section className="d-flex py-5 h-100 my-5 justify-content-center">
      <div className="w-50 d-flex flex-column align-items-start justify-content-center ms-5" data-aos="flip-left">
          <header className="container-title mb-5">
            <h3 className="fw-bolder  asesoria-title">ASESORIA LEGAL EN EL RUBRO INMOBILIARIO, NOTARIAL Y REGISTRAL.</h3>
          </header>
          <p className="w-100 asesoria-title asesoria-title--spacing fs-5 mt-3">
          Brindamos asesoría integral y patrocinio de estrategias jurídicas desde la revisión hasta culminar el procedimiento inscrito en <span className="fw-bold">SUNARP</span>.
          </p>
      </div>
      <main className="d-flex w-50 flex-column justify-content-between ms-5 align-items-center ms-5"data-aos="flip-right">
        <article className="d-flex w-75 ms-5">
            <div className="circle d-flex justify-content-center align-items-center me-5">
              <svg width="35" height="35" viewBox="0 0 42 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M41.8337 0.25L38.3545 3.72917L34.8962 0.25L31.417 3.72917L27.9378 0.25L24.4795 3.72917L21.0003 0.25L17.5212 3.72917L14.0628 0.25L10.5837 3.72917L7.10449 0.25L3.64616 3.72917L0.166992 0.25V33.5833C0.166992 35.875 2.04199 37.75 4.33366 37.75H37.667C39.9587 37.75 41.8337 35.875 41.8337 33.5833V0.25ZM18.917 33.5833H4.33366V21.0833H18.917V33.5833ZM37.667 33.5833H23.0837V29.4167H37.667V33.5833ZM37.667 25.25H23.0837V21.0833H37.667V25.25ZM37.667 16.9167H4.33366V10.6667H37.667V16.9167Z" fill="white"/>
              </svg>
            </div>
            <div className="describe w-75">
              <span className="fw-bolder fs-4">Registral</span>
              <div className="describe__paragrapgh ">
                <p className="m-0 ">Estudio de asientos registrales</p>
                <p className="m-0 ">Subsanación de títulos observados</p>
              </div>
            </div>
        </article>
        <article className="d-flex w-75 ms-5">
            <div className="circle d-flex justify-content-center align-items-center me-5">
            <svg width="38" height="38" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.0628 16.8123C22.0628 13.3748 19.2503 10.5623 15.8128 10.5623C12.3753 10.5623 9.56283 13.3748 9.56283 16.8123C9.56283 20.2498 12.3753 23.0623 15.8128 23.0623C19.2503 23.0623 22.0628 20.2498 22.0628 16.8123ZM15.8128 18.8957C14.667 18.8957 13.7295 17.9582 13.7295 16.8123C13.7295 15.6665 14.667 14.729 15.8128 14.729C16.9587 14.729 17.8962 15.6665 17.8962 16.8123C17.8962 17.9582 16.9587 18.8957 15.8128 18.8957ZM29.3545 23.0623C31.667 23.0623 33.5212 21.2082 33.5212 18.8957C33.5212 16.5832 31.667 14.729 29.3545 14.729C27.042 14.729 25.167 16.5832 25.1878 18.8957C25.1878 21.2082 27.042 23.0623 29.3545 23.0623ZM21.0003 0.166504C9.50033 0.166504 0.166992 9.49984 0.166992 20.9998C0.166992 32.4998 9.50033 41.8332 21.0003 41.8332C32.5003 41.8332 41.8337 32.4998 41.8337 20.9998C41.8337 9.49984 32.5003 0.166504 21.0003 0.166504ZM8.18783 31.6457C9.60449 30.5207 12.917 29.3332 15.8128 29.3332C15.9587 29.3332 16.1253 29.354 16.292 29.354C16.792 28.0207 17.6878 26.6665 19.0003 25.479C17.8337 25.2707 16.7295 25.1457 15.8128 25.1457C13.1045 25.1457 8.75033 26.0832 5.95866 28.1248C4.91699 25.9582 4.33366 23.5415 4.33366 20.979C4.33366 11.7915 11.8128 4.31234 21.0003 4.31234C30.1878 4.31234 37.667 11.7915 37.667 20.979C37.667 23.479 37.1045 25.854 36.1045 27.9998C34.0212 26.7707 31.1878 26.1873 29.3545 26.1873C26.1878 26.1873 19.9795 27.8748 19.9795 31.8123V37.604C15.2503 37.3332 11.042 35.0832 8.18783 31.6457Z" fill="white"/>
          </svg>
            </div>
            <div className="describe w-75">
              <span className="fw-bolder fs-4">Notarial</span>
              <div className="describe__paragrapgh ">
                <p className="m-0 ">Elaboración de minutas y actas</p>
                <p className="m-0 ">Gestión Notarial</p>
              </div>
            </div>
        </article>
        <article className="d-flex w-75 ms-5">
            <div className="circle d-flex justify-content-center align-items-center me-5">
              <svg width="38" height="38" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3. org/2000/svg">
               <path d="M43.7497 20.8333H26.3538C24.6455 15.9792 20.0205 12.5 14.583 12.5C7.68718 12.5 2.08301 18.1042 2.08301 25C2.08301 31.8958 7.68718 37.5 14.583 37.5C20.0205 37.5 24.6455 34.0208 26.3538 29.1667H27.083L31.2497 33.3333L35.4163 29.1667L39.583 33.3333L47.9163 24.9167L43.7497 20.8333ZM14.583 31.25C11.1455 31.25 8.33301 28.4375 8.33301 25C8.33301 21.5625 11.1455 18.75 14.583 18.75C18.0205 18.75 20.833 21.5625 20.833 25C20.833 28.4375 18.0205 31.25 14.583 31.25Z" fill="white"/>
              </svg>
            </div>
            <div className="describe w-75">
              <span className="fw-bolder fs-4">Inmobiliario</span>
              <div className="describe__paragrapgh ">
                <p className="m-0 ">Saneamiento físico técnico legal</p>
              </div>
            </div>
        </article>
      </main>
    </section>
   </>
  )
}

export default Anuncio