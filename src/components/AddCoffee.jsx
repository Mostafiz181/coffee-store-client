import React from "react";

const AddCoffee = () => {
  return (
    <div>
      <h2 className="text-purple-500">Add a coffee</h2>

      <form>
        <div className="flex">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Coffee Name</span>
            </label>
            <label className="input-group">
              <span>coffee</span>
              <input
                type="text"
                placeholder="coffee name"
                className="input input-bordered"
              />
            </label>
          </div>

          <div className="form-control ms-5">
            <label className="label">
              <span className="label-text">Available Quantity</span>
            </label>
            <label className="input-group">
              <span>quantity</span>
              <input
                type="text"
                placeholder="available quantity"
                className="input input-bordered"
              />
            </label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddCoffee;
