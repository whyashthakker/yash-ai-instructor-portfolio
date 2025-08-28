import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Content Creation - Yash Thakker | Master AI-Powered Content Strategy',
  description: 'Learn AI content creation with Yash Thakker. Master ChatGPT, automated content workflows, and AI writing tools. Create 10x more content in less time.',
  keywords: 'AI content creation, AI writing tools, content automation, ChatGPT content, AI copywriting, automated content marketing',
  robots: 'index, follow',
};

export default function AIContentCreationPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
            AI Content Creation Mastery
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Create 10x more content in 90% less time with AI-powered content strategies and automation workflows
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://www.udemy.com/user/feelix-2" target="_blank" rel="noopener noreferrer"
               className="px-8 py-4 bg-[#d97757] text-white rounded-xl hover:bg-[#c86844] transition-colors font-semibold">
              Master AI Content Creation
            </a>
            <a href="mailto:yash@explainx.ai"
               className="px-8 py-4 border-2 border-[#d97757] text-[#d97757] rounded-xl hover:bg-[#d97757] hover:text-white transition-colors font-semibold">
              Custom Content Strategy
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <div className="text-center bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
            <div className="text-3xl font-bold text-[#d97757] mb-2">10x</div>
            <div className="text-gray-700 font-medium">Content Output</div>
          </div>
          <div className="text-center bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl">
            <div className="text-3xl font-bold text-[#d97757] mb-2">90%</div>
            <div className="text-gray-700 font-medium">Time Saved</div>
          </div>
          <div className="text-center bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl">
            <div className="text-3xl font-bold text-[#d97757] mb-2">50+</div>
            <div className="text-gray-700 font-medium">Content Types</div>
          </div>
          <div className="text-center bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl">
            <div className="text-3xl font-bold text-[#d97757] mb-2">24/7</div>
            <div className="text-gray-700 font-medium">Automation</div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">AI Content Creation Solutions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-l-4 border-blue-500">
              <div className="text-3xl mb-4">✍️</div>
              <h3 className="text-xl font-semibold mb-3 text-[#d97757]">Blog Content Generation</h3>
              <p className="text-gray-600 mb-4">Generate high-quality blog posts, articles, and long-form content at scale using AI.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• SEO-optimized articles</li>
                <li>• Keyword integration</li>
                <li>• Multi-topic coverage</li>
                <li>• Automated publishing</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-l-4 border-green-500">
              <div className="text-3xl mb-4">📱</div>
              <h3 className="text-xl font-semibold mb-3 text-[#d97757]">Social Media Automation</h3>
              <p className="text-gray-600 mb-4">Create and schedule social media content across all platforms with AI assistance.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Multi-platform posts</li>
                <li>• Hashtag optimization</li>
                <li>• Engagement strategies</li>
                <li>• Content calendars</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-l-4 border-purple-500">
              <div className="text-3xl mb-4">📧</div>
              <h3 className="text-xl font-semibold mb-3 text-[#d97757]">Email Marketing Content</h3>
              <p className="text-gray-600 mb-4">Generate compelling email campaigns, newsletters, and nurture sequences automatically.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Email sequences</li>
                <li>• Subject line optimization</li>
                <li>• Personalization</li>
                <li>• A/B testing variants</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-l-4 border-red-500">
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-3 text-[#d97757]">Ad Copy & Sales Content</h3>
              <p className="text-gray-600 mb-4">Create high-converting ad copy, sales pages, and marketing materials with AI.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Facebook/Google ads</li>
                <li>• Sales page copy</li>
                <li>• Landing pages</li>
                <li>• Product descriptions</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-l-4 border-orange-500">
              <div className="text-3xl mb-4">🎬</div>
              <h3 className="text-xl font-semibold mb-3 text-[#d97757]">Video & Multimedia Content</h3>
              <p className="text-gray-600 mb-4">Generate scripts, captions, and multimedia content for video and audio platforms.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Video scripts</li>
                <li>• Podcast content</li>
                <li>• YouTube descriptions</li>
                <li>• Closed captions</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-l-4 border-indigo-500">
              <div className="text-3xl mb-4">📚</div>
              <h3 className="text-xl font-semibold mb-3 text-[#d97757]">Educational Content</h3>
              <p className="text-gray-600 mb-4">Create courses, tutorials, and educational materials with structured AI content.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Course outlines</li>
                <li>• Tutorial content</li>
                <li>• Assessment questions</li>
                <li>• Learning materials</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#d97757] to-[#c86844] text-white p-12 rounded-2xl mb-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Complete AI Content Workflow</h2>
            <div className="grid md:grid-cols-4 gap-6 mt-8">
              <div className="bg-white/10 p-4 rounded-xl backdrop-blur">
                <div className="text-2xl font-bold mb-2">1</div>
                <h3 className="font-bold mb-2">Strategy</h3>
                <p className="text-sm">AI-powered content planning and keyword research</p>
              </div>
              <div className="bg-white/10 p-4 rounded-xl backdrop-blur">
                <div className="text-2xl font-bold mb-2">2</div>
                <h3 className="font-bold mb-2">Creation</h3>
                <p className="text-sm">Automated content generation across all formats</p>
              </div>
              <div className="bg-white/10 p-4 rounded-xl backdrop-blur">
                <div className="text-2xl font-bold mb-2">3</div>
                <h3 className="font-bold mb-2">Optimization</h3>
                <p className="text-sm">AI-driven SEO and engagement optimization</p>
              </div>
              <div className="bg-white/10 p-4 rounded-xl backdrop-blur">
                <div className="text-2xl font-bold mb-2">4</div>
                <h3 className="font-bold mb-2">Distribution</h3>
                <p className="text-sm">Multi-platform publishing and scheduling</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Success Stories</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="text-4xl text-[#d97757] mb-4">★★★★★</div>
              <p className="text-gray-700 mb-4">"Went from 2 blog posts per week to 20 posts per day with AI content creation. Traffic increased 500%!"</p>
              <p className="font-semibold text-gray-900">- Marketing Agency Owner</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="text-4xl text-[#d97757] mb-4">★★★★★</div>
              <p className="text-gray-700 mb-4">"AI content workflow saved 30 hours per week. Now I focus on strategy while AI handles creation."</p>
              <p className="font-semibold text-gray-900">- Content Creator</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="text-4xl text-[#d97757] mb-4">★★★★★</div>
              <p className="text-gray-700 mb-4">"Generated $100K in sales from AI-created content in the first quarter. ROI was incredible."</p>
              <p className="font-semibold text-gray-900">- E-commerce Business</p>
            </div>
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Master AI Content Creation Today</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of content creators, marketers, and businesses scaling their content with AI automation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://www.udemy.com/user/feelix-2" target="_blank" rel="noopener noreferrer"
               className="px-8 py-4 bg-[#d97757] text-white rounded-xl hover:bg-[#c86844] transition-colors font-semibold text-lg">
              Start AI Content Course
            </a>
            <a href="mailto:yash@explainx.ai"
               className="px-8 py-4 border-2 border-[#d97757] text-[#d97757] rounded-xl hover:bg-[#d97757] hover:text-white transition-colors font-semibold text-lg">
              Get Custom Content Strategy
            </a>
          </div>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-[#d97757]">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Free AI Content Audit</h3>
            <p className="text-gray-600 mb-6">Get a personalized analysis of your content strategy and AI optimization opportunities</p>
            <a href="mailto:yash@explainx.ai?subject=AI Content Audit Request"
               className="inline-block px-8 py-4 bg-[#d97757] text-white rounded-xl hover:bg-[#c86844] transition-colors font-semibold">
              Request Free Content Audit
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}