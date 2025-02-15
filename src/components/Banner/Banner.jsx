

const Banner = () => {

    
    return (
        <>
            

    <section className=" bg-banner rounded-[24px] bg-gray-700 bg-center bg-no-repeat bg-cover my-7 container mx-auto " >
        <div className="px-4  text-center py-24 lg:py-56">
            <h1 className="mb-4 text-4xl font-extrabold text-white md:text-5xl lg:text-6xl">Discover an exceptional cooking class tailored for you!</h1>
            <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">Every dish bursts with flavor, crafted with love, and presented with elegance, ensuring a truly delightful dining experience</p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                <a href="#" className="inline-flex justify-center items-center py-5 px-8 text-xl font-semibold text-center text-[#150B2B] rounded-[50px] bg-[#0BE58A] hover:bg-blue-800 hover:text-white focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                Explore Now
                    <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
                <a href="#" className="inline-flex justify-center hover:text-gray-900 items-center py-5 px-8 sm:ms-4 text-xl font-semibold text-center text-white rounded-[50px] border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                    Learn more
                </a>  
            </div>
        </div>
    </section>

        </>
    );
};

export default Banner;