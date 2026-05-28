"use client";

import { authClient } from "@/lib/auth-client";
import { DateField, Description, Label } from "@heroui/react";
import { useState } from "react";

const BookingCard = ({ destination }) => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const [departureDate, setDepartureDate] = useState(null);
  const { _id, price, destinationName, imageUrl, country } = destination;
  // console.log(destination, "Destination");
  const handleBooking = async () => {
    const bookingData = {
      userId: user.id,
      userImage: user.image,
      userName: user.name,
      destinationId: _id,
      destinationName,
      price,
      imageUrl,
      country,
      departureDate: new Date(departureDate),
    };
    const res = await fetch(`http://localhost:5000/booking`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookingData),
    });
    const data = await res.json();
    console.log(data);
  };
  return (
    <div>
      <div className="sticky top-10 rounded-2xl border border-gray-200 bg-white p-6 shadow-lg">
        <div className="mb-6">
          <p className="text-sm text-gray-500">Starting from</p>

          <h3 className="text-4xl font-bold text-cyan-500">${price}</h3>

          <p className="text-gray-500">per person</p>
        </div>

        {/* Date */}
        <div className="my-5">
          <Label>Date</Label>
          <DateField
            onChange={setDepartureDate}
            className="w-full"
            name="date"
            isRequired
          >
            <DateField.Group>
              <DateField.Input>
                {(segment) => <DateField.Segment segment={segment} />}
              </DateField.Input>
            </DateField.Group>
          </DateField>
        </div>

        {/* Button */}
        <button
          onClick={handleBooking}
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-cyan-500 px-5 py-3 font-medium text-white transition hover:bg-cyan-600"
        >
          Book Now →
        </button>

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
  );
};

export default BookingCard;
