"use client";

import TextLink from "../atoms/TextLink";

type TextLinkSetProps = {
	links: { text: string; href: string }[];
	alignment?: "horizontal" | "vertical";
	handleNavClick?: () => void;
};

export default function TextLinkSet({
	links,
	alignment = "horizontal",
	handleNavClick,
}: TextLinkSetProps) {
	const style =
		alignment === "horizontal"
			? "flex space-x-4"
			: "flex flex-col space-y-4 items-center";
	return (
		<div className={`${style} mx-5`}>
			{links.map(({ href, text }) => (
				<TextLink
					key={href}
					text={text}
					href={href}
					handleNavClick={handleNavClick}
				/>
			))}
		</div>
	);
}
