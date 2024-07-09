import { Menu, MenuProps } from "antd";
import { useState, useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { HiOutlineX } from "react-icons/hi";
import { Routes } from "../../../../routes/routes";
import { navItemsGenerator } from "../../../../utils/navItemGenerator";

export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [headerFixed, setHeaderFixed] = useState(false);
  const navigation = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

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

  console.log(navItemsGenerator(Routes));

  return (
    <div
      className={`${
        headerFixed ? "fixed bg-white py-2 z-30 shadow-lg" : "z-30 bg-color"
      } min-w-full transition-all delay-75 ease-in-out py-2`}
    >
      <div className="flex justify-between items-center w-full">
        <div className="ml-3 w-[30%]">
          <NavLink to="/" className="flex items-center">
            <img
              className="h-[40px] py-1 cursor-pointer"
              // src={logo} // Uncomment and set the correct path for the logo
              alt="Logo"
            />
            <h1 className="hidden lg:inline mx-2">SportsHub</h1>
          </NavLink>
        </div>

        {/* links */}
        <div className="hidden  lg:flex w-[70%]">
          <Menu
            style={{
              width: "100%",
              justifyContent: "end",
            }}
            mode="horizontal"
            items={navItemsGenerator(Routes)}
            selectedKeys={[currentPath]}
          />
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
      </div>

      {/* Mobile menu */}
      <div
        className={`${
          showMenu ? "flex ease-in-out duration-300" : "hidden"
        } lg:hidden absolute w-[100%] top-0 left-0 z-30 pt-[24px] bg-white h-screen`}
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
              <Menu mode="inline" items={navItemsGenerator(Routes)} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
