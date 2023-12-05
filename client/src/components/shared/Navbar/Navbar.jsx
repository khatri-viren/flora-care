/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link } from "react-router-dom";
import leftArrow from "../../../assets/leftArrow.svg";
import hamburger from "../../../assets/hamburger.svg";
// import { toast } from "react-toastify";
import { useUser } from "../../../store/UserContext";

const Navbar = () => {
  const { isLoggedIn } = useUser();
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div className="flex fixed w-full justify-between px-3 md:px-10 lg:px-20 py-3 top-0 bg-ubg  text-udark flex-nowrap z-50 ">
      <div className="mx-auto flex justify-between w-full">
        <div className="hidden leftSide md:flex md:space-x-8 md:my-auto ">
          <Link
            to="/"
            className="navButton hover:text-umedium hover:cursor-pointer"
          >
            Home
          </Link>
          <Link
            to="/aboutus"
            className="navButton hover:text-umedium hover:cursor-pointer"
          >
            About Us
          </Link>
          <Link
            to="/shop"
            className="navButton hover:text-umedium hover:cursor-pointer"
          >
            Products
          </Link>
          <Link
            to="/blogshome"
            className="navButton hover:text-umedium hover:cursor-pointer"
          >
            Blog
          </Link>
        </div>
        <div className="logo w-fit">
          <Link to="/">
            <span className="brandLogo font-playFair font-bold text-xl lg:text-3xl tracking-wide cursor-pointer">
              Flora Care
            </span>
          </Link>
        </div>
        <div className="rightSide my-auto md:flex space-x-8 hidden">
          <Link
            to="/cart"
            className="navButton hover:text-umedium hover:cursor-pointer"
          >
            Cart
          </Link>
          {isLoggedIn ? (
            <Link
              to="/userdashboard"
              className="navButton hover:text-umedium hover:cursor-pointer"
            >
              Account
            </Link>
          ) : (
            <Link
              to="/login"
              className="navButton hover:text-umedium hover:cursor-pointer"
            >
              Login
            </Link>
          )}
        </div>
        <img
          src={hamburger}
          alt=""
          className={`h-4 my-auto md:hidden mr-5 ${
            showMenu ? "hidden" : "inline-block"
          }`}
          onClick={handleMenuToggle}
        />
        <div
          className={`smallMenu right-0 fixed bg-ubg text-right md:hidden mr-5 ${
            showMenu ? "block" : "hidden"
          } flex flex-col z-10 h-full drop-shadow-2xl top-0`}
        >
          <img
            src={leftArrow}
            alt=""
            className="h-6 ml-2 mr-auto mt-4"
            onClick={handleMenuToggle}
          />
          <div className="pl-28 pr-4 flex flex-col space-y-5 mt-5 text-lg">
            <Link
              to="/"
              className="navButton hover:text-umedium hover:cursor-pointer"
            >
              Home
            </Link>
            <Link
              to="/aboutus"
              className="navButton hover:text-umedium hover:cursor-pointer"
            >
              About Us
            </Link>
            <Link
              to="/shop"
              className="navButton hover:text-umedium hover:cursor-pointer"
            >
              Products
            </Link>
            <Link
              to="/blogshome"
              className="navButton hover:text-umedium hover:cursor-pointer"
            >
              Blog
            </Link>
            <Link
              to="/cart"
              className="navButton hover:text-umedium hover:cursor-pointer"
            >
              Cart
            </Link>
            {isLoggedIn ? (
              <Link
                to="/userdashboard"
                className="navButton hover:text-umedium hover:cursor-pointer"
              >
                Account
              </Link>
            ) : (
              <Link
                to="/login"
                className="navButton hover:text-umedium hover:cursor-pointer"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
