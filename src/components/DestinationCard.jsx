import Image from "next/image";
import Link from "next/link";
import { CgArrowTopRight } from "react-icons/cg";
import { ImLocation2 } from "react-icons/im";
import { SlCalender } from "react-icons/sl";

const DestinationCard = ({ destination }) => {
  const { destinationName, country, price, duration, imageUrl, category } =
    destination;
  return (
    <div
      className="
        group relative overflow-hidden rounded-2xl

        bg-white/30 dark:bg-black/20
        backdrop-blur-xl

        border border-black/10
        dark:border-white/10

        transition duration-300
        hover:scale-102
        hover:border-cyan-400/40
      "
    >
      {/* Image */}
      <div className="relative h-85 w-full overflow-hidden">
        <Image
          src={imageUrl}
          alt={destinationName}
          fill
          className="
            object-cover
            transition duration-500
            group-hover:scale-105 select-none
          "
        />
      </div>

      {/* Overlay */}
      <div
        className="
          absolute inset-0
          bg-linear-to-t
          from-black/90
          via-black/20
          to-transparent
        "
      />

      {/* Content */}
      <div className="absolute bottom-0 p-5 text-white">
        {/* Category */}
        <div>
          <span
            className="
            inline-block rounded-full
            bg-white/10
            backdrop-blur-md
            px-3 py-1
            text-xs
            border border-white/10
            mb-3
          "
          >
            {category}
          </span>
          <span
            className=" ml-2
            inline-block rounded-full
            bg-white/10
            backdrop-blur-md
            px-3 py-1
            text-xs
            border border-white/10
            mb-3
          "
          >
            <span className="flex  items-center gap-1">
              {" "}
              <ImLocation2 />
              {country}
            </span>
          </span>
        </div>

        <div className="flex justify-between gap-10 items-center">
          <span>
            {" "}
            <h2 className="text-2xl font-bold">{destinationName}</h2>
          </span>

          <span>
            {" "}
            <p className="mt-2 opacity-80">
              <span className="text-xl font-bold">${price}</span>/Person
            </p>
          </span>
        </div>

        <div className="mt-3 flex items-center gap-2 text-sm text-white/70">
          <SlCalender />
          {duration}
        </div>

        <Link href={`/}`}>
          <span
            className="
           text-[#00A8E7] rounded-full text-sx h-8 mt-3 flex items-center hover:text-white
            "
          >
            Book Now <CgArrowTopRight />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default DestinationCard;
