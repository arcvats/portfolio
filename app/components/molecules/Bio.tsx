import Link from "next/link";

import { WORK_EXPERIENCE } from "../../lib/consts";

export default function Bio() {
	const recentWork = WORK_EXPERIENCE[WORK_EXPERIENCE.length - 1];
	const { title, company } = recentWork;
	return (
		<div>
			<h2 className="font-bold text-xl">Bio</h2>
			<p>
				Archit is a {title} at {company}. Lorem ipsum dolor sit amet,
				consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore
				et dolore magna aliqua.
			</p>
			<Link href="mailto:me@arcvats.com">
				<span className="font-semibold text-sm text-neutral-500 dark:text-neutral-400">
					Get in touch
				</span>
			</Link>
		</div>
	);
}
