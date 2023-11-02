import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const Register = () => {

    const { createUser } = useContext(AuthContext);

    const handleRegister = e =>{
        e.preventDefault();
        const form = new FormData(e.currentTarget);

        const name = form.get('name')
        const photo = form.get('photo')
        const email = form.get('email')
        const password = form.get('password')

        // console.log(name,photo,email,password)

        createUser(email,password)
        .then(result =>{
            console.log(result.user)
        })
        .catch( error =>{
            console.log(error.message)
        })
        
    }


    return (
        <div>
        <Navbar></Navbar>
        <div>
          <div className="w-1/2 mx-auto border rounded-xl shadow-xl my-20">
            <h1 className="text-4xl font-bold text-center mt-4">Please, Login</h1>
            <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  name="name"
                  className="input input-bordered"
  
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input
                  type="text"
                  placeholder="Photo Url"
                  name="photo"
                  className="input input-bordered"
            
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
  
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
   
                />
                <label className="label flex">
                  <div className="flex justify-center items-center gap-2">
                      <input type="checkbox" />
                      <p className="font-bold">Accept Term & Conditions</p>
                  </div>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
              <p className="text-xl font-bold text-center mb-2">
                  Already have an account..Click here to <Link to='/login' className="text-blue-600 font-bold underline">Login</Link>
              </p>
          </div>
        </div>
      </div>
    );
};

export default Register;