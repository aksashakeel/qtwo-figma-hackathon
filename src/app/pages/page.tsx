
 import Image from "next/image";
import Link from "next/link"; // Import Link from next/link

export default function Blogs() {
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
            404 Page
          </h2>
          <div className="flex items-center space-x-2 text-white">
            <Link href="/" className="text-white">Home</Link>
            <span className="text-white"> &gt; </span>
            <Link href="/about" className="text-orange-500">404 Page</Link>
          </div>
        </div>
      </div>

      {/* Hero Section and Error Page */}
      <div className="min-h-screen bg-white">
        
        {/* Signup Form Section */}
        <section className="p-10 relative bg-white pt-36 flex flex-col items-center">
          <div className="w-[630px] text-center">
            <h3 className="text-[96px] font-bold text-[#FF9F0D] mb-6">404</h3>
            <p className="font-bold text-[32px] mb-4">
              Oops! Looks like something went wrong
            </p>
            <p className="text-[18px] mb-4">
              Page cannot be found! Well have it figured out in no time.
            </p>
            <p className="text-[18px] mb-6">
              Meanwhile, check out these fresh ideas:
            </p>
            {/* Button */}
            <Link href="/">
              <button className="bg-[#FF9F0D] text-white text-[18px] font-bold px-6 py-2 rounded hover:bg-[#e8890b]">
                Go Back to Home
              </button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
