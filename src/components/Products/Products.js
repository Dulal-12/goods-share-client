import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css';
import GetProducts from '../../CustomHook/getProducts';
import Option from '../Option/Option';
import Categories from '../Categories/Categories';

const Products = () => {


    //setOption
    const [option, setOption] = useState(1);
    //products
    const [products, setProducts] = useState([]);
    //category
    const [category, setCategory] = useState('smartphones');


    useEffect(() => {

        fetch(`http://localhost:4000/get/${option}`)
            .then(res => res.json())
            .then(data => setProducts(data))

    }, [option])


    useEffect(() => {

        fetch(`http://localhost:4000/multipleProduct/${category}`)
            .then(res => res.json())
            .then(data => setProducts(data))
        
    }, [category])

    const changeOption = (op) => {
        setOption(op);
    }

    const find = (data) => {
        setCategory(data);
    }



    const value = GetProducts(1);

    return (
        <div className='text-center mt-5'>

            <h2><span style={{ borderBottom: "2px solid green", color: "red" }}>Our Products</span></h2>
            <Categories find={find} />

            <div className='products-container row'>
                {
                    (products.length === 0) ? value.map(product => <Product product={product} key={product.id}></Product>) : products.map(product => <Product product={product} key={product.id}></Product>)
                }

            </div>
            <Option changeOption={changeOption}></Option>
        </div>
    );
};

export default Products;