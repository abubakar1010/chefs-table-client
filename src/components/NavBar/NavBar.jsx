

const NavBar = () => {
    return (
        <>



    <nav className="container mx-auto my-8">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <div href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse" >
                <h1 className="self-center text-3xl font-bold whitespace-nowrap text-[#150B2B]">Recipe Calories</h1>
            </div>
            <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">

    <div className=" flex items-center justify-center gap-6">
                {/* input field start here  */}
    
    <form className="max-w-md mx-auto hidden lg:block">   
        
        <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none ">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
            </div>
            <input type="search" id="default-search" className="block w-full py-2 px-5 ps-10 text-[#150B2BB2] rounded-xl outline-none border-none bg-[#150B2B0D] " placeholder="Search" required />
            
        </div>
    </form>


        {/* input field end here  */}


        {/* account image start here  */}

        <div className="bg-[#0BE58A] p-2 rounded-full">
        <img src="account.svg" className="" />
        </div>

    </div>

        {/* account image end here  */}
        <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm  rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 text-gray-400  " aria-controls="navbar-sticky" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
        </button>
            </div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0  ">
                    <li>
                        <a href="#" className="block py-2 px-3 text-[#150B2BB2]">Home</a>
                    </li>
                    <li>
                        <a href="#" className="block py-2 px-3 text-[#150B2BB2]">Recipes</a>
                    </li>
                    <li>
                        <a href="#" className="block py-2 px-3 text-[#150B2BB2]">About</a>
                    </li>
                    <li>
                        <a href="#" className="block py-2 px-3 text-[#150B2BB2]">Search</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>


        </>
    );
};

export default NavBar;