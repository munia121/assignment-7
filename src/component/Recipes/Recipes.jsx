/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import SingleCart from "../SingleCart/SingleCart";
import { ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Recipes = () => {
    // eslint-disable-next-line no-unused-vars
    const [carts, setCarts] = useState([])
    const [products, setProducts] = useState([]);
    const [preparing, setPreparing] = useState([])
    
    useEffect(() => {
        fetch('recipe.json')
        .then(res=> res.json())
        .then(data=>setCarts(data))
    },[])


    const handleWantToCook = (p) =>{
        const isExist = products.find(a => a.recipe_id == p.recipe_id);
        if(!isExist){
            setProducts([...products,p])
        }
        else{
            // alert('*-augf')
            toast("Already Exist!")
        } 

    }


    const handlePreparing = (id) =>{
        const newDish = products.filter(product => product.recipe_id !== id)
        setProducts(newDish)


        // const newCook = preparing.find(a => a.recipe_id == id);
        setPreparing(products)
        
    }

    const convert = preparing.preparing_time;
    console.log(convert)

    console.log(preparing)

    // console.log(products)
    return (
        <div className="lg:w-[1600px] mx-auto mt-20">
            <div className="text-center">
                <h1 className="text-3xl text-center font-bold">Our Recipes</h1>
                <p className="lg:w-[823px] mx-auto p-4">Indulge in a symphony of flavors with our curated collection of exquisite recipes. Each dish is a masterpiece, meticulously crafted to tantalize your taste buds and ignite your culinary imagination.

</p>
            </div>
            {/* cart single */}
            <div className="lg:flex gap-20 mt-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-4 gap-x-20">
                    {
                        carts.map((item)=><SingleCart item={item} handleWantToCook={handleWantToCook}></SingleCart>)
                    }
                    
                </div>
                {/* cart  */}
                <div className='lg:w-[514px] w-full border h-full rounded-lg  '>
                    <div >
                       <h2 className="text-3xl font-bold text-center">Want to cook:{products.length}</h2>
                       <div className="divider"></div>
                       <div className="flex gap-20 px-20 font">
                            <p>name</p>
                            <p>Time</p>
                            <p>Calories</p>
                       </div>
                       <div className="p-3 ">
                            {
                                products.map((item, index) =>(
                                    <div className="flex justify-around items-center font bg-gray-200 mt-5 py-3 rounded-lg">
                                        <p>{index+1}</p>
                                        <p>{item.recipe_name}</p>
                                        <p>{item.preparing_time} minute</p>
                                        <p>{item.calories} calories</p>
                                        <button onClick={()=>handlePreparing(item.recipe_id)} className="btn bg-[#0BE58A] rounded-full">Preparing</button>
                                    </div>
                                ))
                            }
                        </div>
                       <div>
                        <p className="text-3xl text-center mt-6 font-bold">Currently cooking: {preparing.length}</p>
                        <div className="divider"></div>
                        <div className="flex justify-around font">
                            <p>name</p>
                            <p>Time</p>
                            <p>Calories</p>
                       </div>
                       <div>
                            {
                                preparing.map((prepar,index) => (
                                    <div className="flex justify-between p-7 font">
                                        <p>{index+1}</p>
                                        <p>{prepar.recipe_name}</p>
                                        <p>{prepar.preparing_time} minute</p>
                                        <p>{prepar.calories} calories</p>
                                    </div>
                                ))
                            }
                       </div>
                       </div>
                       <div className="mt-20 p-4">
                            <p>Total Time ={preparing.reduce((p,c)=>p+c.preparing_time,0)} min</p>
                            <p>Total Calories = {preparing.reduce((p,c)=>p+c.calories,0)} calories</p>
                       </div>
                    </div>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
        
    );
};

export default Recipes;