import React from "react";

const CoffeeCard = ({ coffee }) => {
  const { _id, name, quantity, supplier, taste, category, details, photo } =
    coffee;
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
          <button className="btn btn-primary rounded-sm">Watch</button>
          <button className="btn btn-error rounded-sm">Watch</button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
