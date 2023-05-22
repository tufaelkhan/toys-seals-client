
const MyToysRow = ({mytoy}) => {
    const  {_id, name, seller, price, quantity} = mytoy
    
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
            <button className="btn">Update</button>
        </div>
        </td>
        <th>
        <div>
            <button className="btn">Delete</button>
        </div>
        </th>
    </tr>
    );
};

export default MyToysRow;