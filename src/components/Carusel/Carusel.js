import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Carusel.css';
import laptop from '../../images/carusel/laptop.png'
import mobile from '../../images/carusel/mobile.png'
import toys from '../../images/carusel/toys.png';
import { FaPeopleCarry } from "react-icons/fa";

const Carusel = () => {
    
    return (
        <div>
             <div className='brand-name'>
                <h1 className='mb-5'><span style={{ color: "black", fontSize: "35px" }}>Goods</span> <span style={{color:"tomato"}}>Sharing</span></h1><FaPeopleCarry style={{ color: 'green', fontSize: '50px' }} />
                <h6>We are waiting for you</h6>
            </div> 
        <div className='my-5 bg-light carousel mt-5'>
           
            <Carousel>
                <Carousel.Item >
                    <img
                        style={{ height: "400px" }}
                        className="d-block"
                        src={mobile}
                        alt="Mobile-phones"
                    />
                    <Carousel.Caption>
                        <h2>Mobile-phones</h2>
                        <p style={{ color: "black" }}>Rent the latest smartphones from Apple, Samsung, Oppo and more, with an affordable rental plan from pase</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item >
                    <img
                        style={{ height: "400px" }}
                        className="d-block"
                        src={laptop}
                        alt="laptop"
                    />
                    <Carousel.Caption>
                        <h2>Laptops</h2>
                        <p style={{ color: "black" }}>Rent the latest laptops from Apple, Samsung, Oppo and more, with an affordable rental plan from pase</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item >
                    <img
                        style={{ height: "400px" }}
                        className="d-block"
                        src={toys}
                        alt="toys"
                    />
                    <Carousel.Caption>
                        <h2>Toys</h2>
                        <p style={{ color: "black" }}>Rent the latest toys from branded with an affordable rental plan from pase</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
        </div>
    );
};

export default Carusel;