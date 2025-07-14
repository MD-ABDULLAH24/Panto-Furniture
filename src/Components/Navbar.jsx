import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { FaBagShopping, FaBars } from "react-icons/fa6";
import { Link, NavLink } from "react-router";

const NavItem = [
  { path: "/", label: "Furniture" },
  { path: "/shop", label: "Shop" },
  { path: "/about", label: "About Us" },
  { path: "/contact", label: "Contact" },
];

const NavItems = ({toggleMenu}) => {
  return (
    <ul className="flex flex-col md:flex-row items-center md:space-x-8 gap-8">
      {NavItem.map((item, index) => (
        <li key={index} onClick={toggleMenu}>
          <NavLink
            to={item.path}
            className={({ isActive}) =>
                isActive ? "text-primary font-bold" : "hover:text-primary"
            }
          >
            {item.label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = ()=>{
    setMenuOpen(prevState => !prevState)
  }

  
  return (
    <header>
      <nav className="max-w-screen-2xl container mx-auto flex justify-between items-center py-6 px-4">
        {/* logo  */}
        <Link to="/" className="font-bold">
          Logo
        </Link>

        {/* mobile menu  */}
        <div onClick={toggleMenu} className="md:hidden text-xl cursor-pointer hover:text-primary">
          {
            menuOpen ? null : <FaBars/>
          }
        </div>

        {/* desktop menu item */}
        <div className="hidden md:flex">
          <NavItems />
        </div>

        {/* Mobile Menu Items  */}

        <div className={`fixed top-0 left-0 w-full h-screen bg-black bg-opacity-80 flex flex-col items-center justify-center space-y-8 text-white transition-transform transform ${menuOpen ? "translate-x-0" : "-translate-x-full"} md:hidden`}>
          <div className="cursor-pointer absolute top-4 right-5 text-xl" onClick={toggleMenu}>
            <FaTimes/>
          </div>
          <NavItems toggleMenu={toggleMenu}/>
        </div>

        {/* cart icon  */}
        <div className="hidden md:block cursor-pointer relative">
          <FaBagShopping className="text-xl "/>
          <sup className="absolute top-0 -right-3 bg-primary text-white w-5 h-5 rounded-full flex items-center justify-center text-xs">
            0
          </sup>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
