import React, { useEffect, useState } from 'react';
import Service from '../service/Service';
import ServiceManage from '../service/ServiceManage';
import ('./Services.css');

const AllServices = () => {
 const [services, setServices]= useState([])

  const serv = services.slice(0,6)
  console.log(serv)

    useEffect(()=>{
        fetch('https://limitless-island-82895.herokuapp.com/product')
        .then(res => res.json())
        .then(data => setServices(data))
    },[services])
    return (
       <div>
           <h2>Our Product</h2>
            <div className="servic-dv">                  
            {
                services.map(service => 
                    <ServiceManage
                    key={service._id}
                    service={service}
                    ></ServiceManage>
                    
                     )
                
            }           
        </div>
       </div>
    );
};

export default AllServices;