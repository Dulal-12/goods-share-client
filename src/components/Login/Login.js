import React, { useContext, useEffect, useState } from 'react';
import './Login.css';
import registration from '../../images/images/registration.jpg'
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from '../../Authentication/firebase.confog';

import { addUser } from '../../CustomHook/utilities';
import { userName } from '../../App';


const auth = getAuth(app);

const Login = () => {

    const [name, setName] = useContext(userName);
    const [message, setMessage] = useState('');
    const [valid, setValid] = useState();
    const [user, setUser] = useState('123');

    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:4000/finduser/${user}`)
            .then(res => res.json())
            .then(data => {
                setValid(data);
            })
      
    }, [user]);


    const userFind = (id) => {
        setUser(id);
    }



    const loginUser = (event) => {

        event.preventDefault();

        const form = event.target;

        const email = form.email.value;
        const password = form.password.value;

        let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!regEmail.test(email)) {
            alert("Invalid email....");
        }
        else {
            let regPass = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
            if (!regPass.test(password)) {
                alert("Invalid password");
            } else {


                setMessage("please wait....")
                signInWithEmailAndPassword(auth, email, password)
                    .then((userCredential) => {
                        const user = userCredential.user;
                        if (!user.emailVerified) {
                            setMessage("Your email is not verified.")
                        }
                        else {

                             userFind(user.uid);
                            //check here user is valid or not form database from valid user
                            //console.log(valid);
                            if (valid) {
                                setMessage("Login success")
                                setName(user.email)
                                localStorage.setItem("email", user.email)
                                addUser(user.uid);
                                navigate('/profile');
                            }
                            else {
                                setMessage("Please wait.Verify your account and clicked again")
                            }



                        }

                    })
                    .catch((error) => {

                        const errorMessage = error.message;
                        setMessage(errorMessage)

                    });

            }
        }

    }
    return (
        <div className="container">
            <section className='form text-center login-container m-5 p-5'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6 col-sm-12'>
                            <img src={registration} className="img-fluid" alt="" />
                        </div>
                        <div className='col-md-6 col-sm-12 text-center'>
                            <h1>Login</h1>
                            <form className='login' onSubmit={loginUser}>
                                <input type="email" name="email" className="form-controll" placeholder='Email' required />
                                <br />
                                <input type="password" name="password" className="form-controll" placeholder='Password' required />
                                <br />
                                <input type="submit" value="Submit" className='add-to-cart-button' />
                                <br />
                                <h4>{message}</h4>
                            </form>
                            <span>Forgot password ? <Link to="/forgotPassword">click here</Link></span>
                            <br />
                            <span> Have you not account ? <Link to="/registration">Registration</Link></span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Login;