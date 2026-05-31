import { AiFillSafetyCertificate } from "react-icons/ai";
import { BiSupport } from "react-icons/bi";
import { PiMapTrifoldBold } from "react-icons/pi";

const WhyChoose = () => {
  const cards = [
    {
      id: 1,
      icon: <AiFillSafetyCertificate />,
      title: "Safe & Secure",
      desc: "Your safety is our priority with comprehensive travel insurance and 24/7 support.",
    },
    {
      id: 2,
      icon: <PiMapTrifoldBold />,
      title: "Safe & Secure",
      desc: "Your safety is our priority with comprehensive travel insurance and 24/7 support.",
    },
    {
      id: 3,
      icon: <BiSupport />,
      title: "Safe & Secure",
      desc: "Your safety is our priority with comprehensive travel insurance and 24/7 support.",
    },
  ];
  return (
    <div className="bg-[#EDFCFF] py-10">
      <div className="container mx-auto px-3 md:px-0">
        <div className="text-center space-y-3">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold">
            Why Choose Wanderlust
          </h2>
          <p className="text-[#6C696D]">
            Your trusted partner for exceptional travel experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8">
          {cards.map((card) => (
            <div
              key={card.id}
              className="border border-slate-200 rounded-xl shadow-md p-5  transition duration-300
        hover:scale-103 bg-white"
            >
              <span className="text-[#15A1BF] text-4xl mb-2">{card.icon}</span>
              <h2 className="text-3xl lg:text-4xl font-bold my-4">
                {card.title}
              </h2>
              <p className="text-[#6C696D]">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
