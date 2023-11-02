import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Navbar from './../Pages/Shared/Navbar/Navbar';
import Header from '../Pages/Shared/Header/Header'


const PrivateRoute = ({children}) => {

    const { user,loading } = useContext(AuthContext);


    if(loading){
        return <div> 
            <Header></Header>
            <Navbar></Navbar>
            <span className="loading loading-spinner loading-lg ml-[615px] mt-[100px]"></span> 
            </div>   
    }

    if(user){
        return children;
    }

    return <Navigate state={location.pathname} to='/login'></Navigate>

};

export default PrivateRoute;