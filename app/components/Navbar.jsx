"use client"
import {useState} from "react";
import {usePathname} from "next/navigation";
import Link from "next/link";
import {FaGoogle} from "react-icons/fa";  /* the 'Google' icon from the 'Font Awesome' library */
import Image from "next/image";
import logo from "@/assets/images/logo-white.jpg";
import profileDefault from "@/assets/images/profile.webp";

const Navbar = () => {
  const pathname = usePathname();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="border-b border-blue-500 bg-blue-700">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative h-20 flex items-center justify-between">
          {/* Mobile menu button */}
          <div className="absolute md:hidden left-0 inset-y-0 flex items-center">
            <button id="mobile-dropdown-button" type="button"
                className="relative rounded-md p-2 inline-flex justify-center items-center
                text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none
                focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu" aria-expanded="false"
                onClick={() => setIsMobileMenuOpen(prev => !prev)}>
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>
              <svg className="block w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                  stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/></svg></button></div>
          
          <div className="flex flex-1 items-center justify-center md:justify-start md:items-stretch">
            {/* Logo */}
            <Link href="/" className="flex flex-shrink-0 items-center">
              <Image src={logo} alt="PropertyPulse's logo" className="w-auto h-10"/>
              <span className="hidden md:block ml-2 text-white text-2xl font-bold">
                  PropertyPulse</span></Link>
            {/* Desktop Menu Hidden below md screens */}
            <div className="hidden md:block md:ml-6">
              {/* I added 'items-center' since I prefer to see the elements centered vertically when
              the screen is too narrow for 'Add Property' to appear on a single line */}
              <div className="flex space-x-2 items-center">
                <Link href="/" className={`rounded-md ${pathname==="/" ? "bg-violet-800" : ""} px-3
                    py-2 text-white hover:bg-violet-600`}>Home</Link>
                <Link href="/properties" className={`rounded-md
                    ${pathname==="/properties" ? "bg-violet-800" : ""} px-3 py-2 text-white
                    hover:bg-violet-600`}>Properties</Link>
                {isLoggedIn && <Link href="/properties/add" className={`rounded-md
                    ${pathname==="/properties/add" ? "bg-violet-800" : ""} px-3 py-2 text-white
                    hover:bg-violet-600`}>Add Property</Link>}</div></div></div>

          {/* Right Side Menu (Logged Out) */}
          {!isLoggedIn && (<div className="hidden md:block md:ml-6">
            <div className="flex items-center">
              <button className="rounded-md bg-fuchsia-700 px-3 py-2 flex items-center text-white
                  hover:bg-violet-600"
                  onClick={() => setIsLoggedIn(true)}>
                <FaGoogle className="mr-2 text-white"/>
                <span>Login or Register</span></button></div></div>)}

          {/* Right Side Menu (Logged In) */}
          {isLoggedIn && (<div className="absolute md:static right-0 inset-y-0 md:inset-auto md:ml-6
              pr-2 md:pr-0 flex items-center">
            <Link href="/messages" className="relative group">
              <button type="button" className="relative rounded-full bg-gray-800 p-1 text-gray-400
                  hover:text-white focus:outline-none focus:ring-offset-2 focus:ring-2
                  focus:ring-offset-gray-800 focus:ring-white">
                <span className="absolute -inset-1.5"></span>
                <span className="sr-only">View notifications</span>
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                    stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round"
                      d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6
                      0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714
                      0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"/></svg></button>
              <span className="absolute right-0 top-0 rounded-full bg-red-600 px-2 py-1 inline-flex
                  justify-center items-center text-xs leading-none font-bold text-white transform
                  translate-x-1/2 -translate-y-1/2">
                      2 {/* replace with the actual number of notifications */}</span></Link>
            {/* Profile dropdown button */}
            <div className="relative ml-3">
              <div>
                <button id="user-menu-button" type="button"
                    className="relative rounded-full bg-gray-800 flex text-sm focus:outline-none
                    focus:ring-offset-2 focus:ring-2 focus:ring-offset-gray-800 focus:ring-white"
                    aria-haspopup="true" aria-expanded="false"
                    onClick={() => setIsProfileMenuOpen(prev => !prev)}>
                  <span className="absolute -inset-1.5"></span>
                  <span className="sr-only">Open user menu</span>
                  <Image src={profileDefault} alt="user's picture" className="w-8 h-8 rounded-full"/>
                </button></div>
                {/* Profile dropdown */}
                {isProfileMenuOpen && (
                  <div id="user-menu" role="menu"
                      className="absolute origin-top-right right-0 z-10 mt-2 w-48 rounded-md shadow-lg
                      bg-white py-1 ring-1 ring-black ring-opacity-5 focus:outline-none"
                      tabIndex="-1" aria-labelledby="user-menu-button" aria-orientation="vertical">
                    <Link id="user-menu-item-0" role="menuitem" href="/profile"
                        className="block px-4 py-2 text-sm text-gray-700" tabIndex="-1">
                            Your Profile</Link>
                    <Link id="user-menu-item-1" role="menuitem" href="/properties/saved"
                        className="block px-4 py-2 text-sm text-gray-700" tabIndex="-1">
                            Saved Properties</Link>
                    <button id="user-menu-item-2" role="menuitem"
                        className="block px-4 py-2 text-sm text-gray-700" tabIndex="-1"
                        onClick={() => {setIsLoggedIn(false); setIsProfileMenuOpen(false)}}>
                            Sign Out</button></div>)}</div></div>)}</div></div>

        {/* Mobile menu, show/hide based on menu state */}
        {isMobileMenuOpen && (
          <div id="mobile-menu">
            <div className="px-2 pt-2 space-y-1 pb-3">
              <Link href="/" className={`block rounded-md ${pathname==="/" ? "bg-violet-800" : ""}
                  px-3 py-2 text-base font-medium text-white hover:bg-violet-600`}>
                      Home</Link>
              <Link href="/properties" className={`block rounded-md
                  ${pathname==="/properties" ? "bg-violet-800" : ""} px-3 py-2 text-base font-medium
                  text-white hover:bg-violet-600`}>Properties</Link>
              {isLoggedIn && <Link href="/properties/add" className={`block rounded-md
                  ${pathname==="/properties/add" ? "bg-violet-800" : ""} px-3 py-2 text-base
                  font-medium text-white hover:bg-violet-600`}>Add Property</Link>}
              {!isLoggedIn && (<button className="my-4 rounded-md bg-fuchsia-700 px-3 py-2 flex
                  items-center text-white hover:bg-violet-600"
                  onClick={() => setIsLoggedIn(true)}>
                <FaGoogle className="mr-2 text-white"/>
                <span>Login or Register</span></button>)}</div></div>)}</nav>)}

export default Navbar;