const AddCoffee = () => {
  return (
    <div>
      <h1>coffee</h1>
      <form>
        <div>
          <div className=" flex gap-10">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Coffee Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Coffee Name"
                  className="input input-bordered outline-none  w-72"
                />
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Available Quantity</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Coffee Name"
                  className="input input-bordered outline-none w-72 "
                />
              </label>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddCoffee;
