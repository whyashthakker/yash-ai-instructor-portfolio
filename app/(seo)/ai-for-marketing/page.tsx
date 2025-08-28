import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI for Marketing - Yash Thakker | Transform Your Marketing with AI',
  description: 'Master AI-powered marketing with Yash Thakker. Learn AI marketing tools, automation, content creation, and strategies that increase ROI by 500%.',
  keywords: 'AI marketing, AI marketing tools, marketing automation, AI content marketing, digital marketing AI, AI advertising',
  robots: 'index, follow',
};

export default function AIForMarketingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
            AI for Marketing Mastery
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Transform your marketing results with AI-powered strategies, automation, and tools that increase ROI by 500% and reduce costs by 70%.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://www.udemy.com/user/feelix-2" target="_blank" rel="noopener noreferrer"
               className="px-8 py-4 bg-[#d97757] text-white rounded-xl hover:bg-[#c86844] transition-colors font-semibold">
              Master AI Marketing
            </a>
            <a href="mailto:yash@explainx.ai"
               className="px-8 py-4 border-2 border-[#d97757] text-[#d97757] rounded-xl hover:bg-[#d97757] hover:text-white transition-colors font-semibold">
              Custom Marketing AI Setup
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <div className="text-center bg-gradient-to-br from-pink-50 to-red-100 p-6 rounded-xl">
            <div className="text-3xl font-bold text-[#d97757] mb-2">500%</div>
            <div className="text-gray-700 font-medium">ROI Increase</div>
          </div>
          <div className="text-center bg-gradient-to-br from-blue-50 to-purple-100 p-6 rounded-xl">
            <div className="text-3xl font-bold text-[#d97757] mb-2">70%</div>
            <div className="text-gray-700 font-medium">Cost Reduction</div>
          </div>
          <div className="text-center bg-gradient-to-br from-green-50 to-blue-100 p-6 rounded-xl">
            <div className="text-3xl font-bold text-[#d97757] mb-2">10x</div>
            <div className="text-gray-700 font-medium">Content Output</div>
          </div>
          <div className="text-center bg-gradient-to-br from-orange-50 to-yellow-100 p-6 rounded-xl">
            <div className="text-3xl font-bold text-[#d97757] mb-2">24/7</div>
            <div className="text-gray-700 font-medium">Automation</div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">AI Marketing Solutions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-l-4 border-pink-500">
              <div className="text-3xl mb-4">📱</div>
              <h3 className="text-xl font-semibold mb-3 text-[#d97757]">Social Media Marketing</h3>
              <p className="text-gray-600 mb-4">Automate social media content, scheduling, and engagement across all platforms.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Content generation for all platforms</li>
                <li>• Hashtag optimization</li>
                <li>• Automated posting schedules</li>
                <li>• Engagement automation</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-l-4 border-blue-500">
              <div className="text-3xl mb-4">📧</div>
              <h3 className="text-xl font-semibold mb-3 text-[#d97757]">Email Marketing Automation</h3>
              <p className="text-gray-600 mb-4">Create personalized email campaigns that convert 3x better with AI.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Personalized email sequences</li>
                <li>• Subject line optimization</li>
                <li>• A/B testing automation</li>
                <li>• Behavioral triggers</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-l-4 border-green-500">
              <div className="text-3xl mb-4">✍️</div>
              <h3 className="text-xl font-semibold mb-3 text-[#d97757]">Content Marketing AI</h3>
              <p className="text-gray-600 mb-4">Generate high-quality blog posts, articles, and marketing content at scale.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• SEO-optimized blog content</li>
                <li>• Marketing copy generation</li>
                <li>• Content calendars</li>
                <li>• Multi-format content</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-l-4 border-purple-500">
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-3 text-[#d97757]">Paid Advertising Optimization</h3>
              <p className="text-gray-600 mb-4">Create high-converting ad copy and optimize campaigns with AI insights.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Ad copy generation</li>
                <li>• Audience targeting</li>
                <li>• Bid optimization</li>
                <li>• Performance analysis</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-l-4 border-red-500">
              <div className="text-3xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold mb-3 text-[#d97757]">SEO & Content Optimization</h3>
              <p className="text-gray-600 mb-4">Optimize content for search engines and improve rankings with AI analysis.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Keyword research automation</li>
                <li>• Content optimization</li>
                <li>• Competitor analysis</li>
                <li>• Technical SEO audits</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-l-4 border-orange-500">
              <div className="text-3xl mb-4">📊</div>
              <h3 className="text-xl font-semibold mb-3 text-[#d97757]">Marketing Analytics & Insights</h3>
              <p className="text-gray-600 mb-4">Get deeper insights into marketing performance and customer behavior.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Customer journey mapping</li>
                <li>• Predictive analytics</li>
                <li>• ROI measurement</li>
                <li>• Attribution modeling</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#d97757] to-[#c86844] text-white p-12 rounded-2xl mb-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Complete AI Marketing Workflow</h2>
            <div className="grid md:grid-cols-5 gap-4 mt-8">
              <div className="bg-white/10 p-4 rounded-xl backdrop-blur">
                <div className="text-2xl font-bold mb-2">1</div>
                <h3 className="font-bold mb-2">Research</h3>
                <p className="text-xs">AI-powered market and competitor analysis</p>
              </div>
              <div className="bg-white/10 p-4 rounded-xl backdrop-blur">
                <div className="text-2xl font-bold mb-2">2</div>
                <h3 className="font-bold mb-2">Strategy</h3>
                <p className="text-xs">AI-driven marketing strategy and planning</p>
              </div>
              <div className="bg-white/10 p-4 rounded-xl backdrop-blur">
                <div className="text-2xl font-bold mb-2">3</div>
                <h3 className="font-bold mb-2">Create</h3>
                <p className="text-xs">Automated content and campaign creation</p>
              </div>
              <div className="bg-white/10 p-4 rounded-xl backdrop-blur">
                <div className="text-2xl font-bold mb-2">4</div>
                <h3 className="font-bold mb-2">Launch</h3>
                <p className="text-xs">Multi-channel campaign deployment</p>
              </div>
              <div className="bg-white/10 p-4 rounded-xl backdrop-blur">
                <div className="text-2xl font-bold mb-2">5</div>
                <h3 className="font-bold mb-2">Optimize</h3>
                <p className="text-xs">Real-time optimization and scaling</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Marketing Success Stories</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold">E</div>
                <div className="ml-4">
                  <h4 className="font-semibold">Emma Rodriguez</h4>
                  <p className="text-sm text-gray-600">E-commerce Brand</p>
                </div>
              </div>
              <div className="text-4xl text-[#d97757] mb-3">★★★★★</div>
              <p className="text-gray-700 italic mb-3">"AI marketing automation increased our revenue by 400% in 6 months. We went from $50K to $250K monthly."</p>
              <p className="text-sm text-green-600 font-semibold">Results: $250K monthly revenue</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">D</div>
                <div className="ml-4">
                  <h4 className="font-semibold">David Chen</h4>
                  <p className="text-sm text-gray-600">Digital Agency</p>
                </div>
              </div>
              <div className="text-4xl text-[#d97757] mb-3">★★★★★</div>
              <p className="text-gray-700 italic mb-3">"Reduced content creation costs by 80% while improving quality. Now serving 3x more clients profitably."</p>
              <p className="text-sm text-green-600 font-semibold">Results: 80% cost reduction</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">L</div>
                <div className="ml-4">
                  <h4 className="font-semibold">Lisa Park</h4>
                  <p className="text-sm text-gray-600">SaaS Startup</p>
                </div>
              </div>
              <div className="text-4xl text-[#d97757] mb-3">★★★★★</div>
              <p className="text-gray-700 italic mb-3">"Lead generation increased 600% with AI-powered campaigns. We scaled from 100 to 1000 customers."</p>
              <p className="text-sm text-green-600 font-semibold">Results: 600% lead increase</p>
            </div>
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Transform Your Marketing with AI</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of marketers who have revolutionized their results with AI-powered marketing strategies and automation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://www.udemy.com/user/feelix-2" target="_blank" rel="noopener noreferrer"
               className="px-8 py-4 bg-[#d97757] text-white rounded-xl hover:bg-[#c86844] transition-colors font-semibold text-lg">
              Start AI Marketing Course
            </a>
            <a href="mailto:yash@explainx.ai"
               className="px-8 py-4 border-2 border-[#d97757] text-[#d97757] rounded-xl hover:bg-[#d97757] hover:text-white transition-colors font-semibold text-lg">
              Get Marketing AI Consultation
            </a>
          </div>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-[#d97757]">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Free Marketing AI Audit</h3>
            <p className="text-gray-600 mb-6">Get a personalized analysis of your current marketing and AI optimization opportunities</p>
            <a href="mailto:yash@explainx.ai?subject=Marketing AI Audit Request"
               className="inline-block px-8 py-4 bg-[#d97757] text-white rounded-xl hover:bg-[#c86844] transition-colors font-semibold">
              Request Free Marketing Audit
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}