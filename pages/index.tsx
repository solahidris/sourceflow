import Image from "next/image";
import Link from "next/link";

export default function Home() {

  return (
    <div className="min-h-screen w-[1440px] bg-white text-black">
      
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center navbar-div-style">
        {/* Frame 8 */}
        <div className="d-flex align-items-center gap-[46px]">
          {/* Logo */}
          <div>
            <span className="navbar-brand-text fw-bold">Software Recruitment co.</span>
          </div>
          {/* Menu */}
          <div>
            {/* Frame 7 */}
            <div className="md:flex md:gap-[30px] hidden md:block">
              {/* Frame 1 */}
              <div className="dropdown">
                <button className="btn dropdown-toggle navbar-dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  For jobseekers
                </button>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" href="/">new page</Link></li>
                </ul>
              </div>
              {/* Frame 2 */}
              <div className="dropdown">
                <button className="btn dropdown-toggle navbar-dropdown-toggle" custom-dropdown-toggle type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  For clients
                </button>
                <ul className="dropdown-menu ">
                  <li><Link className="dropdown-item" href="/">new page</Link></li>
                </ul>
              </div>
              {/* Frame 3 */}
              <div className="dropdown">
                <button className="btn dropdown-toggle navbar-dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Sectors
                </button>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" href="/">new page</Link></li>
                </ul>
              </div>
              {/* Frame 4 */}
              <div className="dropdown">
                <button className="btn dropdown-toggle navbar-dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Resources
                </button>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" href="/">new page</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Frame 5 */}
        <div className="flex gap-[10px]">
          <button type="button" className="navbar-right-button-yellow">Upload CV</button>
          <button type="button" className="navbar-right-button-orange">Contact us</button>
        </div>
        
      </div>

      {/* Hero */}
      <div className="hero-div-style d-flex align-items-center justify-content-center">
        {/* Container */}
        <div className="hero-container-style">
          {/* Frame 9 */}
          <div className="hero-frame-9">
            {/* Frame 11 */}
            <div>
              <span className="p-[6px] text-white text-[48px] lg:text-[16px]">Software Recruitment Specialists</span>
            </div>
            {/* Frame 14 */}
            <div className="gap-[10px]">
              <span className="text-[120px] lg:text-[66px] text-white fw-bold">Elevate your career</span>
              {/* Frame 13 */}
              <div className="hero-frame-13">
                {/* Frame 10 */}
                <input className="hero-frame-10" placeholder="E.g. networking"></input>
                {/* Frame 12 */}
                <button type="button" className="btn hero-frame-12 fw-bold">Search jobs</button>
              </div>
            </div>
          </div>
          <Image className="hero-image z-40 lg:relative lg:top-0 lg:right-0 absolute top-[250px] right-[-940px]" src="/9e7463bd63b976b8b0101bf9fc4e0467.jpeg" alt="next" width={800} height={800} />
        </div>
        {/* Orange Circle */}
        <div className="hero-circle-orange-container">
          <div className="hero-circle-orange"></div>
        </div>
        {/* Yellow Circle */}
        <div className="absolute top-[1100.54px] right-[-1010px] h-[416px] w-[680px] overflow-hidden lg:top-[549.52px] lg:left-[1200px] lg:h-[208px] lg:w-[240px]">
          <div className="absolute bottom-[-290px] right-[-0px] h-[580px] w-[580px] bg-transparent bg-[radial-gradient(circle_at_center,_#FCDF69_70%,_transparent_70%)] lg:bottom-[-82px] lg:right-[-50px] lg:h-[290px] lg:w-[290px]"></div>
        </div>
      </div>

      {/* Latest Clients */}
      <div className="clients-container-style">
        {/* Header */}
        <span className="text-[#D2D2D2] lg:text-[16px] text-[48px] lg:pb-0 pb-20">Who we work with</span>
        {/* Logos */}
        <div className="client-logo-container">
          <div><Image className="object-fit-contain lg:w-[181px] lg:h-[30px] w-[543px] h-[90px]" src="/microsoft.png" alt="next" width={181} height={30} /></div>
          <div><svg className="lg:w-[159px] lg:h-[22px] w-[477px] h-[66px]" width="159" height="22" viewBox="0 0 159 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M68.6184 14.0048H79.0423L73.5363 5.33814L63.4133 20.9915H58.8101L71.1218 2.21147C71.3902 1.83672 71.7468 1.53012 72.1618 1.31735C72.5768 1.10459 73.038 0.991847 73.5069 0.988583C73.9758 0.985319 74.4386 1.09162 74.8567 1.29859C75.2747 1.50556 75.6358 1.80717 75.9097 2.17814L88.2556 20.9915H83.6524L81.4841 17.4915H70.9371L68.6389 14.0048M116.47 17.4915V1.17814H112.557V19.0981C112.557 19.3472 112.608 19.5937 112.708 19.8229C112.808 20.0521 112.954 20.2591 113.139 20.4315C113.324 20.6161 113.545 20.7626 113.79 20.8623C114.034 20.9619 114.297 21.0126 114.562 21.0115H132.345L134.664 17.5115H116.449M51.7856 14.5781C53.6087 14.5781 55.3571 13.8722 56.6463 12.6158C57.9354 11.3593 58.6596 9.65509 58.6596 7.87814C58.6596 6.10119 57.9354 4.39702 56.6463 3.14052C55.3571 1.88403 53.6087 1.17814 51.7856 1.17814H34.686V20.9915H38.5916V4.68481H51.5462C52.4188 4.68481 53.2556 5.02265 53.8726 5.62402C54.4895 6.22538 54.8362 7.04101 54.8362 7.89147C54.8362 8.74193 54.4895 9.55756 53.8726 10.1589C53.2556 10.7603 52.4188 11.0981 51.5462 11.0981H40.5272L52.196 20.9915H57.8662L50.0278 14.5781H51.7856ZM10.6646 20.9915H22.4769C25.1261 20.9245 27.6436 19.8517 29.4929 18.0018C31.3423 16.1518 32.3773 13.6711 32.3773 11.0881C32.3773 8.50523 31.3423 6.02445 29.4929 4.17452C27.6436 2.32459 25.1261 1.2518 22.4769 1.18481H10.6646C9.30808 1.1505 7.95828 1.38128 6.69476 1.86355C5.43124 2.34581 4.27959 3.06979 3.30772 3.9928C2.33586 4.9158 1.56345 6.01914 1.03605 7.23774C0.50865 8.45635 0.236938 9.76555 0.236938 11.0881C0.236938 12.4107 0.50865 13.7199 1.03605 14.9385C1.56345 16.1571 2.33586 17.2605 3.30772 18.1835C4.27959 19.1065 5.43124 19.8305 6.69476 20.3127C7.95828 20.795 9.30808 21.0258 10.6646 20.9915ZM22.2102 17.5048H10.9245C9.21699 17.4511 7.59787 16.7523 6.40949 15.556C5.22112 14.3598 4.55668 12.7599 4.55668 11.0948C4.55668 9.42968 5.22112 7.82984 6.40949 6.63359C7.59787 5.43734 9.21699 4.73848 10.9245 4.68481H22.2102C23.0917 4.65709 23.9699 4.80239 24.7926 5.11205C25.6153 5.42171 26.3658 5.88942 26.9994 6.48738C27.633 7.08534 28.1368 7.80135 28.4809 8.59285C28.8249 9.38435 29.0022 10.2352 29.0022 11.0948C29.0022 11.9544 28.8249 12.8053 28.4809 13.5968C28.1368 14.3883 27.633 15.1043 26.9994 15.7022C26.3658 16.3002 25.6153 16.7679 24.7926 17.0776C23.9699 17.3872 23.0917 17.5325 22.2102 17.5048ZM96.4155 20.9915H108.474L110.759 17.5048H96.6822C95.8007 17.5325 94.9225 17.3872 94.0998 17.0776C93.2771 16.7679 92.5266 16.3002 91.893 15.7022C91.2594 15.1043 90.7556 14.3883 90.4116 13.5968C90.0675 12.8053 89.8902 11.9544 89.8902 11.0948C89.8902 10.2352 90.0675 9.38435 90.4116 8.59285C90.7556 7.80135 91.2594 7.08534 91.893 6.48738C92.5266 5.88942 93.2771 5.42171 94.0998 5.11205C94.9225 4.80239 95.8007 4.65709 96.6822 4.68481H108.139L110.451 1.18481H96.4155C95.059 1.1505 93.7092 1.38128 92.4457 1.86355C91.1821 2.34581 90.0305 3.06979 89.0586 3.9928C88.0868 4.9158 87.3144 6.01914 86.787 7.23774C86.2596 8.45635 85.9878 9.76555 85.9878 11.0881C85.9878 12.4107 86.2596 13.7199 86.787 14.9385C87.3144 16.1571 88.0868 17.2605 89.0586 18.1835C90.0305 19.1065 91.1821 19.8305 92.4457 20.3127C93.7092 20.795 95.059 21.0258 96.4155 20.9915ZM144.205 17.5048C142.772 17.5053 141.378 17.0498 140.235 16.2075C139.092 15.3652 138.262 14.1821 137.872 12.8381H154.575L156.873 9.3448H137.872C138.261 8.00024 139.09 6.81655 140.234 5.97408C141.377 5.1316 142.772 4.67651 144.205 4.67814H155.669L157.96 1.17814H143.939C141.289 1.24514 138.772 2.31792 136.923 4.16785C135.073 6.01778 134.038 8.49856 134.038 11.0815C134.038 13.6644 135.073 16.1452 136.923 17.9951C138.772 19.845 141.289 20.9178 143.939 20.9848H155.997L158.289 17.4981H144.199" fill="#C74634"/></svg></div>
          <div><svg className="lg:w-[183px] lg:h-[22px] w-[549px] h-[66px]" width="183" height="22" viewBox="0 0 183 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.14573 10.0349C7.07942 9.95036 6.99185 9.88392 6.89148 9.842C6.79111 9.80008 6.68134 9.78409 6.57277 9.79558C6.46421 9.80707 6.36052 9.84565 6.27174 9.90759C6.18295 9.96954 6.11207 10.0527 6.06594 10.1492L0.59451 20.8065C0.544666 20.9036 0.521132 21.0115 0.526143 21.12C0.531154 21.2285 0.564544 21.3339 0.623142 21.4263C0.681739 21.5187 0.7636 21.5949 0.860952 21.6478C0.958304 21.7007 1.06792 21.7284 1.17938 21.7285H8.79807C8.92009 21.7312 9.04031 21.6994 9.14414 21.6369C9.24796 21.5744 9.33092 21.4838 9.38294 21.3763C11.0264 18.0678 10.0304 13.0374 7.14573 10.0349Z" fill="url(#paint0_linear_1_59)"/>
            <path d="M11.1588 0.341552C9.79543 2.38517 9.00094 4.739 8.85325 7.17203C8.70556 9.60507 9.20975 12.0337 10.3163 14.2196L13.9894 21.3762C14.0437 21.4821 14.1272 21.5711 14.2305 21.6333C14.3338 21.6955 14.4528 21.7284 14.5743 21.7285H22.1916C22.303 21.7284 22.4126 21.7007 22.51 21.6478C22.6074 21.5949 22.6892 21.5187 22.7478 21.4263C22.8064 21.3339 22.8398 21.2285 22.8448 21.12C22.8498 21.0115 22.8263 20.9036 22.7764 20.8065C22.7764 20.8065 12.5286 0.837031 12.271 0.337553C12.2201 0.235884 12.1408 0.150256 12.0422 0.0904927C11.9436 0.0307294 11.8297 -0.000749033 11.7136 -0.000331595C11.5975 8.58427e-05 11.4838 0.0323822 11.3857 0.0928528C11.2876 0.153323 11.2089 0.239519 11.1588 0.341552Z" fill="#2684FF"/>
            <path d="M100.506 8.88665C100.506 11.5256 101.763 13.6209 106.678 14.5458C109.61 15.1456 110.225 15.6068 110.225 16.5591C110.225 17.4841 109.609 18.0828 107.543 18.0828C105.047 18.0391 102.601 17.3942 100.422 16.2055V20.5039C101.902 21.2113 103.857 22.0003 107.488 22.0003C112.626 22.0003 114.665 19.7679 114.665 16.4501M114.665 16.4501C114.665 13.3213 112.962 11.8519 108.158 10.8456C105.505 10.2741 104.863 9.70301 104.863 8.88665C104.863 7.85371 105.812 7.41754 107.572 7.41754C109.694 7.41754 111.789 8.0433 113.771 8.91397V4.80553C111.87 3.9625 109.8 3.54423 107.711 3.58132C102.963 3.58132 100.506 5.59456 100.506 8.88665" fill="#0052CC"/>
            <path d="M166.524 3.85323V21.7285H170.433V8.09762L172.081 11.7159L177.611 21.7285H182.526V3.85323H178.616V15.3892L177.136 12.0425L172.696 3.85323H166.524Z" fill="#0052CC"/>
            <path d="M141.656 3.85323H137.383V21.7285H141.656V3.85323Z" fill="#0052CC"/>
            <path d="M132.453 16.4501C132.453 13.3213 130.749 11.8519 125.946 10.8456C123.293 10.2741 122.65 9.70301 122.65 8.88665C122.65 7.85371 123.6 7.41754 125.359 7.41754C127.482 7.41754 129.576 8.0433 131.559 8.91397V4.80553C129.658 3.9625 127.587 3.54423 125.499 3.58132C120.751 3.58132 118.293 5.59456 118.293 8.88665C118.293 11.5256 119.55 13.6209 124.465 14.5458C127.398 15.1456 128.012 15.6068 128.012 16.5591C128.012 17.4841 127.397 18.0828 125.331 18.0828C122.835 18.0391 120.388 17.3942 118.21 16.2055V20.5039C119.69 21.2113 121.645 22.0003 125.275 22.0003C130.414 22.0003 132.453 19.7679 132.453 16.4501Z" fill="#0052CC"/>
            <path d="M67.3123 3.85323V21.7285H76.095L77.4778 17.8649H71.613V3.85323H67.3123Z" fill="#0052CC"/>
            <path d="M49.9605 3.85323V7.71643H54.7082V21.7285H59.0089V7.71643H64.0918V3.85323H49.9605Z" fill="#0052CC"/>
            <path d="M43.7243 3.85323H38.088L31.6897 21.7285H36.5759L37.483 18.7179C39.7169 19.357 42.0924 19.357 44.3263 18.7179L45.2334 21.7285H50.1206L43.7243 3.85323ZM40.906 15.4945C40.1101 15.4944 39.3182 15.3835 38.5546 15.1649L40.906 7.36423L43.2575 15.1676C42.4937 15.3852 41.7018 15.4953 40.906 15.4945Z" fill="#0052CC"/>
            <path d="M91.2359 3.85323H85.5999L79.2016 21.7285H84.0889L84.9959 18.7179C87.2299 19.357 89.6053 19.357 91.8392 18.7179L92.7463 21.7285H97.6335L91.2359 3.85323ZM88.4179 15.4945C87.622 15.4944 86.8301 15.3835 86.0665 15.1649L88.4179 7.36423L90.7694 15.1676C90.0055 15.3852 89.2137 15.4953 88.4179 15.4945Z" fill="#0052CC"/>
            <path d="M157.054 3.85323H151.418L145.019 21.7285H149.906L150.814 18.7179C153.047 19.357 155.423 19.357 157.657 18.7179L158.564 21.7285H163.452L157.054 3.85323ZM154.234 15.4945C153.438 15.4944 152.646 15.3835 151.882 15.1649L154.234 7.36423L156.585 15.1676C155.821 15.3852 155.03 15.4953 154.234 15.4945Z" fill="#0052CC"/>
            <defs>
            <linearGradient id="paint0_linear_1_59" x1="10.1443" y1="11.6796" x2="4.59352" y2="21.5485" gradientUnits="userSpaceOnUse">
            <stop stop-color="#0052CC"/>
            <stop offset="0.923" stop-color="#2684FF"/>
            </linearGradient>
            </defs>
            </svg>
          </div>
          <div><Image className="object-fit-contain lg:w-[238px] lg:h-[60px] w-[595px] h-[150px]" src="/cloudflare.png" alt="next" width={238} height={60} /></div>
          <div><Image className="object-fit-contain lg:w-[160px] lg:h-[53px] w-[480px] h-[159px]" src="/vmware.png" alt="next" width={160} height={53} /></div>
        </div>
      </div>

      {/* Latest Jobs */}
      <div className="latest-job-container">
        <div className="d-flex flex-column gap-[30px]">
          {/* Title */}
          <span className="latest-job-header fw-bold text-center">Latest Jobs</span>
          {/* Sliders */}
          <div className="d-flex justify-content-between lg:gap-[40px] gap-[80px] flex-col lg:flex-row items-center">
            {/* Slider Yellow */}
            <div className="latest-job-slider-yellow">
              
              {/* Tag */}
              <div className="d-flex">
              <div className="d-flex align-items-center bg-white latest-job-tag">
                <svg className="w-[54px] h-[54px] lg:w-[18px] lg:h-[18px]" width="18" height="18" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.68875 9.23567H10.9348C10.9348 9.23567 12.7588 9.26492 12.7588 7.47317V4.50992C12.7588 4.50992 13.0355 2.71667 9.452 2.71667C6.0215 2.71667 6.23525 4.20392 6.23525 4.20392L6.23975 5.74517H9.512V6.20792H4.94C4.94 6.20792 2.74475 5.95892 2.74475 9.41942C2.74475 12.8799 4.661 12.7569 4.661 12.7569H5.804V11.1512C5.804 11.1512 5.74175 9.23567 7.68875 9.23567ZM7.64675 4.93067C7.49061 4.93067 7.34085 4.86864 7.23044 4.75823C7.12003 4.64781 7.058 4.49806 7.058 4.34192C7.058 4.18577 7.12003 4.03602 7.23044 3.92561C7.34085 3.8152 7.49061 3.75317 7.64675 3.75317C7.8029 3.75317 7.95265 3.8152 8.06306 3.92561C8.17347 4.03602 8.2355 4.18577 8.2355 4.34192C8.2355 4.49806 8.17347 4.64781 8.06306 4.75823C7.95265 4.86864 7.8029 4.93067 7.64675 4.93067Z" fill="#064EA4"/>
                  <path d="M14.339 6.11567H13.196V7.72142C13.196 7.72142 13.2582 9.63692 11.3112 9.63692H8.06522C8.06522 9.63692 6.24122 9.60692 6.24122 11.3994V14.3627C6.24122 14.3627 5.96447 16.1559 9.54797 16.1559C12.9777 16.1559 12.764 14.6687 12.764 14.6687L12.7595 13.1282H9.48722V12.6654H14.06C14.06 12.6654 16.2552 12.9144 16.2552 9.45392C16.2552 5.99342 14.339 6.11567 14.339 6.11567ZM11.3532 13.9427C11.5094 13.9427 11.6591 14.0047 11.7695 14.1151C11.8799 14.2255 11.942 14.3753 11.942 14.5314C11.942 14.6876 11.8799 14.8373 11.7695 14.9477C11.6591 15.0581 11.5094 15.1202 11.3532 15.1202C11.1971 15.1202 11.0473 15.0581 10.9369 14.9477C10.8265 14.8373 10.7645 14.6876 10.7645 14.5314C10.7645 14.3753 10.8265 14.2255 10.9369 14.1151C11.0473 14.0047 11.1971 13.9427 11.3532 13.9427Z" fill="#064EA4"/>
                </svg>
                <span className="text-[28px] lg:text-[14px] lh-1">Python</span>
              </div>
              </div>

              {/* Job Title */}
              <span className="latest-job-title fw-bold">Software Engineer</span>
              
              <div className="d-flex flex-column gap-[10px]">
                {/* Location */}
                <div className="d-flex lg:gap-[10px] gap-[20px]">
                  <svg className="lg:w-[24px] lg:h-[24px] w-[48px] h-[48px]" width="24" height="24" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.5 2.46667C8.63 2.46667 5.5 5.59667 5.5 9.46667C5.5 14.7167 12.5 22.4667 12.5 22.4667C12.5 22.4667 19.5 14.7167 19.5 9.46667C19.5 5.59667 16.37 2.46667 12.5 2.46667ZM12.5 11.9667C11.837 11.9667 11.2011 11.7033 10.7322 11.2344C10.2634 10.7656 10 10.1297 10 9.46667C10 8.80363 10.2634 8.16775 10.7322 7.69891C11.2011 7.23007 11.837 6.96667 12.5 6.96667C13.163 6.96667 13.7989 7.23007 14.2678 7.69891C14.7366 8.16775 15 8.80363 15 9.46667C15 10.1297 14.7366 10.7656 14.2678 11.2344C13.7989 11.7033 13.163 11.9667 12.5 11.9667Z" fill="#064EA4"/>
                  </svg>
                  <span className="lg:text-[16px] text-[32px]">London</span>
                </div>
                {/* Salary */}
                <div className="d-flex gap-[10px]">
                  <svg className="lg:w-[24px] lg:h-[24px] w-[48px] h-[48px]" width="24" height="24" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.5 6.46667H21.5V18.4667H3.5V6.46667ZM12.5 9.46667C13.2956 9.46667 14.0587 9.78274 14.6213 10.3454C15.1839 10.908 15.5 11.671 15.5 12.4667C15.5 13.2623 15.1839 14.0254 14.6213 14.588C14.0587 15.1506 13.2956 15.4667 12.5 15.4667C11.7044 15.4667 10.9413 15.1506 10.3787 14.588C9.81607 14.0254 9.5 13.2623 9.5 12.4667C9.5 11.671 9.81607 10.908 10.3787 10.3454C10.9413 9.78274 11.7044 9.46667 12.5 9.46667ZM7.5 8.46667C7.5 8.99711 7.28929 9.50582 6.91421 9.88089C6.53914 10.256 6.03043 10.4667 5.5 10.4667V14.4667C6.03043 14.4667 6.53914 14.6774 6.91421 15.0525C7.28929 15.4275 7.5 15.9362 7.5 16.4667H17.5C17.5 15.9362 17.7107 15.4275 18.0858 15.0525C18.4609 14.6774 18.9696 14.4667 19.5 14.4667V10.4667C18.9696 10.4667 18.4609 10.256 18.0858 9.88089C17.7107 9.50582 17.5 8.99711 17.5 8.46667H7.5Z" fill="#064EA4"/>
                  </svg>
                  <span className="lg:text-[16px] text-[32px]">£65,000</span>
                </div>
              </div>
              
              {/* Description */}
              <span className="lg:text-[16px] text-[32px]">Odio mi amet commodo convallis nunc. Tincidunt mauris eu egestas eget in aliquam.</span>

              {/* Button Primary */}
              <button type="button" className="latest-job-button-primary">View this job</button>

              {/* Date */}
              <span className="latest-job-posted-date">Posted on 29/08/2023</span>

            </div>
            {/* Slider Blue */}
            <div className="latest-job-slider-blue">
              
               {/* Tag */}
               <div className="d-flex gap-[10px]">
              <div className="d-flex align-items-center bg-white latest-job-tag">
                <svg className="w-[54px] h-[54px] lg:w-[18px] lg:h-[18px]" width="18" height="18" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.68875 9.23567H10.9348C10.9348 9.23567 12.7588 9.26492 12.7588 7.47317V4.50992C12.7588 4.50992 13.0355 2.71667 9.452 2.71667C6.0215 2.71667 6.23525 4.20392 6.23525 4.20392L6.23975 5.74517H9.512V6.20792H4.94C4.94 6.20792 2.74475 5.95892 2.74475 9.41942C2.74475 12.8799 4.661 12.7569 4.661 12.7569H5.804V11.1512C5.804 11.1512 5.74175 9.23567 7.68875 9.23567ZM7.64675 4.93067C7.49061 4.93067 7.34085 4.86864 7.23044 4.75823C7.12003 4.64781 7.058 4.49806 7.058 4.34192C7.058 4.18577 7.12003 4.03602 7.23044 3.92561C7.34085 3.8152 7.49061 3.75317 7.64675 3.75317C7.8029 3.75317 7.95265 3.8152 8.06306 3.92561C8.17347 4.03602 8.2355 4.18577 8.2355 4.34192C8.2355 4.49806 8.17347 4.64781 8.06306 4.75823C7.95265 4.86864 7.8029 4.93067 7.64675 4.93067Z" fill="#064EA4"/>
                  <path d="M14.339 6.11567H13.196V7.72142C13.196 7.72142 13.2582 9.63692 11.3112 9.63692H8.06522C8.06522 9.63692 6.24122 9.60692 6.24122 11.3994V14.3627C6.24122 14.3627 5.96447 16.1559 9.54797 16.1559C12.9777 16.1559 12.764 14.6687 12.764 14.6687L12.7595 13.1282H9.48722V12.6654H14.06C14.06 12.6654 16.2552 12.9144 16.2552 9.45392C16.2552 5.99342 14.339 6.11567 14.339 6.11567ZM11.3532 13.9427C11.5094 13.9427 11.6591 14.0047 11.7695 14.1151C11.8799 14.2255 11.942 14.3753 11.942 14.5314C11.942 14.6876 11.8799 14.8373 11.7695 14.9477C11.6591 15.0581 11.5094 15.1202 11.3532 15.1202C11.1971 15.1202 11.0473 15.0581 10.9369 14.9477C10.8265 14.8373 10.7645 14.6876 10.7645 14.5314C10.7645 14.3753 10.8265 14.2255 10.9369 14.1151C11.0473 14.0047 11.1971 13.9427 11.3532 13.9427Z" fill="#064EA4"/>
                </svg>
                <span className="text-[28px] lg:text-[14px] lh-1 text-[#064EA4]">Python</span>
              </div>
              </div>

              {/* Job Title */}
              <span className="latest-job-title fw-bold">Software Engineer</span>
              
              <div className="d-flex flex-column gap-[10px]">
                {/* Location */}
                <div className="d-flex lg:gap-[10px] gap-[20px]">
                  <svg className="lg:w-[24px] lg:h-[24px] w-[48px] h-[48px]" width="24" height="24" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.5 2.46667C8.63 2.46667 5.5 5.59667 5.5 9.46667C5.5 14.7167 12.5 22.4667 12.5 22.4667C12.5 22.4667 19.5 14.7167 19.5 9.46667C19.5 5.59667 16.37 2.46667 12.5 2.46667ZM12.5 11.9667C11.837 11.9667 11.2011 11.7033 10.7322 11.2344C10.2634 10.7656 10 10.1297 10 9.46667C10 8.80363 10.2634 8.16775 10.7322 7.69891C11.2011 7.23007 11.837 6.96667 12.5 6.96667C13.163 6.96667 13.7989 7.23007 14.2678 7.69891C14.7366 8.16775 15 8.80363 15 9.46667C15 10.1297 14.7366 10.7656 14.2678 11.2344C13.7989 11.7033 13.163 11.9667 12.5 11.9667Z" fill="#FFFFFF"/>
                  </svg>
                  <span className="lg:text-[16px] text-[32px]">London</span>
                </div>
                {/* Salary */}
                <div className="d-flex gap-[10px]">
                  <svg className="lg:w-[24px] lg:h-[24px] w-[48px] h-[48px]" width="24" height="24" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.5 6.46667H21.5V18.4667H3.5V6.46667ZM12.5 9.46667C13.2956 9.46667 14.0587 9.78274 14.6213 10.3454C15.1839 10.908 15.5 11.671 15.5 12.4667C15.5 13.2623 15.1839 14.0254 14.6213 14.588C14.0587 15.1506 13.2956 15.4667 12.5 15.4667C11.7044 15.4667 10.9413 15.1506 10.3787 14.588C9.81607 14.0254 9.5 13.2623 9.5 12.4667C9.5 11.671 9.81607 10.908 10.3787 10.3454C10.9413 9.78274 11.7044 9.46667 12.5 9.46667ZM7.5 8.46667C7.5 8.99711 7.28929 9.50582 6.91421 9.88089C6.53914 10.256 6.03043 10.4667 5.5 10.4667V14.4667C6.03043 14.4667 6.53914 14.6774 6.91421 15.0525C7.28929 15.4275 7.5 15.9362 7.5 16.4667H17.5C17.5 15.9362 17.7107 15.4275 18.0858 15.0525C18.4609 14.6774 18.9696 14.4667 19.5 14.4667V10.4667C18.9696 10.4667 18.4609 10.256 18.0858 9.88089C17.7107 9.50582 17.5 8.99711 17.5 8.46667H7.5Z" fill="#FFFFFF"/>
                  </svg>
                  <span className="lg:text-[16px] text-[32px]">£65,000</span>
                </div>
              </div>
              
              {/* Description */}
              <span className="lg:text-[16px] text-[32px]">Odio mi amet commodo convallis nunc. Tincidunt mauris eu egestas eget in aliquam.</span>

              {/* Button Primary */}
              <button type="button" className="latest-job-button-primary text-[#064EA4]">View this job</button>

              {/* Date */}
              <span className="latest-job-posted-date">Posted on 29/08/2023</span>

            </div>
            {/* Slider Orange */}
            <div className="latest-job-slider-orange">
              {/* Tag */}
              <div className="d-flex lg:gap-[10px] gap-[20px]">
              <div className="d-flex align-items-center bg-white latest-job-tag">
                <svg className="w-[54px] h-[54px] lg:w-[18px] lg:h-[18px]" width="18" height="18" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.68875 9.23567H10.9348C10.9348 9.23567 12.7588 9.26492 12.7588 7.47317V4.50992C12.7588 4.50992 13.0355 2.71667 9.452 2.71667C6.0215 2.71667 6.23525 4.20392 6.23525 4.20392L6.23975 5.74517H9.512V6.20792H4.94C4.94 6.20792 2.74475 5.95892 2.74475 9.41942C2.74475 12.8799 4.661 12.7569 4.661 12.7569H5.804V11.1512C5.804 11.1512 5.74175 9.23567 7.68875 9.23567ZM7.64675 4.93067C7.49061 4.93067 7.34085 4.86864 7.23044 4.75823C7.12003 4.64781 7.058 4.49806 7.058 4.34192C7.058 4.18577 7.12003 4.03602 7.23044 3.92561C7.34085 3.8152 7.49061 3.75317 7.64675 3.75317C7.8029 3.75317 7.95265 3.8152 8.06306 3.92561C8.17347 4.03602 8.2355 4.18577 8.2355 4.34192C8.2355 4.49806 8.17347 4.64781 8.06306 4.75823C7.95265 4.86864 7.8029 4.93067 7.64675 4.93067Z" fill="#064EA4"/>
                  <path d="M14.339 6.11567H13.196V7.72142C13.196 7.72142 13.2582 9.63692 11.3112 9.63692H8.06522C8.06522 9.63692 6.24122 9.60692 6.24122 11.3994V14.3627C6.24122 14.3627 5.96447 16.1559 9.54797 16.1559C12.9777 16.1559 12.764 14.6687 12.764 14.6687L12.7595 13.1282H9.48722V12.6654H14.06C14.06 12.6654 16.2552 12.9144 16.2552 9.45392C16.2552 5.99342 14.339 6.11567 14.339 6.11567ZM11.3532 13.9427C11.5094 13.9427 11.6591 14.0047 11.7695 14.1151C11.8799 14.2255 11.942 14.3753 11.942 14.5314C11.942 14.6876 11.8799 14.8373 11.7695 14.9477C11.6591 15.0581 11.5094 15.1202 11.3532 15.1202C11.1971 15.1202 11.0473 15.0581 10.9369 14.9477C10.8265 14.8373 10.7645 14.6876 10.7645 14.5314C10.7645 14.3753 10.8265 14.2255 10.9369 14.1151C11.0473 14.0047 11.1971 13.9427 11.3532 13.9427Z" fill="#064EA4"/>
                </svg>
                <span className="text-[28px] lg:text-[14px] lh-1">Python</span>
              </div>
              </div>
              {/* Job Title */}
              <span className="latest-job-title fw-bold">Software Engineer</span>
            
              <div className="d-flex flex-column gap-[10px]">
                {/* Location */}
                <div className="d-flex gap-[10px]">
                  <svg className="lg:w-[24px] lg:h-[24px] w-[48px] h-[48px]" width="24" height="24" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.5 2.46667C8.63 2.46667 5.5 5.59667 5.5 9.46667C5.5 14.7167 12.5 22.4667 12.5 22.4667C12.5 22.4667 19.5 14.7167 19.5 9.46667C19.5 5.59667 16.37 2.46667 12.5 2.46667ZM12.5 11.9667C11.837 11.9667 11.2011 11.7033 10.7322 11.2344C10.2634 10.7656 10 10.1297 10 9.46667C10 8.80363 10.2634 8.16775 10.7322 7.69891C11.2011 7.23007 11.837 6.96667 12.5 6.96667C13.163 6.96667 13.7989 7.23007 14.2678 7.69891C14.7366 8.16775 15 8.80363 15 9.46667C15 10.1297 14.7366 10.7656 14.2678 11.2344C13.7989 11.7033 13.163 11.9667 12.5 11.9667Z" fill="#064EA4"/>
                  </svg>
                  <span className="lg:text-[16px] text-[32px]">London</span>
                </div>
                {/* Salary */}
                <div className="d-flex gap-[10px]">
                  <svg className="lg:w-[24px] lg:h-[24px] w-[48px] h-[48px]" width="24" height="24" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.5 6.46667H21.5V18.4667H3.5V6.46667ZM12.5 9.46667C13.2956 9.46667 14.0587 9.78274 14.6213 10.3454C15.1839 10.908 15.5 11.671 15.5 12.4667C15.5 13.2623 15.1839 14.0254 14.6213 14.588C14.0587 15.1506 13.2956 15.4667 12.5 15.4667C11.7044 15.4667 10.9413 15.1506 10.3787 14.588C9.81607 14.0254 9.5 13.2623 9.5 12.4667C9.5 11.671 9.81607 10.908 10.3787 10.3454C10.9413 9.78274 11.7044 9.46667 12.5 9.46667ZM7.5 8.46667C7.5 8.99711 7.28929 9.50582 6.91421 9.88089C6.53914 10.256 6.03043 10.4667 5.5 10.4667V14.4667C6.03043 14.4667 6.53914 14.6774 6.91421 15.0525C7.28929 15.4275 7.5 15.9362 7.5 16.4667H17.5C17.5 15.9362 17.7107 15.4275 18.0858 15.0525C18.4609 14.6774 18.9696 14.4667 19.5 14.4667V10.4667C18.9696 10.4667 18.4609 10.256 18.0858 9.88089C17.7107 9.50582 17.5 8.99711 17.5 8.46667H7.5Z" fill="#064EA4"/>
                  </svg>
                  <span className="lg:text-[16px] text-[32px]">£65,000</span>
                </div>
              </div>
              {/* Description */}
              <span className="lg:text-[16px] text-[32px]">Odio mi amet commodo convallis nunc. Tincidunt mauris eu egestas eget in aliquam.</span>
              {/* Button Primary */}
              <button type="button" className="latest-job-button-primary">View this job</button>
              {/* Date */}
              <span className="latest-job-posted-date">Posted on 29/08/2023</span>
            </div>
          </div>
          {/* Footer */}
          <div className="d-flex justify-content-between align-items-center lg:h-[50.11px] h-[150px] lg:w-full w-[746px] mx-auto">
            {/* Slider Controls */}
            <div className="d-flex lg:gap-[15px] gap-[30px]">
              <button type="button"><svg className="lg:w-[40px] lg:h-[40px] w-[80px] h-[80px]" width="40" height="40" viewBox="0 0 34 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.333313 17.5205C0.333313 26.7205 7.79998 34.1872 17 34.1872C26.2 34.1872 33.6667 26.7205 33.6667 17.5205C33.6667 8.32049 26.2 0.853821 17 0.853821C7.79998 0.853821 0.333313 8.32049 0.333313 17.5205ZM17 15.8538H23.6667V19.1872H17V24.1872L10.3333 17.5205L17 10.8538V15.8538Z" fill="#0E2152" fill-opacity="0.5"/>
              </svg></button>
              <button type="button"><svg className="lg:w-[40px] lg:h-[40px] w-[80px] h-[80px]" width="40" height="40" viewBox="0 0 34 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M33.6667 17.5205C33.6667 8.32049 26.2 0.853821 17 0.853821C7.79998 0.853821 0.333313 8.32049 0.333313 17.5205C0.333313 26.7205 7.79998 34.1872 17 34.1872C26.2 34.1872 33.6667 26.7205 33.6667 17.5205ZM17 19.1872H10.3333V15.8538H17V10.8538L23.6667 17.5205L17 24.1872V19.1872Z" fill="#0E2152"/>
              </svg></button>
            </div>
            {/* View More Jobs */}
            <div className="p-[10px]">
              <button className="latest-job-view-more lg:text-[16px] text-[32px]">View more jobs</button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="footer-container-style">
        <div className="d-flex justify-content-between lg:gap-[24px] gap-[72px] w-full lg:flex-row flex-col">

          <div className="d-flex flex-column lg:gap-[30px] gap-[60px] w-full">
            <span className="fw-bold lg:text-[19px] text-[80px]">Software Recruitment co.</span>
            <div className="d-flex lg:gap-[20px] gap-[100px]">
              <div className="lg:w-[22px] lg:h-[24px] w-[88px] h-[96px]">
                <Link href="/"><svg className="lg:w-[22px] lg:h-[21px] w-[88px] h-[84px]" width="22" height="21" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.92446 21.5745H0.363393V7.55423H4.92446V21.5745ZM2.64147 5.64173C1.18299 5.64173 0 4.48861 0 3.09642C1.04392e-08 2.4277 0.278297 1.78637 0.77367 1.31351C1.26904 0.84066 1.94091 0.575012 2.64147 0.575012C3.34204 0.575012 4.0139 0.84066 4.50928 1.31351C5.00465 1.78637 5.28295 2.4277 5.28295 3.09642C5.28295 4.48861 4.09946 5.64173 2.64147 5.64173ZM21.9951 21.5745H17.4438V14.7495C17.4438 13.123 17.4095 11.037 15.0725 11.037C12.7011 11.037 12.3377 12.8042 12.3377 14.6324V21.5745H7.78152V7.55423H12.156V9.46673H12.2198C12.8287 8.36517 14.3162 7.20267 16.5354 7.20267C21.1514 7.20267 22 10.1042 22 13.873V21.5745H21.9951Z" fill="white"/>
                </svg></Link>
              </div>
              <div className="lg:w-[24px] lg:h-[24px] w-[96px] h-[96px] p-[2px] d-flex justify-content-center align-items-center">
                <Link href="/"><svg className="lg:w-[20px] lg:h-[20px] w-[80px] h-[80px]" width="20" height="20" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 10.5743C20 5.05434 15.52 0.574341 10 0.574341C4.48 0.574341 0 5.05434 0 10.5743C0 15.4143 3.44 19.4443 8 20.3743V13.5743H6V10.5743H8V8.07434C8 6.14434 9.57 4.57434 11.5 4.57434H14V7.57434H12C11.45 7.57434 11 8.02434 11 8.57434V10.5743H14V13.5743H11V20.5243C16.05 20.0243 20 15.7643 20 10.5743Z" fill="white"/>
                </svg></Link>
              </div>
              <div className="lg:w-[24px] lg:h-[24px] w-[96px] h-[96px] p-[2px] d-flex justify-content-center align-items-center">
                <Link href="/"><svg className="lg:w-[20px] lg:h-[20px] w-[80px] h-[80px]" width="20" height="20" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.8 0.574341H14.2C17.4 0.574341 20 3.17434 20 6.37434V14.7743C20 16.3126 19.3889 17.7878 18.3012 18.8756C17.2135 19.9633 15.7383 20.5743 14.2 20.5743H5.8C2.6 20.5743 0 17.9743 0 14.7743V6.37434C0 4.83609 0.61107 3.36083 1.69878 2.27312C2.78649 1.18541 4.26174 0.574341 5.8 0.574341ZM5.6 2.57434C4.64522 2.57434 3.72955 2.95363 3.05442 3.62876C2.37928 4.30389 2 5.21956 2 6.17434V14.9743C2 16.9643 3.61 18.5743 5.6 18.5743H14.4C15.3548 18.5743 16.2705 18.1951 16.9456 17.5199C17.6207 16.8448 18 15.9291 18 14.9743V6.17434C18 4.18434 16.39 2.57434 14.4 2.57434H5.6ZM15.25 4.07434C15.5815 4.07434 15.8995 4.20604 16.1339 4.44046C16.3683 4.67488 16.5 4.99282 16.5 5.32434C16.5 5.65586 16.3683 5.9738 16.1339 6.20822C15.8995 6.44264 15.5815 6.57434 15.25 6.57434C14.9185 6.57434 14.6005 6.44264 14.3661 6.20822C14.1317 5.9738 14 5.65586 14 5.32434C14 4.99282 14.1317 4.67488 14.3661 4.44046C14.6005 4.20604 14.9185 4.07434 15.25 4.07434ZM10 5.57434C11.3261 5.57434 12.5979 6.10112 13.5355 7.03881C14.4732 7.97649 15 9.24826 15 10.5743C15 11.9004 14.4732 13.1722 13.5355 14.1099C12.5979 15.0476 11.3261 15.5743 10 15.5743C8.67392 15.5743 7.40215 15.0476 6.46447 14.1099C5.52678 13.1722 5 11.9004 5 10.5743C5 9.24826 5.52678 7.97649 6.46447 7.03881C7.40215 6.10112 8.67392 5.57434 10 5.57434ZM10 7.57434C9.20435 7.57434 8.44129 7.89041 7.87868 8.45302C7.31607 9.01563 7 9.77869 7 10.5743C7 11.37 7.31607 12.1331 7.87868 12.6957C8.44129 13.2583 9.20435 13.5743 10 13.5743C10.7956 13.5743 11.5587 13.2583 12.1213 12.6957C12.6839 12.1331 13 11.37 13 10.5743C13 9.77869 12.6839 9.01563 12.1213 8.45302C11.5587 7.89041 10.7956 7.57434 10 7.57434Z" fill="white"/>
                </svg></Link>
              </div>
              <div className="lg:w-[24px] lg:h-[24px] w-[96px] h-[96px] py-[4px] px-[1.54px] d-flex justify-content-center align-items-center">
                <Link href="/"><svg className="lg:w-[21px] lg:h-[17px] w-[84px] h-[68px]" width="21" height="17" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.46 2.57434C20.69 2.92434 19.86 3.15434 19 3.26434C19.88 2.73434 20.56 1.89434 20.88 0.884341C20.05 1.38434 19.13 1.73434 18.16 1.93434C17.37 1.07434 16.26 0.574341 15 0.574341C12.65 0.574341 10.73 2.49434 10.73 4.86434C10.73 5.20434 10.77 5.53434 10.84 5.84434C7.28001 5.66434 4.11001 3.95434 2.00001 1.36434C1.63001 1.99434 1.42001 2.73434 1.42001 3.51434C1.42001 5.00434 2.17001 6.32434 3.33001 7.07434C2.62001 7.07434 1.96001 6.87434 1.38001 6.57434V6.60434C1.38001 8.68434 2.86001 10.4243 4.82001 10.8143C4.19074 10.9865 3.5301 11.0105 2.89001 10.8843C3.16162 11.7368 3.69355 12.4827 4.41103 13.0173C5.1285 13.5518 5.99546 13.848 6.89001 13.8643C5.37364 15.0648 3.494 15.7137 1.56001 15.7043C1.22001 15.7043 0.880009 15.6843 0.540009 15.6443C2.44001 16.8643 4.70001 17.5743 7.12001 17.5743C15 17.5743 19.33 11.0343 19.33 5.36434C19.33 5.17434 19.33 4.99434 19.32 4.80434C20.16 4.20434 20.88 3.44434 21.46 2.57434Z" fill="white"/>
                </svg></Link>
              </div>
            </div>
          </div>

          <div className="d-flex flex-column gap-[30px] pr-[30px] w-full">
            <span className="fw-bold lg:text-[33px] text-[66px]">Explore</span>
            <div className="d-flex lg:flex-col flex-rows lg:gap-[20px] gap-[40px] font-[400] lg:text-[16px] text-[32px]">
              <Link className="text-white link-underline link-underline-opacity-0" href="/">Homepage</Link>
              <Link className="text-white link-underline link-underline-opacity-0" href="/">For jobseekers</Link>
              <Link className="text-white link-underline link-underline-opacity-0" href="/">For clients</Link>
              <Link className="text-white link-underline link-underline-opacity-0" href="/">Our sectors</Link>
              <Link className="text-white link-underline link-underline-opacity-0" href="/">Resources</Link>
              <Link className="text-white link-underline link-underline-opacity-0" href="/">Contact us</Link>
            </div>
          </div>

          <div className="d-flex flex-column gap-[30px] pr-[30px] w-full">
            <span className="fw-bold lg:text-[33px] text-[66px]">Sectors</span>
            <div className="d-flex lg:flex-col flex-rows lg:gap-[20px] gap-[40px] font-[400] lg:text-[16px] text-[32px]">
              <Link className="text-white link-underline link-underline-opacity-0" href="/">Software engineering</Link>
              <Link className="text-white link-underline link-underline-opacity-0" href="/">DevOps</Link>
              <Link className="text-white link-underline link-underline-opacity-0" href="/">Cloud</Link>
              <Link className="text-white link-underline link-underline-opacity-0" href="/">Infrastructure</Link>
              <Link className="text-white link-underline link-underline-opacity-0" href="/">Testing</Link>
              <Link className="text-white link-underline link-underline-opacity-0" href="/">Security</Link>
            </div>
          </div>

          <div className="d-flex flex-column gap-[30px] pr-[30px] w-full">
            <span className="fw-bold lg:text-[33px] text-[66px]">Services</span>
            <div className="d-flex lg:flex-col flex-rows lg:gap-[20px] gap-[40px] font-[400] lg:text-[16px] text-[32px]">
              <Link className="text-white link-underline link-underline-opacity-0" href="/">Nav item</Link>
              <Link className="text-white link-underline link-underline-opacity-0" href="/">Nav item</Link>
              <Link className="text-white link-underline link-underline-opacity-0" href="/">Nav item</Link>
              <Link className="text-white link-underline link-underline-opacity-0" href="/">Nav item</Link>
              <Link className="text-white link-underline link-underline-opacity-0" href="/">Nav item</Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
