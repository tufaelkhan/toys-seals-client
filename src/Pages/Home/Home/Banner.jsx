
const Banner = () => {
    return (
        <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img src="https://images.pexels.com/photos/15393163/pexels-photo-15393163/free-photo-of-store-with-toys-and-candy.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="w-full" />
          <div className="absolute flex justify-between transform left-5 right-5 mt-28">
           <div className=" mt-28 ml-32 ">
            <h2 className="text-white text-5xl mb-7 font-extrabold">Unlock the Joy of Learning <br /> with Our Educational Toys!</h2>
            <p className="text-2xl mb-7 font-bold">
Welcome to our educational toy website, <br /> where learning meets fun! We believe <br /> that the best way for children to <br /> develop their skills and knowledge is through <br /> engaging and interactive play. <br /> Our carefully curated collection of educational <br /> toys is designed to inspire curiosity, <br /> ignite imagination, and promote holistic learning.</p>
<div>
<button className="btn btn-active btn-primary mr-5">Shop Now</button>
<button className="btn btn-outline btn-secondary">Latest Collection</button>
</div>
           </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">❮</a> 
            <a href="#slide2" className="btn btn-circle hover:bg-orange-500">❯</a>
          </div>
        </div> 
        <div id="slide2" className="carousel-item relative w-full">
          <img src="https://images.pexels.com/photos/3933025/pexels-photo-3933025.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="w-full" />
          <div className="absolute flex justify-between transform left-5 right-5 mt-28">
           <div className=" mt-28 ml-32">
            <h2 className="text-white text-5xl mb-7 font-extrabold">Unlock the Joy of Learning <br /> with Our Educational Toys!</h2>
            <p className="text-2xl mb-7 font-bold">
Welcome to our educational toy website, <br /> where learning meets fun! We believe <br /> that the best way for children to <br /> develop their skills and knowledge is through <br /> engaging and interactive play. <br /> Our carefully curated collection of educational <br /> toys is designed to inspire curiosity, <br /> ignite imagination, and promote holistic learning.</p>
<div>
<button className="btn btn-active btn-primary mr-5">Shop Now</button>
<button className="btn btn-outline btn-secondary">Latest Collection</button>
</div>
           </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a> 
            <a href="#slide3" className="btn btn-circle hover:bg-orange-500">❯</a>
          </div>
        </div> 
        <div id="slide3" className="carousel-item relative w-full">
          <img src="https://images.pexels.com/photos/3662667/pexels-photo-3662667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="w-full" />
          <div className="absolute flex justify-between transform left-5 right-5 mt-28">
           <div className="mt-28 ml-32">
            <h2 className="text-white text-5xl mb-7 font-extrabold">Unlock the Joy of Learning <br /> with Our Educational Toys!</h2>
            <p className="text-2xl mb-7 font-bold">
Welcome to our educational toy website, <br /> where learning meets fun! We believe <br /> that the best way for children to <br /> develop their skills and knowledge is through <br /> engaging and interactive play. <br /> Our carefully curated collection of educational <br /> toys is designed to inspire curiosity, <br /> ignite imagination, and promote holistic learning.</p>
<div>
<button className="btn btn-active btn-primary mr-5">Shop Now</button>
<button className="btn btn-outline btn-secondary">Latest Collection</button>
</div>
           </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a> 
            <a href="#slide4" className="btn btn-circle hover:bg-orange-500">❯</a>
          </div>
        </div> 
        <div id="slide4" className="carousel-item relative w-full">
          <img src="https://images.pexels.com/photos/8612928/pexels-photo-8612928.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="w-full" />
          <div className="absolute flex justify-between transform left-5 right-5 mt-28">
           <div className=" mt-28 ml-32">
            <h2 className="text-white text-5xl mb-7 font-extrabold">Unlock the Joy of Learning <br /> with Our Educational Toys!</h2>
            <p className="text-2xl mb-7 font-bold">
Welcome to our educational toy website, <br /> where learning meets fun! We believe <br /> that the best way for children to <br /> develop their skills and knowledge is through <br /> engaging and interactive play. <br /> Our carefully curated collection of educational <br /> toys is designed to inspire curiosity, <br /> ignite imagination, and promote holistic learning.</p>
<div>
<button className="btn btn-active btn-primary mr-5">Shop Now</button>
<button className="btn btn-outline btn-secondary">Latest Collection</button>
</div>
           </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a> 
            <a href="#slide1" className="btn btn-circle hover:bg-orange-500">❯</a>
          </div>
        </div>
      </div>
    );
};

export default Banner;