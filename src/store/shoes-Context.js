import React from "react";

const ShoesContext=React.createContext({
    cartItems:[],
    addShoeToCartL:()=>{},
    addShoeToCartM:()=>{},
    addShoeToCartS:()=>{},
})

export default ShoesContext;