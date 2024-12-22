import Image from "next/image"
export default function ChooseUs(){
    return(
        <section className="bg-black px-3  md:px-[135px] flex flex-col justify-evenly md:flex-row  md:items-center py-[50px] gap-16">

<div className="mt-[50px] md:mt-0 ">
  
<div className="flex  grid-rows-2 md:flex-row mt-[16px] md:mt-[0]">
                  <Image src="/about1.webp" alt="Hero Image" width={332} height={124} className="w-[185px] h-[164px] mr-[5px] pt-[5px]" />
                  <Image src="/about3.webp" alt="Hero Image" width={332} height={124} className=" w-[185px] h-[164px] pt-[5px]" />
                </div>
                <div className="flex flex-col md:flex-row mt-[16px] md:mt-[0]">
                  <Image src="/about1.webp" alt="Hero Image" width={332} height={124} className="w-[185px] h-[164px] mr-[5px] pt-[5px]" />
                  <Image src="/about3.webp" alt="Hero Image" width={332} height={124} className=" w-[185px] h-[164px] pt-[5px]" />
                </div>
              </div>

        <div className="text-white w-full md:w-[50%] ">
        <h1 className="md:text-[32px] text-[24px] font-normal text-[#FF9F0D] font whitespace-nowrap font-greatVibes">
          Why Choose Us
        </h1>

        <h1 className="text-[20px] md:text-[50px] font-bold whitespace-nowrap md:whitespace-normal">
          <span className="text-[#FF9F0D]">Extra</span> Ordinary taste And
          Experienced
        </h1>

        <p className="text-[10px] md:text-[16px] font-normal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
          pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit
          augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis
          sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in
          consequat.
        </p>
        </div>
        
        </section>
    )
}