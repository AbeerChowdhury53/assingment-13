import React, { useEffect, useState } from 'react';
import useAuth from '../Hooks/useAuth';

import Myorderdtl from '../service/Myorderdtl';
import Service from '../service/Service';
import ('./Myorder.css')

const Myorder = () => {

    const { user, logout } = useAuth()
    console.log(user.email)
    const [orders, setOrdes]= useState([]);
    // console.log(orders)

    const result =  orders.filter(order => order.email == user.email )
    console.log(result)

    useEffect(()=>{
        fetch('https://limitless-island-82895.herokuapp.com/order')
        .then(res => res.json())
        .then(data => setOrdes(data))
    },[result])
    return (
        <div>
            <div>
                <h2>My all Order</h2>
            </div>
            <div className='my-div'>

        
         {
             result.map(order => <Myorderdtl order={order}></Myorderdtl>)
             
         }
        </div>
        </div>
    );
};

export default Myorder;