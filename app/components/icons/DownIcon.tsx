export default function DownIcon({ size = 24 }: { size?: number | string }) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 448 512"
			height={size}
			width={size}
			className="text-neutral-500 dark:text-neutral-400"
		>
			<title>Down Icon</title>
			<path
				fill="currentColor"
				d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"
			/>
		</svg>
	);
}
