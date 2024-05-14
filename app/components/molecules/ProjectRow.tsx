import ProjectRowItem from "./ProjectRowItem";

// rome-ignore lint/suspicious/noExplicitAny: <explanation>
export default function ProjectRow({ projects }: { projects: any[] }) {
	return (
		<div className="flex">
			{projects.map(({ hasImage, title, description, url, logoType }) => {
				return (
					<ProjectRowItem
						key={url}
						hasImage={hasImage}
						title={title}
						subtitle={description}
						logoType={logoType}
						url={url}
					/>
				);
			})}
		</div>
	);
}
