import Banner from "./Banner";
import ImageGellary from "./ImageGellary";
import LatestBlog from "./LatestBlog";
import LatestCollections from "./LatestCollections";
import ShopCategory from "./ShopCategory";
import TopCollection from "./TopCollection";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ImageGellary></ImageGellary>
            <ShopCategory></ShopCategory>
            <LatestBlog></LatestBlog>
            <TopCollection></TopCollection>
            <LatestCollections></LatestCollections>
        </div>
    );
};

export default Home;