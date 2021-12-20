import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Alert, Button, CircularProgress, Container, Grid } from '@mui/material';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import { NavLink } from 'react-router-dom';
import log from '../../image/log.jpg'

const Login = () => {

    const { registerUser, authError , user, loginUser} = useAuth();

    console.log(user)

    console.log(authError)

    const [logindata, setLogindata] = useState({})

    console.log(logindata)

    const history = useHistory();
    const location = useLocation()



    const handalOnblur = e => {
        const field = e.target.name;
        const value = e.target.value;
        console.log(field, value)
        const newLoginData = { ...logindata };
        newLoginData[field] = value;
        console.log(newLoginData)
        setLogindata(newLoginData);
    }

    const handalLoginSubmit = e => {
        loginUser(logindata.email, logindata.password, location, history )
        e.preventDefault();
    }



   
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 20 }} xs={12} md={6}>
                    <form onSubmit={handalLoginSubmit}>
                       
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="demo-helper-text-aligned"
                            label="Email"
                            type='email'
                            name='email'
                            variant="standard"
                            onBlur={handalOnblur}
                        />

                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            helperText=" "
                            id="demo-helper-text-aligned-no-helper"
                            label="Password"
                            type='password'
                            name='password'
                            onBlur={handalOnblur}
                            variant="standard"
                        />
                          <NavLink
                            style={{ textDecoration: 'none' }}
                            to="/register">
                            <Button variant="text" >New User? Please Register</Button>
                        </NavLink>

                        <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained" >LogIn</Button>
                        
                    </form>
                    {user.email && <Alert severity="success">User created successfully </Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}


                </Grid>
                <Grid item sx={{ mt: 8 }} xs={12} md={6}>
              
                <img style={{width: '100%'}} src={log} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;

