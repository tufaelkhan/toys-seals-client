import Swal from 'sweetalert2'
const AddToys = () => {
    const handleAddToys = (event)=>{
        event.preventDefault()

        const form = event.target;
        const name = form.name.value;
        const seller = form.seller.value;
        const email = form.email.value;
        const category = form.category.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const photo = form.photo.value;
        const detail = form.detail.value;

        const newToys = {name, seller, email, category, price, rating, quantity, photo, detail}
        console.log(newToys);

        //data send in server
        fetch('https://toy-seller.vercel.app/toys',{
         method: 'POST',
         headers: {
          'content-type': 'application/json'
         },
         body: JSON.stringify(newToys)
        })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          if(data.insertedId){
            Swal.fire({
              title: 'success!',
              text: 'toys added successfully',
              icon: 'success',
              confirmButtonText: 'Cool'
            })
          }
        })


    }
    return (
        <div className="bg-orange-200 p-20">
            <h3 className="text-center font-extrabold text-4xl">Add toys</h3>
            <form onSubmit={handleAddToys}>
                {/* toy name & seller */}
                <div className="md:flex">
                <div className="form-control md:w-1/2">
  <label className="label">
    <span className="label-text">Toy Name</span>
  </label>
  <label className="input-group">
    <input type="text" name="name" placeholder="toy name" className="input input-bordered w-full" />
  </label>
</div>
                <div className="form-control md:w-1/2 ml-10">
  <label className="label">
    <span className="label-text">seller Name</span>
  </label>
  <label className="input-group">
    <input type="text" name="seller" placeholder="seller name" className="input input-bordered w-full" />
  </label>
</div>
                </div>
                {/* seller email & category */}
                <div className="md:flex">
                <div className="form-control md:w-1/2">
  <label className="label">
    <span className="label-text">category</span>
  </label>
  <label className="input-group">
    <input type="text" name="category" placeholder="category" className="input input-bordered w-full" />
  </label>
</div>
                <div className="form-control md:w-1/2 ml-10">
  <label className="label">
    <span className="label-text">seller email</span>
  </label>
  <label className="input-group">
    <input type="text" name="email" placeholder="seller email" className="input input-bordered w-full" />
  </label>
</div>
                </div>
                {/* price & rating */}
                <div className="md:flex">
                <div className="form-control md:w-1/2">
  <label className="label">
    <span className="label-text">price</span>
  </label>
  <label className="input-group">
    <input type="text" name="price" placeholder="price" className="input input-bordered w-full" />
  </label>
</div>
                <div className="form-control md:w-1/2 ml-10">
  <label className="label">
    <span className="label-text">rating</span>
  </label>
  <label className="input-group">
    <input type="text" name="rating" placeholder="rating" className="input input-bordered w-full" />
  </label>
</div>
                </div>
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
    <span className="label-text">photo</span>
  </label>
  <label className="input-group">
    <input type="text" name="photo" placeholder="photo" className="input input-bordered w-full" />
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
<input type="submit" className="btn btn-block" value="ADD TOYS" />
            </form>
        </div>
    );
};

export default AddToys;