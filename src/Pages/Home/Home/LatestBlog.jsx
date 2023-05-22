
const LatestBlog = () => {
    return (
        <div className="hero min-h-screen bg-base-200 mt-8 ">
                
            <div className="hero-content flex-col md:flex-row">
                <div className="w-1/2">
                <img src="https://hips.hearstapps.com/hmg-prod/images/pop-kids-science-toys-1637169781.jpg?crop=0.984xw:0.984xh;0,0&resize=1200:*" />
                </div>
                <div className="w-1/2">
                <h3 className="text-5xl font-extrabold text-purple-800 mb-5">Top Blog</h3>
                    <h1 className="text-5xl font-bold">Whether your kid loves to explore the outdoors or engineer buildings!</h1>
                    <p className="py-6">``As adults, it’s our job to foster curiosity and a love of science in the kids in our lives. And what better way to do this than through play? Toys allow children ample opportunity to learn all kinds of scientific lessons, from cause and effect, to how their bodies work, to lessons on the natural world around us and what lies beyond us in the universe.``</p>
                    <button className="btn btn-primary">Read More</button>
                </div>
            </div>
        </div>
    );
};

export default LatestBlog;