
const Headers = () => {
    return (
        <div>
            <div>
                <div className="w-[1600px] mx-auto  lg:flex items-center justify-between mt-12">
                <div>
                    <h1 className="text-3xl font-bold">Recipe Calories</h1>
                </div>
                <div>
                    <div className="hidden lg:flex gap-5">
                        <p>Home</p>
                        <p>Recipes</p>
                        <p>About</p>
                        <p>Search</p>
                    </div>
                </div>
                <div className="lg:flex hidden items-center ml-20 gap-5">
                    <div className="border w-[200px] px-5 py-2 flex rounded-full bg-slate-100">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                        <p>Search</p>
                    </div>
                    <div className="">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-green-500 ">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>

                    </div>
                    
                </div>
        </div>
            </div>
            <div>
                <div className='mt-20 ' >
                    {/* <img className='mx-auto w-[1600px] h-[700px] rounded-2xl' src={profile} alt="" /> */}
                    <div className="hero w-[1600px] mx-auto h-[700px] rounded-2xl" style={{backgroundImage: 'url(https://i.ibb.co/tKxHXVq/banner1.jpg)'}}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className=" text-center w-[700px] mx-auto text-neutral-content">
                        <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold mx-auto  w-[800px]">Discover an exceptional cooking class tailored for you!</h1>
                        <p className="mb-5 ml-10 w-[800px]">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <div className='text-center ml-20 w-[600px]'>
                            <button className="btn bg-[#0BE58A] rounded-full font-bold">Get Started</button>
                            <button className='bg-[#FFFFFF] text-black btn rounded-full ml-20'>Our Feedback</button>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Headers;