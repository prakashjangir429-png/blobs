// lib/api/blog.ts
interface BlogFilters {
  page?: number;
  limit?: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
  status?: string;
  category?: string;
  featured?: boolean;
  search?: string;
  tags?: string[];
}

interface CategoryFilters {
  page?: number;
  limit?: number;
  search?: string;
  isActive?: boolean;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  categoryName: string;
  author: string;
  date: string;
  readTime: string;
  featured: boolean;
  image: string;
  tags: string[];
  views: number;
  createdAt: string;
  updatedAt: string;
  status: string;
  metaTitle?: string;
  metaDescription?: string;
  seoKeywords?: string[];
}

interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
  isActive: boolean;
  blogCount: number;
  createdAt: string;
  updatedAt: string;
}

interface PaginatedResponse<T> {
  success: boolean;
  data: T[];
  pagination: {
    page: number;
    limit: number;
    totalCount: number;
    totalPages: number;
    hasNextPage: boolean;
    hasPrevPage: boolean;
  };
}

// Base URL for API calls
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://newsbackend-ebon.vercel.app/api';

export async function getAllBlogs(filters: BlogFilters = {}): Promise<PaginatedResponse<BlogPost>> {
  // Build query string
  const params = new URLSearchParams();

  Object.entries(filters).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== '') {
      if (Array.isArray(value)) {
        params.append(key, value.join(','));
      } else {
        params.append(key, String(value));
      }
    }
  });

  const url = `${API_BASE_URL}/blogs?${params.toString()}`;

  const response = await fetch(url, {
    cache: 'force-cache',
    revalidate: 600,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch blogs: ${response.statusText}`);
  }

  return response.json();
}

export async function getAllCategories(filters: CategoryFilters = {}): Promise<PaginatedResponse<Category>> {
  const params = new URLSearchParams();

  Object.entries(filters).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== '') {
      params.append(key, String(value));
    }
  });

  const url = `${API_BASE_URL}/blog-categories?${params.toString()}`;

  const response = await fetch(url, {
    cache: 'force-cache',
    revalidate: 600,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch categories: ${response.statusText}`);
  }

  return response.json();
}

export async function getBlogBySlug(slug: string): Promise<{ success: boolean; data: BlogPost }> {
  const url = `${API_BASE_URL}/blogs/slug/${slug}`;

  const response = await fetch(url, {
    cache: 'force-cache',
    revalidate: 600,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch blog: ${response.statusText}`);
  }

  return response.json();
}

export async function getFeaturedBlogs(limit: number = 3): Promise<BlogPost[]> {
  const response = await getAllBlogs({
    featured: true,
    status: 'published',
    limit,
  });

  return response.data || [];
}

export async function getBlogsByCategory(category: string, limit: number = 6): Promise<BlogPost[]> {
  const response = await getAllBlogs({
    category,
    status: 'published',
    limit,
  });

  return response.data || [];
}

export async function getRecentBlogs(limit: number = 5): Promise<BlogPost[]> {
  const response = await getAllBlogs({
    status: 'published',
    sortBy: 'createdAt',
    sortOrder: 'desc',
    limit,
  });

  return response.data || [];
}