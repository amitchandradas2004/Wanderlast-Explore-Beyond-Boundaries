import { Separator } from "@heroui/react";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

const Banner = () => {
  return (
    <div>
      <div className="relative h-screen">
        <div className="absolute inset-0 bg-[url('/banner.png')] text-white  flex justify-between flex-col items-center gap-5 bg-no-repeat bg-cover bg-center">
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
      <div className="bg-slate-300">
        <div className=" text-center grid grid-cols-2 md:grid-cols-5 gap-5 w-full items-center py-3 relative inset-0 container mx-auto px-2 md:px-0">
          <div className="border border-slate-400 rounded-xl p-3">
            <h3 className="text-sm">Location</h3>
            <p className="text-xs">Address, City or Zip</p>
          </div>

          {/* <Separator variant="tertiary" orientation="vertical" /> */}

          <div className="border border-slate-400 rounded-xl p-3">
            <h3 className="text-sm">Date/Duration</h3>
            <p className="text-xs">Anytime/3 Days</p>
          </div>

          {/* <Separator variant="tertiary" orientation="vertical" /> */}

          <div className="border border-slate-400 rounded-xl p-3">
            <h3 className="text-sm">Budget</h3>
            <p className="text-xs">$0-$3000</p>
          </div>

          {/* <Separator variant="tertiary" orientation="vertical" /> */}

          <div className="border border-slate-400 rounded-xl p-3">
            <h3 className="text-sm">People</h3>
            <p className="text-xs">5-10</p>
          </div>

          <div>
            {" "}
            <button className="btn btn-info text-white">Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
//  <div className="bg-white/20 text-center flex flex-col md:flex-row justify-between gap-5 w-full items-center py-3 relative inset-0">
//           <div>
//             <h3 className="text-sm">Location</h3>
//             <p className="text-xs">Address, City or Zip</p>
//           </div>

//           <Separator variant="tertiary" orientation="vertical" />

//           <div>
//             <h3 className="text-sm">Date/Duration</h3>
//             <p className="text-xs">Anytime/3 Days</p>
//           </div>

//           <Separator variant="tertiary" orientation="vertical" />

//           <div>
//             <h3 className="text-sm">Budget</h3>
//             <p className="text-xs">$0-$3000</p>
//           </div>

//           <Separator variant="tertiary" orientation="vertical" />

//           <div>
//             <h3 className="text-sm">People</h3>
//             <p className="text-xs">5-10</p>
//           </div>

//           <div>
//             {" "}
//             <button className="btn btn-info text-white">Search</button>
//           </div>
//         </div>
