import React, { useContext } from "react";
import { AuthContext } from "../app/Context/AuthContext";
// import { useLocation } from "react-router";

const ForgetPass = () => {
  const { resetPassword } = useContext(AuthContext);
  const handleReset = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    resetPassword(email);
    window.location.href = "https://mail.google.com";
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#eef7ea] px-6">
      <div className="card bg-base-100 shadow-xl border border-base-300 rounded-2xl w-full max-w-md">
        <div className="card-body p-8">
          <h2 className="text-2xl font-bold text-primary text-center">
            Reset Your Password
          </h2>

          <form onSubmit={handleReset} className="mt-6 space-y-5">
            <div>
              <label className="label">
                <span className="label-text font-medium">Email Address</span>
              </label>
              <input
                type="email"
                name="email"
                className="input input-bordered w-full"
                required
              />
            </div>

            <button type="submit" className="btn btn-primary w-full mt-2">
              Reset Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgetPass;
