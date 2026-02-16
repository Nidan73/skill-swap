import React, { useContext } from "react";
import { AuthContext } from "../app/Context/AuthContext";

const Profile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="min-h-screen bg-[#eef7ea] py-12 px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
        <div className="card bg-base-100 shadow-lg border border-base-300 rounded-2xl">
          <div className="card-body items-center text-center space-y-4">
            <div className="avatar">
              <div className="w-24 rounded-full ring ring-accent ring-offset-2">
                <img
                  src={
                    user.photoURL ||
                    "https://i.ibb.co/2kRZcQn/default-avatar.png"
                  }
                  alt="User"
                />
              </div>
            </div>

            <h2 className="text-2xl font-bold text-primary">
              {user.displayName || "No Name Set"}
            </h2>

            <p className="text-sm opacity-70 break-all">{user.email}</p>
          </div>
        </div>

        <div className="card bg-base-100 shadow-lg border border-base-300 rounded-2xl">
          <div className="card-body">
            <h3 className="text-xl font-bold text-primary mb-4">
              Update Profile
            </h3>

            <form className="space-y-4">
              <div>
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  defaultValue={user.displayName}
                  className="input input-bordered w-full"
                />
              </div>

              <div>
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="url"
                  defaultValue={user.photoURL}
                  className="input input-bordered w-full"
                />
              </div>

              <div>
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  value={user.email}
                  readOnly
                  className="input input-bordered w-full"
                />
              </div>

              <button type="submit" className="btn btn-primary w-full mt-2">
                Save Changes
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
