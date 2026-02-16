const Loader = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-[#eef7ea]">
      <span className="loading loading-dots loading-lg text-primary"></span>
      <p className="text-primary font-semibold animate-pulse">
        Loading, please wait...
      </p>
    </div>
  );
};

export default Loader;
