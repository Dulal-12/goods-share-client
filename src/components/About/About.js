import React from 'react';
import './About.css';
import shipping from '../../images/images/free-shipping.png';
import quality from '../../images/images/high-quality.png';
import { useNavigate } from 'react-router-dom';

const About = () => {

    const navigate = useNavigate();

    const information = (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;
        const message = e.target.message.value;

        const data = { name, email, message };

        fetch('http://localhost:4000/userMessage', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((data) => {
                alert('Message sent successfully')
                navigate('/home');
            })

        }
    return (
        <div>
            <section id="about-us">
                <div class="container1">
                    <h2>About Us</h2>
                    <p>Here's some information about our company.</p>
                    <p>We are a team of experts in our field who are dedicated to providing the best solutions for our users. Our mission is to help people to fullfil their needs</p>
                    <ul>
                        <li><strong>Services:</strong> We offer a wide range of product like toys,electronics etc</li>
                        <li><strong>Experience:</strong> we have lots of experience worker.</li>
                        <li><strong>Team:</strong> Our team is made up of skilled professionals who are passionate about what they do and are committed to excellence.</li>
                    </ul>
                </div>

                <div className='login mt-5 container1'>
                    <form onSubmit={information} class="contact-form">
                        <h2>Contact Us</h2>
                        <div class="form-group">
                            <input type="text" id="name" name="name" placeholder='Name' required />
                        </div>
                        <div class="form-group">
                            <input type="email" id="email" name="email" placeholder='Email' required />
                        </div>
                        <div class="form-group">
                            <textarea id="message" name="message" placeholder="message" required></textarea>
                        </div>
                        <div class="form-group">
                            <input type="submit" className='btn btn-success' value="submit" />
                        </div>
                    </form>

                </div>

                <div className="last-section mt-5">
                    <div className='product-card p-5 '>
                        <img src={shipping} alt="" />
                        <p>Free delivery</p>
                    </div>

                    <div className='product-card p-5'>
                        <img src={quality} alt="" />
                        <p>High Quality ensure</p>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default About;