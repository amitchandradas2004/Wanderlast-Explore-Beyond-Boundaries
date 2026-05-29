import { BookingDeleteAlert } from "@/components/BookingDeleteAlert";
import { auth } from "@/lib/auth";
import { Button } from "@heroui/react";
import { headers } from "next/headers";
import Image from "next/image";

const MyBookingsPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });

  const user = session?.user;
  const res = await fetch(`http://localhost:5000/booking/${user?.id}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  const bookings = await res.json();
  return (
    <div className="container mx-auto mt-20 px-4">
      {bookings.map((booking) => (
        <div
          key={booking.userId}
          className="mb-6 flex flex-col gap-6 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm md:p-6 lg:flex-row lg:items-center lg:justify-between"
        >
          {/* Left Side */}
          <div className="flex flex-col gap-5 md:flex-row items-center">
            {/* Image */}
            <div className="overflow-hidden rounded-xl">
              <Image
                src={booking?.imageUrl}
                alt={booking?.destinationName}
                width={260}
                height={180}
                className="h-52 w-full object-cover sm:h-40 sm:w-64"
              />
            </div>

            {/* Content */}
            <div className="flex-1">
              {/* Status */}
              <div
                className={`mb-3 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium ${
                  booking?.status === "Pending"
                    ? "bg-yellow-100 text-yellow-600"
                    : "bg-green-100 text-green-600"
                }`}
              >
                <span className="h-2 w-2 rounded-full bg-current"></span>
                {booking?.status}
              </div>

              {/* Title */}
              <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl lg:text-4xl">
                {booking?.destinationName}
              </h2>

              {/* Details */}
              <div className="mt-4 space-y-2 text-sm text-gray-500 sm:text-base">
                <p className="flex items-center gap-2">
                  📅
                  {new Date(booking?.departureDate).toLocaleDateString(
                    "en-US",
                    {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    },
                  )}
                </p>
              </div>

              {/* Price */}
              <h3 className="mt-5 text-3xl font-bold text-cyan-500 sm:text-4xl">
                ${booking?.price}
              </h3>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <BookingDeleteAlert bookingId={booking._id} />
            <Button
              variant="primary"
              className="w-full px-6 py-3 text-sm font-medium sm:w-auto"
            >
              View
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyBookingsPage;
