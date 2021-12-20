import React from 'react';
import './Footer.css'
import payment from  '../image/payment.png'

const Footer = () => {
    return (
        <div className='footer-body'>
            <div className='footer-text'>
                <h6>Travel Tax</h6>
                <h6>Travel Time</h6>
                <h6>Our Team</h6>
                <h6>Gide</h6>
                <h6>Our Offer</h6>
                <h6>Address</h6>
            </div>
            <div>
               <img className='image' src={payment} alt="" />
            </div>
        </div>
    );
};

export default Footer;
