export default function NewsletterSection() {
  return (
    <div className="w-full mx-auto text-center mb-12 flex flex-col sm:flex-row sm:justify-between items-center px-4">
      {/* Text Section */}
      <div className="flex flex-col mb-8 sm:mb-0">
        <h2 className="text-3xl font-bold mb-4">
          <span className="text-[#FF9F0D]">Still</span> You Need Our Support?
        </h2>
        <p className="mb-6">
          Dont wait, make a smart and logical quote here. Its pretty easy.
        </p>
      </div>

      {/* Form Section */}
      <form className="w-full md:ml-20 md:mb-16 sm:w-[259px] flex flex-col sm:flex-row sm:mx-auto justify-center items-center gap-4">
        <input
          type="email"
          placeholder="Enter Your Email"
          className="w-full sm:w-[250px] h-[55.86px] bg-[#FF9F0D] text-white placeholder-white placeholder-opacity-60 px-4 py-2 rounded-md focus:outline-none"
        />
        <button
          type="submit"
          className="w-full sm:w-[160px] h-[55.86px] bg-white text-[#FF9F0D] px-6 py-2 rounded-md font-semibold hover:bg-[#FF9F0D] hover:text-white transition duration-300"
        >
          Subscribe Now
        </button>
      </form>
    </div>
  );
}
