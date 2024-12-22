import Image from 'next/image'
import Link from 'next/link'
import StarterMenu from '@/components/Menu/StartMenu'
import React from 'react'
import MainCours from '@/components/MainCours/MainCourse'
import Dessert from '@/components/Dessert/Dessert'
import Drink from '@/components/Drinks/Drikns'

function page() {
  return (
    <div>
       
            {/* First Section: Image and Breadcrumb */}
            <div className="relative font-[sans-serif] before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-10">
              <Image
                src="/banner.jpg"
                alt="Banner Image"
                width={1920}
                height={410}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="min-h-[350px] relative z-50 h-full max-w-4xl mx-auto flex flex-col justify-center items-center text-center p-6">
                <h2 className="text-white md:text-5xl text-3xl font-bold mb-8">
                  Our Menu
                </h2>
                <div className="flex items-center space-x-2 text-white">
                  <Link href="/" className="text-white">Home</Link>
                  <span className="text-white"> &gt; </span>
                  <Link href="/about" className="text-orange-500">Menu</Link>
                </div>
              </div>
            </div>
            <div className="container mx-auto text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold  mt-20">
          <span className="text-orange-500">Our</span> Menu Item
        </h2>
       </div>
        <StarterMenu/>
        <MainCours />
        <Dessert />
        <Drink />
    </div>
  )
}

export default page