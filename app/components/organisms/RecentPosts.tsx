import Link from "next/link";
import { SUBSCRIBE_URL } from "../../lib/consts";
import { iconFactory } from "../icons";
import Post from "../molecules/Post";

// rome-ignore lint/suspicious/noExplicitAny: coming from medium feed
export default function RecentPosts({ posts }: { posts: any }) {
	return (
		<div className="my-2">
			<h2 className="inline-flex items-center px-2 py-1 text-sm">
				{iconFactory("rss", 14)}
				<span className="font-bold text-base ml-2">Recent Posts</span>
			</h2>
			<div className="px-2">
				{posts && posts.length > 0 ? (
					// rome-ignore lint/suspicious/noExplicitAny: coming from medium feed
					posts.map((post: any) => <Post key={post.slug} post={post} />)
				) : (
					<div className="my-2">
						<h2 className="text-sm font-semibold text-neutral-500 dark:text-neutral-400">
							No posts found
						</h2>
					</div>
				)}
			</div>
			{posts && posts.length > 0 ? (
				<div className="px-2">
					<Link href={SUBSCRIBE_URL} target="_blank">
						<span className="inline-flex items-center rounded-full text-sm px-4 py-2 hover:bg-neutral-300/20 bg-neutral-500/20 dark:bg-neutral-300/20 dark:hover:bg-neutral-200/20">
							<span>Subscribe on</span>
							<span className="ml-1">{iconFactory("medium", 20)}</span>
						</span>
					</Link>
				</div>
			) : null}
		</div>
	);
}
