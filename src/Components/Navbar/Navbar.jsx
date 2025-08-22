import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./../Footer/Footer.module.css";
import "./Navbar.css";
import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";

const links = [
  {
    to: "/about",
    name: "About",
  },
  {
    to: "/portfolio",
    name: "Portfolio",
  },
  {
    to: "/contact",
    name: "Contact",
  },
];

export default function AppNavbar() {
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
  function handleScroll() {
    if (window.scrollY >= 50) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  }

  window.addEventListener('scroll', handleScroll);

  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, [isScroll]);

  

  return (
    <>
      <Navbar
        className={`fixed w-full top-0 z-50 items-center transition-all duration-300 ${
          !isScroll && "py-4"
        }`}
      >
        <NavbarBrand as={Link} to={"/"}>
          <span className=" py-1 px-3 self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Start Framework
          </span>
        </NavbarBrand>
        <NavbarToggle />

        <NavbarCollapse className="*:items-center">
          {links.map((link) => (
            <NavbarLink
              as={NavLink}
              to={link.to}
              className="text-white font-bold text-lg md:hover:text-gray-300"
            >
              {link.name}
            </NavbarLink>
          ))}
        </NavbarCollapse>
      </Navbar>
    </>
  );
}
