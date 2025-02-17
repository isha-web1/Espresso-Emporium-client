import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee }) => {
  const { _id, name, quantity, supplier, taste, category, details, photo } =
    coffee;

    const handleDelete = _id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/coffee/${_id}`,{
                    method : 'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if(data.deletedCount > 0){
                        Swal.fire(
                                'Deleted!',
                                'Your coffee has been deleted.',
                                'success'
                              )
                    }
                })
             
            
            }
          })
      }
  return (
    <div className="card card-side bg-base-100 shadow-sm">
      <figure>
        <img
          src={photo}
          alt="coffee"
        />
      </figure>
      <div className="card-body">
       <div>
       <div className="">
          <h2 className="font-bold text-3xl">{name}</h2>
          <p> <span className="font-semibold text-1xl">Quantity </span>: {quantity}</p>
          <p><span className="font-semibold text-1xl">Supplier</span> :  {supplier}</p>
          <p><span className="font-semibold text-1xl">Taste </span>: {taste}</p>
          <p><span className="font-semibold text-1xl">Category </span> : {category}</p>
          <p><span className="font-semibold text-1xl">Details </span> : {details}</p>
        </div>
       </div>
        <div className="join join-vertical lg:join-horizontal gap-2 ">
          <button className="btn btn-neutral rounded-sm">Watch</button>
         <Link to={`updateCoffee/${_id}`}><button className="btn btn-primary rounded-sm">Update</button></Link>
          <button onClick={() => handleDelete(_id)} className="btn btn-error rounded-sm">X</button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
