import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import MyToysRow from "./MyToysRow";

const MyToys = () => {
    const {user} = useContext(AuthContext)
    const [mytoys, setMyToys] = useState([])
    const [searchtext, setSearchText] = useState('')

    const url = `https://toy-seller.vercel.app/toysbyuser?email=${user?.email}`

    useEffect(()=> {
        fetch(url)
        .then(res => res.json())
        .then(data => setMyToys(data))
    },[url])

    const handleSearch =() =>{
        fetch(`https://toy-seller.vercel.app/toyname/${searchtext}`)
        .then(res => res.json())
        .then( data => {
          setMyToys(data)
        })
    }
    return (
        <div>
        <h3>My toys is here:</h3>
        <div className="justify-center ml-20 mb-6 mt-6">
        <input onChange={(e) => setSearchText(e.target.value)}
        type="text" placeholder="Type here" className="input w-full max-w-xs" />
        <button onClick={handleSearch}>Search</button>
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
                    ></MyToysRow>)
                }
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default MyToys;