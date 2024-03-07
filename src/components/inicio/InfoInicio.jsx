const InfoInicio = () => {
  return (
    <section className="d-flex info-inicio flex-column flex-md-row align-items-center " style={{position:"relative", zIndex:"9"}}>
      <div className="w-100 w-lg-50 d-flex justify-content-around mb-5 mb-lg-0">
        <div className="d-flex flex-column align-items-center w-50">
          <picture className="mb-3">
            <svg width="121" height="103" className="icon-wall" viewBox="0 0 121 103" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M102.209 38.3917V6.81252H84.3337V22.3042L60.5003 0.854187L0.916992 54.4792H18.792V102.146H54.542V66.3959H66.4587V102.146H102.209V54.4792H120.084L102.209 38.3917ZM90.292 90.2292H78.3753V54.4792H42.6253V90.2292H30.7087V43.6946L60.5003 16.8821L90.292 43.6946V90.2292Z" fill="white"/>
              <path d="M48.5837 42.5625H72.417C72.417 36.0084 67.0545 30.6459 60.5003 30.6459C53.9462 30.6459 48.5837 36.0084 48.5837 42.5625Z" fill="white"/>
            </svg>
          </picture>
          <div className="d-flex flex-column align-items-center w-100 text-center">
            <p className="fw-bold text-white m-0 fs-lg-5">
            Derecho Inmobiliario
            </p>
            <p className="text-white m-0 fs-lg-5">
            Saneamiento físico legal
            </p>
          </div>
        </div>
        <div className="d-flex flex-column  align-items-center w-50">
          <picture className="mb-3">
            <svg width="105" height="103" viewBox="0 0 105 99" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon-wall">
              <path d="M0.800781 89.625H59.3008V98.5416H0.800781V89.625ZM21.4708 31.9787L35.267 19.3616L104.2 82.4025L90.4033 95.0196L21.4708 31.9787ZM55.9858 0.458313L83.5783 25.6925L69.782 38.3096L42.1895 13.0754L55.9858 0.458313ZM14.597 38.265L42.1895 63.4991L28.3933 76.1162L0.800781 50.8821L14.597 38.265Z" fill="white"/>
            </svg> 
          </picture>
          <div className="d-flex flex-column align-items-center w-75 text-center">
            <p className="fw-bold text-white m-0 fs-lg-5">
            Derecho Penal 
            </p>
            <p className="text-white m-0 fs-lg-5">
            Defensa y estrategias penales
            </p>
          </div>
        </div>
      </div>
      <div className="w-100 w.lg-50 d-flex justify-content-around">
        <div className="d-flex flex-column  align-items-center">
          <div className="mb-2">
            <svg
              height="120"
              className="icon-wall"
              width="133"
              viewBox="0 0 846.66 846.66"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <path
                d="M97.17 185.96l343.73 0 0 -102.62c0,-11.49 9.31,-20.81 20.8,-20.81l287.79 0c11.49,0 20.81,9.32 20.81,20.81l0 659.18 48.48 0c27.36,0 27.36,41.61 0,41.61 -263.63,0 -527.27,0 -790.9,0 -27.36,0 -27.36,-41.61 0,-41.61l48.49 0 0 -535.76c0,-11.48 9.31,-20.8 20.8,-20.8zm212.43 556.56l0 -81.83 -60.33 0 0 81.83 60.33 0zm-101.94 0l0 -102.64c0,-11.48 9.31,-20.8 20.8,-20.8l101.95 0c11.49,0 20.8,9.32 20.8,20.8l0 102.64 89.69 0 0 -514.95 -322.92 0 0 514.95 89.68 0zm335.52 -593.64l124.83 0c11.49,0 20.81,9.31 20.81,20.8l0 374.5c0,11.49 -9.32,20.8 -20.81,20.8l-124.83 0c-11.49,0 -20.81,-9.31 -20.81,-20.8l0 -374.5c0,-11.49 9.32,-20.8 20.81,-20.8zm104.03 41.6l-83.23 0 0 332.89 83.23 0 0 -332.89zm-467.12 211.18l68.66 0c11.49,0 20.8,9.32 20.8,20.81l0 68.65c0,11.49 -9.31,20.81 -20.8,20.81l-68.66 0c-11.49,0 -20.81,-9.32 -20.81,-20.81l0 -68.65c0,-11.49 9.32,-20.81 20.81,-20.81zm47.85 41.61l-27.05 0 0 27.05 27.05 0 0 -27.05zm82.19 -41.61l68.65 0c11.49,0 20.81,9.32 20.81,20.81l0 68.65c0,11.49 -9.32,20.81 -20.81,20.81l-68.65 0c-11.49,0 -20.81,-9.32 -20.81,-20.81l0 -68.65c0,-11.49 9.32,-20.81 20.81,-20.81zm47.85 41.61l-27.05 0 0 27.05 27.05 0 0 -27.05zm-177.89 -174.76l68.66 0c11.49,0 20.8,9.31 20.8,20.8l0 68.66c0,11.49 -9.31,20.8 -20.8,20.8l-68.66 0c-11.49,0 -20.81,-9.31 -20.81,-20.8l0 -68.66c0,-11.49 9.32,-20.8 20.81,-20.8zm47.85 41.61l-27.05 0 0 27.04 27.05 0 0 -27.04zm82.19 -41.61l68.65 0c11.49,0 20.81,9.31 20.81,20.8l0 68.66c0,11.49 -9.32,20.8 -20.81,20.8l-68.65 0c-11.49,0 -20.81,-9.31 -20.81,-20.8l0 -68.66c0,-11.49 9.32,-20.8 20.81,-20.8zm47.85 41.61l-27.05 0 0 27.04 27.05 0 0 -27.04zm124.53 432.4l246.18 0 0 -638.38 -246.18 0 0 638.38z" 
                fill="white"
                fillRule="evenodd"
              />
            </svg>
          </div>
          <div className="d-flex flex-column align-items-center w-75 text-center">
            <p className="fw-bold text-white m-0 fs-lg-5">
            Derecho Corporativo 
            </p>
            <p className="text-white m-0 fs-lg-5">
            Constitución y modificación de estatuto
            </p>
          </div>
        </div>
        <div className="d-flex flex-column  align-items-center">
          <picture className="mb-2">
            <svg className="icon-wall" width="133" height="120" viewBox="0 0 133 103" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M120.125 3.83335C113.511 1.74794 106.242 0.854187 99.2705 0.854187C87.6518 0.854187 75.1393 3.23752 66.4997 9.79169C57.8601 3.23752 45.3476 0.854187 33.7288 0.854187C22.1101 0.854187 9.59759 3.23752 0.958008 9.79169V97.0813C0.958008 98.5709 2.44759 100.06 3.93717 100.06C4.53301 100.06 4.83092 99.7625 5.42676 99.7625C13.4705 95.8896 25.0893 93.2084 33.7288 93.2084C45.3476 93.2084 57.8601 95.5917 66.4997 102.146C74.5434 97.0813 89.1414 93.2084 99.2705 93.2084C109.102 93.2084 119.231 94.9959 127.573 99.4646C128.168 99.7625 128.466 99.7625 129.062 99.7625C130.552 99.7625 132.041 98.2729 132.041 96.7834V9.79169C128.466 7.11044 124.593 5.32294 120.125 3.83335ZM120.125 84.2709C113.571 82.1854 106.421 81.2917 99.2705 81.2917C89.1414 81.2917 74.5434 85.1646 66.4997 90.2292V21.7084C74.5434 16.6438 89.1414 12.7709 99.2705 12.7709C106.421 12.7709 113.571 13.6646 120.125 15.75V84.2709Z" fill="white"/>
            </svg>
          </picture>
          <div className="d-flex flex-column align-items-center w-75">
            <p className="fw-bold text-white m-0 fs-lg-5">
            Derecho Notarial
            </p>
            <p className="text-white m-0 fs-lg-5 text-center">
            Redacción de minutas y gestión notarial
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default InfoInicio;