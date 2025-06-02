export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  slug: string;
}

export interface BlogPostCardProps {
  post: Omit<BlogPost, 'id'>;
  className?: string;
}

export interface BlogSidebarProps {
  categories: string[];
  className?: string;
}

export interface BlogListProps {
  posts: BlogPost[];
  className?: string;
}
