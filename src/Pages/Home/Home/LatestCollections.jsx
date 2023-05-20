
const LatestCollections = () => {
    return (
        <div className="mb-10"> 
        <div className="text-center items-center mt-10 mb-5">
    <h2 className="text-4xl text-orange-600 font-bold">Our Latest Collections</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src="https://m.media-amazon.com/images/I/51qFiQUlibL.__AC_SY300_SX300_QL70_FMwebp_.jpg" alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Lakeshore Self-Teaching Math Machines!</h2>
                <p>Self-directing machines are totally self-checking--great for independent skill-building practice</p>
                <div className="card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src="https://m.media-amazon.com/images/I/9127lY9p28L._AC_SX569_.jpg" alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Launching Air Rocket Toy!</h2>
                <p>Launch your rocket to 3 different heights with a simple push of a button. Your rocket will fly for shorter or longer depending on the mode selected, achieving more altitude the longer it flies!!</p>
                <div className="card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src="https://m.media-amazon.com/images/I/81omI8I4a0L._AC_SX569_.jpg" alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Hands Free Motion Sensor Mini Drone!</h2>
                <p>Here’s the first, and the most-loved hand operated drone in Force1’s Scoot drone family! </p>
                <div className="card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    </div>
    </div>
    );
};

export default LatestCollections;