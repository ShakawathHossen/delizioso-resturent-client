import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const CheifDetails = () => {
    const { id } = useParams();
    const cheifs = useLoaderData();
    const cheif = cheifs.find((c) => c.id == id);

    if (!cheif) {
        return <div>Loading...</div>;
    }
    let recipeDetails = cheif.recipe_details;
    console.log(recipeDetails)


    return (
        <div>
            <div className='md:w-10/12 mx-auto py-14'>
                <div className='mx-auto '>
                    <div className="mx-auto lg:flex lg:flex-row items-center rounded-3xl  shadow-md py-6 px-10">
                        <div className="md:w-1/2">
                            <img className='w-3/4  rounded-2xl' src={cheif.image} alt="" />
                        </div>
                        <div className="md:w-1/2">
                            <h1 className='text-orange-500 text-4xl italic pb-2'>{cheif.name}</h1>
                            <h1 className='text-sm text-justify pb-3'><span className='font-bold text-md'>Bio: </span>{cheif.bio}</h1>
                            <h1 className='text-sm text-justify pb-2'><span className='font-bold text-md'>Likes: </span>{cheif.likes}</h1>
                            <h1 className='text-sm text-justify pb-2'><span className='font-bold text-md'>Recipes: </span>{cheif.recipes}</h1>
                            <h1 className='text-sm text-justify pb-2'><span className='font-bold text-md'>Experience: </span>{cheif.experience} Years</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 md:w-10/12 mx-auto">
                {recipeDetails.map(recipe =>
                    <div key={recipe.id} className="">
                        <div className='px-10 shadow-md py-6 bg-orange-50 card'>
                            <div className="card-title">
                            <h1>{recipe.recipe_name}</h1>
                            </div>
                            <p className='text-sm pb-3'><span className='font-bold text-md'>Ingredients: </span>{recipe.ingredients}</p>
                            <p className='text-sm pb-3'><span className='font-bold text-md'>Cooking Method: </span>{recipe.cooking_method}</p>

                            <div className="card-actions justify-end">
      <button className="">Favorite</button>
    </div>
                           
                        </div>
                    </div>
                )}
            </div>


        </div>
    );
};

export default CheifDetails;