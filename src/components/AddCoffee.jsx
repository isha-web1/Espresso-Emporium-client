import React from 'react';

const AddCoffee = () => {

    const handleAddCoffee = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
    
        const newCoffee = {name, quantity, supplier, taste, category, details, photo}
        console.log(newCoffee)
    }
    return (
        <div className="p-24 bg-[#f1eae7]">
        <h1 className="text-4xl font-bold text-center text-[#8e7b6e]">Add a Coffee</h1>
        <form onSubmit={handleAddCoffee} >
          <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text text-[#8e7b6e]">Coffee name</span>
            </label>
            <label className="input-group">
              
              <input
                type="text"
                placeholder="Coffee name"
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
                placeholder="Photo URL"
                name="photo"
                className="input rounded-sm  w-full"
              />
            </label>
          </div>
         
          </div>
         
          <input type="submit" value="Add Coffee" className="btn btn-block bg-[#8e7b6e] text-white rounded-sm" />
        </form>
      </div>
    );
};

export default AddCoffee;