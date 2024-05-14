import Link from "next/link";
import CircularImage, { CircularImageProps } from "../atoms/CircularImage";
import { iconFactory } from "../icons";

type ProjectRowItemProps = {
	hasImage: boolean;
	imageProps?: CircularImageProps;
	title: string | JSX.Element;
	subtitle: string | JSX.Element;
	logoType?: string;
	url: string;
};

function ImageComponent({ imageProps }: { imageProps?: CircularImageProps }) {
	const { src, alt, height, width, borderColor, bgColor, border, padding } =
		imageProps || {};
	return (
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
	);
}

function LogoComponent({ logoType }: { logoType?: string }) {
	return iconFactory(logoType || "github", 40);
}

export default function ProjectRowItem({
	hasImage,
	imageProps,
	title,
	subtitle,
	logoType,
	url,
}: ProjectRowItemProps) {
	return (
		<Link
			href={url}
			target="_blank"
			rel="noopener noreferrer"
			className="flex justify-left m-1 w-1/2 rounded-md bg-neutral-400/20 hover:bg-neutral-400/10 dark:bg-neutral-500/10"
		>
			<div className="p-1 sm:p-2 content-center hidden min-[375px]:block">
				{hasImage ? (
					<ImageComponent imageProps={imageProps} />
				) : (
					<LogoComponent logoType={logoType} />
				)}
			</div>
			<div className="p-1 grow w-1/2 sm:p-2">
				<h3 className="text-sm font-semibold">{title}</h3>
				<p className="text-sm">{subtitle}</p>
			</div>
		</Link>
	);
}
