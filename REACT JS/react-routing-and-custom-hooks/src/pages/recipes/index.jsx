import React from 'react'
import { useLocation } from 'react-router-dom';
import useFetch from '../../hooks/use-fetch';
import UseWindowResize from '../../hooks/use-window-resize';

function RecipeList() {
    const location = useLocation();

    const {data , loading , error} = useFetch('https://dummyjson.com/recipes') || {};
    const windowSize = UseWindowResize();
    
    if(loading) return <h1>Fetching recipes! Please Wait</h1>

  return (
    <div>
        <h1 style = {{ color : windowSize.width < 700 ? 'red' : 'white'}}>Recipe List</h1>
        <h3>Current window width is {windowSize.width} and height is {windowSize.height}.</h3>
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