import { Link } from "react-router-dom";

const Category = ({shop}) => {
    const { _id, toyName, seller, subCategory, price, quantity, img, semail, rating} = shop
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <h2 className="card-title">{toyName}!</h2>
        <figure className="px-10 pt-10">
            <img src={img} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
            <p>Seller Name: {seller}</p>
            <p>Price: {price}</p>
            <p>Rating: {rating}</p>
            <p>Avilable Quantity: {quantity}</p>
            <div className="card-actions">
                <Link to={`/shop/${_id}`}>
                <button className="btn btn-primary">Details</button>
                </Link>
            </div>
        </div>
    </div>
    );
};

export default Category;