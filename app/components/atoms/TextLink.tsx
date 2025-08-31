"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type TextLinkProps = {
  text: string;
  href: string;
  handleNavClick?: () => void;
};

export default function TextLink({
  text,
  href,
  handleNavClick,
}: TextLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;
  const toggleMenuFromLink = () => {
    handleNavClick?.();
  };
  return (
    <Link
      onClick={toggleMenuFromLink}
      href={href}
      className={`rounded-full tap-highlight-transparent transition-opacity transition-transform-colors-opacity motion-reduce:transition-none py-1 px-3.5 dark:hover:bg-blue-200/20 hover:bg-blue-300/20 ${
        isActive
          ? "bg-blue-400 dark:bg-blue-500/20 text-white hover:text-black dark:hover:text-white"
          : ""
      }`}
    >
      {text}
    </Link>
  );
}
