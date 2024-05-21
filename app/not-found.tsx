import Image from "next/image";
import { IMAGE_WITH_ATTR } from "./lib/consts";

export default function NotFound() {
	return (
		<div className="flex flex-col items-center mt-20">
			<h2 className="text-l font-semibold">404 | Page Not Found</h2>
			<Image
				src={IMAGE_WITH_ATTR.url}
				alt="404"
				height={500}
				width={500}
				priority={true}
			/>
			<div>
				<a
					href={IMAGE_WITH_ATTR.attributionLink}
					target="_blank"
					rel="noopener noreferrer"
				>
					<span className="text-xs italic">
						{IMAGE_WITH_ATTR.attributionText}
					</span>
				</a>
			</div>
		</div>
	);
}
