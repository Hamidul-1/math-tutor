import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { name, img, description, price } = service;
    return (
        <div className='service'>
            <img className='w-100' src={img} alt="" />
            <h2>Service name: {name}</h2>
            <p><b>Price: ${price}</b></p>
            <p><small>{description}</small></p>
            <div className='text-center'>
                <Link to="/checkout">
                    <button className='btn btn-dark'>Proceed Checkout: {name}</button>
                </Link>
            </div>
        </div>
    );
};

export default Service;