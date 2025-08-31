import Link from "next/link";
import { PROJECTS, SOCIAL_ICONS } from "../../lib/consts";
import ProjectRow from "../molecules/ProjectRow";
import { iconFactory } from "../icons";
import { chunk } from "../../lib/helpers";

export default function Projects() {
  const projectChunks = chunk(PROJECTS, 2);
  return (
    <div className="block my-2 rounded-lg bg-neutral-300/20 p-2 text-surface shadow-secondary-1 dark:border-neutral-300/10 dark:border-2 dark:bg-transparent dark:text-white">
      <h2 className="inline-flex items-center px-2 py-1 text-lg font-semibold">
        {/* {iconFactory("project", 24)}
				<span className="font-bold ml-2">Projects</span> */}
        Projects
      </h2>
      {projectChunks.map((chunk) => {
        return <ProjectRow key={chunk[0].title} projects={chunk} />;
      })}
      <Link
        href={SOCIAL_ICONS.find((item) => item.icon === "github")?.url || "/"}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex justify-center items-center hover:bg-neutral-300/20 bg-neutral-500/20 dark:bg-neutral-300/20 dark:hover:bg-neutral-200/20 text-surface rounded-lg p-2 my-1 w-full"
      >
        <span className="mr-1 text-sm font-semibold">View More</span>
        {iconFactory("github", 18)}
      </Link>
    </div>
  );
}
