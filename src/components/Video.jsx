
const Video = () => {
  return (
    <div className="md:h-[calc(100vh-84px)]  h-[80vh] ">
      <div className="md:box h-full w-full md:py-20 py-8">
        <div className=" h-full relative  md:overflow-hidden md:rounded-md rounded-none rounded-t-none ">
          {/* overlay with gradient */}
          <div
            className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/90 via-black/60 to-transparent
           z-10"
          ></div>
          <video
            src="/dior.mp4"
            className="w-full h-full object-cover "
            autoPlay
            muted
            loop
          ></video>

          {/* bottom context */}
          <div className="absolute bottom-0 left-0 w-full h-1/3 z-20 text-white px-8">
            <div className="flex items-center justify-between mb-6">
              {/* left */}
              <div className="md:text-5xl font-black md:leading-7 tracking-wide text-2xl leading-4">
                <h2>Photography</h2> <br />
                <h2>and Films</h2>
              </div>
              {/* end left */}
              {/* right */}
              <div className="size-19 rounded-full bg-transparent flex items-center justify-center border border-slate-400 border-r-white border-r-2 text-3xl font-medium">
                01
              </div>
            </div>
            <hr className="border-slate-200" />
            {/* second part */}
            <div className="flex items-center justify-between ">
              <div className='text-sm '>Explore</div>
              <div className="text-5xl font-normal">
                <img src="/right-arrow.png" alt="" />
              </div>
            </div>
            {/*end second part */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
