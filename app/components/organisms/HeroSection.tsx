import Image from "next/image";
import { iconFactory } from "../icons";
import HeroText from "../molecules/HeroText";

export default function HeroSection() {
  return (
    <div className="flex items-center sm:h-screen">
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center">
          <HeroText />
          <div className="hidden sm:block">
            <Image
              src="/sketch_no_background.png"
              alt="Profile"
              width={450}
              height={450}
            />
          </div>
        </div>
        <div className="hidden sm:block sm:mt-8 lg:mt-16">
          {iconFactory("down", 32)}
        </div>
      </div>
    </div>
  );
}
