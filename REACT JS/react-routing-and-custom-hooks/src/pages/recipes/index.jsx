import React from 'react'
import { useLocation } from 'react-router-dom';
import useFetch from '../../hooks/use-fetch';

function RecipeList() {
    const location = useLocation();

    const {data , loading , error} = useFetch('https://dummyjson.com/recipes') || {};
    
    if(loading) return <h1>Fetching recipes! Please Wait</h1>

  return (
    <div>
        <h1>Recipe List</h1>
        <ul>
            { data?.recipes?.length > 0 ?
            data?.recipes.map((recipeItem) => (
                <div>
                    <img src = {recipeItem?.image} />
                    <label>{recipeItem?.name}</label>
                </div>
            ))
            : null }
        </ul>
    </div>
  )
}

export default RecipeList;