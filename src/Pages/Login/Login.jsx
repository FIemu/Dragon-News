import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const Login = () => {

  const { signIn } = useContext(AuthContext)
  const location = useLocation()
  console.log(location)

  const navigate = useNavigate()

    const handleLogin = e =>{
        e.preventDefault();

        const form = new FormData(e.currentTarget)
        
        const email = form.get('email')
        const password = form.get('password')

        // console.log(email,password)

        signIn(email,password)
        .then(result =>{
          console.log(result.user)

          navigate(location?.state ? location.state : '/' )
        })
        .catch(error =>{
          console.log(error.massage)
        })

    }

    return (
      <>
      <Navbar></Navbar>
        
      <div className="w-1/2 mx-auto border rounded-xl shadow-xl my-20">
        <h1 className="text-4xl font-bold text-center mt-4">Please, Login</h1>
        <form onSubmit={handleLogin}  className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              name="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button  className="btn btn-primary">Login</button>
          </div>
        </form>
        <p className="text-xl font-bold text-center mb-2">Do not have an account..click here to <Link to="/register" className="text-blue-600 underline">Register</Link></p>
      </div>
      </>
    );
};

export default Login;