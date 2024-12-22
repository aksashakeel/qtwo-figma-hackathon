import React from 'react';
import Image from 'next/image';
import { FaCheck } from 'react-icons/fa6'
import FoodCategory from '../foodcatagery/page';
import ChooseUs from '../chooseus/page';

const menuItems = [
  {
    name: "Lettuce Leaf",
    description: "Lacus nisl, et ac dapibus velit in consequat.",
    price: "12.5$",
    image: "/food1.png",
  },
  {
    name: "Fresh Breakfast",
    description: "Lacus nisl, et ac dapibus velit in consequat.",
    price: "14.5$",
    image: "/food2.png",
  },
  {
    name: "Mild Butter",
    description: "Lacus nisl, et ac dapibus velit in consequat.",
    price: "12.5$",
    image: "/food3.png",
  },
  {
    name: "Fresh Bread",
    description: "Lacus nisl, et ac dapibus velit in consequat.",
    price: "12.5$",
    image: "/food4.png",
  },
  {
    name: "Glow Cheese",
    description: "Lacus nisl, et ac dapibus velit in consequat.",
    price: "12.5$",
    image: "/blog1.jpg",
  },
  {
    name: "Italian Pizza",
    description: "Lacus nisl, et ac dapibus velit in consequat.",
    price: "14.5$",
    image: "/blog2.jpg",
  },
  {
    name: "Slice Beef",
    description: "Lacus nisl, et ac dapibus velit in consequat.",
    price: "12.5$",
    image: "/blog3.jpg",
  },
  {
    name: "Mushroom Pizza",
    description: "Lacus nisl, et ac dapibus velit in consequat.",
    price: "12.5$",
    image: "/footer1.jpg",
  },
];



