import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import React, { use, useState } from 'react'
import { addNewProduct, fetchListofProducts } from './api';

function ReactQuery() {
    const {data : productList , isLoading} = useQuery({
        queryKey : ['productList'],
        queryFn : () => fetchListofProducts()
    });

    const [productTitle , setproductTitle] = useState('');

    const getQueryClient = useQueryClient();

    const {mutateAsync : handleAddNewProductMutation} = useMutation({
        mutationFn : addNewProduct,
        onSuccess : () => {
            getQueryClient.invalidateQueries(['productList']);
        }
    })

    async function handleAddNewProduct(){
        await handleAddNewProductMutation(productTitle);
        setproductTitle("");
    }

    if(isLoading) return <h1>Loading products! Please Wait.</h1>

  return (
    <div style={{textAlign : 'center'}}>
        <h1>
            React-Query
        </h1>
        <div>
            <input name='name' value={productTitle} onChange={(event) => setproductTitle(event.target.value)} placeholder='Enter product title'/>
            <button onClick = {handleAddNewProduct}
            disabled={productTitle.trim() === ""} type='button'>Add New Product</button>
        </div>
        <ul>
            {
                productList?.length > 0 ?
                productList.map(product => <li key = {product.id}> {product.title}
                </li>) : 
                (
                    <h3>No Product Found</h3>
                ) 
            }
        </ul>
    </div>
  )
}

export default ReactQuery;