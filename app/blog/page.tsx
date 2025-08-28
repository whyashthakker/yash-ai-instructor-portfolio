import { Metadata } from 'next';
import Navigation from '../components/Navigation';

export const metadata: Metadata = {
  title: 'Blog - Yash Thakker | AI Insights & Tutorials',
  description: 'Latest insights on Generative AI, Machine Learning, and Product Development from AI Instructor Yash Thakker. Practical tutorials and industry trends.',
  keywords: ['AI blog', 'machine learning tutorials', 'generative AI insights', 'product development', 'AI education'],
};

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: 'Reflections from My Latest AI Bootcamp: Teaching 100+ Non-Coders',
      excerpt: 'Key insights from teaching over 100 students with zero coding experience how to build AI applications using modern tools like Cursor AI, ChatGPT, and Claude.',
      date: '2025-08-28',
      readTime: '10 min read',
      category: 'Education Insights',
      slug: 'bootcamp-reflections'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">AI Insights & Tutorials</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Practical insights on Generative AI, Machine Learning, and Product Development. 
            Learn from real-world applications and industry expertise.
          </p>
        </div>

        <div className="grid gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <span className="px-3 py-1 bg-[#d97757]/10 text-[#d97757] text-sm font-medium rounded-full">
                  {post.category}
                </span>
                <time className="text-sm text-gray-500">{post.date}</time>
                <span className="text-sm text-gray-500">•</span>
                <span className="text-sm text-gray-500">{post.readTime}</span>
              </div>
              
              <h2 className="text-2xl font-semibold text-gray-800 mb-3 hover:text-[#d97757] transition-colors cursor-pointer">
                {post.title}
              </h2>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                {post.excerpt}
              </p>
              
              <a href={`/blog/${post.slug}`} className="text-[#d97757] font-medium hover:text-[#c86844] transition-colors">
                Read Full Article →
              </a>
            </article>
          ))}
        </div>

        {/* Coming Soon */}
        <div className="text-center mt-12">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">More Insights Coming Soon</h3>
            <p className="text-gray-600 mb-6">
              I regularly share insights on AI education, product development, and entrepreneurship. 
              Follow my journey and get notified of new posts.
            </p>
            <div className="flex gap-4 justify-center">
              <a href="https://www.linkedin.com/in/goyashy/" target="_blank" rel="noopener noreferrer" 
                 className="px-4 py-2 bg-[#d97757] text-white rounded-lg hover:bg-[#c86844] transition-colors text-sm font-medium">
                Follow on LinkedIn
              </a>
              <a href="https://x.com/goyashy" target="_blank" rel="noopener noreferrer" 
                 className="px-4 py-2 border border-[#d97757] text-[#d97757] rounded-lg hover:bg-[#d97757] hover:text-white transition-colors text-sm font-medium">
                Follow on X
              </a>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Subscribe for Updates</h3>
            <p className="text-gray-600 mb-6">
              Get the latest AI insights and tutorials delivered to your inbox.
            </p>
            <div className="flex gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d97757] focus:border-transparent outline-none"
              />
              <button className="px-6 py-3 bg-[#d97757] text-white rounded-lg hover:bg-[#c86844] transition-colors font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}