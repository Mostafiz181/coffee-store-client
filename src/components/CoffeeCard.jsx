import React from "react";

const CoffeeCard = ({ coffee }) => {
  const { name, quantity, supplier, taste, category, details, photo } = coffee;
  return (
    <div className="m-10">
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img src={photo} alt="Movie" />
        </figure>
        <div className="flex justify-between w-full pr-3">
          <div>
            <h2 className="text-3xl">Name:{name}</h2>
            <p>Quantity:{quantity}</p>
            <p>Taste:{taste}</p>
            <p>Category:{category}</p>
            <p>Supplier;{supplier}</p>
          </div>

          <div className="card-actions justify-end">
            <div className="btn-group btn-group-vertical">
              <button className="btn mb-2">View</button>
              <button className="btn mb-2">Edit</button>
              <button className="btn mb-2">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
