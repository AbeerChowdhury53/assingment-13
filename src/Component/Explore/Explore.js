import React from 'react';
import { Link } from 'react-router-dom';
import Carosal from '../Carosal/Carosal';
import ('./Explore.css')

const Explore = () => {
    return (
        <div>
            <div >
            <Link className='explor' to={'/allservices'}><h2>Explore All Product</h2></Link>
                
            </div>
            <div className='carosa'>
                <Carosal></Carosal>
            </div>
        </div>
    );
};

export default Explore;