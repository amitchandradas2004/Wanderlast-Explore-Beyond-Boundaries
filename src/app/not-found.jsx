import NotFoundImage from "@/assets/Not-found.png";
import Image from "next/image";
import Link from "next/link";
import { IoIosHome } from "react-icons/io";

const notFoundPage = () => {
  return (
    <div className="bg-[#f1f1f1e5] dark:bg-black h-screen text-center flex flex-col justify-center items-center py-10">
      <Image
        src={NotFoundImage}
        alt="This page is not found"
        height={300}
        width={300}
        className="mx-auto select-none"
      />
      <div className="flex flex-col items-center justify-center space-y-3">
        <h2 className="text-[#00A8E7] text-3xl md:text-5xl lg:text-6xl font-extrabold">
          No Results Found
        </h2>
        <p className="text-xs md:text-xl font-medium text-muted px-2">
          We could not find what you searched for. Try searching again.
        </p>
        <Link href={"/"}>
          {" "}
          <button className="btn bg-[#00A8E7] text-white rounded-full flex flex-row items-center w-45">
            <IoIosHome />
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default notFoundPage;
