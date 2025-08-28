import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ChatGPT Course - Yash Thakker | Master ChatGPT & GPT-4 for Business',
  description: 'Complete ChatGPT course by Yash Thakker. Learn ChatGPT, GPT-4, advanced prompting, and business applications. Transform your productivity today.',
  keywords: 'ChatGPT course, GPT-4 training, ChatGPT for business, AI prompting course, OpenAI ChatGPT, ChatGPT tutorial',
  robots: 'index, follow',
};

export default function ChatGPTCoursePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <div className="inline-block bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
            🚀 MOST POPULAR COURSE
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
            Complete ChatGPT Mastery
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Master ChatGPT and GPT-4 from beginner to expert. Learn advanced prompting, business applications, and automation workflows.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://www.udemy.com/user/feelix-2" target="_blank" rel="noopener noreferrer"
               className="px-8 py-4 bg-[#d97757] text-white rounded-xl hover:bg-[#c86844] transition-colors font-semibold">
              Enroll in ChatGPT Course
            </a>
            <a href="mailto:yash@explainx.ai"
               className="px-8 py-4 border-2 border-[#d97757] text-[#d97757] rounded-xl hover:bg-[#d97757] hover:text-white transition-colors font-semibold">
              Custom ChatGPT Training
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <div className="text-center bg-green-50 p-6 rounded-xl border-2 border-green-200">
            <div className="text-3xl font-bold text-green-600 mb-2">15K+</div>
            <div className="text-gray-700 font-medium">Students Enrolled</div>
          </div>
          <div className="text-center bg-blue-50 p-6 rounded-xl border-2 border-blue-200">
            <div className="text-3xl font-bold text-blue-600 mb-2">4.9★</div>
            <div className="text-gray-700 font-medium">Course Rating</div>
          </div>
          <div className="text-center bg-purple-50 p-6 rounded-xl border-2 border-purple-200">
            <div className="text-3xl font-bold text-purple-600 mb-2">8+ Hours</div>
            <div className="text-gray-700 font-medium">Video Content</div>
          </div>
          <div className="text-center bg-orange-50 p-6 rounded-xl border-2 border-orange-200">
            <div className="text-3xl font-bold text-orange-600 mb-2">50+</div>
            <div className="text-gray-700 font-medium">Practical Examples</div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">What You'll Master</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-l-4 border-green-500">
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-3 text-[#d97757]">ChatGPT Fundamentals</h3>
              <p className="text-gray-600 mb-4">Complete understanding of ChatGPT capabilities, limitations, and best practices.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• GPT-3.5 vs GPT-4 differences</li>
                <li>• Understanding AI responses</li>
                <li>• Context and memory management</li>
                <li>• Model limitations and biases</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-l-4 border-blue-500">
              <div className="text-3xl mb-4">🧠</div>
              <h3 className="text-xl font-semibold mb-3 text-[#d97757]">Advanced Prompting Techniques</h3>
              <p className="text-gray-600 mb-4">Master sophisticated prompting strategies for consistent, high-quality results.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Chain-of-thought prompting</li>
                <li>• Role-based instructions</li>
                <li>• Few-shot learning examples</li>
                <li>• Prompt optimization strategies</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-l-4 border-purple-500">
              <div className="text-3xl mb-4">💼</div>
              <h3 className="text-xl font-semibold mb-3 text-[#d97757]">Business Applications</h3>
              <p className="text-gray-600 mb-4">Real-world business use cases and professional implementation strategies.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Content creation workflows</li>
                <li>• Customer service automation</li>
                <li>• Data analysis and insights</li>
                <li>• Marketing and sales support</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-l-4 border-red-500">
              <div className="text-3xl mb-4">🔧</div>
              <h3 className="text-xl font-semibold mb-3 text-[#d97757]">API Integration & Automation</h3>
              <p className="text-gray-600 mb-4">Connect ChatGPT with other tools and create automated workflows.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• OpenAI API setup</li>
                <li>• Custom applications</li>
                <li>• Zapier integrations</li>
                <li>• Workflow automation</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-l-4 border-orange-500">
              <div className="text-3xl mb-4">✍️</div>
              <h3 className="text-xl font-semibold mb-3 text-[#d97757]">Content Creation Mastery</h3>
              <p className="text-gray-600 mb-4">Create high-quality content for blogs, social media, and marketing materials.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Blog post generation</li>
                <li>• Social media content</li>
                <li>• Email marketing copy</li>
                <li>• Creative writing techniques</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-l-4 border-indigo-500">
              <div className="text-3xl mb-4">🛡️</div>
              <h3 className="text-xl font-semibold mb-3 text-[#d97757]">Ethics & Best Practices</h3>
              <p className="text-gray-600 mb-4">Responsible AI usage, ethical considerations, and professional guidelines.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• AI ethics and responsibility</li>
                <li>• Fact-checking and verification</li>
                <li>• Privacy and data security</li>
                <li>• Professional usage guidelines</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-500 to-blue-600 text-white p-12 rounded-2xl mb-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Course Curriculum</h2>
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div className="bg-white/10 p-6 rounded-xl backdrop-blur">
                <h3 className="text-xl font-bold mb-3">Module 1-2: Foundations</h3>
                <ul className="text-left space-y-2 text-sm">
                  <li>• Introduction to ChatGPT and GPT-4</li>
                  <li>• Setting up accounts and access</li>
                  <li>• Basic prompting techniques</li>
                  <li>• Understanding AI responses</li>
                </ul>
              </div>
              <div className="bg-white/10 p-6 rounded-xl backdrop-blur">
                <h3 className="text-xl font-bold mb-3">Module 3-4: Advanced Prompting</h3>
                <ul className="text-left space-y-2 text-sm">
                  <li>• Chain-of-thought reasoning</li>
                  <li>• Role-based prompting</li>
                  <li>• Few-shot learning techniques</li>
                  <li>• Prompt optimization strategies</li>
                </ul>
              </div>
              <div className="bg-white/10 p-6 rounded-xl backdrop-blur">
                <h3 className="text-xl font-bold mb-3">Module 5-6: Business Applications</h3>
                <ul className="text-left space-y-2 text-sm">
                  <li>• Content creation workflows</li>
                  <li>• Business communication</li>
                  <li>• Data analysis and reporting</li>
                  <li>• Customer service automation</li>
                </ul>
              </div>
              <div className="bg-white/10 p-6 rounded-xl backdrop-blur">
                <h3 className="text-xl font-bold mb-3">Module 7-8: Integration & Scaling</h3>
                <ul className="text-left space-y-2 text-sm">
                  <li>• API integration and automation</li>
                  <li>• Custom applications building</li>
                  <li>• Team implementation strategies</li>
                  <li>• ROI measurement and optimization</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Student Success Stories</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">S</div>
                <div className="ml-4">
                  <h4 className="font-semibold">Sarah Johnson</h4>
                  <p className="text-sm text-gray-600">Marketing Manager</p>
                </div>
              </div>
              <div className="text-4xl text-[#d97757] mb-3">★★★★★</div>
              <p className="text-gray-700 italic">"This course transformed my productivity. I now create a month's worth of content in a single day using ChatGPT!"</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">M</div>
                <div className="ml-4">
                  <h4 className="font-semibold">Mike Chen</h4>
                  <p className="text-sm text-gray-600">Small Business Owner</p>
                </div>
              </div>
              <div className="text-4xl text-[#d97757] mb-3">★★★★★</div>
              <p className="text-gray-700 italic">"Automated 80% of my customer service with ChatGPT. Saved 20 hours per week and improved customer satisfaction."</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">A</div>
                <div className="ml-4">
                  <h4 className="font-semibold">Alex Rodriguez</h4>
                  <p className="text-sm text-gray-600">Consultant</p>
                </div>
              </div>
              <div className="text-4xl text-[#d97757] mb-3">★★★★★</div>
              <p className="text-gray-700 italic">"Increased my consulting rates by 150% after implementing ChatGPT workflows. Best investment I've made!"</p>
            </div>
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Start Your ChatGPT Journey Today</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join 15,000+ students who have mastered ChatGPT and transformed their productivity and business results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://www.udemy.com/user/feelix-2" target="_blank" rel="noopener noreferrer"
               className="px-8 py-4 bg-[#d97757] text-white rounded-xl hover:bg-[#c86844] transition-colors font-semibold text-lg">
              Enroll in Course Now
            </a>
            <a href="mailto:yash@explainx.ai"
               className="px-8 py-4 border-2 border-[#d97757] text-[#d97757] rounded-xl hover:bg-[#d97757] hover:text-white transition-colors font-semibold text-lg">
              Get Team Training
            </a>
          </div>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-green-500">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">30-Day Money-Back Guarantee</h3>
            <p className="text-gray-600 mb-6">Try the course risk-free. If you're not satisfied with the results, get a full refund within 30 days.</p>
            <div className="flex justify-center space-x-8 text-sm">
              <div>✓ Lifetime Access</div>
              <div>✓ Mobile & Desktop</div>
              <div>✓ Certificate of Completion</div>
              <div>✓ Community Access</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}