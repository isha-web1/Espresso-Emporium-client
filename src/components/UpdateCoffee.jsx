import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  const { _id, name, quantity, supplier, taste, category, details, photo } =
    coffee;
    const handleUpdateCoffee = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
    
        const updatedCoffee = {name, quantity, supplier, taste, category, details, photo}
        console.log(updatedCoffee)

        // send data to the server
    fetch(`http://localhost:5000/coffee/${_id}`,{
      method : 'PUT',
      headers : {
        'content-type' : 'application/json'
      },
      body : JSON.stringify(updatedCoffee)
    })
    .then(res => res.json())
    .then(data =>{console.log(data);
      if(data && data.modifiedCount>0){
        Swal.fire({
          title: 'success',
          text: 'coffee updated successfully',
          icon: 'success',
          confirmButtonText: 'ok'
        })}
    })
      
      
    }
    

    
    return (
        <div className="p-24 bg-[#f1eae7]">
        <h1 className="text-4xl font-bold text-center text-[#8e7b6e]">Update a Coffee</h1>
        <form onSubmit={handleUpdateCoffee} >
          <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text text-[#8e7b6e]">Coffee name</span>
            </label>
            <label className="input-group">
              
              <input
                type="text"
                placeholder="Coffee name"
                defaultValue={name}
                name="name"
                className="input rounded-sm w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text text-[#8e7b6e]">Available quantity</span>
            </label>
            <label className="input-group">
              
              <input
                type="text"
                name="quantity"
                defaultValue={quantity}
                placeholder="available quantity"
                className="input rounded-sm  w-full"
              />
            </label>
          </div>
          </div>
          <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Supplier</span>
            </label>
            <label className="input-group">
              
              <input
                type="text"
                defaultValue={supplier}
                placeholder="Supplier name"
                name="supplier"
                className="input rounded-sm  w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Taste</span>
            </label>
            <label className="input-group">
              
              <input
                type="text"
                defaultValue={taste}
                name="taste"
                placeholder="Taste"
                className="input rounded-sm  w-full"
              />
            </label>
          </div>
          </div>
          <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <label className="input-group">
              
              <input
                type="text"
                defaultValue={category}
                placeholder="Category"
                name="category"
                className="input rounded-sm  w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <label className="input-group">
              
              <input
                type="text"
                defaultValue={details}
                name="details"
                placeholder="Details"
                className="input rounded-sm  w-full"
              />
            </label>
          </div>
          </div>
          <div className="md:flex mb-8">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <label className="input-group">
              
              <input
                type="text"
                defaultValue={photo}
                placeholder="Photo URL"
                name="photo"
                className="input rounded-sm  w-full"
              />
            </label>
          </div>
         
          </div>
         
          <input type="submit" value="Update Coffee" className="btn btn-block bg-[#8e7b6e] text-white rounded-sm" />
        </form>
      </div>
    );
};

export default UpdateCoffee;