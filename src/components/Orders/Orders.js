import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import GetProducts from '../../CustomHook/getProducts';
import { deleteProductLocal, findObj, findUser } from '../../CustomHook/utilities';
import OrdersInfo from '../OrdersInfo/OrdersInfo';
import './Orders.css';

const Orders = () => {

    const [selectProduct, setSelectProduct] = useState([]);

    //system all products get here
    const products = GetProducts(0);
    //here all the product find which is order
    useEffect(() => {

        const storedCart = findObj();
        const id = Object.keys(storedCart)[0];
        const price = Object.keys(storedCart)[1];

        const cart = [];

        // for(const id in storedCart){
       
        const addedProduct = products.filter(product => product.id === id);
        //console.log(addedProduct)
        if (addedProduct) {

            // const quantity = storedCart[id];
            //addedProduct.quantity = storedCart.id;
            addedProduct.rentPrice = storedCart.price;
            //console.log(addedProduct)
            cart.push(addedProduct);
        }
        // }
        setSelectProduct(...cart);
    }, [products])

    //console.log(selectProduct)


    //delete form state and also localStorage
    const deleteProduct = (id) => {

        deleteProductLocal(id);
        const addedP = selectProduct.filter(product => product.id !== id);
        setSelectProduct(addedP);

    }



    return (
        <div className="container mt-5">

            <div className='text-center order-container'>
                {
                    selectProduct.map(product => <OrdersInfo product={product} deleteProduct={deleteProduct} key={product.id}></OrdersInfo>)
                }
            </div>

            <div className='text-center'>

                {
                    selectProduct.length > 0 ? <button className='btn btn-warning'><Link to='/profile'>Confirm order</Link></button> : <h2 className='text text-danger'>Added Product in Your Cart</h2>
                }

            </div>
        </div>
    );
};

export default Orders;