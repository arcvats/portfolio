export default function MenuIcon({ size = 24 }: { size?: number | string }) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			height={size}
			width={size}
			viewBox="0 0 24 24"
		>
			<path
				d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"
				fill="currentColor"
			/>
			<title>Menu Icon</title>
		</svg>
	);
}
