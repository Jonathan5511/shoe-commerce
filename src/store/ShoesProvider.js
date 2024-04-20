
import { useState } from "react";
import ShoesContext from "./shoes-Context";

const ShoesProvider=(props)=>{
    const [cartItems,setCartItems]= useState([])

    const onAddShoeHandlerL=async(shoe)=>{
        const response= await fetch('https://shoe-react-project-default-rtdb.firebaseio.com/cart.json')
        const data=await response.json()
        if(data!==null){
            const loadedShoes=[];
        for(const key in data){
            loadedShoes.push({
                id:key,
                name:data[key].name,
                description:data[key].description,
                price:data[key].price,
                qLarge:data[key].qLarge,
                qMedium:data[key].qMedium,
                qSmall:data[key].qSmall,
                qlCart:data[key].qlCart,
                qmCart:data[key].qmCart,
                qsCart:data[key].qsCart,
            })
        }
        setCartItems(loadedShoes)
        const findExistingDataIndex=loadedShoes.findIndex(shoes=>shoes.name===shoe.name)
        const findExistingData = loadedShoes[findExistingDataIndex];
        if(findExistingData){
            const updatedCartData={
                id:shoe.id,
                name:shoe.name,
                description:shoe.description,
                price:findExistingData.price+shoe.price,
                qLarge:shoe.qLarge,
                qMedium:shoe.qMedium,
                qSmall:shoe.qSmall,
                qlCart:findExistingData.qlCart+1,
                qmCart:findExistingData.qmCart,
                qsCart:findExistingData.qsCart,
            }
            await fetch(`https://shoe-react-project-default-rtdb.firebaseio.com/cart/${findExistingData.id}.json`,{
                method:'PUT',
                body:JSON.stringify(updatedCartData),
                Headers:{'Content-Type':'application/json'}
            })
        }else{
            const updatedCartData={
                id:shoe.id,
                name:shoe.name,
                description:shoe.description,
                price:shoe.price,
                qLarge:shoe.qLarge,
                qMedium:shoe.qMedium,
                qSmall:shoe.qSmall,
                qlCart:shoe.qlCart+1,
                qmCart:shoe.qmCart,
                qsCart:shoe.qsCart,
            }
            await fetch('https://shoe-react-project-default-rtdb.firebaseio.com/cart.json',{
                method:'POST',
                body:JSON.stringify(updatedCartData),
                headers:{'Content-Type':'application/json'}
            })
        }
        }
        else{
            const updatedCartData ={
                id:shoe.id,
                name:shoe.name,
                description:shoe.description,
                price:shoe.price,
                qLarge:shoe.qLarge,
                qMedium:shoe.qMedium,
                qSmall:shoe.qSmall,
                qlCart:shoe.qlCart+1,
                qmCart:shoe.qmCart,
                qsCart:shoe.qsCart,
            }
            await fetch('https://shoe-react-project-default-rtdb.firebaseio.com/cart.json',{
                method:'POST',
                body:JSON.stringify(updatedCartData),
                headers:{'Content-Type':'application/json'}
            })
        }
    }

    const onAddShoeHandlerM=async(shoe)=>{
        const response= await fetch('https://shoe-react-project-default-rtdb.firebaseio.com/cart.json')
        const data=await response.json()
        if(data!==null){
            const loadedShoes=[];
        for(const key in data){
            loadedShoes.push({
                id:key,
                name:data[key].name,
                description:data[key].description,
                price:data[key].price,
                qLarge:data[key].qLarge,
                qMedium:data[key].qMedium,
                qSmall:data[key].qSmall,
                qlCart:data[key].qlCart,
                qmCart:data[key].qmCart,
                qsCart:data[key].qsCart,
            })
        }
        setCartItems(loadedShoes)
        const findExistingDataIndex=loadedShoes.findIndex(shoes=>shoes.name===shoe.name)
        const findExistingData = loadedShoes[findExistingDataIndex];
        if(findExistingData){
            const updatedCartData={
                id:shoe.id,
                name:shoe.name,
                description:shoe.description,
                price:findExistingData.price+shoe.price,
                qLarge:shoe.qLarge,
                qMedium:shoe.qMedium,
                qSmall:shoe.qSmall,
                qlCart:findExistingData.qlCart,
                qmCart:findExistingData.qmCart+1,
                qsCart:findExistingData.qsCart,
            }
            await fetch(`https://shoe-react-project-default-rtdb.firebaseio.com/cart/${findExistingData.id}.json`,{
                method:'PUT',
                body:JSON.stringify(updatedCartData),
                Headers:{'Content-Type':'application/json'}
            })
        }else{
            const updatedCartData={
                id:shoe.id,
                name:shoe.name,
                description:shoe.description,
                price:shoe.price,
                qLarge:shoe.qLarge,
                qMedium:shoe.qMedium,
                qSmall:shoe.qSmall,
                qlCart:shoe.qlCart,
                qmCart:shoe.qmCart+1,
                qsCart:shoe.qsCart,
            }
            await fetch('https://shoe-react-project-default-rtdb.firebaseio.com/cart.json',{
                method:'POST',
                body:JSON.stringify(updatedCartData),
                headers:{'Content-Type':'application/json'}
            })
        }
        }
        else{
            const updatedCartData ={
                id:shoe.id,
                name:shoe.name,
                description:shoe.description,
                price:shoe.price,
                qLarge:shoe.qLarge,
                qMedium:shoe.qMedium,
                qSmall:shoe.qSmall,
                qlCart:shoe.qlCart,
                qmCart:shoe.qmCart+1,
                qsCart:shoe.qsCart,
            }
            await fetch('https://shoe-react-project-default-rtdb.firebaseio.com/cart.json',{
                method:'POST',
                body:JSON.stringify(updatedCartData),
                headers:{'Content-Type':'application/json'}
            })
        }
  
    }

    const onAddShoeHandlerS=async(shoe)=>{
        const response= await fetch('https://shoe-react-project-default-rtdb.firebaseio.com/cart.json')
        const data=await response.json()
        if(data!==null){
            const loadedShoes=[];
        for(const key in data){
            loadedShoes.push({
                id:key,
                name:data[key].name,
                description:data[key].description,
                price:data[key].price,
                qLarge:data[key].qLarge,
                qMedium:data[key].qMedium,
                qSmall:data[key].qSmall,
                qlCart:data[key].qlCart,
                qmCart:data[key].qmCart,
                qsCart:data[key].qsCart,
            })
        }
        setCartItems(loadedShoes)
        const findExistingDataIndex=loadedShoes.findIndex(shoes=>shoes.name===shoe.name)
        const findExistingData = loadedShoes[findExistingDataIndex];
        if(findExistingData){
            const updatedCartData={
                id:shoe.id,
                name:shoe.name,
                description:shoe.description,
                price:findExistingData.price+shoe.price,
                qLarge:shoe.qLarge,
                qMedium:shoe.qMedium,
                qSmall:shoe.qSmall,
                qlCart:findExistingData.qlCart,
                qmCart:findExistingData.qmCart,
                qsCart:findExistingData.qsCart+1,
            }
            await fetch(`https://shoe-react-project-default-rtdb.firebaseio.com/cart/${findExistingData.id}.json`,{
                method:'PUT',
                body:JSON.stringify(updatedCartData),
                Headers:{'Content-Type':'application/json'}
            })
        }else{
            const updatedCartData={
                id:shoe.id,
                name:shoe.name,
                description:shoe.description,
                price:shoe.price,
                qLarge:shoe.qLarge,
                qMedium:shoe.qMedium,
                qSmall:shoe.qSmall,
                qlCart:shoe.qlCart,
                qmCart:shoe.qmCart,
                qsCart:shoe.qsCart+1,
            }
            await fetch('https://shoe-react-project-default-rtdb.firebaseio.com/cart.json',{
                method:'POST',
                body:JSON.stringify(updatedCartData),
                headers:{'Content-Type':'application/json'}
            })
        }
        }
        else{
            const updatedCartData ={
                id:shoe.id,
                name:shoe.name,
                description:shoe.description,
                price:shoe.price,
                qLarge:shoe.qLarge,
                qMedium:shoe.qMedium,
                qSmall:shoe.qSmall,
                qlCart:shoe.qlCart,
                qmCart:shoe.qmCart,
                qsCart:shoe.qsCart+1,
            }
            await fetch('https://shoe-react-project-default-rtdb.firebaseio.com/cart.json',{
                method:'POST',
                body:JSON.stringify(updatedCartData),
                headers:{'Content-Type':'application/json'}
            })
        }
      
    }

   
    const ShoeContent={
        cartItems:cartItems,
        addShoeToCartL:onAddShoeHandlerL,
        addShoeToCartM:onAddShoeHandlerM,
        addShoeToCartS:onAddShoeHandlerS,
      
    }

    return <ShoesContext.Provider value={ShoeContent}>
        {props.children}
    </ShoesContext.Provider>
}

export default ShoesProvider;