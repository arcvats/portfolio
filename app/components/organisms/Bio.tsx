import { iconFactory } from "../icons";
import { WORK_EXPERIENCE } from "@/app/lib/consts";

export default function Bio() {
  const lastExperience = WORK_EXPERIENCE[0];
  return (
    <div className="block my-2 rounded-lg bg-neutral-300/20 p-2 text-surface shadow-secondary-1 dark:border-neutral-300/10 dark:border-2 dark:bg-transparent dark:text-white">
      <h2 className="inline-flex items-center px-2 py-1 text-lg font-semibold">
        Bio
      </h2>
      <p className="m-2 text-sm">
        Archit is a <b>{lastExperience.title}</b> at{" "}
        <b>{lastExperience.company}</b>.
        <br />
        With over {new Date().getFullYear() - 2017}+ years of experience, he has
        demonstrated his expertise through diverse engineering roles at
        different organizations like{" "}
        {WORK_EXPERIENCE.slice(1, WORK_EXPERIENCE.length - 1)
          .map((exp) => exp.company)
          .join(", ")}{" "}
        and {`${WORK_EXPERIENCE[WORK_EXPERIENCE.length - 1]?.company}`} as well
        as through successful completion of numerous freelance projects and OSS
        contributions. Before moving to Canada, he pursued his academic
        endeavors in Computer Science at VIT University, India. His formative
        years were spent in a small town in northern India, where his
        fascination with Computer Science began. When he is not working, he
        loves playing guitar, doing yoga, meditation, poetry and reading.
      </p>
      <p className="text-xs text-gray-500 dark:text-gray-400 px-2">
        <b className="mr-1">Full Stack</b>
        <span>•</span>
        <b className="ml-1">Cloud Native Systems</b>
      </p>
    </div>
  );
}
