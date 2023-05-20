
const TopCollection = () => {
    return (
        <div className="mb-10"> 
            <div className="text-center items-center mt-10 mb-5">
        <h2 className="text-4xl text-orange-600 font-bold">Our Top Collections</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src="https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/newscms/2020_12/1549418/educational-toys-kids-coronavirus-code-botzee-today-main1-200317.jpg" alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Smart Drawing Board!</h2>
                    <p> One way they can do so is by incorporating educational toys and games into their children`s lives.</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src="https://media-cldnry.s-nbcnews.com/image/upload/t_fit-260w,f_auto,q_auto:best/newscms/2023_18/1509206/41tpunfxm0l-5dd40073ad532.jpg" alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Melissa & Doug Classic Bead Maze!</h2>
                    <p>This bead maze challenges the mind and boosts creativity, making it a great gift for inquisitive toddlers!</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src="https://media-cldnry.s-nbcnews.com/image/upload/t_fit-260w,f_auto,q_auto:best/newscms/2023_18/1509310/41n7a-rx55l-5dd410ad40705.jpg" alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">ThinkFun Gravity Maze Game!</h2>
                    <p>This maze for kids ages 8 and up uses marbles and puzzles to challenge the mind..</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default TopCollection;