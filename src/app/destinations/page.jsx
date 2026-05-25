export const metadata = {
  title: "Wanderlust | Destinations",
  description: "All destinations are here.",
};
import DestinationCard from "@/components/DestinationCard";
const DestinationsPage = async () => {
  const res = await fetch("http://localhost:5000/destination");
  const destinations = await res.json();
  // console.log(destinations);
  return (
    <div className="pt-20 container mx-auto px-3 md:px-0">
      <div className="text-center md:text-start">
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-gray-800">
          Explore All Destinations
        </h1>
        <p className="text-gray-500 mt-2">
          Find your perfect travel experience from our curated collection
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-10">
        {destinations.map((destination) => (
          <DestinationCard key={destination._id} destination={destination} />
        ))}
      </div>
    </div>
  );
};

export default DestinationsPage;
