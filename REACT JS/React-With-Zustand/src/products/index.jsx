import React, { useEffect } from 'react'
import useCounter from '../store/use-counter';

function Products() {

    const fetchProducts = useCounter((state) => state.fetchListOfProducts);
    // console.log(stateValue);
    const productList = useCounter(state => state.listOfProducts)

    useEffect(() => {
        fetchProducts()
    }, []);

    console.log(productList);

  return (
    <div>
        <h1>List of Products</h1>
        <ul style = {{display: 'flex' , flexWrap: 'wrap'}}>
            {
                productList?.length > 0 ? 
                productList.map(singleProductItem => <div key = {singleProductItem.id}>
                    <p>{singleProductItem?.title}</p>
                    <img src= {singleProductItem?.thumbnail}/>
                </div>) :
                <h3>No products available</h3>
            }
        </ul>
    </div>
  )
}

export default Products