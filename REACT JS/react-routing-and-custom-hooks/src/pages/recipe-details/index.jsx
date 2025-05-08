import React from 'react'
import { useParams } from 'react-router-dom';

function RecipeDetails() {
    const params = useParams();
    console.log(params);

    const {id} = params;
  return (
    <div style={{paddingLeft : '625px'}}>Recipe Details of item number {id}</div>
  )
}

export default RecipeDetails;