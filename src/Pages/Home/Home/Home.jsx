import Banner from "./Banner";
import ImageGellary from "./ImageGellary";
import LatestBlog from "./LatestBlog";
import LatestCollections from "./LatestCollections";
import TopCollection from "./TopCollection";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ImageGellary></ImageGellary>
            <LatestBlog></LatestBlog>
            <TopCollection></TopCollection>
            <LatestCollections></LatestCollections>
        </div>
    );
};

export default Home;