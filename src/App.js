import {useState } from "react";
import Header from "./components/Layout/Header";
import AddShoes from "./components/shoes/AddShoes";
import Cart from "./components/Cart/Cart";
import ShoesProvider from "./store/ShoesProvider";

function App() {
  const [cartIsShown,setCartIsShown] = useState(false);

  const onHideCartHandler = ()=>{
    setCartIsShown(false);
  }

  const onshowCartHandler =()=>{
    setCartIsShown(true);
  }

  
  return (
    <ShoesProvider>
      <div className='bg-dark'>
        {cartIsShown && <Cart onClose={onHideCartHandler} displayCart={onshowCartHandler} />}
        <Header onClick={onshowCartHandler} />
        <AddShoes /> 
      </div>
    </ShoesProvider>
  );
}

export default App;
