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
          <button className="btn navbar-right-corner-btn-yellow py-3 px-4">Upload CV</button>
          <button className="btn navbar-right-corner-btn-orange py-3 px-4">Contact us</button>
        </div>
        
      </div>

      {/* Hero */}
      <div className="bg-[#064EA4] h-[674px]">
        {/* Container */}
        <div className="py-[60px] px-[120px] flex gap-[60px]">
          {/* Frame 9 */}
          <div className="mt-[157.5px]">
            {/* Frame 11 */}
            <div>
              <span className="p-[6px]  text-white">Software Recruitment Specialists</span>
            </div>
            {/* Frame 14 */}
            <div className="gap-[10px]">
              <span className="text-[66px] text-white font-[700]">Elevate your career</span>
              {/* Frame 13 */}
              <div className="flex h-[62px] w-[592px]">
                {/* Frame 10 */}
                <input className="w-[433px] rounded-l-[30px] border border-[1px] px-[20px] py-[10px] gap-[10px] bg-white  text-[#AAAAAA]" placeholder="E.g. networking"></input>
                {/* Frame 12 */}
                <button className="w-[159px] rounded-r-[30px] bg-[#FCDF69] flex justify-center items-center  text-[#25210E] font-[700]">Search jobs</button>
              </div>
            </div>
          </div>
          <Image className="rounded-[30px] object-cover w-[507px] h-[480px] bg-slate-100" src="/next.svg" alt="next" width={100} height={100} />
        </div>
      </div>

      {/* Latest Clients */}
      <div className="h-[234px] gap-[30px] flex flex-col items-center py-[60px] px-[120px]">
        {/* Header */}
        <span className=" text-[#D2D2D2]">Who we work with</span>
        {/* Logos */}
        <div className="flex justify-evenly w-full">
          <Image className="object-cover w-[150px] h-[60px] bg-slate-300" src="/next.svg" alt="next" width={100} height={100} />
          <Image className="object-cover w-[150px] h-[60px] bg-slate-300" src="/next.svg" alt="next" width={100} height={100} />
          <Image className="object-cover w-[150px] h-[60px] bg-slate-300" src="/next.svg" alt="next" width={100} height={100} />
          <Image className="object-cover w-[150px] h-[60px] bg-slate-300" src="/next.svg" alt="next" width={100} height={100} />
          <Image className="object-cover w-[150px] h-[60px] bg-slate-300" src="/next.svg" alt="next" width={100} height={100} />
        </div>
      </div>

      {/* Latest Jobs */}
      <div className="bg-[#D7E7FB] h-[802.57px] py-[80px] px-[120px]">
        <div className="flex flex-col gap-[30px]">
          {/* Title */}
          <span className="text-[56px] text-[#0E2152] text-center font-[700]">Latest Jobs</span>
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
            <span className="font-[700] text-[19px]">Software Recruitment co.</span>
            <div className="flex gap-[20px]">
              <span>L</span>
              <span>F</span>
              <span>I</span>
              <span>T</span>
            </div>
          </div>

          <div className="flex flex-col gap-[30px] pr-[30px] w-full">
            <span className="font-[700] text-[33px]">Explore</span>
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
            <span className="font-[700] text-[33px]">Sectors</span>
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
            <span className="font-[700] text-[33px]">Services</span>
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
