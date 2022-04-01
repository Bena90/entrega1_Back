import React from 'react'
import { Container } from 'react-bootstrap'
import CartList from '../components/cart/cartList'
import ProductForm from '../components/form/form'
import ItemList from '../components/itemList/itemList'
import OrdersList from '../components/orders/orderList'
import { useProduct } from '../context/context'


const HomePage = () =>{
    const { admin, setAdmin } = useProduct()
    
    return(
        <Container className='my-4'>
            <h1 className='text-center'> Desafío E-Commerce </h1>
            <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" value={admin} onChange={()=>setAdmin(!admin)} id="flexSwitchCheckDefault"/>
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Admin</label>
            </div>
            <div>
            {(admin) && <ProductForm/>}                 
            </div>
                <hr />
            <div>
                <ItemList/>
            </div>
            <hr />
                <CartList />
            <hr />
                <OrdersList/>
            <hr />
        </Container>
    )
}

export default HomePage;