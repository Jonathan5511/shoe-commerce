import { Fragment } from "react";
import classes from './Header.module.css'
import HeaderCartButton from "./HeaderCartButton";
import shoesImage from '../../assets/shoes.jpg'

const Header = props=>{
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>React shoes</h1>
                <HeaderCartButton onClick={props.onClick}/>
            </header>
            <div className={classes['main-image']}>
                <img src={shoesImage} alt="A rack full of shoes!"></img>
            </div>
        </Fragment>
    )
}

export default Header;