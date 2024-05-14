import Link from "next/link";
import { iconFactory } from "../icons";

type IconSetProps = {
	defaultSize?: number;
	alignment?: "horizontal" | "vertical";
	set?: { url: string; icon: string; size?: number }[];
};

export default function IconSet({
	defaultSize = 24,
	alignment = "horizontal",
	set,
}: IconSetProps) {
	const style =
		alignment === "horizontal"
			? "flex space-x-1 md:space-x-4"
			: "flex flex-col space-y-4";
	return (
		<div className={`${style} md:mr-2 items-center`}>
			{set?.map(({ url, icon, size }) => (
				<Link key={url} href={url} target="_blank" rel="noopener noreferrer">
					{iconFactory(icon, size || defaultSize)}
				</Link>
			))}
		</div>
	);
}
