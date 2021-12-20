import React, { useEffect, useState } from 'react';
import Rateing from '../Rateing/Rateing';

const Ratings = () => {

 const [ratings, setRatings]= useState([]);
console.log(ratings)
 useEffect(()=>{
     fetch('https://limitless-island-82895.herokuapp.com/rating')
     .then(res => res.json())
     .then(data => setRatings(data))
 },[])


    return (
        <div>
            <div>
            <h2>Customer Ratings</h2>
            </div>
            <div className='container servic-dv'>
           
           {
               ratings.map(rate => <Rateing
               key={rate._is}
               rate={rate}
               ></Rateing>)
           }
       </div>
        </div>
      
     
    );
};

export default Ratings;