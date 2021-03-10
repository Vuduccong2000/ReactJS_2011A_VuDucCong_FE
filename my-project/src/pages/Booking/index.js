import React from 'react';
import { useForm } from 'react-hook-form';

function Booking() {
  const { register,watch, handleSubmit, errors } = useForm(); // initialize the hook
  const onSubmit = (data) => {
//    console.log(data.firstName);
//    console.log(data.lastname);
//    console.log(data.age);
//    console.log(data.select);
    console.log(data)
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
    <div class="form-group">
      <input name="firstname" ref={register} ref={register({ required: true })} className="form-control"/>
      {errors.firstName && ''}
    </div>
    <div class="form-group">
      <input name="lastname" ref={register({ required: true })} className="form-control"/>
      {errors.lastname && <div class="list-group-item list-group-item-action list-group-item-danger">This field is required</div>}
    </div>
    <div class="form-group">
      <input name="age" ref={register({ pattern: /\d+/ , required:  true})} className="form-control" />
      {errors.age && <div class="list-group-item list-group-item-action list-group-item-danger">This field is required</div>}
    </div>
    <div class="form-group">
        <select name="select" ref={register({required:true})} className="form-control">
            <option value="Hello1" selected>Hello1</option>
            <option value="Hello1">Hello1</option>
            <option value="Hello3">Hello3</option>
            <option value="Hello4">Hello4</option>
        </select>
        {errors.select && ''}
    </div>
    <div class="mb-3 mb-xl-0 col-sm-4 col-md-2 col-xl">
      <input type="submit" className="btn btn-secondary btn-block active"/>
    </div>
    </form>
  );
}
export default Booking;