"use client";

import { toast } from "react-hot-toast";

export default function BookButton() {
  const handleBooking = () => {
    toast.success("Booked Successfully!", {
      duration: 4000,
      style: {
        background: "#06b6d4",
        color: "#fff",
      },
    });
  };

  return (
    <button
      onClick={handleBooking}
      className="flex w-full items-center justify-center gap-2 rounded-lg bg-cyan-500 px-5 py-3 font-medium text-white transition hover:bg-cyan-600"
    >
      Book Now →
    </button>
  );
}
