import { Fragment } from 'react'
import classes from './Modal.module.css'
import ReactDOM from 'react-dom'

const Backdrop =props=>{
    return <div className={classes.backdrop} onClick={props.onClose}></div>
}

const ModalOverlay = props=>{
    return (<div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>)
}

const overlay = document.getElementById('overlay')

const Modal = props =>{
    return(
        <Fragment>
            {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>,overlay)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,overlay)}
        </Fragment>  
    )
}

export default Modal;