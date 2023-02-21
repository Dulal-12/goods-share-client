import React from 'react';
import Carusel from '../Carusel/Carusel';
import CustomerComment from '../CustomerComment/CustomerComment';
import ImageFrame from '../ImageFrame/ImageFrame';
import Products from '../Products/Products';

const TopSection = () => {
    return (
        <div>
            <Carusel />
            <ImageFrame />
            <Products />
            <CustomerComment/>
        </div>
    );
};

export default TopSection;