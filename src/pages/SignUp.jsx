// import Link from "daisyui/components/link";
import React from "react";
import { Link } from "react-router";

const SignUp = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#eef7ea] px-6">
      <div className="w-full max-w-lg">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-primary">
            Create Your Account
          </h1>
          <p className="text-base-content/70 mt-2">
            Join SkillSwap and start your learning journey today.
          </p>
        </div>

        <div className="card bg-base-100 shadow-xl border border-base-300 rounded-3xl">
          <div className="card-body p-8">
            <form className="space-y-5">
              {/* Name */}
              <div>
                <label className="label">
                  <span className="label-text font-medium">Full Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="label">
                  <span className="label-text font-medium">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>

              {/* Photo URL */}
              <div>
                <label className="label">
                  <span className="label-text font-medium">Photo URL</span>
                </label>
                <input
                  type="url"
                  placeholder="Enter your photo URL"
                  className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* Password */}
              <div>
                <label className="label">
                  <span className="label-text font-medium">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Create a password"
                  className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary w-full mt-4 text-base font-semibold"
              >
                Register
              </button>
            </form>

            <p className="text-center text-sm mt-6">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-primary font-semibold hover:underline"
              >
                Login here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
