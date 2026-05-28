import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/Wanderlast.png";
import { FaUser } from "react-icons/fa";
const Navbar = () => {
  return (
    <nav className="bg-base-100 shadow-sm z-50 fixed top-0 w-full">
      <div className="flex justify-between items-center py-1 container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-40 p-2 shadow"
            >
              <li>
                <Link href={"/"}>Home</Link>
              </li>
              <li>
                <Link href={"/destinations"}>Destination</Link>
              </li>
              <li>
                <Link href={"/my-bookings"}>My Bookings</Link>
              </li>
              <li>
                <Link href={"/add-destination"}>Add Destination</Link>
              </li>
              <li className="inline-flex md:hidden">
                <Link href={"/profile"} className="flex items-center">
                  Profile
                </Link>
              </li>
              <li className="inline-flex md:hidden">
                <Link href={"/login"} className="flex items-center">
                  Login
                </Link>
              </li>
              <li className="inline-flex md:hidden">
                <Link href={"/signup"} className="flex items-center">
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>
          <div className="hidden lg:inline-flex">
            <ul className="menu menu-horizontal px-1">
              {" "}
              <li>
                <Link href={"/"}>Home</Link>
              </li>
              <li>
                <Link href={"/destinations"}>Destination</Link>
              </li>
              <li>
                <Link href={"/my-bookings"}>My Bookings</Link>
              </li>
              <li>
                {" "}
                <Link href={"/add-destination"}>Add Destination</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden md:flex">
          {" "}
          <Link href={"/"}>
            <h2 className="text-2xl font-bold text-[#00A8E7]">Wanderlust</h2>
          </Link>
        </div>
        <div className="navbar-end hidden md:inline-flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href={"/profile"} className="flex items-center">
                <FaUser /> Profile
              </Link>
            </li>
            <li>
              <Link href={"/login"} className="flex items-center">
                Login
              </Link>
            </li>
            <li>
              <Link href={"/signup"} className="flex items-center">
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
        <div className="inline-block md:hidden">
          {" "}
          <Link href={"/"}>
            <h2 className="text-2xl font-bold text-[#16A1BD]">Wanderlust</h2>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
