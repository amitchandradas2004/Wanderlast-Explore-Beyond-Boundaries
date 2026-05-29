import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import DestinationCard from "./DestinationCard";

const Featured = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/featured`);
  const destinations = await res.json();
  console.log(destinations);

  return (
    <div className="container mx-auto my-10 px-3 sm:px-0">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <span className="text-center md:text-start mb-3">
          {" "}
          <h2 className="text-4xl font-bold pb-3">Featured Destinations</h2>
          <p className="opacity-80">
            Handpicked travel experiences for the adventure seekers
          </p>
        </span>
        <Link
          href={"/destinations"}
          className="hover:text-[#00A8E7] flex items-center gap-2 border p-3 hover:border-[#00A8E7]"
        >
          ALL DESTINATIONS <FaArrowRightLong />
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-5">
        {destinations.map((destination) => (
          <DestinationCard key={destination._id} destination={destination} />
        ))}
      </div>
    </div>
  );
};

export default Featured;
