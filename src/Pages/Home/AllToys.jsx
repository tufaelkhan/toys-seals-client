import { useLoaderData } from "react-router-dom";
// import Toys from "../Toys";
import { useState } from "react";
import Toys from "../AllPages/Toys";

const AllToys = () => {
  const toys = useLoaderData()
  const [searchtext, setSearchText] = useState('')
  const handleSearch =() =>{
    fetch(`https://toy-seller.vercel.app/toyname/${searchtext}`)
    .then(res => res.json())
    .then( data => {
      toys(data)
    })
}
  return (
    <div>
      <h3>All toys is here: {toys.length}</h3>
      <input onChange={(e) => setSearchText(e.target.value)}
        type="text" placeholder="Type here" className="input w-full max-w-xs m-10" />
        <button onClick={handleSearch}>Search</button>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Toy Name</th>
              <th> seller Name</th>
              <th>Price & Available Quantity</th>
              <th>Sub Category</th>
              <th>View Detail</th>
            </tr>
          </thead>
          <tbody>
            {
              toys.map(toy => <Toys
                key={toy._id}
                toy={toy}
              ></Toys>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;