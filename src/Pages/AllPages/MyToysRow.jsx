import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyToysRow = ({ mytoy }) => {
    const { _id, name, seller, price, quantity} = mytoy

    const handleDelete = (_id) => {
        // console.log(_id)
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://toy-seller.vercel.app/toysbyuser/${_id}`,{
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                              Swal.fire(
                                'Deleted!',
                                'Your toy items has been deleted.',
                                'success'
                              )
                        }
                    })
            }
        })
    }
    return (
        <tr>
            <td>
                {name}
            </td>
            <td>
                {seller}
            </td>
            <td>
                {quantity}
            </td>
            <td>
                {price}
            </td>
            <td>
                <div>
                    <Link to={`/toysbyuser/${_id}`}><button className="btn btn-success">Update</button></Link>
                </div>
            </td>
            <th>
                <div>
                    <button onClick={() => handleDelete(_id)} className="btn btn-active btn-secondary">Delete</button>
                </div>
            </th>
        </tr>
    );
};

export default MyToysRow;