import React from 'react';
import './Footer.css';
import {Link} from 'react-router-dom';


const Footer = () => {
    return (
        <div className='container foot'>
            <footer>
                <div class="footer-container">
                    <div class="footer-logo">
                            <h1>Pase</h1>
                    </div>
                    <ul class="footer-menu">
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/policy">Privacy Policy</Link></li>
                    </ul>
                </div>
                <p class="footer-text">Copyright © 2023 Pase</p>
            </footer>


          
        </div>


    );
};

export default Footer;