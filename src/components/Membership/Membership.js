import React, { useContext, useState } from 'react';
import './Membership.css';
import bkash from '../../images/images/bkash.png';
import { findUser } from '../../CustomHook/utilities';
import GetUser from '../../CustomHook/getUser';
import { memberTaka } from '../../App';

const Membership = () => {

    const user1 = findUser();
    const personInfo = GetUser(user1);

    const [taka, setTaka] = useContext(memberTaka);
    const [state, setState] = useState('');



    const addValue = (e) => {

        e.preventDefault();

        const number = e.target.number.value;
        const taka = e.target.taka.value;


        if (personInfo === undefined) {
            alert("You are not loggedIn")
        }
        else {
            const memberTaka = parseFloat(taka) + parseFloat(personInfo.taka);
            const email = personInfo.email;
            const data = [email, memberTaka, taka,number];

            fetch(`http://localhost:4000/create-session/${data}`, {
                //mode: "no-cors"
            })
                .then(res => res.json())
                .then(data => setState(data.GatewayPageURL))
        }
    }

    console.log(state)

    return (
        <div class="product-card container text-center  mt-5 mb-5">
            <div className='image-div'>
                <img src={bkash} alt="" height='80' width='100' className='mx-auto' />
            </div>

            <div className="product-details information-subscribe information-div">
                <h3>Account Balance is: {personInfo.taka}</h3>

                <form onSubmit={addValue}>
                    <input type="text" name="number" className='form-controll' placeholder='Enter your phone number' required />
                    <br />
                    <br />
                    <input type="text" name="taka" className='form-controll'  placeholder='Add Taka' style={{ height: "50px" }} required />
                    <br />
                    {
                        (state === '') ? <input type="submit" value="Add" className='add-to-cart-button'  style={{ marginTop: "50px" }}/>: <a href={state} className='btn btn-success confirm-taka'>Confirm</a>
                    }
                    <br />
                    <button className='btn btn-danger mt-5'>Withdraw</button>
                </form>

            </div>
        </div>
    );
};

export default Membership;