import React, { useEffect, useState } from 'react';
import Service from '../service/Service';
import ('./Services.css');

const Services = () => {
 const [services, setServices]= useState([])

  const serv = services.slice(0,6)
  console.log(serv)

    useEffect(()=>{
        fetch('https://limitless-island-82895.herokuapp.com/product')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
       <div>
           <h2>Our Package</h2>
            <div className="servic-dv">                  
            {
                serv.map(service =>  <Service
                key={service._id}
                service={service}
                ></Service> )
                
            }           
        </div>
       </div>
    );
};

export default Services;