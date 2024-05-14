export default function Pill({ children }: { children: React.ReactNode }) {
	return (
		<span className="inline-flex items-center px-2 py-1 text-xs bg-neutral-100 dark:bg-neutral-800 rounded-full mr-1">
			{children}
		</span>
	);
}
