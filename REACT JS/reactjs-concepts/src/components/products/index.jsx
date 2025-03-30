import ProductItem from "./components/product-item";
import "./style.css";


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
    
    return (
    <div>
        <h3 className="title">ECommerce Project</h3>
        {/* <ProductItem/> */}

        {/* {
            flag ? <h4>Name of the customer is {name}, he/she belongs to {city}.</h4> : <h4>No order placed!</h4>
        } */}

        {/* {renderTextBlock(flag)} */}
        {renderBlock}

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