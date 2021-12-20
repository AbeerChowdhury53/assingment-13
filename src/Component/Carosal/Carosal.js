import React from 'react';
import { Carousel } from 'react-bootstrap';

const Carosal = () => {
    return (
        <div className='caros'>
            
            <Carousel >
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100 "
                        src="https://i.ibb.co/2FQ0Czc/case1.png"
                        alt="First slide"
                        
                    />
                    <Carousel.Caption>
                        {/* <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100 "
                        src="https://i.ibb.co/SKw7wDC/case2.png"
                        
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        {/* <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 "
                        src="https://i.ibb.co/5Bsq4b7/case3.png"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        {/* <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Carosal;