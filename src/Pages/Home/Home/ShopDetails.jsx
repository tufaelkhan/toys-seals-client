import { useLoaderData } from "react-router-dom";

const ShopDetails = () => {
    const shop = useLoaderData()
    const { _id, name, seller, price, quantity, photo, email, rating , detail} = shop
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img src={photo} className="max-w-sm rounded-lg shadow-2xl" />
                <div className="ml-10">
                    <h1 className="text-5xl font-bold">{name}</h1>
                    <p>Seller Name: {seller}</p>
                    <p>Price: {price}</p>
                    <p>Seller Email: {email}</p>
                    <p>Avilable Quantity: {quantity}</p>
                    <p>Rating: {rating}</p>
                    <p>Description: {detail}</p>

                    <button className="btn btn-primary">shop Now</button>
                </div>
            </div>
        </div>
    );
};

export default ShopDetails;