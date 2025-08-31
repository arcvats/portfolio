'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

interface Tag {
  tag: string;
  count: number;
}

interface TagFilterProps {
  tags: Tag[];
  className?: string;
}

export default function TagFilter({ tags, className = "" }: TagFilterProps) {
  const searchParams = useSearchParams();
  const selectedTag = searchParams.get('tag');

  const getTagUrl = (tag: string) => {
    const params = new URLSearchParams(searchParams);
    
    if (selectedTag === tag) {
      // Remove tag filter if clicking on selected tag
      params.delete('tag');
    } else {
      params.set('tag', tag);
    }
    
    // Reset to first page when filtering
    params.delete('page');
    
    const queryString = params.toString();
    return `/blog${queryString ? `?${queryString}` : ''}`;
  };

  const getAllPostsUrl = () => {
    const params = new URLSearchParams(searchParams);
    params.delete('tag');
    params.delete('page');
    
    const queryString = params.toString();
    return `/blog${queryString ? `?${queryString}` : ''}`;
  };

  if (tags.length === 0) return null;

  return (
    <div className={`${className}`}>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        Filter by Tags
      </h3>
      <div className="flex flex-wrap gap-2">
        {/* All posts button */}
        <Link
          href={getAllPostsUrl()}
          className={`inline-flex items-center px-3 py-1.5 text-sm font-medium rounded-full transition-colors ${
            !selectedTag
              ? 'bg-blue-500 text-white'
              : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
          }`}
        >
          All Posts
        </Link>
        
        {/* Tag buttons */}
        {tags.map(({ tag, count }) => (
          <Link
            key={tag}
            href={getTagUrl(tag)}
            className={`inline-flex items-center px-3 py-1.5 text-sm font-medium rounded-full transition-colors ${
              selectedTag === tag
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}
          >
            {tag}
            <span className="ml-1 px-1.5 py-0.5 text-xs bg-white bg-opacity-20 rounded-full">
              {count}
            </span>
          </Link>
        ))}
      </div>
      
      {/* Clear filters */}
      {selectedTag && (
        <div className="mt-3">
          <Link
            href={getAllPostsUrl()}
            className="text-sm text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
          >
            Clear all filters
          </Link>
        </div>
      )}
    </div>
  );
}