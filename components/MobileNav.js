import close from "../public/assets/shared/icon-close.svg";
import Image from "next/image";
import Link from "next/link";

function MobileNav({ toggle, setToggle }) {
  return (
    <section
      className={`absolute z-50 bg-white/5 h-screen right-0 top-0 w-[67%] backdrop-blur-xl pt-10 px-6 flex flex-col gap-14 transition-transform duration-300 ease-in-out ${
        toggle ? "-translate-x-0" : "translate-x-full"
      }`}
    >
      <Image
        src={close}
        alt="close/x icon"
        className="self-end"
        onClick={() => {
          setToggle((prev) => !prev);
        }}
      />
      <aside className="flex flex-col gap-7">
        <Link
          href="/"
          className="text-white font-normal uppercase tracking-[2.7px]"
        >
          <span className="font-bold mr-2">00</span> home
        </Link>
        <Link
          href="/destination"
          className="text-white font-normal uppercase tracking-[2.7px]"
        >
          <span className="font-bold mr-2">01</span> destination
        </Link>
        <Link
          href="/crew"
          className="text-white font-normal uppercase tracking-[2.7px]"
        >
          <span className="font-bold mr-2">02</span> crew
        </Link>
        <Link
          href="/technology"
          className="text-white font-normal uppercase tracking-[2.7px]"
        >
          <span className="font-bold mr-2">03</span> technology
        </Link>
      </aside>
    </section>
  );
}

export default MobileNav;
