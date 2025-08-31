import Link from "next/link";
import { iconFactory } from "../icons";

type IconSetProps = {
  defaultSize?: number;
  alignment?: "horizontal" | "vertical";
  hasText?: boolean;
  hasHover?: boolean;
  set?: { url: string; icon: string; size?: number }[];
};

export default function IconSet({
  defaultSize = 24,
  alignment = "horizontal",
  hasText = false,
  hasHover = false,
  set,
}: IconSetProps) {
  const style =
    alignment === "horizontal"
      ? "flex space-x-1 md:space-x-4"
      : "flex flex-col space-y-4";
  return (
    <div className={`${style} md:mr-2 items-center`}>
      {set?.map(({ url, icon, size }) => (
        <Link
          key={url}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className={`${
            hasHover
              ? "rounded-full tap-highlight-transparent transition-opacity transition-transform-colors-opacity motion-reduce:transition-none pr-1 pl-0 sm:py-2 sm:px-2.5 hover:bg-blue-50 dark:hover:bg-blue-900/20"
              : ""
          }`}
        >
          <div className="flex items-center space-x-2">
            <span>{iconFactory(icon, size || defaultSize)}</span>
            {hasText && <span className="capitalize">{icon}</span>}
          </div>
        </Link>
      ))}
    </div>
  );
}
