
const ImageGellary = () => {
    return (
        <div>
            <div className="text-center items-center mt-10 mb-5">
                <h2 className="text-4xl font-bold">Photo Gallery!!</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <div className="card w-96 bg-base-100 shadow-xl gap-5 mb-3">
                    <figure><img src="https://media.wired.com/photos/5fb6b677941d009a0c07f3fa/master/w_1600%2Cc_limit/Gear-Osmo-Genius-Stater-Kit-SOURCE-Osmo.jpg" alt="Shoes" /></figure>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl gap-5 mb-3">
                    <figure><img src="https://media.wired.com/photos/645ac5358d6da8ab812d82a2/master/w_1600%2Cc_limit/Geomag_Glow-SOURCE-Amazon-Gear.jpg" alt="Shoes" /></figure>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl gap-5 mb-3">
                    <figure><img src="https://media.wired.com/photos/5dc31c9ff34856000812604a/master/w_1600%2Cc_limit/Gear-GoCube.jpg" alt="Shoes" /></figure>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl gap-5 mb-3">
                    <figure><img src="https://media.wired.com/photos/645ac7a09d819fb102d00559/master/w_1600%2Cc_limit/Ozobot_Evo_Entry_Kit-Gear.jpg" alt="Shoes" /></figure>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl gap-5 mb-3">
                    <figure><img src="https://d1jqecz1iy566e.cloudfront.net/large/tk172.jpg" alt="Shoes" /></figure>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl gap-5 mb-3">
                    <figure><img src="https://m.media-amazon.com/images/I/914RNl3B4yL._AC_UL400_.jpg" alt="Shoes" /></figure>
                </div>
            </div>
        </div>
    );
};

export default ImageGellary;