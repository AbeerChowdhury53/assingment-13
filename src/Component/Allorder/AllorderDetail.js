import axios from 'axios';
import React from 'react';
import { Card, CardGroup, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const AllorderDetail = (props) => {
    // console.log(props.order)
    const {_id, name, Price, descriotion, Image, assress, Mobile, status }=props.order

    const handledelete=(e) =>{
         const conVal= window.confirm('Are You sure ?')
         console.log(conVal)
       if (conVal){
        axios.delete(`https://limitless-island-82895.herokuapp.com/order/${e}`, {data:{e}})
        .then(function (response) {            
            // console.log(response);         
          })
          .then(data => console.log(data))
          .catch(function (error) {
            console.log(error);
          });
    }
       }


    const handleupdate=(e) =>{
        console.log(e)
        const {_id, name, Price, descriotion, Image, assress, Mobile, status }=e
        console.log(_id)
        const conVal= window.confirm('Are You sure ?')
        console.log(conVal)
        if (conVal){
            axios.put(`https://limitless-island-82895.herokuapp.com/order/${_id}`, {e})
            .then(function (response) {            
                console.log(response);         
              })
              .then(data => console.log(data))
              .catch(function (error) {
                console.log(error);
              });
        }
   }
    return (
        <div>
         <div className='cart-div' >          
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={Image} />
                <Card.Body>
                    <Card.Title>Place: {name}</Card.Title>
                    <Card.Title>Price: {Price}</Card.Title>
                    <Card.Title>Status: {status}</Card.Title>
                    <Card.Text>
                        {/* {descriotion.slice(0, 150)+'...'} */}
                       Address: {assress}                      
                    </Card.Text>
                    <Card.Text>
                      Mobile: {Mobile}                     
                    </Card.Text>
                   
                    <Button  onClick={()=>{handledelete(_id)}} variant="primary">Delete</Button>
                    <br />
                    <br />
                    <Button  onClick={()=>{handleupdate(props.order)}} variant="primary">Update</Button>
                  
                </Card.Body>
            </Card>            
        </div>
        </div>
    );
};

export default AllorderDetail;