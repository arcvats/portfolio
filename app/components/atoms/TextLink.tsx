"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type TextLinkProps = {
	text: string;
	href: string;
	handleNavClick?: () => void;
};

export default function TextLink({
	text,
	href,
	handleNavClick,
}: TextLinkProps) {
	const pathname = usePathname();
	const isActive = pathname === href;
	const toggleMenuFromLink = () => {
		handleNavClick?.();
	};
	return (
		<Link
			onClick={toggleMenuFromLink}
			href={href}
			className={`rounded-full tap-highlight-transparent transition-opacity transition-transform-colors-opacity motion-reduce:transition-none px-2.5 dark:hover:bg-neutral-200/20 hover:bg-neutral-300/20 ${
				isActive ? "bg-neutral-500/20 dark:bg-neutral-300/20" : ""
			}`}
		>
			{text}
		</Link>
	);
}
