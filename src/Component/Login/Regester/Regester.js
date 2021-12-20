import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Alert, Button, CircularProgress, Container, Grid } from '@mui/material';
import { useHistory } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import { NavLink } from 'react-router-dom';

import reg from '../../image/reg.jpg'


const Regester = () => {

    const { registerUser, authError, user } = useAuth();

    console.log(user)

    console.log(authError)

    const [logindata, setLogindata] = useState({})

    console.log(logindata)

    const history = useHistory();



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

        registerUser(logindata.email, logindata.password, logindata.name, history)

        e.preventDefault()

    }

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                    <form onSubmit={handalLoginSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your name"
                            name='name'
                            onBlur={handalOnblur}
                            variant="standard" />

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
                            to="/login">
                            <Button variant="text" >Already hava an account Please login</Button>
                        </NavLink>

                        <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained" >Register</Button>

                    </form>
                    {user.email && <Alert severity="success">User created successfully </Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}


                </Grid>
                <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                <img style={{width: '100%'}} src={reg} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Regester;

