import styles from './product-item.module.css';

function ButtonComponent(){
    return (
        <button className = {styles.buttonstyle}>Click me!</button>
    )
}

function ProductItem({singleProductItem} , key){
    return (
        <div style = {{padding:"10px" , border:"2px solid grey" , marginBottom:"5px"}} key = {key}>
            <p className={styles.productTitle}>{singleProductItem}</p>
            <ButtonComponent/>
        </div>
    );
}

export default ProductItem;