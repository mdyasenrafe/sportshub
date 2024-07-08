import { MenuProps } from "antd";
import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { HiOutlineX } from "react-icons/hi";
import { Routes, TRoute } from "../../../../routes/routes";

type MenuItem = Required<MenuProps>["items"][number];

export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [headerFixed, setHeaderFixed] = useState(false);
  const navigation = useNavigate();

  // Handle scroll change header
  useEffect(() => {
    const headerChange = () => {
      if (window.scrollY > 10) {
        setHeaderFixed(true);
      } else {
        setHeaderFixed(false);
      }
    };

    window.addEventListener("scroll", headerChange);
    return () => {
      window.removeEventListener("scroll", headerChange);
    };
  }, []);

  const navLinks = Routes.filter((route) => route.nav);

  return (
    <div
      className={`${
        headerFixed ? "fixed bg-white py-2 z-30 shadow-lg" : "z-30 bg-color"
      } min-w-full transition-all delay-75 ease-in-out py-2`}
    >
      <div className="flex justify-between items-center w-full">
        <div className="ml-3">
          <NavLink to="/" className="flex items-center">
            <img
              className="h-[40px] py-1 cursor-pointer"
              // src={logo} // Uncomment and set the correct path for the logo
              alt="Logo"
            />
            <h1 className="hidden lg:inline mx-2">SportsHub</h1>
          </NavLink>
        </div>
        {!showMenu && (
          <div
            aria-label="open menu"
            onClick={() => setShowMenu(true)}
            className={`${
              !headerFixed && "text-black"
            } outline-none rounded ease-in-out duration-300 focus:ring-gray-600 lg:hidden`}
          >
            <AiOutlineMenu className="text-[30px]" />
          </div>
        )}
        {/* links */}
        <div className="hidden lg:flex space-x-4 items-center">
          {navLinks.map((link) => (
            <Link
              to={link.path}
              key={link.id}
              onClick={() => setShowMenu(false)}
              className="cursor-pointer"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`${
          showMenu ? "flex ease-in-out duration-300" : "hidden"
        } absolute w-[100%] top-0 left-0 z-30 pt-[24px] bg-white h-screen`}
      >
        <div className="container mx-auto px-8">
          <div
            onClick={() => setShowMenu(false)}
            className="mt-[16px] outline-none float-right ease-in-out duration-300 rounded"
          >
            <HiOutlineX className="text-[30px]" />
          </div>
          <div data-aos="fade-down" className="grid mt-[50px]">
            <div className="grid gap-5 text-lg">
              {navLinks.map((navLink, index) => (
                <div key={index}>
                  <Link onClick={() => setShowMenu(false)} to={navLink.path}>
                    {navLink.name}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
