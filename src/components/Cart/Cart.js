import classes from './Cart.module.css'
import Modal from '../../UI/Modal';
import { Col, ModalFooter, Row, Table } from 'react-bootstrap';
import { useEffect, useState } from 'react';


const Cart = props =>{


    const [cartItems,setCartItems] = useState([]);
    const [totalAmount,setTotalAmount] = useState('');

    useEffect(()=>{
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
            setCartItems(updatedLoadedData)
            const prices = updatedLoadedData.map((product) => product.price)
            const total = prices.reduce((acc, curr) => acc + curr)
            setTotalAmount(total) 
        }).catch(err=>{
            alert(err.message)
        }) 
    },[props.displayCart])
   
    return(
        <Modal onClose={props.onClose}>
            <div >
                <Row>
                    <Col>
                    <Table size="sm-5" style={{fontWeight:'bold'}}>
                        <thead >
                            <tr>
                                <th><h4>Name</h4></th>
                                <th><h4>Large</h4></th>
                                <th><h4>Medium</h4></th>
                                <th><h4>Small</h4></th>
                                <th><h4>Price</h4></th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.map(item=>{
                                return(
                                    <tr key={item.id}>
                                        <td>{item.name}</td>
                                        <td>{item.qlCart}</td>
                                        <td>{item.qmCart}</td>
                                        <td>{item.qsCart}</td>
                                        <td>${item.price}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </Table>
                    </Col>
                </Row>
            <ModalFooter style={{fontWeight:'bold',alignItems:'center',padding: '0.5rem 2rem'}}>
                <h5><span>Total Amount:</span>&nbsp;
                <span>${totalAmount}</span></h5>
            </ModalFooter>
            <hr></hr>
            </div>
            <div className={classes.actions}>
            <button className={classes['button-alt']} onClick={props.onClose}>Close</button>
            <button className={classes.button}>Order</button>
        </div>
        </Modal>
    )
}

export default Cart;