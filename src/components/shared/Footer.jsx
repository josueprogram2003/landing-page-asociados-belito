import imagen from '../../assets/imagen-2.png'
const Footer = () => {
  return (
    <footer>
      <main className="bg-landing p-5">
        <div className='d-flex justify-content-between align-items-center flex-column flex-lg-row'>
            {/* imagen */}
          <div style={{width:"180px", height:"180px"}}>
            <img src={imagen} alt="" />
          </div>
            {/* info */}
          <div className='my-5 my-lg-0'>
            {/* email */}
            <div className="d-flex align-items-center">
              <div className='circle-icon'>
                <svg width="25" height="25" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.5 3.97843C16.5 3.24908 15.825 2.65234 15 2.65234H3C2.175 2.65234 1.5 3.24908 1.5 3.97843V11.935C1.5 12.6643 2.175 13.261 3 13.261H15C15.825 13.261 16.5 12.6643 16.5 11.935V3.97843ZM15 3.97843L9 7.29365L3 3.97843H15ZM15 11.935H3V5.30452L9 8.61973L15 5.30452V11.935Z" fill="#DA1E00"/>
                </svg>
              </div>
              <div className="d-flex">
                <p className="text-white fw-bold m-0 mx-3">Email: </p>
                <p className="text-white m-0">belitoasociados@gmail.com</p>
              </div>
            </div>
            {/* WhatsApp: */}
            <div className="d-flex align-items-center my-3">
              <div className='circle-icon'>
                <svg width="25" height="25" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.2871 2.6825C11.8846 1.2725 10.0171 0.5 8.02961 0.5C3.93461 0.5 0.59711 3.8375 0.59711 7.9325C0.59711 9.245 0.942109 10.52 1.58711 11.645L0.537109 15.5L4.47461 14.465C5.56211 15.0575 6.78461 15.3725 8.02961 15.3725C12.1246 15.3725 15.4621 12.035 15.4621 7.94C15.4621 5.9525 14.6896 4.085 13.2871 2.6825ZM8.02961 14.1125C6.91961 14.1125 5.83211 13.8125 4.87961 13.25L4.65461 13.115L2.31461 13.73L2.93711 11.45L2.78711 11.2175C2.17211 10.235 1.84211 9.095 1.84211 7.9325C1.84211 4.5275 4.61711 1.7525 8.02211 1.7525C9.67211 1.7525 11.2246 2.3975 12.3871 3.5675C13.5571 4.7375 14.1946 6.29 14.1946 7.94C14.2096 11.345 11.4346 14.1125 8.02961 14.1125ZM11.4196 9.4925C11.2321 9.4025 10.3171 8.9525 10.1521 8.885C9.97961 8.825 9.85961 8.795 9.73211 8.975C9.60461 9.1625 9.25211 9.5825 9.14711 9.7025C9.04211 9.83 8.92961 9.845 8.74211 9.7475C8.55461 9.6575 7.95461 9.455 7.24961 8.825C6.69461 8.33 6.32711 7.7225 6.21461 7.535C6.10961 7.3475 6.19961 7.25 6.29711 7.1525C6.37961 7.07 6.48461 6.935 6.57461 6.83C6.66461 6.725 6.70211 6.6425 6.76211 6.5225C6.82211 6.395 6.79211 6.29 6.74711 6.2C6.70211 6.11 6.32711 5.195 6.17711 4.82C6.02711 4.46 5.86961 4.505 5.75711 4.4975C5.64461 4.4975 5.52461 4.4975 5.39711 4.4975C5.26961 4.4975 5.07461 4.5425 4.90211 4.73C4.73711 4.9175 4.25711 5.3675 4.25711 6.2825C4.25711 7.1975 4.92461 8.0825 5.01461 8.2025C5.10461 8.33 6.32711 10.205 8.18711 11.0075C8.62961 11.2025 8.97461 11.315 9.24461 11.3975C9.68711 11.54 10.0921 11.5175 10.4146 11.4725C10.7746 11.42 11.5171 11.0225 11.6671 10.5875C11.8246 10.1525 11.8246 9.785 11.7721 9.7025C11.7196 9.62 11.6071 9.5825 11.4196 9.4925Z" fill="#248F41"/>
                </svg>
              </div>
              <div className="d-flex">
                <p className="text-white fw-bold m-0 mx-3">WhatsApp: </p>
                <p className="text-white m-0">+51 997663026</p>
              </div>
            </div>
            {/* direccion */}
            <div className="d-flex align-items-center">
              <div className='circle-icon'>
                <svg width="30" height="30" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 1.32617C6.0975 1.32617 3.75 3.4015 3.75 5.96748C3.75 9.44845 9 14.587 9 14.587C9 14.587 14.25 9.44845 14.25 5.96748C14.25 3.4015 11.9025 1.32617 9 1.32617ZM5.25 5.96748C5.25 4.13748 6.93 2.65226 9 2.65226C11.07 2.65226 12.75 4.13748 12.75 5.96748C12.75 7.87704 10.59 10.7348 9 12.5183C7.44 10.748 5.25 7.85715 5.25 5.96748Z" fill="#2A4B6F"/>
                  <path d="M9 7.62508C10.0355 7.62508 10.875 6.88295 10.875 5.96748C10.875 5.052 10.0355 4.30987 9 4.30987C7.96447 4.30987 7.125 5.052 7.125 5.96748C7.125 6.88295 7.96447 7.62508 9 7.62508Z" fill="#2A4B6F"/>
                </svg>
              </div>
              <div className="d-flex">
                <p className="text-white fw-bold m-0 mx-3">Dirección:</p>
                <p className="text-white m-0">Calle San Pedro 174 - Santa Anita</p>
              </div>
            </div>
          </div>
            {/* mapa */}
          <div className='container-maps'>
            <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d243.8845024775094!2d-76.9484276662764!3d-12.033052046815115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2spe!4v1709563930020!5m2!1ses!2spe"
            width="100%"
            height="100%"
            style={{ border: '0' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div className="d-flex justify-content-center mt-5">
          {/* facebook */}
         <a href="https://www.facebook.com/profile.php?id=61555054833264 ">
          <svg className='icon-svg' width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M32.4752 16.2376C32.4752 7.26983 25.2054 0 16.2376 0C7.26983 0 0 7.26983 0 16.2376C0 24.3422 5.93783 31.0598 13.7005 32.278V20.9313H9.57766V16.2376H13.7005V12.6603C13.7005 8.59072 16.1247 6.34282 19.8337 6.34282C21.6097 6.34282 23.4684 6.65996 23.4684 6.65996V10.6559H21.421C19.404 10.6559 18.7748 11.9077 18.7748 13.1931V16.2376H23.2782L22.5582 20.9313H18.7748V32.278C26.5374 31.0598 32.4752 24.3422 32.4752 16.2376Z" fill="white"/>
            </svg>
         </a>
          {/* instagram */}
         <a href="https://www.instagram.com/estudio_juridico_belito_asoc?igsh=bHhucjBkejM0OGpt">
          <svg
            className='icon-svg'
            style={{margin:"0px 1rem"}}
            width="33"
            height="33"
            viewBox="0 0 33 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
              <g clipPath="url(#clip0_296_84)">
                <path
                d="M16.2376 2.92404C20.5761 2.92404 21.0899 2.94307 22.7961 3.01918C24.3818 3.08895 25.2381 3.35535 25.8089 3.57735C26.5637 3.86912 27.1092 4.22432 27.6737 4.78883C28.2446 5.35968 28.5934 5.89882 28.8852 6.65362C29.1072 7.22447 29.3736 8.0871 29.4434 9.66646C29.5195 11.379 29.5385 11.8928 29.5385 16.2249C29.5385 20.5634 29.5195 21.0772 29.4434 22.7834C29.3736 24.3691 29.1072 25.2254 28.8852 25.7963C28.5934 26.5511 28.2382 27.0965 27.6737 27.661C27.1029 28.2319 26.5637 28.5808 25.8089 28.8725C25.2381 29.0945 24.3755 29.3609 22.7961 29.4307C21.0835 29.5068 20.5698 29.5258 16.2376 29.5258C11.8991 29.5258 11.3854 29.5068 9.67915 29.4307C8.09344 29.3609 7.23716 29.0945 6.66631 28.8725C5.91151 28.5808 5.36603 28.2256 4.80152 27.661C4.23066 27.0902 3.88181 26.5511 3.59004 25.7963C3.36804 25.2254 3.10164 24.3628 3.03187 22.7834C2.95575 21.0709 2.93673 20.5571 2.93673 16.2249C2.93673 11.8864 2.95575 11.3727 3.03187 9.66646C3.10164 8.08075 3.36804 7.22447 3.59004 6.65362C3.88181 5.89882 4.237 5.35334 4.80152 4.78883C5.37237 4.21798 5.91151 3.86912 6.66631 3.57735C7.23716 3.35535 8.09978 3.08895 9.67915 3.01918C11.3854 2.94307 11.8991 2.92404 16.2376 2.92404ZM16.2376 0C11.8294 0 11.2775 0.0190285 9.54595 0.0951423C7.8207 0.171256 6.63459 0.45034 5.60705 0.849938C4.53512 1.26856 3.62809 1.82039 2.72741 2.72741C1.82039 3.62809 1.26856 4.53512 0.849938 5.60071C0.45034 6.63459 0.171256 7.81436 0.0951423 9.5396C0.0190285 11.2775 0 11.8294 0 16.2376C0 20.6459 0.0190285 21.1977 0.0951423 22.9293C0.171256 24.6545 0.45034 25.8407 0.849938 26.8682C1.26856 27.9401 1.82039 28.8472 2.72741 29.7478C3.62809 30.6485 4.53512 31.2067 5.60071 31.619C6.63459 32.0186 7.81436 32.2976 9.5396 32.3738C11.2712 32.4499 11.823 32.4689 16.2313 32.4689C20.6395 32.4689 21.1914 32.4499 22.923 32.3738C24.6482 32.2976 25.8343 32.0186 26.8619 31.619C27.9274 31.2067 28.8345 30.6485 29.7351 29.7478C30.6358 28.8472 31.194 27.9401 31.6063 26.8745C32.0059 25.8407 32.285 24.6609 32.3611 22.9356C32.4372 21.2041 32.4562 20.6522 32.4562 16.244C32.4562 11.8357 32.4372 11.2839 32.3611 9.55229C32.285 7.82704 32.0059 6.64093 31.6063 5.6134C31.2067 4.53512 30.6549 3.62809 29.7478 2.72741C28.8472 1.82673 27.9401 1.26856 26.8745 0.856281C25.8407 0.456683 24.6609 0.177599 22.9356 0.101485C21.1977 0.0190285 20.6459 0 16.2376 0Z"
                fill="white"
                />
                <path
                d="M16.2373 7.89697C11.6324 7.89697 7.89648 11.6329 7.89648 16.2378C7.89648 20.8427 11.6324 24.5786 16.2373 24.5786C20.8422 24.5786 24.5781 20.8427 24.5781 16.2378C24.5781 11.6329 20.8422 7.89697 16.2373 7.89697ZM16.2373 21.6482C13.2498 21.6482 10.8269 19.2253 10.8269 16.2378C10.8269 13.2503 13.2498 10.8274 16.2373 10.8274C19.2248 10.8274 21.6477 13.2503 21.6477 16.2378C21.6477 19.2253 19.2248 21.6482 16.2373 21.6482Z"
                fill="white"
                />
                <path
                d="M26.8554 7.56688C26.8554 8.64516 25.9801 9.51413 24.9082 9.51413C23.8299 9.51413 22.9609 8.63882 22.9609 7.56688C22.9609 6.4886 23.8362 5.61963 24.9082 5.61963C25.9801 5.61963 26.8554 6.49494 26.8554 7.56688Z"
                fill="white"
              />
              </g>
              <defs>
              <clipPath id="clip0_296_84">
                <rect width="32.4752" height="32.4752" fill="white" />
              </clipPath>
              </defs>
          </svg>
         </a>
          {/* youtube */}
          {/* <svg
          className='icon-svg'
          width="43"
          height="40"
          viewBox="0 0 43 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9 0L12 9V15H14V9L17 0H15L13 6L11 0H9ZM20 4C18.9336 4 18.4102 4.16797 17.7578 4.70312C17.1328 5.23047 16.9609 5.63672 17 7V12C17 12.9961 17.1641 13.6523 17.7656 14.2344C18.3906 14.8164 18.9805 15 20 15C21.0664 15 21.6484 14.8164 22.25 14.2344C22.875 13.6758 23 12.9961 23 12V7C23 6.11719 22.8438 5.28125 22.2383 4.72266C21.6133 4.14844 20.9688 4 20 4ZM25 4V13C25 13.9727 25.9805 15 27 15C28.0195 15 28.5586 14.4883 29 14V15H31V4H29V12C28.9883 12.6836 28.1836 13 28 13C27.793 13 27 12.957 27 12V4H25ZM20 6C20.3008 6 21 5.99609 21 7V12C21 12.9688 20.3242 13 20 13C19.6992 13 19 12.9883 19 12V7C19 6.18359 19.4336 6 20 6ZM21.457 16.9219C16.4141 16.9102 11.375 16.9219 6.33203 17C5.65234 17.0195 4.97266 17.1172 4.32422 17.3281C3.80078 17.5039 3.30078 17.7461 2.84766 18.0625C2.3125 18.4375 1.85156 18.9102 1.49219 19.4531C1.23828 19.832 1.03516 20.2461 0.882813 20.6758C0.632813 21.3672 0.519531 22.0977 0.5 22.8281C0.449219 26.1094 0.449219 29.3906 0.5 32.6719C0.519531 33.2969 0.601563 33.9141 0.765625 34.5195C1.08203 35.6602 1.6875 36.7266 2.57031 37.5273C2.82422 37.7578 3.09766 37.9648 3.39062 38.1445C3.75 38.3672 4.13672 38.5508 4.53906 38.6875C5.11719 38.8828 5.72266 38.9805 6.33203 39C16.4414 39.1875 26.5586 39.1562 36.668 39C37.3477 38.9805 38.0273 38.8828 38.6758 38.6719C39.1992 38.4961 39.6992 38.2539 40.1523 37.9375C40.6875 37.5625 41.1484 37.0898 41.5117 36.5469C41.7617 36.168 41.9648 35.7539 42.1211 35.3242C42.3672 34.6328 42.4805 33.9023 42.5 33.1719C42.5508 29.7539 42.5156 26.332 42.5 22.918C42.4883 22.1797 42.3828 21.4414 42.1406 20.7461C41.9961 20.3125 41.7969 19.8945 41.5469 19.5117C41.1953 18.9648 40.7383 18.4844 40.2109 18.1055C39.7422 17.7656 39.2227 17.5078 38.6758 17.3281C38 17.1094 37.293 17.0117 36.582 17C31.543 16.9766 26.5 16.9336 21.457 16.9219ZM29.0938 18.9375C31.6055 18.9414 34.1172 18.9609 36.625 19C37.0234 19.0117 37.4219 19.0586 37.8086 19.1562C38.4297 19.3203 39.0156 19.6289 39.4648 20.0898C39.6172 20.2461 39.75 20.4141 39.8711 20.5977C40.0391 20.8594 40.1719 21.1445 40.2656 21.4414C40.4219 21.9023 40.4844 22.3867 40.5 22.875C40.5508 26.293 40.5508 29.7109 40.5 33.125C40.4844 33.6133 40.4219 34.0977 40.2656 34.5586C40.1719 34.8555 40.0391 35.1406 39.8711 35.4023C39.75 35.5859 39.6172 35.7539 39.4648 35.9102C39.0156 36.3711 38.4297 36.6797 37.8086 36.8438C37.4219 36.9414 37.0234 36.9883 36.625 37C26.5664 37.1562 16.5039 37.0625 6.44141 37C6.01172 36.9922 5.58984 36.9297 5.17969 36.793C4.92188 36.7031 4.67188 36.5859 4.44141 36.4414C4.25391 36.3281 4.07422 36.1953 3.91406 36.0469C3.29687 35.4844 2.89062 34.7305 2.67969 33.9336C2.56641 33.5078 2.51562 33.0664 2.5 32.625C2.44922 29.3984 2.48437 26.168 2.5 22.9375C2.50781 22.4453 2.57031 21.957 2.71875 21.4883C2.8125 21.1875 2.94141 20.9023 3.10937 20.6367C3.23047 20.4414 3.375 20.2539 3.53516 20.0898C4 19.6133 4.60156 19.3047 5.24219 19.1445C5.65625 19.043 6.08203 19.0039 6.50391 19C14.0352 19 21.5664 18.9141 29.0938 18.9375ZM7 21V23H9V35H11V23H13V21H7ZM22 21V35H24V34C24.3867 34.4492 24.9492 35.0117 26 35C26.6211 34.9922 27.1016 34.4922 27.4219 34.0977C27.75 33.7031 28 33.2422 28 32.5V26.5C28 25.6367 27.7266 25.0508 27.3789 24.6094C27.0312 24.1719 26.5234 23.9375 25.875 23.9375C25.5469 23.9375 25.2227 24.0312 24.9023 24.1953C24.5742 24.3555 24.2305 24.6406 24 25V21H22ZM14 24V33C14 33.625 14.2695 33.9336 14.5 34.2344C14.7578 34.5625 15.3086 35 15.793 35C16.1836 35 16.6055 35.0156 17.0195 34.7812C17.4375 34.5742 17.6289 34.4375 18 34V35H20V24H18V32C17.8203 32.2344 17.8125 32.9922 17 33C16.2695 33.0078 16 32.2305 16 32V24H14ZM32.1992 24C31.25 24 30.3711 24.2305 29.9023 24.7109C29.3203 25.3086 29.0039 25.9805 29.0039 26.8867V31.5938C29.0039 32.6133 29.2812 33.4062 29.8125 33.9844C30.3438 34.5625 31.0859 34.8438 32.0352 34.8438C33.0742 34.8438 33.8672 34.5859 34.375 34.0273C34.9141 33.4961 35 32.6836 35 31.5938V31H33V31.5C33 32.1016 32.9414 32.5664 32.8008 32.7305C32.6641 32.9141 32.4062 32.9961 32 33C31.6328 33.0039 31.3555 32.9023 31.2188 32.6719C31.0742 32.4609 31 32.1055 31 31.5469V30H35V26.8867C35 25.8867 34.8359 25.2656 34.3203 24.7344C33.8164 24.2031 33.1484 24 32.1992 24ZM25 25.5C25.5508 25.5 26 26 26 27V32.0234C26 32.5742 25.5508 33 25 33C24.4492 33 24.0078 32.7891 24 32.5V26.5C24.0078 25.9961 24.4492 25.5 25 25.5ZM32 26C32.5508 26 33 26.3867 33 27V28H31V27C31.0078 26.4648 31.4492 26 32 26Z"
              fill="white"
            />
          </svg> */}
        </div>
      </main>
      <section style={{backgroundColor:"#AA8646"}} >
        <p className="text-white m-0 text-center py-3">© 2024 <span className="color-primary fw-bold"> Belito & Asociados</span> derechos reservados , Inc.</p>
      </section>
    </footer>
  )
}

export default Footer