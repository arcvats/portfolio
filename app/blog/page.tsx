import { Suspense } from "react";
import { Metadata } from "next";
import {
  getAllPosts,
  getAllTags,
  getAllCategories,
  getPostsByTag,
  getPostsByCategory,
  searchPosts,
  paginatePosts,
} from "@/app/lib/blog";
import PostCard from "@/app/components/blog/PostCard";
import SearchBar from "@/app/components/blog/SearchBar";
import TagFilter from "@/app/components/blog/TagFilter";
import CategoryFilter from "@/app/components/blog/CategoryFilter";
import Pagination from "@/app/components/blog/Pagination";

export const metadata: Metadata = {
  title: "Blog - Arcvats",
  description:
    "Explore articles about web development, programming, and technology.",
  openGraph: {
    title: "Blog - Arcvats",
    description:
      "Explore articles about web development, programming, and technology.",
    type: "website",
  },
};

interface BlogPageProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

async function BlogContent({ searchParams }: BlogPageProps) {
  const page = parseInt((searchParams.page as string) || "1", 10);
  const query = (searchParams.q as string) || "";
  const tag = (searchParams.tag as string) || "";
  const category = (searchParams.category as string) || "";

  // Get posts based on search/filter criteria
  let posts = getAllPosts();

  if (query) {
    posts = searchPosts(query);
  } else if (tag) {
    posts = getPostsByTag(tag);
  } else if (category) {
    posts = getPostsByCategory(category);
  }

  // Paginate posts
  const paginatedResult = paginatePosts(posts, page, 15);

  // Get all tags and categories for filtering
  const allTags = getAllTags();
  const allCategories = getAllCategories();

  const hasActiveFilters = query || tag || category;
  const resultText = hasActiveFilters
    ? `Found ${paginatedResult.totalPosts} post${
        paginatedResult.totalPosts === 1 ? "" : "s"
      }`
    : `${paginatedResult.totalPosts} post${
        paginatedResult.totalPosts === 1 ? "" : "s"
      }`;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar */}
        <aside className="lg:col-span-1 space-y-6">
          {/* Search */}
          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Search Posts
            </h2>
            <SearchBar />
          </div>

          {/* Category Filter */}
          <CategoryFilter categories={allCategories} />

          {/* Tag Filter */}
          <TagFilter tags={allTags} />

          {/* Active Filters Summary */}
          {hasActiveFilters && (
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              <h3 className="text-sm font-medium text-blue-900 dark:text-blue-100 mb-2">
                Active Filters:
              </h3>
              <div className="space-y-1 text-sm">
                {query && (
                  <div className="text-blue-800 dark:text-blue-200">
                    Search: &ldquo;{query}&rdquo;
                  </div>
                )}
                {category && (
                  <div className="text-blue-800 dark:text-blue-200">
                    Category: {category}
                  </div>
                )}
                {tag && (
                  <div className="text-blue-800 dark:text-blue-200">
                    Tag: {tag}
                  </div>
                )}
              </div>
            </div>
          )}
        </aside>

        {/* Main Content */}
        <main className="lg:col-span-3">
          {/* Posts Grid */}
          {paginatedResult.posts.length > 0 ? (
            <div className="space-y-6">
              {paginatedResult.posts.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-gray-400 dark:text-gray-500 mb-4">
                <svg
                  className="mx-auto h-12 w-12"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.441-1.007-5.904-2.625M15 11.25c0-2.34-1.007-4.441-2.625-5.904M9 15l3-3 3 3"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-1">
                No posts found
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {hasActiveFilters
                  ? "Try adjusting your search terms or clearing filters."
                  : "No blog posts have been published yet."}
              </p>
            </div>
          )}

          {/* Pagination */}
          <Pagination
            currentPage={paginatedResult.currentPage}
            totalPages={paginatedResult.totalPages}
            basePath="/blog"
            searchParams={
              new URLSearchParams(searchParams as Record<string, string>)
            }
          />
        </main>
      </div>
    </div>
  );
}

export default function BlogPage({ searchParams }: BlogPageProps) {
  return (
    <Suspense
      fallback={
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="animate-pulse">
            <div className="text-center mb-12">
              <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded w-32 mx-auto mb-4"></div>
              <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-96 mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              <div className="lg:col-span-1">
                <div className="h-32 bg-gray-200 dark:bg-gray-700 rounded"></div>
              </div>
              <div className="lg:col-span-3">
                <div className="space-y-6">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="h-48 bg-gray-200 dark:bg-gray-700 rounded"
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    >
      <BlogContent searchParams={searchParams} />
    </Suspense>
  );
}
