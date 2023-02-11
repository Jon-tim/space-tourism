import Image from "next/image";
import logo from "../public/assets/shared/logo.svg";
import menu from "../public/assets/shared/icon-hamburger.svg";
import close from "../public/assets/shared/icon-close.svg";
import MobileNav from "./MobileNav";
import { useState } from "react";
function Nav() {
  const [mobileMenu, toggleMenu] = useState(false);
  return (
    <nav className="absolute w-full p-6">
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
        />
      </div>
    </nav>
  );
}

export default Nav;
