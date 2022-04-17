import React from 'react';
import error from '../../../images/error-page.jpg';

const NotFound = () => {
    return (
        <div>
            <h2 className='text-center'>The page is not found</h2>
            <img className='w-100' src={error} alt="" />
        </div>
    );
};

export default NotFound;