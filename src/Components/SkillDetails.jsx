import React, { useState } from "react";
import toast from "react-hot-toast";
import {
  FaStar,
  FaIdBadge,
  FaTag,
  FaEnvelope,
  FaUser,
  FaMoneyBillWave,
  FaLayerGroup,
} from "react-icons/fa";

const SkillDetails = ({ skillDetails }) => {
  const {
    skillId,
    skillName,
    providerName,
    providerEmail,
    price,
    rating,
    slotsAvailable,
    description,
    image,
    category,
  } = skillDetails || {};

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Session booked successfully!");
    e.target.reset();
  };

  if (!skillDetails) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="skeleton h-72 w-full rounded-2xl" />
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="skeleton h-56 rounded-2xl" />
          <div className="skeleton h-56 rounded-2xl" />
        </div>
      </div>
    );
  }

  return (
    <div className="bg-base-100">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="relative overflow-hidden rounded-3xl border border-base-300 shadow-lg">
          <div className="h-56 sm:h-72">
            <img
              src={image}
              alt={skillName}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />

          <div className="absolute bottom-5 left-5 right-5 flex flex-col gap-3">
            <div className="flex flex-wrap items-center gap-3">
              <span className="badge badge-accent text-black font-semibold">
                <FaTag className="mr-1" />
                {category}
              </span>

              <span
                className={`badge ${
                  slotsAvailable > 0 ? "badge-success" : "badge-error"
                } text-white`}
              >
                <FaLayerGroup className="mr-1" />
                {slotsAvailable > 0
                  ? `${slotsAvailable} Slots Available`
                  : "Fully Booked"}
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-bold text-base-100">
              {skillName}
            </h1>

            <div className="flex items-center gap-2 text-base-100">
              <div className="flex gap-0.5 text-accent">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    size={16}
                    className={
                      i < Math.round(rating) ? "text-accent" : "text-base-300"
                    }
                  />
                ))}
              </div>
              <span className="text-sm opacity-90">{rating} / 5</span>

              <span className="ml-3 text-sm">
                <span className="font-semibold text-accent">${price}</span>{" "}
                <span className="opacity-90">per session</span>
              </span>
            </div>
          </div>
        </div>

        <div className="mt-10 grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="card bg-base-100 border border-base-300 rounded-2xl">
              <div className="card-body p-7">
                <h2 className="text-xl font-bold text-primary">
                  About this skill
                </h2>
                <p className="mt-2 text-base-content/80 leading-relaxed">
                  {description}
                </p>
              </div>
            </div>
            <div className="card bg-base-100 border border-base-300 rounded-2xl">
              <div className="card-body p-7">
                <h2 className="text-xl font-bold text-primary">
                  Skill Information
                </h2>

                <div className="mt-4 grid sm:grid-cols-2 gap-4">
                  <div className="rounded-xl border border-base-300 p-4">
                    <p className="text-xs opacity-60">Skill ID</p>
                    <p className="font-semibold">{skillId}</p>
                  </div>

                  <div className="rounded-xl border border-base-300 p-4">
                    <p className="text-xs opacity-60">Skill Name</p>
                    <p className="font-semibold">{skillName}</p>
                  </div>

                  <div className="rounded-xl border border-base-300 p-4">
                    <p className="text-xs opacity-60">Category</p>
                    <p className="font-semibold">{category}</p>
                  </div>

                  <div className="rounded-xl border border-base-300 p-4">
                    <p className="text-xs opacity-60">Price</p>
                    <p className="font-semibold">${price}</p>
                  </div>

                  <div className="rounded-xl border border-base-300 p-4">
                    <p className="text-xs opacity-60">Rating</p>
                    <p className="font-semibold">{rating} / 5</p>
                  </div>

                  <div className="rounded-xl border border-base-300 p-4">
                    <p className="text-xs opacity-60">Slots Available</p>
                    <p className="font-semibold">{slotsAvailable}</p>
                  </div>

                  <div className="rounded-xl border border-base-300 p-4">
                    <p className="text-xs opacity-60 flex items-center gap-2">
                      <FaUser /> Provider Name
                    </p>
                    <p className="font-semibold">{providerName}</p>
                  </div>

                  <div className="rounded-xl border border-base-300 p-4">
                    <p className="text-xs opacity-60 flex items-center gap-2">
                      <FaEnvelope /> Provider Email
                    </p>
                    <p className="font-semibold">{providerEmail}</p>
                  </div>
                  <div className="rounded-xl border border-base-300 p-4 sm:col-span-2">
                    <p className="text-xs opacity-60">Description</p>
                    <p className="font-semibold">{description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <aside className="lg:col-span-1">
            <div className="card bg-base-100 border border-base-300 rounded-2xl shadow-md lg:sticky lg:top-24">
              <div className="card-body p-7">
                <h3 className="text-xl font-bold text-primary">
                  Book a Session
                </h3>

                <div className="mt-2 flex items-center justify-between">
                  <span className="text-sm opacity-70">Session Price</span>
                  <span className="font-bold text-lg text-primary">
                    <FaMoneyBillWave className="inline mr-2" />${price}
                  </span>
                </div>

                <form onSubmit={handleSubmit} className="mt-5 space-y-4">
                  <div>
                    <label className="label">
                      <span className="label-text">Name</span>
                    </label>
                    <input
                      required
                      type="text"
                      className="input input-bordered w-full"
                    />
                  </div>

                  <div>
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      required
                      type="email"
                      className="input input-bordered w-full"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary w-full"
                    disabled={slotsAvailable <= 0}
                  >
                    {slotsAvailable > 0 ? "Book Session" : "No Slots Available"}
                  </button>

                  <p className="text-xs opacity-60 leading-relaxed">
                    This is a demo booking. On submit, you'll see a success
                    toast and the form will clear.
                  </p>
                </form>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default SkillDetails;
