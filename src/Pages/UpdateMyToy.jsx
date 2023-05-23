import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateMyToy = () => {
  const mytoys = useLoaderData()
  const { _id, name, seller, price, quantity } = mytoys
  console.log(mytoys);
    const handleUpdateToys = (event)=>{
        event.preventDefault()

        const form = event.target;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const name = form.name.value;
        const seller = form.seller.value;

        const updateToys = { price, quantity, name, seller }
        console.log(updateToys);

        //data send in server
        fetch(`https://toy-seller.vercel.app/toysbyuser/${_id}`,{
          method: 'PUT',
          headers: {
           'content-type': 'application/json'
          },
          body: JSON.stringify(updateToys)
         })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          alert('data updated')
          if(data.modifiedCount > 1){
            Swal.fire({
              title: 'success!',
              text: 'toys update successfully',
              icon: 'success',
              confirmButtonText: 'Cool'
            })
          }
        })


    }
    return (
        <div className="bg-purple-200 p-20">
        <h3 className="text-center font-extrabold text-4xl">Update This Toys Information: <span className="text-purple-600">{name}</span></h3>
        <form onSubmit={handleUpdateToys}>
            {/* quantity & price */}
            <div className="md:flex">
            <div className="form-control md:w-1/2">
<label className="label">
<span className="label-text">quantity</span>
</label>
<label className="input-group">
<input type="text" name="quantity" defaultValue={quantity} placeholder="quantity" className="input input-bordered w-full" />
</label>
</div>
<div className="form-control md:w-1/2 ml-10">
<label className="label">
<span className="label-text">price</span>
</label>
<label className="input-group">
<input type="text" name="price" defaultValue={price} placeholder="price" className="input input-bordered w-full" />
</label>
</div>
            </div>
 {/* toy name & seller */}
 <div className="md:flex">
                <div className="form-control md:w-1/2">
  <label className="label">
    <span className="label-text">Toy Name</span>
  </label>
  <label className="input-group">
    <input type="text" name="name" defaultValue={name} placeholder="toy name" className="input input-bordered w-full" />
  </label>
</div>
                <div className="form-control md:w-1/2 ml-10">
  <label className="label">
    <span className="label-text">seller Name</span>
  </label>
  <label className="input-group">
    <input type="text" name="seller" defaultValue={seller} placeholder="seller name" className="input input-bordered w-full" />
  </label>
</div>
                </div>
<input type="submit" className="btn btn-block mt-10" value="Update TOYS Data" />
        </form>
    </div>
    );
};

export default UpdateMyToy;