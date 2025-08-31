import { WORK_EXPERIENCE } from "../../lib/consts";
import InfoRow from "../molecules/InfoRow";
import { iconFactory } from "../icons";

export default function Work() {
  return (
    <div className="block my-2 rounded-lg bg-neutral-300/20 p-2 text-surface shadow-secondary-1 dark:border-neutral-300/10 dark:border-2 dark:bg-transparent dark:text-white">
      <h2 className="inline-flex items-center px-2 py-1 text-lg font-semibold">
        Work Experience
      </h2>
      {WORK_EXPERIENCE.map((work) => {
        return (
          <InfoRow
            key={work.company}
            imageProps={
              work.logoUrl
                ? {
                    src: work.logoUrl,
                    alt: work.company,
                    height: "h-12 sm:h-12",
                    width: "w-12 sm:w-12",
                    padding: work.padding || "p-2",
                    bgColor: work.backgroundColor || "bg-white",
                  }
                : undefined
            }
            title={work.title}
            subtitle={work.company}
            date={work.duration}
            hasImage={!!work.logoUrl}
            hasCustomComponent={false}
          />
        );
      })}
      {/* <Link
        href="/ArchitCV.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex justify-center items-center hover:bg-neutral-300/20 bg-neutral-500/20 dark:bg-neutral-300/20 dark:hover:bg-neutral-200/20 text-surface rounded-lg p-2 my-1 w-full"
      >
        <span className="mr-1 text-sm font-semibold">Download CV</span>
        {iconFactory("download", 14)}
      </Link> */}
    </div>
  );
}
