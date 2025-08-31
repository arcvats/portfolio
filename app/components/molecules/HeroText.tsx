import { SOCIAL_ICONS } from "@/app/lib/consts";
import IconSet from "./IconSet";

export default function HeroText() {
  return (
    <div className="w-full">
      <h1 className="tracking-tight text-2xl sm:text-4xl font-extrabold">
        Hey,
      </h1>
      <h2 className="text-base sm:text-xl mt-1 sm:mt-4">
        I&apos;m Archit, a software engineer, blogger and amateur poet with a
        profound passion for problem-solving, continuous learning, and teaching.
        With years of hands-on experience and a relentless drive of curiosity, I
        aim to share insights, tips, and reflections on navigating the
        ever-evolving landscape of technology.
        <br />
        Join me on this journey as we explore the latest innovations, tackle
        challenges, and celebrate the beauty of code and creativity.
        <br />
        <br />
        <span className="italic">
          Let&apos;s build a brighter future together, one byte at a time.
        </span>
      </h2>
      <div className="mt-4">
        <IconSet set={SOCIAL_ICONS} hasText={true} hasHover={true} />
      </div>
    </div>
  );
}
