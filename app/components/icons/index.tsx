import Moon from "./MoonIcon";
export const MoonIcon = Moon;

import Sun from "./SunIcon";
export const SunIcon = Sun;

import Logo from "./Logo";
export const LogoIcon = Logo;

import Menu from "./MenuIcon";
export const MenuIcon = Menu;

import Github from "./GithubIcon";
export const GithubIcon = Github;

import Twitter from "./TwitterIcon";
export const TwitterIcon = Twitter;

import LinkedIn from "./LinkedInIcon";
export const LinkedInIcon = LinkedIn;

import HashNode from "./HashNodeIcon";
export const HashNodeIcon = HashNode;

import Download from "./DownloadIcon";
export const DownloadIcon = Download;

import Work from "./WorkIcon";
export const WorkIcon = Work;

import Project from "./ProjectIcon";
export const ProjectIcon = Project;

import Npm from "./NpmIcon";
export const NpmIcon = Npm;

import Go from "./GoIcon";
export const GoIcon = Go;

import Medium from "./MediumIcon";
export const MediumIcon = Medium;

import ArrowRightUp from "./ArrowRightUpIcon";
export const ArrowRightUpIcon = ArrowRightUp;

import Rss from "./RssIcon";
export const RssIcon = Rss;

import Down from "./DownIcon";
export const DownIcon = Down;

export const iconFactory = (name: string, size?: number | string) => {
	switch (name) {
		case "moon":
			return <MoonIcon size={size} />;
		case "sun":
			return <SunIcon size={size} />;
		case "logo":
			return <LogoIcon />;
		case "menu":
			return <MenuIcon size={size} />;
		case "github":
			return <GithubIcon size={size} />;
		case "twitter":
			return <TwitterIcon size={size} />;
		case "linkedin":
			return <LinkedInIcon size={size} />;
		case "hashnode":
			return <HashNodeIcon size={size} />;
		case "download":
			return <DownloadIcon size={size} />;
		case "work":
			return <WorkIcon size={size} />;
		case "project":
			return <ProjectIcon size={size} />;
		case "npm":
			return <NpmIcon size={size} />;
		case "go":
			return <GoIcon size={size} />;
		case "medium":
			return <MediumIcon size={size} />;
		case "arrow-right-up":
			return <ArrowRightUpIcon size={size} />;
		case "rss":
			return <RssIcon size={size} />;
		case "down":
			return <DownIcon size={size} />;
		default:
			return null;
	}
};
