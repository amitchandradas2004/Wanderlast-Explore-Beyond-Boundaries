import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

const Banner = () => {
  return (
    <div>
      <div className="relative h-screen">
        <div className="absolute inset-0 bg-[url('/Banner.png')] text-white  flex justify-between flex-col items-center gap-5 bg-no-repeat bg-cover bg-center">
          <div className="absolute inset-0 bg-black/15"></div>
          <div className="p-10 text-center flex justify-center flex-col items-center gap-3.5 flex-1 relative z-10">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold">
              Discover Your Next Adventure
            </h1>
            <p className="text-xs md:text-xl lg:text-2xl opacity-80">
              Explore breathtaking destinations and create unforgettable
              memories with our curated travel experiences.
            </p>

            <div className="flex flex-col md:flex-row gap-5">
              <Link href={"/destinations"}>
                <button className="uppercase  flex items-center gap-2 btn btn-info text-white">
                  Explore Now <FaArrowRightLong />
                </button>
              </Link>
              <Link href={"/"}>
                <button className="uppercase bg-white/50 text-white border-none btn">
                  View Destination
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
