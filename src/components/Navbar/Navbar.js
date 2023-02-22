import React, { useContext } from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';
import { userName } from '../../App';


const Navbar = () => {

    const [name,setName] = useContext(userName);
    setName(localStorage.getItem("email"))
    return (
        <div className='hero  mt-5 position'>
            <nav className='bg-light p-3'>
            <li><Link style={{ textDecoration:"none"}} to="/home"><h2>Pase</h2></Link></li>
                <ul>
                    <li><Link to='/home'>Home</Link></li>
                    <li><Link to='/product'>Product</Link></li>
                    <li><Link to='/about'>About Us</Link></li>
                    <li><Link to='/cart'>Cart</Link></li>
                    <li><Link to='/login'>Login</Link></li>
                    <li><Link to='/profile'>
                        {/* {
                            (name === '')?<p>Profile</p>:{name}
                        } */}
                        {name}
                        </Link></li>
                    <Link to='/membership'><button className='btn btn-success subscribe-btn'>Subscribe</button></Link>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;