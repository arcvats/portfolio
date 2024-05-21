"use client";

import { useState } from "react";
import TextLinkSet from "../molecules/TextLinkSet";
import { NAVIGATION, SOCIAL_ICONS } from "../../lib/consts";
import ThemeSwitcher from "../molecules/ThemeSwitcher";
import { LogoIcon, MenuIcon } from "../icons";
import IconSet from "../molecules/IconSet";

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	const toggleMenu = () => setIsOpen(!isOpen);
	return (
		<>
			<nav className="flex items-center justify-between py-4 px-6 z-40 backdrop-blur backdrop-saturate-150 max-w-7xl m-auto">
				<div>
					<LogoIcon />
				</div>
				<div className="flex">
					<div className="flex mr-4 items-baseline">
						<ThemeSwitcher />
					</div>
					<div className="hidden md:flex">
						<IconSet set={SOCIAL_ICONS} />
						<TextLinkSet links={NAVIGATION} />
					</div>
					<div className="md:hidden">
						<button type="button" onClick={toggleMenu}>
							<MenuIcon />
						</button>
					</div>
				</div>
			</nav>
			<aside
				className={`flex flex-col fixed overflow-hidden bg-transparent backdrop-blur-2xl px-4 py-6 space-y-4 w-full transform transition-all duration-300 ease-in-out md:hidden z-30 ${
					isOpen ? "translate-y-0" : "-translate-y-96"
				}`}
			>
				<TextLinkSet
					links={NAVIGATION}
					alignment="vertical"
					handleNavClick={toggleMenu}
				/>
				<div className="flex self-center">
					<IconSet set={SOCIAL_ICONS} />
				</div>
			</aside>
		</>
	);
}
