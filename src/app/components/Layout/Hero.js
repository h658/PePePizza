import Right from "../icons/Right";
export default function Hero() {
    return (
        <>
            <section className="hero">
                <div className="py-20">
                    <div className="flex">
                        <span className="text-red-600 -ml-2 md:ml-3 text-4xl md:text-8xl italic font-semibold">Pizza</span>
                        <h1 className="font-semibold text-gray-800 text-lg  md:text-4xl md:ml-3 mt-3 md:mt-12 italic"> is the only </h1></div>
                    <div className="flex  gap-2 -ml-3 md:ml-2">
                        <img src="heartt-removebg-preview.png" alt="heart" className=" w-7 h-10 md:w-20 md:h-20" />
                        <img src="heartt-removebg-preview.png" alt="heart" className=" w-7 h-10 md:w-20 md:h-20" />
                        <img src="heartt-removebg-preview.png" alt="heart" className=" w-7 h-10 md:w-20 md:h-20" />
                        <span className="text-lg -ml-3 md:text-4xl font-semibold text-gray-800 italic ">love triangle <br/> I want !</span>
                    </div>
                    <p className=" -mt-1 md:mt-4 text-gray-600 font-semibold text-xs md:text-xl -ml-2 md:ml-3 italic">Life is a combination of magic and pizza. Pizza is the key to my heart and my happiness. </p>
                    <div className="flex gap-6 text-sm items-center justify-center mt-9">
                        <button className="bg-red-600 text-white p-1 text-xs md:text-base rounded-lg md:p-3 md:rounded-full flex gap-2  text-center justify-center">ORDER NOW ! <Right /> </button>
                        <button className="bg-gray-400 text-white p-1 text-xs  rounded-lg md:text-base md:p-3 md:rounded-full flex gap-2 text-center justify-center">Learn More <Right /></button>
                    </div>
                </div>
                <div>
  <img src="/pizza.png" alt="pizza" className="max-w-none mt-2 h-[45%] w-[230%] md:h-full  md:translate-x-5 md:w-full md:object-fill" />
                </div>
            </section>
        </>
    );
}