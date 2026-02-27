import Image from "next/image";

export default function Home() {
  return (
    <div className=''>
      <section className="bg-[url('/hero-bg.png')] h-[801px] bg-cover relative bg-center">
        <header className="absolute top-[16px] left-0 right-0 bg-transparent h-[50px] z-10">
          <div className="max-w-[1160px] mx-auto px-6 h-full">
            <div className="flex items-center h-full">
              {/* Logo */}
              <div className="w-[154px] text-[24px] font-bold">
                G-tech
              </div>

              {/* Navigation */}
              <nav className="w-[333px] flex items-center font-bold justify-between text-[15px] ml-[231px]">
                <a>Demos</a>
                <a>Pages</a>
                <a>Support</a>
                <a>Contact</a>
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
          <div className="flex">
            {/* Left Content */}
            <div className="w-1/2">
              <div className="pt-[207.5px] pl-[160px]">
                <div className="w-[206px] text-[13px] text-[#F64B4B] font-bold font-gilroy h-[16px]">
                  Let’s shift your business
                </div>

                <h1 className="w-[541px] leading-[72px] mt-2 font-gilroy font-bold text-[55px] text-[#161C2D]">
                  Shift your business<br />
                  fast with Shade Pro.
                </h1>
                <p className='w-[500px] font-gilroy text-[19px] text-[#161C2D] mt-2'>
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
              <div className='absolute left-[92px] top-[148.5px] w-[463px] h-[504px]'>
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
                      ].map((row, rowIndex) => (
                        <div 
                          key={`row-${rowIndex}`}
                          className="absolute left-1/2 transform -translate-x-1/2 flex gap-1"
                          style={{ top: `${row.top}px`,
                                  gap: '10px' }}
                        >
                          {[...Array(row.count)].map((_, i) => (
                            <div 
                              key={`circle-${rowIndex}-${i}`} 
                              className="w-1 h-1 bg-[#130D3A]  rounded-full"
                            ></div>
                          ))}
                        </div>
                      ))}
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
                      <div className="max-w-[1163px] h-[752px] ml-[245px]">
                          {/* TITLE SECTION - this whole block starts 574px from left */}
                          <div className="ml-[260px] mr-[507px]">  {/* 574px - 279px = 295px */}
                            
                            {/* Inner content centered within this block */}
                            <div className="flex flex-col items-center">
                              <div className='w-[589px] text-center text-[#F64B4B] font-Gilroy text-[13px] font-bold'>
                                Our Services
                              </div>

                              <h1 className="w-[589px] text-center font-bold font-Gilroy text-[36px]">
                                We provide great services for our<br /> 
                                customers based on needs
                              </h1>
                            </div>
          
                      </div>

                       {/* CARDS SECTION */}
                       <div className="grid grid-cols-3 gap-6">
                           <div>
                                <h1>Graphic Design</h1>
                                <p>With lots of unique blocks, you can<br/>
                                 easily build a page without coding.<br/>
                                  Build your next landing page.</p>
                                <button>Learn more</button>
                           </div>
                            {/* Card 2 */}
                            <div>
                                  <h1>Graphic Design</h1>
                                <p>With lots of unique blocks, you can<br/>
                                 easily build a page without coding.<br/>
                                  Build your next landing page.</p>
                                <button>Learn more</button>
                            </div>
                            {/* Card 3 */}
                            <div>
                                  <h1>Graphic Design</h1>
                                <p>With lots of unique blocks, you can<br/>
                                 easily build a page without coding.<br/>
                                  Build your next landing page.</p>
                                <button>Learn more</button>
                            </div>
                       </div>

                </div>

      </section>
      <section>Testimonials</section>
      <section>About</section>
      <section>Facts</section>
      <section>Features</section>
    </div>
  );
}