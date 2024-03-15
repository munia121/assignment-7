/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import SingleCart from "../SingleCart/SingleCart";

const Recipes = () => {
    // eslint-disable-next-line no-unused-vars
    const [carts, setCarts] = useState([])
    
    useEffect(() => {
        fetch('recipe.json')
        .then(res=> res.json())
        .then(data=>setCarts(data))
    },[])


    return (
        <div className="w-[1600px] mx-auto mt-10">
            <div className="text-center">
                <h1 className="text-3xl text-center font-bold">Our Recipes</h1>
                <p className="w-[823px] mx-auto">Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget urna volutpat curabitur elementum mauris aenean neque. </p>
            </div>
            {/* cart single */}
            <div className="flex gap-10 mt-20">
                <div className="grid grid-cols-2 gap-5">
                    {
                        carts.map((item)=><SingleCart item={item}></SingleCart>)
                    }
                    
                </div>
                {/* cart  */}
                <div className='w-[514px] border rounded-lg h-[400px] '>
                    <div >
                       <h2 className="text-3xl font-bold text-center">Want to cook: 01</h2>
                       <div className="divider"></div>
                       <div className="flex justify-around">
                            <p>name</p>
                            <p>Time</p>
                            <p>Calories</p>
                            <div>
                                {/* ********* */}
                            </div>
                       </div>
                       <div>
                        <p className="text-3xl text-center mt-6 font-bold">Currently cooking: 02</p>
                        <div className="divider"></div>
                        <div className="flex justify-around">
                                <p>name</p>
                                <p>Time</p>
                                <p>Calories</p>
                                <div>
                                    {/* ********* */}
                                </div>
                       </div>
                       </div>
                       <div className="mt-20">
                            <p>Total Time =54 min</p>
                            <p>Total Calories = 1050 calories</p>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Recipes;