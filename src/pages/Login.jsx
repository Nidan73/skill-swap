import React from "react";
import { Link } from "react-router";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#eef7ea] px-6">
      <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl w-full">
        <div className="text-center lg:text-left space-y-5">
          <h1 className="text-4xl lg:text-5xl font-bold text-primary">
            Welcome Back 👋
          </h1>
          <p className="text-base-content/70 text-lg">
            Log in to continue exploring skills and booking sessions with
            top-rated providers.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-md mx-auto shadow-xl border border-base-300 rounded-3xl">
          <div className="card-body p-8">
            <h2 className="text-2xl font-bold text-primary text-center">
              Login to your account
            </h2>

            <form className="mt-6 space-y-5">
              <div>
                <label className="label">
                  <span className="label-text font-medium">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="label">
                  <span className="label-text font-medium">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div className="text-right">
                <a className="text-sm text-primary hover:underline cursor-pointer">
                  Forgot password?
                </a>
              </div>
              <button className="btn btn-primary w-full mt-2 text-base font-semibold">
                Login
              </button>
              <div className="divider text-sm opacity-60">OR</div>
              <div className="text-center font-semibold text-lg ">
                <p>
                  New here ? You can{" "}
                  <span>
                    <Link to="/register" className="text-primary">
                      SignUp
                    </Link>
                  </span>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
