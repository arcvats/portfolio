import { iconFactory } from "../icons";
import HeroText from "../molecules/HeroText";

export default function HeroSection() {
	return (
		<div className="flex items-center sm:h-screen">
			<div className="flex flex-col items-center justify-center">
				<HeroText />
				<div className="hidden sm:block sm:mt-8 lg:mt-16">
					{iconFactory("down", 32)}
				</div>
			</div>
		</div>
	);
}
