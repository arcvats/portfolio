export default function MoonIcon({ size = 24 }: { size?: number | string }) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			height={size}
			width={size}
			viewBox="0 0 24 24"
			className="text-neutral-500"
		>
			<path
				d="M11.3807 2.01886C9.91573 3.38768 9 5.3369 9 7.49999C9 11.6421 12.3579 15 16.5 15C18.6631 15 20.6123 14.0843 21.9811 12.6193C21.6613 17.8537 17.3149 22 12 22C6.47715 22 2 17.5228 2 12C2 6.68514 6.14629 2.33869 11.3807 2.01886Z"
				fill="currentColor"
			/>
			<title>Moon Icon</title>
		</svg>
	);
}
