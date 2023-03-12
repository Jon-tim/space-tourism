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
		<nav className="relative w-full p-6 md:p-0 md:pl-8 lg:pt-8">
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
				<section className="hidden h-[96px] w-[62%] bg-white/10 lg:w-[58%] md:flex lg:backdrop-blur-md">
					<div className="mx-auto md:flex items-center w-[65%] justify-between text-[14px] md:w-full md:justify-around lg:text-[16px]">
						<Link
							href="/"
							className="bef relative h-full flex items-center justify-center"
						>
							<div className="relative text-white font-normal uppercase tracking-[2.7px] flex items-center">
								<span className="font-bold mr-2 hidden lg:block">
									00
								</span>{" "}
								home
							</div>
						</Link>
						<Link
							href="/destination"
							className="bef relative h-full flex items-center justify-center"
						>
							<div className="text-white font-normal uppercase tracking-[2.7px] flex items-center">
								<span className="font-bold mr-2 hidden lg:block">
									01
								</span>{" "}
								destination
							</div>
						</Link>
						<Link
							href="/crew"
							className="bef relative h-full flex items-center justify-center"
						>
							<div className=" text-white font-normal uppercase tracking-[2.7px] flex items-center">
								<span className="font-bold mr-2 hidden lg:block">
									02
								</span>{" "}
								crew
							</div>
						</Link>
						<Link
							href="/technology"
							className="bef relative h-full flex items-center justify-center"
						>
							<div className="text-white font-normal uppercase tracking-[2.7px] flex items-center">
								<span className="font-bold mr-2 hidden lg:block">
									03
								</span>{" "}
								technology
							</div>
						</Link>
					</div>
				</section>
			</div>
		</nav>
	);
}

export default Nav;
