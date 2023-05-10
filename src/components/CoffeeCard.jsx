import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee }) => {
  const { _id, name, quantity, supplier, taste, category, details, photo } =
    coffee;

  const handleToDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // console.log('confirm deleted')
        fetch(`http://localhost:7000/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };
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
              <Link to={`updateCoffee/${_id}`}>
                <button className="btn mb-2 bg-orange-400">Edit</button>
              </Link>
              <button
                onClick={() => handleToDelete(_id)}
                className="btn mb-2 bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
