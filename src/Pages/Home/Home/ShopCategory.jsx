import { useEffect, useState } from "react";
import Category from "./Category";

const ShopCategory = () => {
    const [shops, setShops] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/shop')
        .then(res => res.json())
        .then(data => setShops(data))
    },[])
    return (
        <div className="mb-10"> 
            <div className="text-center items-center mt-10 mb-5">
        <h2 className="text-4xl text-orange-600 font-bold">Shop by Category!</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
           {
            shops.map(shop => <Category
                key={shop._id}
                shop={shop}
            ></Category>)
           }
        </div>
        </div>
    );
};

export default ShopCategory;