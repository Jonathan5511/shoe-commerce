import ShoesContext from "../../store/shoes-Context";
import CartIcon from "../Cart/CartIcon";
import classes from './HeaderCartButton.module.css'
import { useContext,useState } from "react";

const HeaderCartButton = props =>{
    const [count,setCount] = useState('')
    // eslint-disable-next-line
    const shoeCtx = useContext(ShoesContext)
        
        fetch('https://shoe-react-project-default-rtdb.firebaseio.com/cart.json'
        ).then(res=>{
            if(res.ok){
                return res.json()
            }else{
                return res.json().then(data=>{
                    let errorMessage=('Something went wrong!')
                    if(data && data.error && data.error.message){
                      errorMessage = data.error.message;
                    }
                    throw new Error(errorMessage)
                })
            }
        }).then(data=>{
            let updatedLoadedData=[];
            for(const key in data){
                updatedLoadedData.push({
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
            const numberOfCartItems = updatedLoadedData.reduce((curNumber, item) => {
                return curNumber + item.qlCart+item.qmCart+item.qsCart;
              }, 0);
              setCount(numberOfCartItems)
        }).catch(err=>{
            alert(err.message)
        }) 
  
    

    return(
        <button className={classes.button} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{count}</span>
        </button>
    )
}

export default HeaderCartButton;