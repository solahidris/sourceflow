import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
      
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
            <div className="flex gap-[30px]">
              {/* Frame 1 */}
              <div className="dropdown">
                <button className="btn dropdown-toggle navbar-dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  For jobseekers
                </button>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">new page</a></li>
                </ul>
              </div>
              {/* Frame 2 */}
              <div className="dropdown">
                <button className="btn dropdown-toggle navbar-dropdown-toggle" custom-dropdown-toggle type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  For clients
                </button>
                <ul className="dropdown-menu ">
                  <li><a className="dropdown-item" href="#">new page</a></li>
                </ul>
              </div>
              {/* Frame 3 */}
              <div className="dropdown">
                <button className="btn dropdown-toggle navbar-dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Sectors
                </button>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">new page</a></li>
                </ul>
              </div>
              {/* Frame 4 */}
              <div className="dropdown">
                <button className="btn dropdown-toggle navbar-dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Resources
                </button>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">new page</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Frame 5 */}
        <div className="flex gap-[10px]">
          <button type="button" className="btn navbar-right-corner-btn-yellow py-3 px-4">Upload CV</button>
          <button type="button" className="btn navbar-right-corner-btn-orange py-3 px-4">Contact us</button>
        </div>
        
      </div>

      {/* Hero */}
      <div className="hero-div-style flex items-center justify-center">
        {/* Container */}
        <div className="hero-container-style">
          {/* Frame 9 */}
          <div className="hero-frame-9">
            {/* Frame 11 */}
            <div>
              <span className="p-[6px] text-white">Software Recruitment Specialists</span>
            </div>
            {/* Frame 14 */}
            <div className="gap-[10px]">
              <span className="text-[66px] text-white fw-bold">Elevate your career</span>
              {/* Frame 13 */}
              <div className="hero-frame-13">
                {/* Frame 10 */}
                <input className="hero-frame-10" placeholder="E.g. networking"></input>
                {/* Frame 12 */}
                <button type="button" className="btn hero-frame-12 fw-bold">Search jobs</button>
              </div>
            </div>
          </div>
          <Image className="hero-image" src="/9e7463bd63b976b8b0101bf9fc4e0467.jpeg" alt="next" width={800} height={800} />
        </div>
      </div>

      {/* Latest Clients */}
      <div className="gap-[30px] flex flex-col items-center py-[60px] px-[120px]">
        {/* Header */}
        <span className="text-[#D2D2D2]">Who we work with</span>
        {/* Logos */}
        <div className="flex items-center justify-between w-[1200px] gap-[80.24px]">
          <div><Image className="object-contain" src="/microsoft.png" alt="next" width={181} height={30} /></div>
          <div><svg width="159" height="22" viewBox="0 0 159 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M68.6184 14.0048H79.0423L73.5363 5.33814L63.4133 20.9915H58.8101L71.1218 2.21147C71.3902 1.83672 71.7468 1.53012 72.1618 1.31735C72.5768 1.10459 73.038 0.991847 73.5069 0.988583C73.9758 0.985319 74.4386 1.09162 74.8567 1.29859C75.2747 1.50556 75.6358 1.80717 75.9097 2.17814L88.2556 20.9915H83.6524L81.4841 17.4915H70.9371L68.6389 14.0048M116.47 17.4915V1.17814H112.557V19.0981C112.557 19.3472 112.608 19.5937 112.708 19.8229C112.808 20.0521 112.954 20.2591 113.139 20.4315C113.324 20.6161 113.545 20.7626 113.79 20.8623C114.034 20.9619 114.297 21.0126 114.562 21.0115H132.345L134.664 17.5115H116.449M51.7856 14.5781C53.6087 14.5781 55.3571 13.8722 56.6463 12.6158C57.9354 11.3593 58.6596 9.65509 58.6596 7.87814C58.6596 6.10119 57.9354 4.39702 56.6463 3.14052C55.3571 1.88403 53.6087 1.17814 51.7856 1.17814H34.686V20.9915H38.5916V4.68481H51.5462C52.4188 4.68481 53.2556 5.02265 53.8726 5.62402C54.4895 6.22538 54.8362 7.04101 54.8362 7.89147C54.8362 8.74193 54.4895 9.55756 53.8726 10.1589C53.2556 10.7603 52.4188 11.0981 51.5462 11.0981H40.5272L52.196 20.9915H57.8662L50.0278 14.5781H51.7856ZM10.6646 20.9915H22.4769C25.1261 20.9245 27.6436 19.8517 29.4929 18.0018C31.3423 16.1518 32.3773 13.6711 32.3773 11.0881C32.3773 8.50523 31.3423 6.02445 29.4929 4.17452C27.6436 2.32459 25.1261 1.2518 22.4769 1.18481H10.6646C9.30808 1.1505 7.95828 1.38128 6.69476 1.86355C5.43124 2.34581 4.27959 3.06979 3.30772 3.9928C2.33586 4.9158 1.56345 6.01914 1.03605 7.23774C0.50865 8.45635 0.236938 9.76555 0.236938 11.0881C0.236938 12.4107 0.50865 13.7199 1.03605 14.9385C1.56345 16.1571 2.33586 17.2605 3.30772 18.1835C4.27959 19.1065 5.43124 19.8305 6.69476 20.3127C7.95828 20.795 9.30808 21.0258 10.6646 20.9915ZM22.2102 17.5048H10.9245C9.21699 17.4511 7.59787 16.7523 6.40949 15.556C5.22112 14.3598 4.55668 12.7599 4.55668 11.0948C4.55668 9.42968 5.22112 7.82984 6.40949 6.63359C7.59787 5.43734 9.21699 4.73848 10.9245 4.68481H22.2102C23.0917 4.65709 23.9699 4.80239 24.7926 5.11205C25.6153 5.42171 26.3658 5.88942 26.9994 6.48738C27.633 7.08534 28.1368 7.80135 28.4809 8.59285C28.8249 9.38435 29.0022 10.2352 29.0022 11.0948C29.0022 11.9544 28.8249 12.8053 28.4809 13.5968C28.1368 14.3883 27.633 15.1043 26.9994 15.7022C26.3658 16.3002 25.6153 16.7679 24.7926 17.0776C23.9699 17.3872 23.0917 17.5325 22.2102 17.5048ZM96.4155 20.9915H108.474L110.759 17.5048H96.6822C95.8007 17.5325 94.9225 17.3872 94.0998 17.0776C93.2771 16.7679 92.5266 16.3002 91.893 15.7022C91.2594 15.1043 90.7556 14.3883 90.4116 13.5968C90.0675 12.8053 89.8902 11.9544 89.8902 11.0948C89.8902 10.2352 90.0675 9.38435 90.4116 8.59285C90.7556 7.80135 91.2594 7.08534 91.893 6.48738C92.5266 5.88942 93.2771 5.42171 94.0998 5.11205C94.9225 4.80239 95.8007 4.65709 96.6822 4.68481H108.139L110.451 1.18481H96.4155C95.059 1.1505 93.7092 1.38128 92.4457 1.86355C91.1821 2.34581 90.0305 3.06979 89.0586 3.9928C88.0868 4.9158 87.3144 6.01914 86.787 7.23774C86.2596 8.45635 85.9878 9.76555 85.9878 11.0881C85.9878 12.4107 86.2596 13.7199 86.787 14.9385C87.3144 16.1571 88.0868 17.2605 89.0586 18.1835C90.0305 19.1065 91.1821 19.8305 92.4457 20.3127C93.7092 20.795 95.059 21.0258 96.4155 20.9915ZM144.205 17.5048C142.772 17.5053 141.378 17.0498 140.235 16.2075C139.092 15.3652 138.262 14.1821 137.872 12.8381H154.575L156.873 9.3448H137.872C138.261 8.00024 139.09 6.81655 140.234 5.97408C141.377 5.1316 142.772 4.67651 144.205 4.67814H155.669L157.96 1.17814H143.939C141.289 1.24514 138.772 2.31792 136.923 4.16785C135.073 6.01778 134.038 8.49856 134.038 11.0815C134.038 13.6644 135.073 16.1452 136.923 17.9951C138.772 19.845 141.289 20.9178 143.939 20.9848H155.997L158.289 17.4981H144.199" fill="#C74634"/></svg></div>
          <div><svg width="183" height="22" viewBox="0 0 183 22" fill="none" xmlns="http://www.w3.org/2000/svg">
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
          <div><Image className="object-contain" src="/cloudflare.png" alt="next" width={238} height={60} /></div>
          <div><Image className="object-contain" src="/vmware.png" alt="next" width={160} height={53} /></div>
        </div>
      </div>

      {/* Latest Jobs */}
      <div className="bg-[#D7E7FB] h-[802.57px] py-[80px] px-[120px]">
        <div className="flex flex-col gap-[30px]">
          {/* Title */}
          <span className="text-[56px] text-[#0E2152] text-center fw-bold">Latest Jobs</span>
          {/* Sliders */}
          <div className="flex justify-between gap-[40px]">
            {/* Slider Yellow */}
            <div className="w-[373px] h-[441px] rounded-[30px] p-[40px] flex flex-col gap-[20px] text-[#064EA4] bg-[#FCDF69]">
              
              {/* Tag */}
              <div className="w-[75px] h-[24px] flex gap-[10px] bg-white">
                <span>#</span>
                <span>Python</span>
              </div>

              {/* Job Title */}
              <span className="text-[30px]">Software Engineer</span>
              
              <div>
                {/* Location */}
                <div className="flex gap-[10px]">
                  <span>L</span>
                  <span>London</span>
                </div>
                {/* Salary */}
                <div className="flex gap-[10px]">
                  <span>S</span>
                  <span>Salary</span>
                </div>
              </div>
              
              {/* Description */}
              <span className="">Odio mi amet commodo convallis nunc. Tincidunt mauris eu egestas eget in aliquam.</span>

              {/* Button Primary */}
              <button className="bg-[#FFFFFF] rounded-[30px] py-[15px] px-[30px] ">View this job</button>

              {/* Date */}
              <span className="text-[#064EA4CC] text-[13px] font-[300]">Posted on 29/08/2023</span>

            </div>
            {/* Slider Blue */}
            <div className="w-[373px] h-[441px] rounded-[30px] p-[40px] flex flex-col gap-[20px] text-[#FFFFFF] bg-[#064EA4]">
              
              {/* Tag */}
              <div className="w-[75px] h-[24px] flex gap-[10px] bg-white text-[#064EA4]">
                <span>#</span>
                <span>Python</span>
              </div>

              {/* Job Title */}
              <span className="text-[30px]">Software Engineer</span>
              
              <div>
                {/* Location */}
                <div className="flex gap-[10px]">
                  <span>L</span>
                  <span>London</span>
                </div>
                {/* Salary */}
                <div className="flex gap-[10px]">
                  <span>S</span>
                  <span>Salary</span>
                </div>
              </div>
              
              {/* Description */}
              <span className="">Odio mi amet commodo convallis nunc. Tincidunt mauris eu egestas eget in aliquam.</span>

              {/* Button Primary */}
              <button className="bg-[#FFFFFF] rounded-[30px] py-[15px] px-[30px]  text-[#064EA4]">View this job</button>

              {/* Date */}
              <span className="text-[#FFFFFFCC] text-[13px] font-[300]">Posted on 29/08/2023</span>

            </div>
            {/* Slider Orange */}
            <div className="w-[373px] h-[441px] rounded-[30px] p-[40px] flex flex-col gap-[20px] text-[#064EA4] bg-[#F99D76]">
              
              {/* Tag */}
              <div className="w-[75px] h-[24px] flex gap-[10px] bg-white">
                <span>#</span>
                <span>Python</span>
              </div>

              {/* Job Title */}
              <span className="text-[30px]">Software Engineer</span>
              
              <div>
                {/* Location */}
                <div className="flex gap-[10px]">
                  <span>L</span>
                  <span>London</span>
                </div>
                {/* Salary */}
                <div className="flex gap-[10px]">
                  <span>S</span>
                  <span>Salary</span>
                </div>
              </div>
              
              {/* Description */}
              <span className="">Odio mi amet commodo convallis nunc. Tincidunt mauris eu egestas eget in aliquam.</span>

              {/* Button Primary */}
              <button className="bg-[#FFFFFF] rounded-[30px] py-[15px] px-[30px] ">View this job</button>

              {/* Date */}
              <span className="text-[#064EA4CC] text-[13px] font-[300]">Posted on 29/08/2023</span>

            </div>
          </div>
          {/* Footer */}
          <div className="flex justify-between">
            {/* Slider Controls */}
            <div className="flex gap-[15px]">
              <span className="w-[40px] h-[40px] text-[#0E215280]">Left</span>
              <span className="w-[40px] h-[40px] text-[#0E2152]">Right</span>
            </div>
            {/* View More Jobs */}
            <div className="p-[10px]">
              <button className="text-[#0E2152]  font-[500]">View more jobs</button>
            </div>
          </div>

        </div>
      </div>

      {/* Footer */}
      <div className="h-[484px] bg-[#064EA4] py-[80px] px-[120px] flex gap-[32px] text-white">
        <div className="flex justify-between gap-[24px] w-full">

          <div className="flex flex-col gap-[30px] w-full">
            <span className="fw-bold text-[19px]">Software Recruitment co.</span>
            <div className="flex gap-[20px]">
              <span>L</span>
              <span>F</span>
              <span>I</span>
              <span>T</span>
            </div>
          </div>

          <div className="flex flex-col gap-[30px] pr-[30px] w-full">
            <span className="fw-bold text-[33px]">Explore</span>
            <div className="flex flex-col gap-[20px] font-[400] ">
              <Link href="/">Homepage</Link>
              <Link href="/">For jobseekers</Link>
              <Link href="/">For clients</Link>
              <Link href="/">Our sectors</Link>
              <Link href="/">Resources</Link>
              <Link href="/">Contact us</Link>
            </div>
          </div>

          <div className="flex flex-col gap-[30px] pr-[30px] w-full">
            <span className="fw-bold text-[33px]">Sectors</span>
            <div className="flex flex-col gap-[20px] font-[400] ">
              <Link href="/">Software engineering</Link>
              <Link href="/">DevOps</Link>
              <Link href="/">Cloud</Link>
              <Link href="/">Infrastructure</Link>
              <Link href="/">Testing</Link>
              <Link href="/">Security</Link>
            </div>
          </div>

          <div className="flex flex-col gap-[30px] pr-[30px] w-full">
            <span className="fw-bold text-[33px]">Services</span>
            <div className="flex flex-col gap-[20px] font-[400] ">
              <Link href="/">Nav item</Link>
              <Link href="/">Nav item</Link>
              <Link href="/">Nav item</Link>
              <Link href="/">Nav item</Link>
              <Link href="/">Nav item</Link>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
