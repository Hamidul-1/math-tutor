import React from 'react';
import './Footer.css';

const Footer = () => {
    // Footer Section
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer class='footer'>
            <p className='text-center'>
                <small>Copyright @ {year} | Md Hamidul Islam</small>
            </p>
        </footer>
    );
};

export default Footer;