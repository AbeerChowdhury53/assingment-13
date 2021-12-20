import React, { useEffect, useState } from 'react';
import initializeAuthentication from '../Login/Firebase/firebase.init';
import { getAuth, createUserWithEmailAndPassword, updateProfile, onAuthStateChanged , signOut, signInWithEmailAndPassword} from "firebase/auth";
import axios from 'axios';
initializeAuthentication();

const useFirebas = () => {

  const [authError, setAuthError]= useState('');
  const [admin, setAdmin]= useState(false);
  const [isLoding, setIsLoding]=useState(true);
  const [user, setUser]= useState({});
  console.log(admin)

    const auth = getAuth();

    const registerUser=(email, password, name, history)=>{   
      setIsLoding(true)   
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    setAuthError('');
               const newUser = {email, displayName: name };
               setUser(newUser);
            //Save User 
            saveUser(email, name);
            // saveUser(email, name, 'POST')

            // update user name
            updateProfile(auth.currentUser, {
                displayName: name
              }).then(() => {                
              }).catch((error) => {
              });

               history.replace('/')
            
  })
  .catch((error) => {
    setAuthError(error.message);
    // ..
  })
  .finally(()=> setIsLoding(false));
    }


    //ovserve user state
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
                setUser(user);
                // getIdToken(user)
            } else {
                setUser({});
            }
           setIsLoding(false);
        });
        return () => unsubscribe
    }, [])

    //login user 
  const loginUser = (email, password, location, history) =>{
     setIsLoding(true)
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const destination = location?.state?.from || '/';
        history.replace(destination)
        setAuthError('');
    })
    .catch((error) => {
        setAuthError(error.message)
    })
     .finally(()=> setIsLoding(false));
      
  }





     // logout function
     const logout = () => {
       setIsLoding(true)
      signOut(auth).then(() => {
          // Sign-out successful.
      }).catch((error) => {
          // An error happened.
      })
       .finally(()=> setIsLoding(false));
  }

const saveUser =(email, displayName)=>{
     const  data  = {email, displayName}
        
        axios.post('https://limitless-island-82895.herokuapp.com/user', data)
        .then(function (response) {            
            console.log(response);           
          })
          .then(data => console.log(data))
          .catch(function (error) {
            setAuthError(error.message);
          });        
}

  useEffect(()=>{
    fetch(`https://limitless-island-82895.herokuapp.com/user/${user.email}`)
    .then(res => res.json())
    .then(data => setAdmin(data.isAdmin))
  },[user.email])




    return ({
        registerUser,
        authError,
        user,
        logout,
        loginUser,
        admin,
        isLoding
    });
};

export default useFirebas;