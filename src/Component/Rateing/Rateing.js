import * as React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Service from '../service/Service';
import { Card } from 'react-bootstrap';
import ('./Rating.css')
const Rateing = (props) => {
const {name, email, descriotion, rating}=props.rate

console.log(rating)

    return (
        <div className="ratingCart" sx={{textAlign: 'center'}}>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={Image} />
            <Card.Body>

                <Card.Title>Name: {name}</Card.Title>
                <Card.Text>
                   {descriotion}
                </Card.Text>
                <div className='rate'>
                <Stack spacing={1}>
                    <Rating name="size-small" defaultValue={rating} size="small" />
                </Stack>
                </div>

            </Card.Body>
        </Card>
    </div>
    );
};

export default Rateing