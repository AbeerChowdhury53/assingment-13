import React from 'react';

import { Button, Container, Form, FormControl, Nav, Navbar,  NavLink} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

// import useFirebase from '../Hooks/useFirebase';

const Hader = () => {
    const { user , logout} = useAuth()
    // console.log(user)
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Your Feeling Our Mug</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            {/* <Nav.Link as={Link} to ="/myorder">My Order</Nav.Link>
                            <Nav.Link as={Link} to ="/insert">Insert Service</Nav.Link>  
                            <Nav.Link as={Link} to ="/allorder">All Order</Nav.Link> */}
                        
                          
                         
                                                      
                        </Nav>
                        <Navbar.Text>
                            {user.displayName &&  'Signed in as: '+user.displayName}
                        </Navbar.Text>
                        <Form className="d-flex px-2">
                            {user.email ?  <Button onClick={logout} variant="outline-success">Log Out</Button> : <Link to='/Login'><Button onClick={logout} variant="outline-success">Log in</Button></Link>   }
                            {user.email && 
                             <Link to='/dashboard'><Button className="mx-2" variant="outline-success">Dashboard</Button> </Link>
                              }
                        </Form>

                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Hader;