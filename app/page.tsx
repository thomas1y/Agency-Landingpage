import Image from "next/image";

export default function Home() {
  return (
    <div>
      <section className="bg-[url('/hero-bg.png')] h-[750px] bg-cover relative bg-center">
        <header className="absolute top-[16px] left-[60px] right-0 bg-transparent h-[50px] z-10">
          <div className="max-w-[1160px] mx-auto px-6 h-full">
            <div className="flex items-center h-full">
              {/* Logo */}
              <div className="w-[154px] text-[24px] font-bold">
                G-tech
              </div>

              {/* Navigation - Fixed: Added href to a tags */}
              <nav className="w-[333px] flex items-center font-bold justify-between text-[15px] ml-[231px]">
                <a href="#">Demos</a>
                <a href="#">Pages</a>
                <a href="#">Support</a>
                <a href="#">Contact</a>
              </nav>

              {/* Button */}
              <button className="w-[209px] text-white bg-[#473BF0] py-2 rounded-lg ml-auto font-bold text-[17px]">
                Get started a Project
              </button>
            </div>
          </div>
        </header>

        {/* Hero Content */}
        <div className="max-w-[1600px] mx-auto px-6 h-full">
          <div className="flex pl-[30px]">
            {/* Left Content */}
            <div className="w-1/2">
              <div className="pt-[207.5px] pl-[160px]">
                <div className="w-[206px] text-[13px] text-[#F64B4B] font-bold font-gilroy h-[16px]">
                  Let&apos;s shift your business
                </div>

                <h1 className="w-[541px] leading-[72px] mt-2 font-gilroy font-bold text-[55px] text-[#161C2D]">
                  Shift your business<br />
                  fast with Shade Pro.
                </h1>
                <p className="w-[500px] font-gilroy text-[19px] text-[#161C2D] mt-2">
                  With lots of unique blocks, you can easily build a page
                  without coding. Build your next consultancy website within
                  few minutes.
                </p>
                <button className="w-[541px] h-[59px] mt-2 text-white bg-[#473BF0] py-2 rounded-lg px-2">
                  Get started a Project
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="w-1/2 relative h-full">
              {/* Image container */}
              <div className="absolute left-[120px] top-[148.5px] w-[463px] h-[504px]">
                <div className="absolute top-[-30px] left-[94px] w-[107px] h-[68px] z-0">
                  <div className="relative w-full h-full">
                    {[
                      { count: 3, top: 0 },
                      { count: 5, top: 10 },  
                      { count: 7, top: 20 }, 
                      { count: 7, top: 30 },
                      { count: 7, top: 40 },
                      { count: 7, top: 50 },
                      { count: 5, top: 60 },
                      { count: 3, top: 70 }
                    ].map((row, rowIndex) => {
                      // Ensure count is positive
                      const safeCount = Math.max(0, row.count);
                      
                      return (
                        <div 
                          key={`row-${rowIndex}`}
                          className="absolute left-1/2 transform -translate-x-1/2 flex gap-1"
                          style={{ top: `${row.top}px` }}
                        >
                          {Array.from({ length: safeCount }).map((_, i) => (
                            <div 
                              key={`circle-${rowIndex}-${i}`} 
                              className="w-1 h-1 bg-[#130D3A] rounded-full"
                            />
                          ))}
                        </div>
                      );
                    })}
                  </div>
                </div>
                
                {/* Oval Image (FRONT) */}
                <Image 
                  src="/oval.png" 
                  alt="Oval shape"
                  width={420}
                  height={420}
                  className="absolute top-0 left-0 z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white pt-[117px]">
        <div className="max-w-[1163px] h-[600px] ml-[230px]">
          {/* TITLE SECTION */}
          <div className="ml-[260px] mr-[507px]">
            {/* Inner content centered within this block */}
            <div className="flex flex-col items-center">
              <div className="w-[589px] text-center text-[#F64B4B] font-Gilroy text-[13px] font-bold">
                Our Services
              </div>

              <h1 className="w-[589px] text-center font-bold font-Gilroy text-[36px]">
                We provide great services for our<br /> 
                customers based on needs
              </h1>
            </div>
          </div>

          {/* CARDS SECTION */}
          <div className="grid grid-cols-3 gap-6 pt-[81px] -ml-[100px]">
            {/* Card 1 */}
            <div className="w-[330px] bg-[#68D585] rounded-lg">
              <h1 className="pt-[61px] text-[24px] text-center text-white font-bold">Graphic Design</h1>
              <p className="text-center text-[17px] font-Gilroy text-white pt-[15px]">
                With lots of unique blocks, you can<br/>
                easily build a page without coding.<br/>
                Build your next landing page.
              </p>
              <button className="block mx-auto text-[17px] font-bold font-Gilroy text-white pt-[43px] pb-[38px]">
                Learn more
              </button>
            </div>
            {/* Card 2 */}
            <div className="w-[330px] bg-[#473BF0] rounded-lg">
              <h1 className="pt-[61px] text-[24px] text-center text-white font-bold">Web Development</h1>
              <p className="text-center text-[17px] font-Gilroy text-white pt-[15px]">
                With lots of unique blocks, you can<br/>
                easily build a page without coding.<br/>
                Build your next landing page.
              </p>
              <button className="block mx-auto text-[17px] font-bold font-Gilroy text-white pt-[43px] pb-[38px]">
                Learn more
              </button>
            </div>
            {/* Card 3 */}
            <div className="w-[330px] bg-[#FF5652] rounded-lg">
              <h1 className="pt-[61px] text-[24px] text-center text-white font-bold">Content Writing</h1>
              <p className="text-center text-[17px] font-Gilroy text-white pt-[15px]">
                With lots of unique blocks, you can<br/>
                easily build a page without coding.<br/>
                Build your next landing page.
              </p>
              <button className="block mx-auto text-[17px] font-bold font-Gilroy text-white pt-[43px] pb-[38px]">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white ml-[130px] mr-[68px]">
        <div className="max-w-[1108px] h-[301px]">
          <div className="flex items-center w-[980px] h-[178px] ml-[80px]">
            <div>
              <Image 
                src="/oval2.png" 
                alt="Oval shape"
                width={164}
                height={164}
              />
            </div>
            <div className="ml-[200px]">
              <div>⭐⭐⭐⭐⭐</div>
              <p className="pt-[7px] text-[#161C2D] font-bold font-Gilroy text-[24]">
                &ldquo;OMG! I cannot believe that I have got a brand new landing page<br/>
                after getting Albino. It was super easy to edit and publish.&rdquo;
              </p>
              <h1 className="text-[#3161C2D] font-bold font-Gilroy text-[17] pt-[15px]">web developer</h1>
              
            </div>
          </div> 
        </div>
      </section>

      <section className='bg-white pt-[122px]' >
          <div className="max-w-[1110px] h-[883px] ml-[180px] mr-[200px]">
               <div className="grid grid-cols-2">
               {/* left content*/}
                    <div className="">
                       <div className="w-[515px] h-[198px] ">
                           <h1 className="h-[16px] w-[83px] font-bold text-[#F64B4B] text-[13px] font-Gilroy">our story</h1>
                          <p className="h-[100px] w-[515px] pt-[30px] font-bold text-[#161C2D] text-[30px] font-Gilroy">We know how everything works<br/> 
                            and why your business is failing<br/>
                            over and over again.</p>
                       </div>
                       <Image 
                           src="/Img.png" 
                          alt="Oval shape"
                          width={440}
                          height={530}
                          className="pt-[80px]"
                          
                       />
                    </div>

                 {/*right content */}
                    <div className='ml-[50px]'>
                         <div className="flex pt-[200px]">
                            <Image
                               src="/2.png" 
                              alt="Oval shape"
                              width={260}
                              height={270}
                           /> 
                           <Image 
                           
                               src="/3.png" 
                              alt="Oval shape"
                              width={160}
                              height={70}
                              className="ml-[90px] pt-[80px] pb-[50px]" 
                       />
                         </div>

                         <p className=" h-[116px] w-[490px] pt-[100px] text-[#161C2D] text-[17px]">We share common trends and strategies for improving your<br />
                            rental income and making sure you stay in high demand. With<br />
                           lots of unique blocks, you can easily build a page without<br />
                           coding. Build your next landing page.</p>
                    </div>

               </div>
          </div>
      </section>
      <section>Facts</section>
      <section>Features</section>
    </div>
  );
}