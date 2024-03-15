/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import profile from '../../assets/image/cooking.png'
const SingleCart = ({item}) => {

    const {recipe_id,recipe_name,short_description,preparing_time,calories,recipe_image,ingredients} = item;

    return (
        <div className='flex'>
            <div>
            <div className="card w-96  bg-base-100 shadow-xl p-5">
                <figure className="px-10 pt-10">
                    <img src={recipe_image} alt="Shoes" className="rounded-xl h-[200px]" />
                </figure>
                <div className=" px-10">
                    <h2 className="card-title">{recipe_name}</h2>
                    <p>{short_description}</p>
                    <div className='divider'></div>
                    <div>
                        <p className='font-bold'>Ingredients: 6</p>
                        {
                            ingredients.map(a => <li>{a}</li>)
                        }
                    </div>
                    <div className='divider'></div>
                    <div className='flex gap-10'>
                        <div className='flex'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                            <p>{preparing_time} minutes</p>
                        </div>
                        <div className='flex'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" />
                            </svg>
                            <p>{calories} calories</p>

                        </div>
                    </div>
                    <div className="card-actions mt-2">
                        <button className="btn bg-[#0BE58A] rounded-full font-bold">Want to Cook</button>
                    </div>
                </div>
                </div>
            </div>
            
        </div>
    );
};

export default SingleCart;