import { Outlet } from "react-router-dom";
import Footer from "../Pages/Home/Home/Shared/Footer";
import Header from "../Pages/Home/Home/Shared/Header";

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;