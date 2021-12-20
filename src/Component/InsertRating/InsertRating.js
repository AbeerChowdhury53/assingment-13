import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../Hooks/useAuth';
import('./insert.css')

const InsertRating = () => {
  const { register, handleSubmit, reset } = useForm();
  const { user } = useAuth();
  const onSubmit = data => {
    console.log(data)
    const sdata = Object.assign(data, { email: user.email, name: user.displayName })
    axios.post('https://limitless-island-82895.herokuapp.com/rating', sdata)
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

    <form className='hook-from' onSubmit={handleSubmit(onSubmit)}>
      <h2>Insert Rating data</h2>
      {/* <input {...register("name", { required: true})} placeholder='Name' /> */}
      {/* <input type="email"{...register("email", { required: true })} placeholder='Email' /> */}
      <h5> Name: {user.displayName}</h5>
      <h5> Email: {user.email}</h5>
      <textarea {...register("descriotion",)} placeholder='Feedback' />
      <input type="number" {...register("rating")} placeholder='Rating 1-5' />

      <input type="submit" />
    </form>
  );
};
export default InsertRating;