import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

import('./Order.css')

const Order = () => {
    const { user, logout } = useAuth()

    const [ser, setSer] = useState({});
    // console.log(ser)
    // console.log(user.email)
    const [service, setService] = useState({});
    // console.log(service)
    const { id } = useParams();
    // console.log(service.name)
    const url = `https://limitless-island-82895.herokuapp.com/product/${id}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        setSer(data)
    // const rdata =   {email: user.email}
    const sdata  = Object.assign(data, {email: user.email, serviceId: service._id, service: service.name, descriotion: service.descriotion ,Price: service.Price, image: service.Image})
    console.log(sdata)


        axios.post('https://limitless-island-82895.herokuapp.com/order', sdata)
            .then(function (response) {

                console.log(response);
                if (response.data.insertedId) {
                    alert('1 row inserted');
                    reset();

                }
            })
            .then(data => console.log(data))
            .catch(function (error) {
                console.log(error);
            });
    }


    return (
        <div className='order-div'>
            <div className='hook-from-div'>
            <form  onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("name", { required: true })} placeholder='Name' />
                    <textarea {...register("assress",)} placeholder='Address' />
                    <input type="number" {...register("Mobile")} placeholder='Mobile' />
                    
                    <input type='hidden' value={'Panding'} {...register("status", { required: true })} placeholder='status' />
                    <input type="submit"  />
                </form>
            </div>

            <div className='cart-div' >
                <Card style={{ width: '30rem', background: '#cce6ff' }}>
                    <Card.Img variant="top" src={service.Image} />
                    <Card.Body>
                        <Card.Title>Place: {service.name}</Card.Title>
                        <Card.Title>Price: {service.Price}</Card.Title>
                        <Card.Text>
                            {service.descriotion}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>


        </div>
    );
};

export default Order;