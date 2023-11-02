import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Main from "../Shared/Main/Main";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from './../Shared/RightSideNav/RightSideNav';
import BreakingNews from "./BreakingNews";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

                
                <div className="">
                    <LeftSideNav></LeftSideNav>
                </div>

                <div className="col-span-2">
                    <Main></Main>
                </div>

                <div className="">
                    <RightSideNav></RightSideNav>
                </div>

        

            </div>
        </div>
    );
};

export default Home;