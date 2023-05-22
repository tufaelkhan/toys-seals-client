import { useLoaderData } from "react-router-dom";
import Toys from "../Toys";

const AllToys = () => {
  const toys = useLoaderData()
  return (
    <div>
      <h3>All toys is here: {toys.length}</h3>
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