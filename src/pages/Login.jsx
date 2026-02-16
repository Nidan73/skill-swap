import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../app/Context/AuthContext";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";
// import toast from "daisyui/components/toast";

const Login = () => {
  const { userLogin, googleSignIn } = useContext(AuthContext);
  const location = useLocation();
  console.log(location);
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    userLogin(email, password)
      .then(() => {
        toast.success("login Succesfully");
        navigate(location?.state || "/");
      })
      .catch(() => {
        // console.log(error);
      });
  };
  const handleGoogle = () => {
    googleSignIn().then(() => {
      toast.success("login Succesfully");
      navigate(location?.state || "/");
    });
  };

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

            <form onSubmit={handleLogin} className="mt-6 space-y-5">
              <div>
                <label className="label">
                  <span className="label-text font-medium">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div className="relative">
                <label className="label">
                  <span className="label-text font-medium">Password</span>
                </label>

                <input
                  name="password"
                  type={showPass ? "text" : "password"}
                  placeholder="Create a password"
                  className="input input-bordered w-full pr-12"
                  required
                />

                <span
                  className="absolute right-4 top-8 cursor-pointer text-gray-500"
                  onClick={() => setShowPass(!showPass)}
                >
                  {showPass ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>

              <div className="text-right">
                <Link
                  to="/forgot"
                  className="text-sm text-primary hover:underline cursor-pointer"
                >
                  Forgot password?
                </Link>
              </div>
              <button className="btn btn-primary w-full mt-2 text-base font-semibold">
                Login
              </button>
              <div className="divider text-sm opacity-60">OR</div>
              {/* google signIN button */}
              <button
                onClick={handleGoogle}
                className="btn bg-white text-black border-[#e5e5e5] w-full"
              >
                <svg
                  aria-label="Google logo"
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <g>
                    <path d="m0 0H512V512H0" fill="#fff"></path>
                    <path
                      fill="#34a853"
                      d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                    ></path>
                    <path
                      fill="#4285f4"
                      d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                    ></path>
                    <path
                      fill="#fbbc02"
                      d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                    ></path>
                    <path
                      fill="#ea4335"
                      d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                    ></path>
                  </g>
                </svg>
                Login with Google
              </button>
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
