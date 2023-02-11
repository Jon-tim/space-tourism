import Image from "next/image";
import logo from "../public/assets/shared/logo.svg";
import menu from "../public/assets/shared/icon-hamburger.svg";
import close from "../public/assets/shared/icon-close.svg";
import MobileNav from "./MobileNav";
import { useState } from "react";
import Link from "next/link";
function Nav() {
  const [mobileMenu, toggleMenu] = useState(false);
  return (
    <nav className="absolute w-full p-6 md:p-0 md:pl-8 lg:pt-8">
      <MobileNav
        toggle={mobileMenu}
        setToggle={toggleMenu}
      />
      <div className="w-full flex items-center justify-between">
        <Image
          src={logo}
          alt="logo"
        />
        <Image
          src={!mobileMenu ? menu : close}
          alt="hamburger"
          onClick={() => toggleMenu((prev) => !prev)}
          className="md:hidden"
        />
        <section className="hidden h-[96px] w-[62%] bg-white/10 md:flex items-center justify-around text-[14px] lg:w-[58%] lg:text-[16px] lg:backdrop-blur-md">
          <Link
            href=""
            className="bef relative h-full flex items-center justify-center"
          >
            <div className="relative text-white font-normal uppercase tracking-[2.7px] flex items-center">
              <span className="font-bold mr-2 hidden lg:block">00</span> home
            </div>
          </Link>
          <Link
            href=""
            className="bef relative h-full flex items-center justify-center"
          >
            <div className="text-white font-normal uppercase tracking-[2.7px] flex items-center">
              <span className="font-bold mr-2 hidden lg:block">00</span>{" "}
              destination
            </div>
          </Link>
          <Link
            href=""
            className="bef relative h-full flex items-center justify-center"
          >
            <div className=" text-white font-normal uppercase tracking-[2.7px] flex items-center">
              <span className="font-bold mr-2 hidden lg:block">00</span> crew
            </div>
          </Link>
          <Link
            href=""
            className="bef relative h-full flex items-center justify-center"
          >
            <div className="text-white font-normal uppercase tracking-[2.7px] flex items-center">
              <span className="font-bold mr-2 hidden lg:block">00</span>{" "}
              technology
            </div>
          </Link>
        </section>
      </div>
    </nav>
  );
}

export default Nav;
