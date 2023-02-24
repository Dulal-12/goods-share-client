import React, { useContext, useEffect, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import GetProducts from '../../CustomHook/getProducts';
import GetUser from '../../CustomHook/getUser';
import { deleteProductLocal, deleteUser, findObj, findUser } from '../../CustomHook/utilities';
import './Prof.css';
import pic from '../../images/images/person.jpg';
import { memberTaka, userName } from '../../App';

const Prof = () => {

    const[name , setName] = useContext(userName);
    //all user
    const user1 = findUser();

    const [valid, setValid] = useState(false);
    //active user
    const personInfo = GetUser(user1);

    const [selectProduct, setSelectProduct] = useState([])

    //all products
    const products = GetProducts(0);

    const [option, setOption] = useState();

    function handleChange(event) {
        setOption(event.target.value)
    }

    const navigate = useNavigate();

    //useContext
    const[taka ,setTaka] = useContext(memberTaka);
    

    const productInfo = (event) => {


        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const rentPrice = form.rentPrice.value;
        const price = form.price.value;
        const img = form.image.value;
        const description = form.description.value;
        const category = option;
        const seller = personInfo.name;
        const sellerinfo = seller;

        const data = { name, description, rentPrice, price, img, category, seller, sellerinfo };
        form.reset();

        fetch('http://localhost:4000/userproduct', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });




    }


    useEffect(() => {
        const storedCart = findObj();
        const cart = [];

        for (const id in storedCart) {


            const addedProduct = products.find(product => product.id === id);
            if (addedProduct) {

                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                cart.push(addedProduct);
            }
        }
        setSelectProduct(cart);
    }, [products])


    const total = selectProduct.reduce((initial, product) => product.rentPrice * product.quantity + initial, 0);

    const confirmOrder = () => {


       
        if(personInfo.taka>= total){
        const productList = [];

        selectProduct.map(product => productList.push(product.id))
        productList.push(personInfo.id)


        fetch('http://localhost:4000/cart', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(productList),
        })
            .then((response) => response.json())
            .then((data) => {

                setValid(data)
            })
            .catch((error) => {
                console.error(error);

                setValid(false)
            });

        
            //taka change
            const memberTaka = personInfo.taka - total; 
            const email = personInfo.email;
            const data = {email , memberTaka};

            setTaka(memberTaka);
            
            fetch('http://localhost:4000/taka', {
                method: 'POST', // or 'PUT'
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
                .then((response) => response.json())
                .then((data) => {
                    navigate('/home')
                    alert("order successfully complete")
                })
                .catch((error) => {
                    alert("Server problem")
                });
           
        }
        else{
            alert("Your taka is short")
        }
    }

    if (valid) {

        deleteProductLocal(selectProduct[0].id)
    }

    const logout = () => {

        deleteUser(user1);
        navigate('/login')
        localStorage.removeItem("email")
        setName("");

    }



    return (
        <div className='container mt-5'>

            <div>
                <header>
                    <h1>My Profile</h1>
                </header>
                <main>
                    <section class="profile">
                        <img src={pic} alt="/" />
                        <h2>{personInfo.name}</h2>
                        <h3>Account Balance: {personInfo.taka}</h3>
                        <button onClick={() => logout()} className='add-to-cart-button'>Logout</button>
                    </section>
                </main>
            </div>


            <div className='row text-center' style={{ border: "none", boxShadow: "5px 5px 10px grey", borderRadius: "10px" }}>
                <div className='col-md-12'>


                    <h4 style={{ color: "red", marginTop: "20px" }}>Post Your Product</h4>
                    <form className='login' onSubmit={productInfo}>
                        <input type="text" name="name" className="form-controll" placeholder='Product name' required />
                        <br />
                        <input type="text" name="description" className="form-controll" placeholder='Enter product description' required />
                        <br />
                        <input type="number" name="rentPrice" className="form-controll" placeholder='Rent Price' required />
                        <br />
                        <input type="number" name="price" className="form-controll" placeholder='price' required />
                        <br />
                        <input type="file" name="image" className="form-controll" placeholder='image-url' required />
                        <br />
                        <label for="cars">Choose a Category  :  </label>

                        <select id="cars" className='form-controll' onChange={handleChange}>
                            <option value="mobile">mobile</option>
                            <option value="laptop">laptop</option>
                            <option value="home appliance">home appliance</option>
                            <option value="doll">doll</option>
                        </select>
                        <br />
                        <br />
                        <input type="submit" value="Submit" className='add-to-cart-button' />
                    </form>
                </div>

            </div>


            <div className="container text-center mt-5 mb-5 p-2">
                {
                    selectProduct.length > 0 ? <div>
                        <h3>Total price: {total+30}</h3>
                        <button className='add-to-cart-button' onClick={confirmOrder}>Confirm</button>
                        <br />
                        <Link to='/cart'><button className='add-to-cart-button mt-2'>Cancel</button></Link>
                    
                    </div> : <p></p>
                }
            </div>
        </div>




    );
};

export default Prof;