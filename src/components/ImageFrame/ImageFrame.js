import React from 'react';
import './ImageFrame.css';
import rent from '../../images/rent/rent.jpg';

const ImageFrame = () => {
    return (

        <div className='row frame my-5 mx-2'>
            <div className='col-md-4'>
                <h1 style={{ color: "green" }}>Why Rent?</h1>
                <p className='rent-text'>Renting is an important option for people who want the <span style={{ color: "tomato" }}>flexibility, affordability, and convenience of not owning a property.</span> It can provide a sense of security and freedom that owning a property might not offer.</p>
            </div>
            <div className='col-md-6'>
                <img src={rent} className='img-fluid' alt="" />
            </div>
        </div>

    );
};

export default ImageFrame;