import CircularImage, { CircularImageProps } from "../atoms/CircularImage";

type InfoRowProps = {
	hasImage: boolean;
	hasCustomComponent: boolean;
	customComponent?: JSX.Element;
	imageProps?: CircularImageProps;
	title: string | JSX.Element;
	subtitle: string | JSX.Element;
	date?: string;
};

export default function InfoRow({
	hasImage,
	hasCustomComponent,
	customComponent,
	imageProps,
	title,
	subtitle,
	date,
}: InfoRowProps) {
	const { src, alt, height, width, borderColor, bgColor, border, padding } =
		imageProps || {};

	return (
		<div className="flex justify-left">
			{hasImage ? (
				<div className="p-1 sm:p-2">
					<CircularImage
						src={src || ""}
						alt={alt || ""}
						height={height}
						width={width}
						borderColor={borderColor}
						border={border}
						padding={padding}
						bgColor={bgColor}
					/>
				</div>
			) : null}
			{hasCustomComponent ? <div>{customComponent}</div> : null}
			<div className="p-1 grow w-1/2 content-center sm:p-2">
				<h3 className="text-sm font-semibold">{title}</h3>
				<p className="text-sm">{subtitle}</p>
			</div>
			{date ? (
				<div className="p-1 content-center sm:p-2">
					<p className="text-xs">{date}</p>
				</div>
			) : null}
		</div>
	);
}
