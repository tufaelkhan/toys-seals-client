import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import MyToysRow from "./MyToysRow";

const MyToys = () => {
    const {user} = useContext(AuthContext)
    const [mytoys, setMyToys] = useState([])

    const url = `http://localhost:5000/toysbyuser?email=${user?.email}`

    useEffect(()=> {
        fetch(url)
        .then(res => res.json())
        .then(data => setMyToys(data))
    },[url])
    return (
        <div>
        <h3>My toys is here:</h3>
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>Toy Name</th>
                <th> seller Name</th>
                <th>Available Quantity</th>
                <th>Price </th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
                {
                    mytoys.map(mytoy => <MyToysRow
                    key={mytoy._id}
                    mytoy={mytoy}
                    ></MyToysRow>)
                }
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default MyToys;