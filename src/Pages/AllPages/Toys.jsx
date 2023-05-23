import { Link } from "react-router-dom";

const Toys = ({toy}) => {
    const  {_id, name, toyName, seller, category, price, quantity, subCategory} = toy
    // console.log(toys?.toyName);
    return (
        <tr>
        <td>
            {name || toyName}
        </td>
            <td><span>{seller}</span></td>
        <td><span className="mr-10">{price}</span>
            <span>Quantity: {quantity}</span> </td>
        <td>{category || subCategory}</td>
        <th>
        <div>
            <Link to={`/toys/${_id}`}><button className="btn">Detail</button></Link>
        </div>
        </th>
    </tr>
    );
};

export default Toys;