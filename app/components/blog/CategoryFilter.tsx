'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

interface Category {
  category: string;
  count: number;
}

interface CategoryFilterProps {
  categories: Category[];
  className?: string;
}

export default function CategoryFilter({ categories, className = "" }: CategoryFilterProps) {
  const searchParams = useSearchParams();
  const selectedCategory = searchParams.get('category');

  const getCategoryUrl = (category: string) => {
    const params = new URLSearchParams(searchParams);
    
    if (selectedCategory === category) {
      // Remove category filter if clicking on selected category
      params.delete('category');
    } else {
      params.set('category', category);
    }
    
    // Reset to first page when filtering
    params.delete('page');
    
    const queryString = params.toString();
    return `/blog${queryString ? `?${queryString}` : ''}`;
  };

  const getAllPostsUrl = () => {
    const params = new URLSearchParams(searchParams);
    params.delete('category');
    params.delete('page');
    
    const queryString = params.toString();
    return `/blog${queryString ? `?${queryString}` : ''}`;
  };

  if (categories.length === 0) return null;

  return (
    <div className={`${className}`}>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        Filter by Category
      </h3>
      <div className="space-y-2">
        {/* All posts button */}
        <Link
          href={getAllPostsUrl()}
          className={`block px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
            !selectedCategory
              ? 'bg-blue-500 text-white'
              : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
          }`}
        >
          <div className="flex items-center justify-between">
            <span>All Categories</span>
          </div>
        </Link>
        
        {/* Category buttons */}
        {categories.map(({ category, count }) => (
          <Link
            key={category}
            href={getCategoryUrl(category)}
            className={`block px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
              selectedCategory === category
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="capitalize">{category}</span>
              <span className="px-2 py-1 text-xs bg-white bg-opacity-20 rounded-full">
                {count}
              </span>
            </div>
          </Link>
        ))}
      </div>
      
      {/* Clear filters */}
      {selectedCategory && (
        <div className="mt-3">
          <Link
            href={getAllPostsUrl()}
            className="text-sm text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
          >
            Clear category filter
          </Link>
        </div>
      )}
    </div>
  );
}