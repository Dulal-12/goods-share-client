import React from 'react';
import './CustomerComment.css';
import customer from '../../images/rent/customer.jpg';

const CustomerComment = () => {
    return (
        <div class="review-card">
            <h2>Top Customer Review</h2>
            <div class="customer-info">
                <img src={customer} alt=""/>
                    <div class="customer-details">
                        <h3>Elon Musk</h3>
                        <p>Customer since 2023</p>
                    </div>
            </div>
            <div class="review-details">
                <p class="rating">&#9733; &#9733; &#9733; &#9733; &#9734;</p>
                <p class="comment"><q>They are working good.I wish one day they will help people use of this company.</q></p>
            </div>
        </div>


    );
};

export default CustomerComment;