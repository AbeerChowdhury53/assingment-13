import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import ('./insert.css')

const Insert = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post('https://limitless-island-82895.herokuapp.com/product', data)
        .then(function (response) {            
            console.log(response);
            if (response.data.insertedId){
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
   
      <form className='hook-from'  onSubmit={handleSubmit(onSubmit)}>
           <h2>Insert Service data</h2>
        <input {...register("name", { required: true})} placeholder='Name' />
        <textarea {...register("descriotion", )} placeholder='Description'/>
        <input type="number" {...register("Price")} placeholder='Price' />
        <input {...register("Image", { required: true})} placeholder='Img Url' />
        <input type="submit" />
      </form>
    );
};

export default Insert;