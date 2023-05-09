import React from "react";

const AddCoffee = () => {

    const handleToAdd=event=>{
        event.preventDefault();
        const form = event.target;
        const name=form.name.value;
        const quantity= form.quantity.value;
        const supplier =form.supplier.value;
        const taste = form.taste.value;
        const category=form.category.value;
        const details= form.details.value
        const photo=form.photo.value;
        const newCoffee={name,quantity,supplier,taste,category,details,photo};
        console.log(newCoffee)
    }
  return (
    <div className="bg-[#F4F3F0] p-24">
      <h2 className="text-purple-500 text-3xl font-extrabold">Add a coffee</h2>

      <form onSubmit={handleToAdd}>
        
        <div className="md:flex">
          <div className="form-control w-1/2 pb-4">
            <label className="label">
              <span className="label-text">Coffee Name</span>
            </label>
            <label className="input-group">
              
              <input
                type="text"
                name="name"
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
                placeholder="Photo Url"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          {/* <button >Responsive</button> */}

          <input type="submit" value="Add Coffee" className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg w-full mt-4" />
      </form>
    </div>
  );
};

export default AddCoffee;
