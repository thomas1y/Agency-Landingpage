import Image from "next/image";

export default function Home() {
  return (
    <div>
      <section className="bg-[url('/hero-bg.png')] h-[801px] bg-cover relative bg-center">
                <header className="absolute top-[16px] left-0 right-0 bg-transparent h-[50px] z-10">
                      <div className="max-w-[1160px] mx-auto px-6 h-full">
                        <div className="flex items-center h-full">
                          {/* Logo */}
                          <div className="w-[154px]  text-[24px] font-bold">
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
                      <div className=" pt-[207.5px] pl-[244px] ">
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
                        <button className="w-[541px] h-[59px] mt-2 text-white bg-[#473BF0] py-2 rounded-lg px-2">Get started a Project</button>
                      </div>
                      
                    </div>

                    {/* Right Image */}
                    <div className="w-1/2">
                      {/* Image goes here */}
                      <div className="pt-[148.5px]">
                           <div className='w-[463px] h-[504px] relative'>
                                <Image 
                                  src="/oval.png" 
                                  alt="Oval shape"
                                  width={463}
                                  height={463}
                                  className="absolute top-0 left-0"
                                 />
                           </div>
                      </div>
                      
                    </div>
                   </div>
              </div>
      </section>

     

      
      <section>Services</section>
      <section>Testimonials</section>
      <section>About</section>
      <section>Facts</section>
      <section>Features</section>
    </div>
  );
}