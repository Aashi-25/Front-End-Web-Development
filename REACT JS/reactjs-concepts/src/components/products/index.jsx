import { use, useEffect, useState } from "react";
import ProductItem from "./components/product-item";
import "./style.css";

const initialState = true;

function ProductList({ name,city,dummyProductData }){
    // console.log(props);
    // const {name , city} = props; 
    //destructuring props
    //destructuring props can be avoided and the elements of the props can be directly passed as objects in the function.
    
    const flag = false;
    function renderTextBlock(getflag){
        return getflag ? <h4>Name of the customer is {name}, he/she belongs to {city}.</h4> : <h4>No order placed!</h4>
    }

    const renderBlock = flag ? <h4>Name of the customer is {name}, he/she belongs to {city}.</h4> : <h4>No order placed!</h4>

    //writing useState hook
    const[flag2 , setFlag] = useState(initialState);
    const[count , setCount] = useState(0);
    const[changeStyle , setChangeStyle] = useState(false);

    function handleToggleText() {
        setFlag(!flag2) ;
    }

    function handleIncreaseCount(){
        setCount(count + 1);
    }

    useEffect(() => {
        setFlag (!flag2) ;
        console.log("run only once on page load");
        
        return () => {
            console.log("component is unmounted.")
        }
    } , []) //this will only run once on page load

    //useEffect with dependency
    useEffect(() => {
        console.log("count changes");
        if(count === 10) setChangeStyle(true);
    } , [count]);
    console.log(changeStyle);
    
    return (
    <div>
        <h3 className="title">ECommerce Project</h3>
        <button onClick = { handleToggleText } style = {{backgroundColor : "#5A5A5A" , color : "black"}}> Toggle Text </button> 
        {/* //toggles the text on button click (implementation using functional components) */}

        {/* <ProductItem/> */}

        {/* {
            flag ? <h4>Name of the customer is {name}, he/she belongs to {city}.</h4> : <h4>No order placed!</h4>
        } */}

        {/* {renderTextBlock(flag)} */}
        {renderBlock}
        
        {
            flag2 ? <h4> {name} and {city}</h4> : <h4>Hello</h4>
        }

        <div>
            <button onClick = {handleIncreaseCount} style = {{backgroundColor : changeStyle ? "black" : "white" , color : changeStyle ? "white" : "black"}}>Increase count</button>
            <p>Count is {count} (functional component)</p>
        </div>

        <ul>
            {dummyProductData.map((item,index) => (
                    // <li key = {index}>{item}</li>
                    <ProductItem singleProductItem = {item} key = {index}/>
                ))
            }
        </ul>
    </div>
    );
}

export default ProductList;