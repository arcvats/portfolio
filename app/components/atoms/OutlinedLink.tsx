import Link from "next/link";

type OutlinedLinkProps = {
	href: string;
	text: string;
};

export default function OutlinedLink({ href, text }: OutlinedLinkProps) {
	return (
		<Link
			href={href}
			className="inline-flex items-center h-10 px-6 my-2 md:my-0 md:mr-6 font-medium tracking-wide text-blue-700 transition duration-200 rounded-full border-2 border-blue-700 hover:border-blue-500 focus:shadow-outline focus:outline-none"
		>
			{text}
		</Link>
	);
}
