import { auth } from "@/lib/auth";
import { Button } from "@heroui/react";
import { headers } from "next/headers";
import Image from "next/image";

const MyBookingsPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const user = session?.user;
  const res = await fetch(`http://localhost:5000/booking/${user?.id}`);
  const bookings = await res.json();
  console.log(bookings);
  return (
    <div className="mt-30 container mx-auto">
      {bookings.map((booking) => (
        <div
          key={booking.userId}
          className="mb-5 flex items-center justify-between rounded-2xl border border-gray-200 bg-white p-6"
        >
          {/* Left Side */}
          <div className="flex flex-col md:flex-row items-center gap-6">
            {/* Image */}
            <div className="overflow-hidden rounded-xl">
              <Image
                src={booking?.imageUrl}
                alt={booking?.destinationName}
                width={260}
                height={180}
                className="h-40 w-65 object-cover"
              />
            </div>

            {/* Content */}
            <div>
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
              <h2 className="text-4xl font-bold text-gray-900">
                {booking?.destinationName}
              </h2>

              {/* Details */}
              <div className="mt-4 space-y-2 text-sm text-gray-500">
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
              <h3 className="mt-5 text-4xl font-bold text-cyan-500">
                ${booking?.price}
              </h3>
            </div>
          </div>

          {/* Right Side Buttons */}
          <div className="flex gap-3">
            <Button
              variant="danger"
              className="rounded-lg  px-6 py-2 text-sm font-medium "
            >
              Cancel
            </Button>

            <Button className=" px-6 py-2 text-sm font-medium">View</Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyBookingsPage;
