import React, { useMemo, useState } from 'react'
import useFetch from '../../hooks/use-fetch'

function UseMemoExample() {
    const{data , loading} = useFetch('https://dummyjson.com/products');
    const[flag , setFlag] = useState(false);

    function filterProductsByPrice(getProducts){
        console.log("this function is getting rendered.")

        return getProducts?.length > 0 ?
         getProducts.filter(singleProductItem => singleProductItem.price > 10) : [] ;
    }

    const memorizedVersion = useMemo(() => filterProductsByPrice(data?.products) , [data?.products])

    if(loading) return <h1>Loading data! Please wait.</h1>
    console.log(data);

  return (
    <div style={{textAlign : 'center'}}>
        <h1 style = {{color : flag ? 'yellow' : 'cyan'}}>
            UseMemo Hook
        </h1>
        <button onClick={() => setFlag(!flag)}>
            Toggle Flag
        </button>
        <ul>
            {
                memorizedVersion.map(item => <li>{item.title}</li>)
            }
        </ul>
    </div>
  )
}

export default UseMemoExample