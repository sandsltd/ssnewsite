import { getBlogPosts } from '@/lib/blog';
import Link from 'next/link';

export default function BlogPage() {
  const posts = getBlogPosts();
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Saunders Simmons Ltd Blog</h1>
      <p className="text-lg text-gray-600 mb-12">
        Expert web deisgn, app and software development, seo advice and tips for Yeovil, Somerset
      </p>
      
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <article key={post.slug} className="border rounded-lg p-6 hover:shadow-lg transition">
            {post.image && (
              <img 
                src={post.image} 
                alt={post.imageAlt || post.title}
                className="w-full h-48 object-cover rounded mb-4"
              />
            )}
            <h2 className="text-2xl font-semibold mb-2">
              <Link href={`/blogs/${post.slug}`} className="hover:text-blue-600">
                {post.title}
              </Link>
            </h2>
            <p className="text-gray-600 mb-4">{post.excerpt}</p>
            <div className="flex justify-between items-center text-sm text-gray-500">
              <span>{new Date(post.date).toLocaleDateString()}</span>
              <span>{post.readingTime}</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}