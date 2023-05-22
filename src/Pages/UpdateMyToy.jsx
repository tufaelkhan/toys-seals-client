
const UpdateMyToy = () => {
    
    return (
        <div className="bg-orange-200 p-20">
        <h3 className="text-center font-extrabold text-4xl">Add toys</h3>
        <form onSubmit={handleAddToys}>
            {/* quantity & photo */}
            <div className="md:flex">
            <div className="form-control md:w-1/2">
<label className="label">
<span className="label-text">quantity</span>
</label>
<label className="input-group">
<input type="text" name="quantity" placeholder="quantity" className="input input-bordered w-full" />
</label>
</div>
<div className="form-control md:w-1/2 ml-10">
<label className="label">
<span className="label-text">price</span>
</label>
<label className="input-group">
<input type="text" name="price" placeholder="price" className="input input-bordered w-full" />
</label>
</div>
            </div>
            {/* detail */}
            <div className="form-control md:w-full mb-8">
<label className="label">
<span className="label-text">detail</span>
</label>
<label className="input-group">
<input type="text" name="detail" placeholder="detail" className="input input-bordered w-full" />
</label>
</div>
<input type="submit" className="btn btn-block" value="Update TOYS" />
        </form>
    </div>
    );
};

export default UpdateMyToy;