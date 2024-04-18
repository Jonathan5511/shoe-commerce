import { Fragment, useState } from "react";
import Header from "./components/Layout/Header";
import AddShoes from "./components/shoes/AddShoes";
import Cart from "./components/Cart/Cart";

function App() {
  const [cartIsShown,setCartIsShown] = useState(false);

  const onHideCartHandler = ()=>{
    setCartIsShown(false);
  }

  const onshowCartHandler =()=>{
    setCartIsShown(true);
  }

  return (
    <Fragment>
      {cartIsShown && <Cart onClose={onHideCartHandler}/>}
      <Header onClick={onshowCartHandler}/>
      <AddShoes/>
    </Fragment>
  );
}

export default App;
