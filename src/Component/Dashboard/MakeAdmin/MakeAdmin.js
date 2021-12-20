import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';

const MakeAdmin = () => {
const [email, setEmail]= useState('');
const [success, setSuccess]=useState(false)

const handalonBlur = e =>{
    setEmail(e.target.value)
}



const handalAdminSubmit = e =>{

console.log("clicked")
    const user = {email};
    console.log(user);
    fetch('https://limitless-island-82895.herokuapp.com/user/admin', {
        method: 'PUT',
        headers: {
            'content-type':'application/json'
        },
        body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => {
      
        if (data.modifiedCount){
            console.log(data.modifiedCount);
          
            setEmail('')
            setSuccess(true)
        }
    })
  
    e.preventDefault()
}

    return (
        <div>
            <h2>make admin</h2>
        <form onSubmit={handalAdminSubmit}>            
        <TextField  
        sx={{width:'50%'}}
        id="mainInput"
        label="Email" 
        variant="standard"
        onBlur={handalonBlur}
        type="email" />
        <Button type="submit" variant="contained">Make Admin</Button>
        </form >
        {success && <Alert severity="success">Made Admin successfully </Alert>}

        </div>
    );
};

export default MakeAdmin;