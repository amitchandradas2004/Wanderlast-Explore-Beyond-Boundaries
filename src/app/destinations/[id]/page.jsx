// 'use client'
import Image from "next/image";
import Link from "next/link";
import { FaEdit } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";
import { RiDeleteBinLine } from "react-icons/ri";
import BookToast from "@/components/BookToast";
import { EditModal } from "@/components/EditModal";
const DestinationDetailsPage = async ({ params }) => {
  const { id } = await params;
  const res = await fetch(`http://localhost:5000/destination/${id}`);
  const destination = await res.json();
  // console.log(destination);
  const {
    category,
    country,
    departureDate,
    description,
    destinationName,
    duration,
    imageUrl,
    price,
  } = destination;

  return (
    <main className="min-h-screen bg-white container mx-auto mt-20 px-3 md:px-0  overflow-hidden">
      <div className="flex flex-col md:flex-row space-y-3 justify-between items-center py-3">
        <Link href={"/destinations"}>
          <span className="flex  items-center gap-2 text-[#00A8E7]">
            {" "}
            <FaArrowLeftLong />
            Back to Destinations
          </span>
        </Link>
        <div className="flex  items-center gap-2">
          <EditModal destination={destination} />
          <button className="flex items-center gap-2 btn btn-error text-white">
            <RiDeleteBinLine />
            Cancel
          </button>
        </div>
      </div>
      {/* Hero Image */}
      <section className="relative h-80 w-full overflow-hidden">
        <Image
          src={imageUrl}
          alt={destinationName}
          height={500}
          width={500}
          className="h-full w-full object-cover rounded-xl overflow-hidden"
        />

        {/* Optional Overlay */}
        <div className="absolute inset-0 bg-black/10"></div>
      </section>

      {/* Content */}
      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-12 lg:grid-cols-3">
        {/* Left Content */}
        <div className="lg:col-span-2">
          {/* Location */}
          <div className="mb-2 flex items-center gap-2 text-sm text-gray-500">
            <span>📍</span>
            <span>{country}</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl font-bold text-gray-900">
            {destinationName}
          </h1>

          {/* Rating & Duration */}
          <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <span className="text-green-500">★</span>
              <span className="font-medium">4.9</span>
              <span>(234 reviews)</span>
            </div>

            <div className="flex items-center gap-1">
              <span>🗓️</span>
              <span>{duration}</span>
            </div>
          </div>

          {/* Overview */}
          <div className="mt-10">
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
              Overview
            </h2>

            <p className="leading-7 text-gray-600">{description}</p>
          </div>

          {/* Highlights */}
          <div className="mt-10">
            <h2 className="mb-6 text-2xl font-semibold text-gray-900">
              Highlights
            </h2>

            <p className="mb-6 leading-7 text-gray-600">
              Discover the magic of Bali with pristine beaches, ancient temples,
              and vibrant culture. Experience luxury resorts, tropical
              landscapes, and unforgettable sunsets.
            </p>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {[
                "Luxury beachfront accommodation",
                "Traditional Balinese spa treatment",
                "Sunrise trek to Mount Batur",
                "Visit Uluwatu Temple at sunset",
                "Private beach dinner experience",
                "Island hopping adventure",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 text-gray-700"
                >
                  <span className="mt-1 text-green-500">✔</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Booking Card */}
        <div>
          <div className="sticky top-10 rounded-2xl border border-gray-200 bg-white p-6 shadow-lg">
            <div className="mb-6">
              <p className="text-sm text-gray-500">Starting from</p>

              <h3 className="text-4xl font-bold text-cyan-500">${price}</h3>

              <p className="text-gray-500">per person</p>
            </div>

            {/* Date */}
            <div className="mb-5">
              <input
                type="date"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-cyan-500"
                defaultValue={departureDate}
              />
            </div>

            {/* Button */}
            <BookToast />
            {/* <button
              onClick={handleBooking}
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-cyan-500 px-5 py-3 font-medium text-white transition hover:bg-cyan-600 btn"
            >
              Book Now →
            </button> */}

            {/* Features */}
            <div className="mt-6 space-y-3 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <span className="text-green-500">✔</span>
                <span>Free cancellation up to 7 days</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-green-500">✔</span>
                <span>Travel insurance included</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-green-500">✔</span>
                <span>24/7 customer support</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default DestinationDetailsPage;
