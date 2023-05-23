import { Rating } from "@smastrom/react-rating";
import { useLoaderData } from "react-router-dom";

const ToyDetails = () => {
    const toysData = useLoaderData()
    const { _id, name, seller, email, price, quantity, photo, detail, toyName,  img, semail, rating , description} = toysData
    console.log(toysData);
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img src={photo || img} className="max-w-sm rounded-lg shadow-2xl" />
                <div className="ml-10">
                    <h1 className="text-5xl font-bold">{toyName || name}</h1>
                    <p>Seller Name: {seller}</p>
                    <p>Price: {price}</p>
                    <p>Seller Email: {semail || email}</p>
                    <p>Avilable Quantity: {quantity}</p>
                    <p className="flex">Rating:  <Rating
      style={{ maxWidth: 100 }}
      value={rating}
      readOnly
    />{rating}</p>
                    <p>Description: {description || detail}</p>

                    <button className="btn btn-primary">shop Now</button>
                </div>
            </div>
        </div>
    );
};

export default ToyDetails;