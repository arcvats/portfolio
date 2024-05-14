import Image from "next/image";

export default function NotFound() {
	return (
		<div className="flex flex-col items-center mt-20">
			<h2 className="text-l font-semibold">404 | Page Not Found</h2>
			<Image
				src="/meditation.svg"
				alt="404"
				height={500}
				width={500}
				priority={true}
			/>
			<div>
				<a href="https://storyset.com/people" target="_blank" rel="noreferrer">
					<span className="text-xs italic">
						People illustrations by Storyset
					</span>
				</a>
			</div>
		</div>
	);
}
