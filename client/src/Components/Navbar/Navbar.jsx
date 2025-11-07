import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logoImg from "../../assets/logo.svg";
import { BookIcon, MenuIcon, Moon, SearchIcon, Sun, X } from "lucide-react";
import { applyTheme } from "../../ThemeToogle";
import { useClerk, useUser, UserButton } from "@clerk/clerk-react";

const Navbar = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Hotels", path: "/rooms" },
    { name: "Experience", path: "/experience" },
    { name: "About", path: "/about" },
  ];

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    applyTheme(next);
  };

  const isDark = theme === "dark";
  const { openSignIn } = useClerk();
  const {  user } = useUser();
  const navigate = useNavigate();

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 z-50
        ${
          isScrolled
            ? isDark
              ? " bg-(--color-bg-main) shadow-lg py-4  text-(--color-primary)"
              : "bg-(--color-bg-main) shadow-md text-(--color-primary)  py-4 "
            : "bg-black  opacity-50   py-4 "
        }`}
      >
        {/* Logo */}
        <Link
          to="/"
          className={`h-9 transition-opacity ${
            isScrolled && !isDark ? "invert opacity-100" : ""
          }`}
        >
          <img src={logoImg} alt="quickstay logo" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-4 lg:gap-8">
          {navLinks.map((link, i) => (
            <Link
              key={i}
              to={link.path}
              className={`group flex flex-col gap-0.5 ${
                isScrolled
                  ? isDark
                    ? "text-(--color-primary)"
                    : "text-(--color-primary)"
                  : "text-white"
              }`}
            >
              {link.name}
              <div
                className={`${
                  isScrolled
                    ? isDark
                      ? "bg-blue-400"
                      : "bg-gray-400"
                    : "bg-white"
                } h-0.5 w-0 group-hover:w-full transition-all duration-300`}
              />
            </Link>
          ))}
         
          {user && (
            <button
              onClick={() => {
                navigate("/owner");
              }}
              className={`border px-4 py-1 text-sm font-light rounded-full cursor-pointer transition-all ${
               isScrolled? isDark
                  ? "text-(--color-primary) border-(--color-border)"
                  : "text-(--color-primary) border-(--color-border)" : "text-white border-white"
              }`}
            >
              Dashboard
            </button>
          )}
        </div>

        {/* Desktop Right */}
        <div className="hidden md:flex items-center gap-4">
          <SearchIcon
            className={`h-5 w-5 transition-all duration-500 ${
              isScrolled
                ? isDark
                  ? "text-(--color-primary)"
                  : "text-(--color-primary)"
                : "text-white"
            }`}
          />
          {user ? (
            <UserButton>
              <UserButton.MenuItems>
                <UserButton.Action
                  label="My Bookings"
                  labelIcon={<BookIcon size={15} />}
                  open="help"
                  onClick={() => {
                    navigate("/my-bookings");
                  }}
                />
              </UserButton.MenuItems>
            </UserButton>
          ) : (
            <button
              onClick={openSignIn}
              className={`px-8 py-2.5 rounded-full ml-4 cursor-pointer transition-all duration-500 ${
                isScrolled
                  ? isDark
                    ? "bg-(--color-bg-card) border-(--color-border) text-(--color-primary-light)"
                    : "bg-(--color-bg-card) border-(--color-border) text-(--color-primary-light)"
                  : "bg-white text-(--color-primary)"
              }`}
            >
              Login
            </button>
          )}
          <button onClick={toggleTheme} className="cursor-pointer">
            {isDark ? (
              <Sun className="h-6 w-6 text-yellow-400" />
            ) : (
              <Moon className="h-6 w-6 text-gray-400" />
            )}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-3 md:hidden">
          <MenuIcon
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`h-6 w-6 cursor-pointer ${
              isScrolled
                ? isDark
                  ? "text-(--color-primary)"
                  : "text-(--color-primary)"
                : "text-white"
            }`}
          />
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 left-0 w-full h-screen flex flex-col md:hidden items-center justify-center gap-6 font-medium transition-all duration-500
            ${
              isDark
                ? "bg-(--color-bg-main) text-(--color-primary-light)"
                : "bg-(--color-bg-main) text-(--color-primary)"
            }
            ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
          <button
            className="absolute top-4 right-4"
            onClick={() => setIsMenuOpen(false)}
          >
            <X className="h-6 w-6" />
          </button>

          {navLinks.map((link, i) => (
            <Link key={i} to={link.path} onClick={() => setIsMenuOpen(false)}>
              {link.name}
            </Link>
          ))}

          {user && (
            <button
              onClick={() => {
                navigate("/owner");
              }}
              className={`border px-4 py-1 text-sm font-light rounded-full cursor-pointer transition-all ${
                isDark
                  ? "text-(--color-primary) border-(--color-border)"
                  : "text-(--color-primary) border-(--color-border)"
              }`}
            >
              Dashboard
            </button>
          )}

          {user ? (
            <UserButton>
              <UserButton.MenuItems>
                <UserButton.Action
                  label="My Bookings"
                  labelIcon={<BookIcon />}
                  onClick={() => {
                    navigate("/my-bookings");
                  }}
                />
              </UserButton.MenuItems>
            </UserButton>
          ) : (
            <button
              onClick={openSignIn}
              className={`px-8 py-2.5 cursor-pointer  rounded-full transition-all duration-500 border ${
                isDark
                  ? "bg-(--color-bg-card) border-(--color-border) text-(--color-primary-light)"
                  : "bg-(--color-bg-card) border-(--color-border) text-(--color-primary-dark)"
              }`}
            >
              Login
            </button>
          )}

          <button onClick={toggleTheme} className="cursor-pointer">
            {isDark ? (
              <Sun className="h-6 w-6 text-yellow-400" />
            ) : (
              <Moon className="h-6 w-6 text-gray-500" />
            )}
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
