import { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { getPostBySlug, getAllPostSlugs, getRecentPosts } from "@/app/lib/blog";
import MDXComponents from "@/app/components/blog/MDXComponents";
import { iconFactory } from "@/app/components/icons";

interface BlogPostPageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return {
      title: "Post Not Found - Arcvats",
    };
  }

  return {
    title: `${post.title} - Arcvats`,
    description: post.description,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
    twitter: {
      title: post.title,
      description: post.description,
      card: "summary_large_image",
    },
    keywords: post.tags.join(", "),
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const recentPosts = getRecentPosts(5).filter((p) => p.slug !== params.slug);
  const publishedDate = new Date(post.date);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <article className="prose prose-lg dark:prose-invert max-w-none">
        {/* Article Header */}
        <header className="mb-8 pb-8 border-b border-gray-200 dark:border-gray-700">
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <Link
                key={tag}
                href={`/blog?tag=${encodeURIComponent(tag)}`}
                className="inline-block px-3 py-1 text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors no-underline"
              >
                {tag}
              </Link>
            ))}
          </div>

          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center justify-between text-gray-600 dark:text-gray-300">
            <div className="flex items-center space-x-4">
              <span className="text-sm capitalize">{post.category}</span>
              <span>•</span>
              <time dateTime={post.date} className="text-sm">
                {publishedDate.toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <span>•</span>
              <span className="text-sm">{post.readingTime.text}</span>
            </div>
          </div>
        </header>

        {/* Article Content */}
        <div className="prose-headings:scroll-mt-16">
          <MDXRemote source={post.content} components={MDXComponents} />
        </div>
      </article>

      {/* Article Footer */}
      <footer className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
        {/* Share buttons */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Share this post
          </h3>
          <div className="flex space-x-4">
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                post.title
              )}&url=${encodeURIComponent(
                `https://arcvats.com/blog/${post.slug}`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 rounded-full hover:bg-blue-50 dark:hover:bg-blue-900/20 text-neutral dark:text-white transition-colors"
            >
              <span>{iconFactory("twitter", 20)}</span>
            </a>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                `https://arcvats.com/blog/${post.slug}`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 hover:bg-blue-50 dark:hover:bg-blue-900/20 text-white rounded-full transition-colors"
            >
              <span>{iconFactory("linkedin", 24)}</span>
            </a>
          </div>
        </div>

        {/* Recent posts */}
        {recentPosts.length > 0 && (
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              More articles
            </h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {recentPosts.slice(0, 4).map((recentPost) => (
                <Link
                  key={recentPost.slug}
                  href={`/blog/${recentPost.slug}`}
                  className="block p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                    {recentPost.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
                    {recentPost.description}
                  </p>
                  <div className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                    {recentPost.readingTime.text}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Back to blog link */}
        <div className="mt-8 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
          >
            <svg
              className="mr-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to all posts
          </Link>
        </div>
      </footer>
    </div>
  );
}
