function Loader() {
  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-[9999]">

      <h1 className="text-6xl font-black tracking-widest">
        <span className="text-yellow-500">SUMIT</span>
        <span className="text-white"> STORE</span>
      </h1>

      <p className="text-gray-400 tracking-[8px] mt-5">
        SINCE 2020
      </p>

      <div className="w-56 h-1 bg-zinc-800 rounded-full overflow-hidden mt-10">

        <div className="h-full w-full bg-yellow-500 animate-pulse"></div>

      </div>

    </div>
  );
}

export default Loader;