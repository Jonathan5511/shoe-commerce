import { Fragment, useCallback, useEffect, useRef, useState } from "react";
import Card from "../../UI/Card";
import classes from './AddShoes.module.css'
import ShoesAvailableList from "./ShoesAvailableList";

const AddShoes = props => {
    const [shoes,setShoes] = useState([]);
    const nameInputRef=useRef();
    const desInputRef=useRef();
    const priceInputRef=useRef();
    const largeInputRef=useRef();
    const mediumInputRef=useRef();
    const smallInputRef=useRef();

   

    const fetchShoeList=useCallback(async()=>{
        try{
            const response = await fetch('https://shoe-react-project-default-rtdb.firebaseio.com/shoes.json')
            const data = await response.json()
            if(!response.ok){
                throw new Error('Something went wrong');
            }
            const loadedShoes=[];
            for(const key in data){
                loadedShoes.push({
                    id:key,
                    name:data[key].name,
                    description:data[key].description,
                    price:data[key].price,
                    qLarge:data[key].qLarge,
                    qMedium:data[key].qMedium,
                    qSmall:data[key].qSmall
            })
        } 
        setShoes(loadedShoes)
      
        }catch(error){
           alert(error.message)
        }
        
    },[])


    const onAddShoeHandler=useCallback(async(event)=>{
        event.preventDefault();

        if(nameInputRef.current.value.trim().length === 0 || desInputRef.current.value.trim().length === 0 || priceInputRef.current.value<0 || largeInputRef.current.value<0 || mediumInputRef.current.value<0 || smallInputRef.current.value<0){
            alert('Please enter all the details')
            return;
        }
        const shoe={
            name:nameInputRef.current.value,
            description:desInputRef.current.value,
            price:+priceInputRef.current.value,
            qLarge:+largeInputRef.current.value,
            qMedium:+mediumInputRef.current.value,
            qSmall:+smallInputRef.current.value
        }
        try{
            const response = await fetch('https://shoe-react-project-default-rtdb.firebaseio.com/shoes.json',{
            method:'POST',
            body:JSON.stringify(shoe),
            headers:{
                'Content-Type':'application/json'
            }
        })
        if(!response.ok){
            throw new Error('Something went wrong');
        }
        const data=await response.json();
        console.log(data)
        }catch(err){
            alert(err.message);
        }

        nameInputRef.current.value=''
        desInputRef.current.value=''
        priceInputRef.current.value=''
        largeInputRef.current.value=''
        mediumInputRef.current.value=''
        smallInputRef.current.value=''
        fetchShoeList()
    },[fetchShoeList])

    
    useEffect(()=>{
        fetchShoeList();
    },[fetchShoeList])

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
                    <h3>Avaliable Quantity</h3>
                    <label htmlFor="l">Large:</label>
                    <input type="number" id="l" ref={largeInputRef}/>
                    <label htmlFor="m">Medium:</label>
                    <input type="number" id="m" ref={mediumInputRef}/>
                    <label htmlFor="s">Small:</label>
                    <input type="number" id="s" ref={smallInputRef}/>
                    <button type="submit">Add Product</button>
                </form>
            </Card>
            <ShoesAvailableList shoes={shoes}  fetchShoeList={fetchShoeList}/>
        </Fragment>
    )
}

export default AddShoes;