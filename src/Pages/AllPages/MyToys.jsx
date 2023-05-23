import { useContext, useEffect, useState } from "react";
import MyToysRow from "./MyToysRow";
import { AuthContext } from "../../Providers/AuthProvider";

const MyToys = () => {
    const {user} = useContext(AuthContext)
    const [mytoys, setMyToys] = useState([])

    const url = `https://toy-seller.vercel.app/toysbyuser?email=${user?.email}`

    useEffect(()=> {
        fetch(url)
        .then(res => res.json())
        .then(data => setMyToys(data))
    },[url])
    return (
        <div>
        <h3>My toys is here:</h3>
        <div className="justify-center ml-20 mb-6 mt-6">
        </div>
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
                      ></MyToysRow>  )
                }
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default MyToys;