function Hero() {
  return (
    <>
    <section className='bg-black px-3 md:px-[135px] flex flex-col justify-evenly md:flex-row  md:items-center py-[50px]'>
        {/* Heading */}
        <div className='text-white w-full md:w-[50%]'>
  <h1 className='md:text-[32px] text-[24px] font-normal text-[#FF9F0D] font whitespace-nowrap'>
    Its Quick and Amusing!
  </h1>

  <h1 className='text-[25px] md:text-[50px] font-bold whitespace-nowrap md:whitespace-normal'>

    <span className='text-[#FF9F0D]'>Th</span>e Art of speed food Quality
  </h1>

  <p className='text-[10px] md:text-[16px] font-normal'>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue
  </p>

  <div className='flex flex-col md:flex-row items-center md:items-start'>

  <button className='bg-[#FF9F0D] text-white w-[100px] h-[30px] md:w-[190px] md:h-[60px] rounded-[40px] mt-[32px] hover:bg-yellow-800'>
    See More
  </button>
  </div>
</div>

        {/* Image */}

        <div className='mt-[50px] md:mt-0 '>   
            <Image 
                src="/hero.webp"
                alt='Hero Image'
                width={700}
                height={500}
                className=''
            />

        </div>
    </section>
        <section className="bg-black px-3 md:px-[135px] flex flex-col justify-evenly md:flex-row  md:items-center py-[50px]">
      

      {/* Image */}




      {/* Heading */}
      <div className="text-white w-full md:w-[50%]">
        <h1 className="md:text-[32px] text-[24px] font-normal text-[#FF9F0D] font whitespace-nowrap font-greatVibes">
          About us
        </h1>

        <h1 className="text-[20px] md:text-[50px] font-bold whitespace-nowrap md:whitespace-normal">
          <span className="text-[#FF9F0D]">We</span> Create the best foody
          product
        </h1>

        <p className="text-[10px] md:text-[16px] font-normal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
          pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit
          augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis
          sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in
          consequat.
        </p>

        <ul>
          <li className="text-[10px] md:text-[16px] font-normal mt-10 flex">
            <span className="mr-[10px]">
              <FaCheck />
            </span>{" "}
            Lacus nisi, et ac dapibus sit eu velit in consequat.
          </li>
          <li className="text-[10px] md:text-[16px] font-normal mt-10 flex">
            <span className="mr-[10px]">
              <FaCheck />
            </span>{" "}
            Quisque diam pellentesque bibendum non dui volutpat fringilla{" "}
          </li>
          <li className="text-[10px] md:text-[16px] font-normal mt-10 flex">
            <span className="mr-[10px]">
              <FaCheck />
            </span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </li>
        </ul>

        <div className="flex flex-col md:flex-row items-center md:items-start">
          <button className="bg-[#FF9F0D] text-white w-[100px] h-[30px] md:w-[190px] md:h-[60px] rounded-[40px] mt-[32px] hover:bg-yellow-800">
            See More
          </button>
        </div>
      </div>
      <div className="mt-[50px] md:mt-0 ">
        <Image src="/about2.webp" alt="Hero Image" className="w-[380px] h-[230px]" width={380} height={230} />
        <div className="flex flex-row md:flex-row mt-[16px] md:mt-[0]">
          <Image src="/about1.webp" alt="Hero Image" width={332} height={124} className="w-[185px] h-[164px] mr-[5px] pt-[5px]" />
          <Image src="/about3.webp" alt="Hero Image" width={332} height={124} className=" w-[185px] h-[164px] pt-[5px]" />
        </div>
      </div>
    </section>
    
    <FoodCategory/>
    <ChooseUs />
   
        <section className="bg-black px-8 sm:px-16 lg:px-[135px] text-white py-12">
      
          <div className="container mx-auto">
         
            <h2 className="text-2xl font-bold text-center mb-2 text-[#FF9F0D]">
              Choose & Pick
            </h2>
            <h1 className="text-3xl font-bold text-center mb-8">
              <span className="text-[#FF9F0D]">Fr</span>om Our Menu
            </h1>
    
          
            <div className="flex justify-center mb-8">
              <ul className="flex flex-wrap justify-evenly space-x-2 sm:space-x-4">
                {["Breakfast", "Lunch", "Dinner", "Dessert", "Drink", "Snack", "Soups"].map((category) => (
                  <li
                    key={category}
                    className="cursor-pointer hover:text-yellow-500"
                  >
                    {category}
                  </li>
                ))}
              </ul>
            </div>
    
            <div className="flex flex-col lg:flex-row">
          
              <div className="hidden lg:block w-1/3 md:w-[50%]">
                <Image
                  src={"/hero.webp"}
                  alt="Menu Decor"
                  layout="responsive"
                  width={200}
                  height={200}
                />
              </div>
    
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 flex-grow">
                {menuItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex rounded-lg overflow-hidden shadow-lg"
                  >
              
                    <div className="w-1/3">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={100}
                        height={100}
                        className="object-cover"
                      />
                    </div>
    
                  
                    <div className="p-4 w-2/3">
                      
                      <h1 className="text-lg font-semibold">{item.name}</h1>
                    
                      <p className="text-[11px] text-gray-400 mb-2">
                        {item.description}
                      </p>
                   
                      <h2 className="text-yellow-400 font-bold">{item.price}</h2>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
  
    

    <section className="text-white body-font bg-black">
    <div className="container mx-auto text-center">

  <h1 className='md:text-[32px] text-[24px] font-normal text-[#FF9F0D] font whitespace-nowrap'>
    Blog Post
  </h1>

  <h1 className='text-[25px] md:text-[50px] font-bold whitespace-nowrap md:whitespace-normal'>

    <span className='text-[#FF9F0D]'>La</span>test News And Blogs
  </h1>
</div>
      <div className="container px-3 py-20 mx-auto">
        <div className="flex flex-wrap -m-4">
          <div className="p-4 md:w-1/3">
            <div className=" h-full  flex justify-center items-center  flex-col border-2 rounded-lg overflow-hidden">
              <Image
            className='w-[280px] h-[270px]'
                src="/blog1.jpg"
                width={380} height={280}
                alt="blog"
              />
              <div className="p-6">
                <h1 className="title-font text-lg font-medium  mb-2 text-bold text-center">
                BEST CHEF
                </h1>
                <p className="leading-relaxed mb-3 text-center ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat</p>
                </div>
            </div>
          </div>
          <div className="p-4 md:w-1/3">
            <div className="h-full border-2 flex justify-center items-center  flex-col rounded-lg overflow-hidden">
              <Image
               
                src="/blog2.jpg"
                width={280} height={80}
                alt="blog"
              />
              <div className="p-6">
                <h1 className="title-font text-lg font-medium  mb-2 text-bold text-center">
                120 Item food
                </h1>
                <p className="leading-relaxed mb-3 text-center ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat</p>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/3">
            <div className="h-full border-2  flex justify-center items-center  flex-col rounded-lg overflow-hidden">
              <Image
                className=" flex flex-col justify-center items-center"
                src="/blog3.jpg"
                width={280} height={80}
                alt="blog"
                
              />
              <div className="p-6">
                <h1 className="title-font text-lg font-medium  mb-2 text-bold text-center">
                Clean Environment
                </h1>
                <p className="leading-relaxed mb-3 text-center ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Hero