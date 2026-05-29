// 'use client'
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeftLong } from "react-icons/fa6";
import { EditModal } from "@/components/EditModal";
import { DeleteDestination } from "@/components/DeleteDestination";
import BookingCard from "@/components/BookingCard";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
const DestinationDetailsPage = async ({ params }) => {
  const { id } = await params;

  const { token } = await auth.api.getToken({
    headers: await headers(),
  });

  console.log(token, "Token");
  const res = await fetch(`http://localhost:5000/destination/${id}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  const destination = await res.json();
  const {
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
          <DeleteDestination destination={destination} />
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
      <section className="mx-auto grid container grid-cols-1 gap-10 px-6 py-12 lg:grid-cols-3">
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
        <BookingCard destination={destination} />
      </section>
    </main>
  );
};

export default DestinationDetailsPage;
