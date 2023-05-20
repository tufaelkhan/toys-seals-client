import { useLoaderData } from "react-router-dom";

const ShopDetails = () => {
    const shop = useLoaderData()
    const { _id, toyName, seller, subCategory, price, quantity, img, semail, rating , description} = shop
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img src={img} className="max-w-sm rounded-lg shadow-2xl" />
                <div className="ml-10">
                    <h1 className="text-5xl font-bold">{toyName}</h1>
                    <p>Seller Name: {seller}</p>
                    <p>Price: {price}</p>
                    <p>Seller Email: {semail}</p>
                    <p>Avilable Quantity: {quantity}</p>
                    <p>Rating: {rating}</p>
                    <p>Description: {description}</p>

                    <button className="btn btn-primary">shop Now</button>
                </div>
            </div>
        </div>
    );
};

export default ShopDetails;