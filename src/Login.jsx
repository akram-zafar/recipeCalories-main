import { useState } from "react";

const Login = () => {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()


    const handleSubmit = (event)=>{
        event.preventDefault()
        
        console.log("email=>", email);
        console.log("password=>", password);

    }
  return (
    <div>
      <div className="bg-base-200 min-h-screen flex justify-center items-center">
          <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl">
            <form className="card-body" >
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary" onClick={handleSubmit}>Login</button>
              </div>
            </form>
          </div>
        
      </div>
    </div>
  );
};

export default Login;
