import OutlinedLink from "../atoms/OutlinedLink";

type OutlinedLinkSetProps = {
	links: { href: string; text: string }[];
	alignment?: "horizontal" | "vertical";
};

export default function OutlinedLinkSet({
	links,
	alignment = "horizontal",
}: OutlinedLinkSetProps) {
	const style =
		alignment === "horizontal" ? "flex-col w-full md:flex-row" : "flex-col";

	return (
		<div className={`flex my-5 self-start items-center ${style}`}>
			{links.map(({ href, text }) => (
				<OutlinedLink key={href} href={href} text={text} />
			))}
		</div>
	);
}
