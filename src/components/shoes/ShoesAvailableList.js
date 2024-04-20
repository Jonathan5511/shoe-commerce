import { Fragment, useContext } from 'react';
import { Button, Card, Col, Row, Table } from 'react-bootstrap';
import ShoesContext from '../../store/shoes-Context';

const ShoesAvailableList = props =>{
    const shoeCtx=useContext(ShoesContext)

    const onAddToCartHandlerL=async(id,name,des,price,lQuantity,mQuantity,sQuantity)=>{
    if(lQuantity!==0){
            const updatedData={
                id:id,
                name:name,
                description:des,
                price:price,
                qLarge:lQuantity-1,
                qMedium:mQuantity,
                qSmall:sQuantity,
                qlCart:0,
                qmCart:0,
                qsCart:0,
            }
            try{
                const response = await fetch(`https://shoe-react-project-default-rtdb.firebaseio.com/shoes/${id}.json`,{
                method:'PUT',
                body:JSON.stringify(updatedData),
                headers:{'Content-Type':'application/json'}
            })
            const data = await response.json()
            console.log(data)
            if(!response.ok){
                throw new Error('Something went wrong!')
            }
            }catch(err){
                alert(err.message)
            }
            props.fetchShoeList();
            shoeCtx.addShoeToCartL(updatedData);
    }
    else{
        alert('Shoes of size L not available!')
    }
}

    const onAddToCartHandlerM=async(id,name,des,price,lQuantity,mQuantity,sQuantity)=>{
        if(mQuantity!==0){
            const updatedData={
                id:id,
                name:name,
                description:des,
                price:price,
                qLarge:lQuantity,
                qMedium:mQuantity-1,
                qSmall:sQuantity,
                qlCart:0,
                qmCart:0,
                qsCart:0,
            }
            try{
                const response = await fetch(`https://shoe-react-project-default-rtdb.firebaseio.com/shoes/${id}.json`,{
                method:'PUT',
                body:JSON.stringify(updatedData),
                headers:{'Content-Type':'application/json'}
            })
            const data=await response.json()
            if(!response.ok){
                throw new Error('Something went wrong!')
            }
            console.log(data)
            }catch(err){
                alert(err.message)
            }
            props.fetchShoeList();
            shoeCtx.addShoeToCartM(updatedData);
  
        }else{
            alert('Shoes of size M not available!')
        }
        
    }

    const onAddToCartHandlerS=async(id,name,des,price,lQuantity,mQuantity,sQuantity)=>{
        if(sQuantity!==0){
            const updatedData={
                id:id,
                name:name,
                description:des,
                price:price,
                qLarge:lQuantity,
                qMedium:mQuantity,
                qSmall:sQuantity-1,
                qlCart:0,
                qmCart:0,
                qsCart:0,
            }
            try{
                const response = await fetch(`https://shoe-react-project-default-rtdb.firebaseio.com/shoes/${id}.json`,{
                method:'PUT',
                body:JSON.stringify(updatedData),
                headers:{'Content-Type':'application/json'}
            })
            const data=await response.json()
            if(!response.ok){
                throw new Error('Something went wrong!')
            }
            console.log(data)
            }catch(err){
                alert(err.message)
            }
            props.fetchShoeList();
            shoeCtx.addShoeToCartS(updatedData);
         
        }else{
            alert('Shoes of size S not available!')
        }
        
    }

    return(
        <Fragment>
                    <div className="col d-flex justify-content-center">
                        <Row >
                            <Col >
                            <Card style={{ width: '60rem',borderRadius: '10px',padding: '0.25rem 1rem'}}>
                            <Table>
                                <thead>
                                    <tr>
                                        <th>Shoe Name</th>
                                        <th>Description</th>
                                        <th>Price</th>         
                                    </tr>
                                </thead>
                                <tbody>
                                    {props.shoes.map((shoe) => (
                                        <tr key={shoe.id}>
                                        <td>
                                            <h5>{shoe.name}</h5>
                                        </td>
                                        <td>
                                            <h5>{shoe.description}</h5>
                                        </td>
                                        <td>
                                            <h5>${shoe.price}</h5>
                                        </td>
                                        <td>
                                            <Button variant='primary' style={{padding: '0.25rem 1rem',fontWeight: 'bold'}} onClick={()=>onAddToCartHandlerL(shoe.id,shoe.name,shoe.description,shoe.price,shoe.qLarge,shoe.qMedium,shoe.qSmall)}>Large {shoe.qLarge}</Button>
                                        </td>
                                        <td>
                                            <Button variant='primary' style={{padding: '0.25rem 1rem',fontWeight: 'bold'}} onClick={()=>onAddToCartHandlerM(shoe.id,shoe.name,shoe.description,shoe.price,shoe.qLarge,shoe.qMedium,shoe.qSmall)}>Medium {shoe.qMedium}</Button>
                                        </td>
                                        <td>
                                            <Button variant='primary' style={{padding: '0.25rem 1rem',fontWeight: 'bold'}} onClick={()=>onAddToCartHandlerS(shoe.id,shoe.name,shoe.description,shoe.price,shoe.qLarge,shoe.qMedium,shoe.qSmall)}>Small {shoe.qSmall}</Button>
                                        </td>
                                    </tr>
                                    ))}
                                </tbody>
                                </Table>
                                </Card>
                            </Col>
                        </Row>
                    </div>
        </Fragment>
    )
}

export default ShoesAvailableList;