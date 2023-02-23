import React from 'react';
import './Option.css';

const Option = ({ changeOption }) => {
    
    return (
        <div className='text-center option-container mb-3'>
            <button className='btn btn-outline-success' onClick={() => {
                
                changeOption(1)}}>1</button>
            <button className='btn btn-outline-success' onClick={() => {
                
                changeOption(2)}}>2</button>
            <button className='btn btn-outline-success' onClick={() => {

                changeOption(3)}}>3</button>
            <button className='btn btn-outline-success' onClick={() => {

                changeOption(4)}}>4</button>
        </div>
    );
};

export default Option;