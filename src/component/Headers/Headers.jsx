import profile from '../../assets/image/cooking.png'

const Headers = () => {
    return (
        <div>
            <div>
                <div className="w-[1600px] mx-auto flex items-center justify-between border mt-12">
                <div>
                    <h1 className="text-3xl font-bold">Recipe Calories</h1>
                </div>
                <div>
                    <div className="flex gap-5">
                        <p>Home</p>
                        <p>Recipes</p>
                        <p>About</p>
                        <p>Search</p>
                    </div>
                </div>
                <div className="flex items-center gap-5">
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
                <div>
                </div>
                </div>
                <div >
                    <img className='mx-auto' src={profile} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Headers;