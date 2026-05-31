"use client";
import Marquee from "react-fast-marquee";
import FeedbackPagination, { PaginationCard } from "./PaginationCard";
import { useState } from "react";
import Image from "next/image";
const Feedback = () => {
  const feedbacks = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "New York, USA",
      image:
        "https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e",
      feedback:
        "Wanderlust made our vacation planning effortless. The destination details were accurate, and the booking process was smooth from start to finish.",
    },
    {
      id: 2,
      name: "Michael Brown",
      location: "London, UK",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a",
      feedback:
        "I discovered amazing places through Wanderlust that I would never have found otherwise. Highly recommended for travelers.",
    },
    {
      id: 3,
      name: "Emily Davis",
      location: "Sydney, Australia",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2",
      feedback:
        "The website is clean, easy to navigate, and offers excellent destination information. Booking was completed in just a few minutes.",
    },
    {
      id: 4,
      name: "David Wilson",
      location: "Toronto, Canada",
      image: "https://images.unsplash.com/photo-1556157382-97eda2d62296",
      feedback:
        "Fantastic experience! The destination recommendations were spot on, and the customer support team was very helpful.",
    },
    {
      id: 5,
      name: "Sophia Martinez",
      location: "Madrid, Spain",
      image:
        "https://plus.unsplash.com/premium_photo-1672691612717-954cdfaaa8c5",
      feedback:
        "Everything was well organized. I loved how easy it was to compare destinations and secure my booking.",
    },
    {
      id: 6,
      name: "James Anderson",
      location: "Berlin, Germany",
      image: "https://images.unsplash.com/photo-1629425733761-caae3b5f2e50",
      feedback:
        "One of the best travel booking experiences I've had. The platform is fast, reliable, and user-friendly.",
    },
    {
      id: 7,
      name: "Olivia Taylor",
      location: "Paris, France",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e",
      feedback:
        "Wanderlust helped me find my dream destination. The booking confirmation was instant, and everything went perfectly.",
    },
    {
      id: 8,
      name: "Daniel Thomas",
      location: "Singapore",
      image: "https://images.unsplash.com/photo-1558222218-b7b54eede3f3",
      feedback:
        "I appreciated the detailed descriptions and beautiful destination photos. It made choosing a place much easier.",
    },
    {
      id: 9,
      name: "Ava White",
      location: "Rome, Italy",
      image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0",
      feedback:
        "Excellent service and a seamless booking process. I will definitely use Wanderlust again for future trips.",
    },
    {
      id: 10,
      name: "Ethan Clark",
      location: "Dubai, UAE",
      image:
        "https://plus.unsplash.com/premium_photo-1681489930334-b0d26fdb9ed8",
      feedback:
        "The platform is intuitive and provides all the information needed to make confident travel decisions.",
    },
  ];
  const [page, setPage] = useState(1);

  const itemsPerPage = 2;
  const totalPages = Math.ceil(feedbacks.length / itemsPerPage);

  const currentFeedbacks = feedbacks.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage,
  );
  return (
    <div className="container mx-auto px-3 md:px-0">
      <div className="text-center space-y-3 py-10">
        <h3 className="text-5xl font-bold">What Travelers Say</h3>
        <p className="text-[#6C696D]">
          Real experiences from our happy travelers
        </p>
      </div>

      <div>
        <div
          key={page}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 animate-fadeIn"
        >
          {currentFeedbacks.map((feedback) => (
            <div key={feedback.id}>
              <div
                className="flex gap-2 border border-slate-300 rounded-xl p-5 shadow-md  transition duration-300
        hover:scale-102"
              >
                <div>
                  <h2 className="font-bold">
                    {" "}
                    &ldquo;{feedback.feedback}&rdquo;
                  </h2>

                  <h4 className="text-[#15A1BF] pt-2">{feedback.name}</h4>

                  <p className="text-xs">{feedback.location}</p>
                </div>
                <Image
                  src={feedback.image}
                  alt={feedback.name}
                  height={200}
                  width={120}
                  className="rounded-xl h-full"
                />
              </div>
            </div>
          ))}
        </div>

        <FeedbackPagination
          page={page}
          setPage={setPage}
          totalPages={totalPages}
        />
      </div>
    </div>
  );
};

export default Feedback;
