import Link from "next/link";

// rome-ignore lint/suspicious/noExplicitAny: coming from medium feed
export default function Post({ post }: { post: any }) {
	return (
		<div className="my-4">
			<p className="text-xs">| {post?.published}</p>
			<Link href={post.link} target="_blank">
				<h2 className="text-sm font-semibold sm:text-base">{post?.title}</h2>
			</Link>
		</div>
	);
}
