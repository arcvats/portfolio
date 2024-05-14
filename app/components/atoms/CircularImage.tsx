import Image from "next/image";

export type CircularImageProps = {
	src: string;
	alt: string;
	height?: string;
	width?: string;
	border?: boolean;
	borderColor?: string;
	borderWidth?: string;
	shadow?: boolean;
	padding?: string;
	bgColor?: string;
};

export default function CircularImage({
	src,
	alt,
	border = false,
	borderColor = "border-orange-500",
	borderWidth = "border-2",
	height = "h-28",
	width = "w-28",
	shadow = false,
	padding = "p-2",
	bgColor = "bg-white",
}: CircularImageProps) {
	const borderClasses = `${borderColor} ${borderWidth}`;
	return (
		<Image
			src={src}
			alt={alt}
			height={500}
			width={500}
			className={`rounded-full ${height} ${width} ${padding} ${bgColor} object-contain ${
				border ? borderClasses : ""
			} ${shadow ? "shadow-lg" : ""}`}
		/>
	);
}
