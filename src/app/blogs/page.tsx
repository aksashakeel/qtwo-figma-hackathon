import Image from "next/image";
import Link from "next/link";

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
            Blogs
          </h2>
          <div className="flex items-center space-x-2 text-white">
            <Link href="/" className="text-white">Home</Link>
            <span className="text-white"> &gt; </span>
            <Link href="/about" className="text-orange-500">Blogs</Link>
          </div>
        </div>
      </div>

      {/* Blog Section */}
      <section className="text-white body-font bg-black">
        <div className="container mx-auto text-center">
          <h1 className="pt-16 nmd:text-[32px] text-[24px] font-normal text-[#FF9F0D] font whitespace-nowrap">
            Blog Post
          </h1>
          <h1 className="text-[25px] md:text-[50px] font-bold whitespace-nowrap md:whitespace-normal">
            <span className="text-[#FF9F0D]">La</span>test News And Blogs
          </h1>
        </div>

        <div className="container px-3 py-20 mx-auto">
          <div className="flex flex-wrap -m-4">
            {/* Blog Post 1 */}
            <div className="p-4 md:w-1/3">
              <div className="h-full flex justify-center items-center flex-col border-2 rounded-lg overflow-hidden">
                <Image
                  className="w-[280px] h-[270px]"
                  src="/blog1.jpg"
                  width={380}
                  height={280}
                  alt="blog"
                />
                <div className="p-6">
                  <h1 className="title-font text-lg font-medium mb-2 text-bold text-center">
                    BEST CHEF
                  </h1>
                  <p className="leading-relaxed mb-3 text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat
                  </p>
                </div>
              </div>
            </div>

            {/* Blog Post 2 */}
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 flex justify-center items-center flex-col rounded-lg overflow-hidden">
                <Image
                  src="/blog2.jpg"
                  width={280}
                  height={80}
                  alt="blog"
                />
                <div className="p-6">
                  <h1 className="title-font text-lg font-medium mb-2 text-bold text-center">
                    120 Item food
                  </h1>
                  <p className="leading-relaxed mb-3 text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat
                  </p>
                </div>
              </div>
            </div>

            {/* Blog Post 3 */}
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 flex justify-center items-center flex-col rounded-lg overflow-hidden">
                <Image
                  className="flex flex-col justify-center items-center"
                  src="/blog3.jpg"
                  width={280}
                  height={80}
                  alt="blog"
                />
                <div className="p-6">
                  <h1 className="title-font text-lg font-medium mb-2 text-bold text-center">
                    Clean Environment
                  </h1>
                  <p className="leading-relaxed mb-3 text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
