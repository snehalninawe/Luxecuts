import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { BsScissors } from "react-icons/bs";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(false);
    setServicesOpen(false);
  };

  const toggleServices = () => {
    setServicesOpen(!servicesOpen);
  };

  return (
    <nav className="bg-gray-900 text-white p-7 relative z-50">
      {/* Logo */}
      <div className="flex justify-between items-center">
        <div className="flex items-center ml-5">
          <h1 className="text-2xl font-bold">
            <Link to="/" onClick={handleMenuClick}>
              LuxeCuts
            </Link>
          </h1>
          <Link to="/" onClick={handleMenuClick}>
            <BsScissors className="ml-2 text-2xl" />
          </Link>
        </div>

        {/* Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <HiOutlineX size={30} /> : <HiOutlineMenu size={30} />}
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-lg font-semibold items-center">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-yellow-200" : "hover:text-yellow-200"
              }
              onClick={handleMenuClick}
            >
              Home
            </NavLink>
          </li>

          {/* Services Dropdown */}
          <li className="relative cursor-pointer">
            <span
              className="hover:text-yellow-200"
              onClick={toggleServices}
            >
              Services
            </span>
            {servicesOpen && (
              <ul className="absolute bg-gray-800 mt-2 p-2 rounded shadow-lg">
                <li className="px-4 py-2 hover:text-yellow-200">
                  <Link to="/services/ladies" onClick={handleMenuClick}>
                    Ladies
                  </Link>
                </li>
                <li className="px-4 py-2 hover:text-yellow-200">
                  <Link to="/services/gents" onClick={handleMenuClick}>
                    Gents
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-yellow-200" : "hover:text-yellow-200"
              }
              onClick={handleMenuClick}
            >
              About Us
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/offers"
              className={({ isActive }) =>
                isActive ? "text-yellow-200" : "hover:text-yellow-200"
              }
              onClick={handleMenuClick}
            >
              Offers
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "text-yellow-200" : "hover:text-yellow-200"
              }
              onClick={handleMenuClick}
            >
              Contact
            </NavLink>
          </li>

          <li>
            <Link
              to="/book-appoinment"
              onClick={handleMenuClick}
              className="bg-yellow-400 hover:bg-yellow-500 px-4 py-2 rounded"
            >
              Book Appointment
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-900 w-full absolute top-full left-0 z-50">
          <ul className="flex flex-col items-center space-y-4 py-4 text-lg font-semibold">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-yellow-200" : "hover:text-yellow-200"
                }
                onClick={handleMenuClick}
              >
                Home
              </NavLink>
            </li>

            {/* Services Dropdown */}
            <li className="w-full text-center relative">
              <span
                className="cursor-pointer hover:text-yellow-200"
                onClick={toggleServices}
              >
                Services
              </span>
              {servicesOpen && (
                <ul className="flex flex-col bg-gray-800 mt-2 w-full py-2 rounded shadow-lg">
                  <li className="px-4 py-2 hover:text-yellow-200">
                    <Link to="/services/ladies" onClick={handleMenuClick}>
                      Ladies
                    </Link>
                  </li>
                  <li className="px-4 py-2 hover:text-yellow-200">
                    <Link to="/services/gents" onClick={handleMenuClick}>
                      Gents
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "text-yellow-200" : "hover:text-yellow-200"
                }
                onClick={handleMenuClick}
              >
                About Us
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/offers"
                className={({ isActive }) =>
                  isActive ? "text-yellow-200" : "hover:text-yellow-200"
                }
                onClick={handleMenuClick}
              >
                Offers
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "text-yellow-200" : "hover:text-yellow-200"
                }
                onClick={handleMenuClick}
              >
                Contact
              </NavLink>
            </li>

            <li>
              <Link
                to="/book-appoinment"
                onClick={handleMenuClick}
                className="bg-yellow-400 hover:bg-yellow-500 px-4 py-2 rounded"
              >
                Book Appointment
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
