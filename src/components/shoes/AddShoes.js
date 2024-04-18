import { Fragment, useRef } from "react";
import Card from "../../UI/Card";
import classes from './AddShoes.module.css'

const AddShoes = props => {
    const nameInputRef=useRef();
    const desInputRef=useRef();
    const priceInputRef=useRef();
    const largeInputRef=useRef();
    const mediumInputRef=useRef();
    const smallInputRef=useRef();

    const onAddShoeHandler=event=>{
        event.preventDefault();
        const shoes={
            name:nameInputRef.current.value,
            description:desInputRef.current.value,
            price:priceInputRef.current.value,
            qLarge:largeInputRef.current.value,
            qMedium:mediumInputRef.current.value,
            qSmall:smallInputRef.current.value
        }
        

    }

    return(
        <Fragment>
            <Card className={classes.input}>
                <form onSubmit={onAddShoeHandler}>
                    <h2 >Sell Shoes</h2>
                    <label htmlFor='name'>Shoe Name:</label>
                    <input type="text" id="name" ref={nameInputRef}/>
                    <label htmlFor='des'>Description:</label>
                    <input type="text" id="des" ref={desInputRef}/>
                    <label htmlFor='price'>Price:</label>
                    <input type="number" id="price" ref={priceInputRef}/>
                    <h3>Quantity</h3>
                    <label htmlFor="l">Large:</label>
                    <input type="number" id="l" ref={largeInputRef}/>
                    <label htmlFor="m">Medium:</label>
                    <input type="number" id="m" ref={mediumInputRef}/>
                    <label htmlFor="s">Small:</label>
                    <input type="number" id="s" ref={smallInputRef}/>
                    <button type="submit">Add Product</button>
                </form>
            </Card>
        </Fragment>
    )
}

export default AddShoes;