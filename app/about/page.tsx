import Link from "next/link";
import Image from "next/image";
import {
  WORK_EXPERIENCE,
  SOCIAL_ICONS,
  BLOG_URL,
  IMAGE_WITH_ATTR,
  PROFILE_IMAGE,
} from "../lib/consts";

function getSocialLink(icon: string) {
  const socialIcon = SOCIAL_ICONS.find((social) => social.icon === icon);
  return socialIcon ? socialIcon.url : "";
}

export default function About() {
  const lastExperience = WORK_EXPERIENCE[0];
  return (
    <div className="flex">
      <div className="sm:w-1/2 w-full">
        <div className="flex justify-normal mt-2">
          <Image
            src={PROFILE_IMAGE}
            alt="Archit"
            height={60}
            width={60}
            className="rounded-full w-auto h-auto border-2 border-neutral-400 dark:border-neutral-300"
            priority={true}
          />
        </div>
        <h2 className="text-sm sm:text-base mt-1 sm:mt-2">
          <b>
            Archit is a {lastExperience.title} at {lastExperience.company}
          </b>
          .
          <br />
          Over the past decade, he has demonstrated his expertise through
          diverse engineering roles at different organizations like{" "}
          {WORK_EXPERIENCE.slice(1, WORK_EXPERIENCE.length - 1)
            .map((exp) => exp.company)
            .join(", ")}{" "}
          and {`${WORK_EXPERIENCE[WORK_EXPERIENCE.length - 1]?.company}`} as
          well as through successful completion of numerous freelance projects
          and OSS contributions. Before moving to Canada, he pursued his
          academic endeavors in Computer Science at VIT University, India. His
          formative years were spent in a small town in northern India, where
          his fascination with Computer Science began. When he is not working,
          he loves playing guitar, doing yoga, meditation, poetry and reading.
        </h2>
        <h3 className="italic text-xs sm:text-base mt-2">
          Read my blog at{" "}
          <Link href={BLOG_URL} target="_blank" rel="noopener noreferrer">
            <span className="font-bold underline">
              {BLOG_URL.replace("https://", "")}
            </span>
            .
          </Link>
          <br />
          For networking and project updates, connect with me on{" "}
          <Link
            href={getSocialLink("linkedin")}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="font-bold underline">LinkedIn</span>
          </Link>
          , follow my insights on{" "}
          <Link
            href={getSocialLink("twitter")}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="font-bold underline">Twitter/X</span>
          </Link>{" "}
          , and explore my latest projects on{" "}
          <Link
            href={getSocialLink("github")}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="font-bold underline">Github</span>
          </Link>
          .
        </h3>
      </div>
      <div className="hidden w-1/2 sm:flex flex-col content-center items-center">
        <Image
          src={IMAGE_WITH_ATTR.url}
          alt="404"
          height={500}
          width={500}
          priority={true}
        />
        <div>
          <a
            href={IMAGE_WITH_ATTR.attributionLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="text-xs italic">
              {IMAGE_WITH_ATTR.attributionText}
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
