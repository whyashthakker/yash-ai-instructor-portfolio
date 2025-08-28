import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AI for Business - Yash Thakker | Transform Your Business with AI',
  description: 'Learn how to implement AI in your business with expert guidance from Yash Thakker. Increase productivity, reduce costs, and drive growth with AI solutions.',
  keywords: 'AI for business, business AI solutions, AI implementation, AI productivity, AI automation, business AI transformation',
  robots: 'index, follow',
};

export default function AIForBusinessPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
            AI for Business
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Transform your business operations with practical AI solutions. Increase productivity by 300% and reduce costs by 50% with proven AI strategies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://www.udemy.com/user/feelix-2" target="_blank" rel="noopener noreferrer"
               className="px-8 py-4 bg-[#d97757] text-white rounded-xl hover:bg-[#c86844] transition-colors font-semibold">
              Start AI Business Course
            </a>
            <a href="mailto:yash@explainx.ai"
               className="px-8 py-4 border-2 border-[#d97757] text-[#d97757] rounded-xl hover:bg-[#d97757] hover:text-white transition-colors font-semibold">
              Get Business AI Consultation
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <div className="text-center bg-blue-50 p-6 rounded-xl">
            <div className="text-3xl font-bold text-[#d97757] mb-2">300%</div>
            <div className="text-gray-600">Productivity Increase</div>
          </div>
          <div className="text-center bg-green-50 p-6 rounded-xl">
            <div className="text-3xl font-bold text-[#d97757] mb-2">50%</div>
            <div className="text-gray-600">Cost Reduction</div>
          </div>
          <div className="text-center bg-purple-50 p-6 rounded-xl">
            <div className="text-3xl font-bold text-[#d97757] mb-2">24/7</div>
            <div className="text-gray-600">Automated Operations</div>
          </div>
          <div className="text-center bg-orange-50 p-6 rounded-xl">
            <div className="text-3xl font-bold text-[#d97757] mb-2">ROI</div>
            <div className="text-gray-600">10x Return on Investment</div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">AI Business Applications</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">📧</div>
              <h3 className="text-xl font-semibold mb-3 text-[#d97757]">Customer Service Automation</h3>
              <p className="text-gray-600 mb-4">AI chatbots and support systems that handle 80% of customer inquiries automatically.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• 24/7 customer support</li>
                <li>• Multi-language support</li>
                <li>• Instant response times</li>
                <li>• Human escalation</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">📝</div>
              <h3 className="text-xl font-semibold mb-3 text-[#d97757]">Content Creation & Marketing</h3>
              <p className="text-gray-600 mb-4">Automated content generation for blogs, social media, and marketing campaigns.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Blog post generation</li>
                <li>• Social media content</li>
                <li>• Email campaigns</li>
                <li>• Ad copywriting</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">📊</div>
              <h3 className="text-xl font-semibold mb-3 text-[#d97757]">Data Analysis & Insights</h3>
              <p className="text-gray-600 mb-4">AI-powered analytics for better business decisions and predictive insights.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Sales forecasting</li>
                <li>• Customer behavior analysis</li>
                <li>• Market trend prediction</li>
                <li>• Performance optimization</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">⚙️</div>
              <h3 className="text-xl font-semibold mb-3 text-[#d97757]">Process Automation</h3>
              <p className="text-gray-600 mb-4">Streamline repetitive tasks and workflows with intelligent automation.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Invoice processing</li>
                <li>• Data entry automation</li>
                <li>• Workflow orchestration</li>
                <li>• Document management</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-3 text-[#d97757]">Personalized Recommendations</h3>
              <p className="text-gray-600 mb-4">AI-driven recommendation engines for products, services, and content.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Product recommendations</li>
                <li>• Content personalization</li>
                <li>• Customer segmentation</li>
                <li>• Targeted marketing</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold mb-3 text-[#d97757]">Quality Control & Monitoring</h3>
              <p className="text-gray-600 mb-4">AI-powered quality assurance and performance monitoring systems.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Automated testing</li>
                <li>• Error detection</li>
                <li>• Performance monitoring</li>
                <li>• Predictive maintenance</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#d97757] to-[#c86844] text-white p-12 rounded-2xl mb-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Real Business Impact</h2>
            <div className="grid md:grid-cols-3 gap-8 mt-8">
              <div className="bg-white/10 p-6 rounded-xl backdrop-blur">
                <h3 className="text-2xl font-bold mb-2">olly.social</h3>
                <p className="mb-2">AI Social Media Extension</p>
                <div className="text-sm">
                  <div>25,000+ Users</div>
                  <div>5,000+ Paid Customers</div>
                  <div>$50K+ Monthly Revenue</div>
                </div>
              </div>
              <div className="bg-white/10 p-6 rounded-xl backdrop-blur">
                <h3 className="text-2xl font-bold mb-2">snapy.ai</h3>
                <p className="mb-2">AI Content Platform</p>
                <div className="text-sm">
                  <div>35,000+ Users</div>
                  <div>Content Automation</div>
                  <div>70% Time Savings</div>
                </div>
              </div>
              <div className="bg-white/10 p-6 rounded-xl backdrop-blur">
                <h3 className="text-2xl font-bold mb-2">Fortune 500</h3>
                <p className="mb-2">Enterprise Solutions</p>
                <div className="text-sm">
                  <div>40% Efficiency Gain</div>
                  <div>$10M+ Cost Savings</div>
                  <div>Millions of Users</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Business AI Implementation Guide</h2>
          <div className="space-y-6">
            
            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-500">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">1</div>
                <h3 className="text-xl font-semibold ml-4">Identify AI Opportunities</h3>
              </div>
              <div className="ml-16 text-gray-600">
                <p className="mb-3">Analyze your business processes to identify areas where AI can provide maximum impact.</p>
                <ul className="grid md:grid-cols-2 gap-2 text-sm">
                  <li>• Process audit and mapping</li>
                  <li>• ROI opportunity assessment</li>
                  <li>• Resource requirement analysis</li>
                  <li>• Priority use case selection</li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-green-500">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">2</div>
                <h3 className="text-xl font-semibold ml-4">Start with Quick Wins</h3>
              </div>
              <div className="ml-16 text-gray-600">
                <p className="mb-3">Implement high-impact, low-complexity AI solutions to build momentum and demonstrate value.</p>
                <ul className="grid md:grid-cols-2 gap-2 text-sm">
                  <li>• ChatGPT workflow integration</li>
                  <li>• Automated email responses</li>
                  <li>• Content generation tools</li>
                  <li>• Simple data analysis</li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-purple-500">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">3</div>
                <h3 className="text-xl font-semibold ml-4">Scale and Optimize</h3>
              </div>
              <div className="ml-16 text-gray-600">
                <p className="mb-3">Expand successful AI implementations across departments and optimize for maximum efficiency.</p>
                <ul className="grid md:grid-cols-2 gap-2 text-sm">
                  <li>• Department-wide deployment</li>
                  <li>• Advanced AI integrations</li>
                  <li>• Performance monitoring</li>
                  <li>• Continuous improvement</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Ready to Transform Your Business with AI?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses that have increased productivity and reduced costs with practical AI implementations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://www.udemy.com/user/feelix-2" target="_blank" rel="noopener noreferrer"
               className="px-8 py-4 bg-[#d97757] text-white rounded-xl hover:bg-[#c86844] transition-colors font-semibold text-lg">
              Start AI for Business Course
            </a>
            <Link href="/ai-consulting"
               className="px-8 py-4 border-2 border-[#d97757] text-[#d97757] rounded-xl hover:bg-[#d97757] hover:text-white transition-colors font-semibold text-lg">
              Get Business AI Consultation
            </Link>
          </div>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-[#d97757]">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Free Business AI Assessment</h3>
            <p className="text-gray-600 mb-6">Get a personalized AI implementation roadmap for your business</p>
            <a href="mailto:yash@explainx.ai?subject=Business AI Assessment Request"
               className="inline-block px-8 py-4 bg-[#d97757] text-white rounded-xl hover:bg-[#c86844] transition-colors font-semibold">
              Request Free Assessment
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}