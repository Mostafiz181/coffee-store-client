import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  const { _id, name, quantity, supplier, taste, category, details, photo } =
    coffee;

  const handleToUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const updatedCoffee = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photo,
    };
    console.log(updatedCoffee);

    fetch(`http://localhost:7000/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount >0) {
          Swal.fire({
            title: "Success",
            text: "coffee Update successfully",
            icon: "success",
            confirmButtonText: "successful",
          });
        }
      });
  };

  return (
    <div>
      <div className="bg-[#F4F3F0] p-24">
        <h2 className="text-purple-500 text-3xl font-extrabold">
          Update coffee {name}
        </h2>

        <form onSubmit={handleToUpdate}>
          <div className="md:flex">
            <div className="form-control w-1/2 pb-4">
              <label className="label">
                <span className="label-text">Coffee Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="name"
                  defaultValue={name}
                  placeholder="coffee name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>

            <div className="form-control ms-5 w-1/2 pb-4">
              <label className="label">
                <span className="label-text">Available Quantity</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="quantity"
                  defaultValue={quantity}
                  placeholder="available quantity"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>

          <div className="md:flex">
            <div className="form-control w-1/2 pb-4">
              <label className="label">
                <span className="label-text">Supplier</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="supplier"
                  defaultValue={supplier}
                  placeholder="Supplier"
                  className="input input-bordered w-full"
                />
              </label>
            </div>

            <div className="form-control ms-5 w-1/2 pb-4">
              <label className="label">
                <span className="label-text">Taste</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="taste"
                  defaultValue={taste}
                  placeholder="Taste"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>

          <div className="md:flex">
            <div className="form-control w-1/2 pb-4">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="category"
                  defaultValue={category}
                  placeholder="Category"
                  className="input input-bordered w-full"
                />
              </label>
            </div>

            <div className="form-control ms-5 w-1/2 pb-4">
              <label className="label">
                <span className="label-text">Details</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="details"
                  defaultValue={details}
                  placeholder="Details"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>

          <div className="form-control pb-4">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="photo"
                defaultValue={photo}
                placeholder="Photo Url"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          {/* <button >Responsive</button> */}

          <input
            type="submit"
            value="Update Coffee"
            className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg w-full mt-4"
          />
        </form>
      </div>
    </div>
  );
};

export default UpdateCoffee;
