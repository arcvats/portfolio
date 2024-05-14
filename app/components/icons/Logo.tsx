import { SVGProps } from "react";
export default function Logo(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
			width="100%"
			height="1.1rem"
			viewBox="74.449 207.228 500 228.443"
			{...props}
		>
			<title>Logo</title>
			<defs>
				<clipPath id="f">
					<use xlinkHref="#a" />
				</clipPath>
				<clipPath id="g">
					<use xlinkHref="#b" />
				</clipPath>
				<clipPath id="h">
					<use xlinkHref="#c" />
				</clipPath>
				<clipPath id="i">
					<use xlinkHref="#d" />
				</clipPath>
				<clipPath id="j">
					<use xlinkHref="#e" />
				</clipPath>
				<path
					id="a"
					d="M574.45 230.84c-25.83 21.17-82.18 67.33-125.55 102.87-28.92 23.69-70.4 57.68-124.45 101.96L198.18 332.22 74.45 230.84"
				/>
				<path
					id="d"
					d="M429.52 347.89c-41.15-66.34-91.32-109.21-150.5-128.62-59.18-19.41-127.37-15.36-204.57 12.15"
				/>
				<path
					id="e"
					d="M219.38 347.89c41.15-66.34 91.32-109.21 150.5-128.62 59.18-19.41 127.37-15.36 204.57 12.15"
				/>
			</defs>
			<use xlinkHref="#a" fillOpacity={0} />
			<g clipPath="url(#f)">
				<use
					xlinkHref="#a"
					fillOpacity={0}
					className="dark:stroke-white stroke-black"
					strokeWidth={36}
				/>
			</g>
			<use xlinkHref="#b" fillOpacity={0} />
			<g clipPath="url(#g)">
				<use
					xlinkHref="#b"
					fillOpacity={0}
					className="dark:stroke-white stroke-black"
					strokeWidth={36}
				/>
			</g>
			<use xlinkHref="#c" fillOpacity={0} />
			<g clipPath="url(#h)">
				<use
					xlinkHref="#c"
					fillOpacity={0}
					className="dark:stroke-white stroke-black"
					strokeWidth={36}
				/>
			</g>
			<use xlinkHref="#d" fillOpacity={0} />
			<g clipPath="url(#i)">
				<use
					xlinkHref="#d"
					fillOpacity={0}
					className="dark:stroke-white stroke-black"
					strokeWidth={36}
				/>
			</g>
			<use xlinkHref="#e" fillOpacity={0} />
			<g clipPath="url(#j)">
				<use
					xlinkHref="#e"
					fillOpacity={0}
					className="dark:stroke-white stroke-black"
					strokeWidth={36}
				/>
			</g>
		</svg>
	);
}
