import Link from "next/link";
import { getRecentPosts } from "../../lib/blog";

export default function RecentPosts({ limit = 7 }: { limit: number }) {
  const recentPosts = getRecentPosts(limit);

  return (
    <div className="my-2">
      <div className="flex items-center justify-between px-2 pl-0 py-1 text-sm">
        <h2 className="font-bold text-2xl">Recent Blog Posts</h2>
      </div>
      <div className="px-2 pl-0">
        {recentPosts && recentPosts.length > 0 ? (
          <div>
            <div className="flex flex-col">
              {recentPosts.map((post) => (
                <article key={post.slug}>
                  <div className="p-6 pl-0">
                    {/* Title */}
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        {post.title}
                      </Link>
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-300 text-base mb-4 line-clamp-3">
                      {post.description}
                    </p>

                    {/* Meta */}
                    <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                      <div className="flex items-center space-x-2">
                        <span className="capitalize">{post.category}</span>
                        <span>•</span>
                        <time dateTime={post.date}>
                          {new Date(post.date).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                          })}
                        </time>
                        <span>•</span>
                        <span>{post.readingTime.text}</span>
                        <span className="hidden sm:inline">•</span>
                        <div className="hidden sm:flex sm:flex-wrap sm:gap-1">
                          {post.tags.slice(0, 2).map((tag) => (
                            <span
                              key={tag}
                              className="inline-block px-2 py-1 text-xs font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                          {post.tags.length > 2 && (
                            <span className="inline-block px-2 py-1 text-xs font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 rounded-full">
                              +{post.tags.length - 2}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Read more */}
                    {/* <div className="mt-4">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                      >
                        Read more
                        <svg
                          className="ml-1 w-3 h-3"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </Link>
                    </div> */}
                  </div>
                </article>
              ))}
            </div>

            {/* {recentPosts.length >= limit && (
              <div className="text-center mt-8">
                <Link
                  href="/blog"
                  className="inline-flex items-center px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-colors"
                >
                  Explore all {recentPosts.length}+ posts
                  <svg
                    className="ml-2 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            )} */}
            {recentPosts.length >= limit && (
              <Link
                href="/blog"
                className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium transition-colors"
              >
                View all posts →
              </Link>
            )}
          </div>
        ) : (
          <div className="my-2">
            <h2 className="text-sm font-semibold text-neutral-500 dark:text-neutral-400">
              No posts found
            </h2>
          </div>
        )}
      </div>
    </div>
  );
}
