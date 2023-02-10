import Image from "next/image";
import logo from "../public/assets/shared/logo.svg";
import menu from "../public/assets/shared/icon-hamburger.svg";
import close from "../public/assets/shared/icon-close.svg";
function Nav() {
  return (
    <nav className="absolute w-full">
      <div className="flex items-center justify-between">
        <Image
          src={logo}
          alt="logo"
        />
        <Image
          src={menu}
          alt="hamburger"
        />
      </div>
    </nav>
  );
}

export default Nav;
