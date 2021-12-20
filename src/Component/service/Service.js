import React from 'react';
import { Card, CardGroup, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ('./Service.css')

const Service = (props) => {
    // console.log(props.service)
    const {_id, name, Price, descriotion, Image }=props.service
    return (
        <div className='cart-div' >          
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={Image} />
                <Card.Body>
                    <Card.Title>Product: {name}</Card.Title>
                    <Card.Title>Price: {Price}</Card.Title>
                    <Card.Text>
                        {descriotion.slice(0, 150)+'...'}
                      
                    </Card.Text>
                    <Link to={`/order/${_id}`} >
                    <Button variant="primary">Buy Now</Button>
                    </Link>                   
                </Card.Body>
            </Card>            
        </div>
    );
};

export default Service;