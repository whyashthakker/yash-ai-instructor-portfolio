import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Productivity Tools - Yash Thakker | Boost Productivity 10x with AI',
  description: 'Master AI productivity tools with Yash Thakker. Learn the best AI tools, automation workflows, and productivity strategies to 10x your output.',
  keywords: 'AI productivity tools, AI automation, productivity software, AI workflow, ChatGPT productivity, AI efficiency tools',
  robots: 'index, follow',
};

export default function AIProductivityToolsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
            AI Productivity Mastery
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Master 50+ AI tools and automation workflows to boost your productivity by 1000%. Work smarter, not harder.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://www.udemy.com/user/feelix-2" target="_blank" rel="noopener noreferrer"
               className="px-8 py-4 bg-[#d97757] text-white rounded-xl hover:bg-[#c86844] transition-colors font-semibold">
              Master AI Productivity
            </a>
            <a href="mailto:yash@explainx.ai"
               className="px-8 py-4 border-2 border-[#d97757] text-[#d97757] rounded-xl hover:bg-[#d97757] hover:text-white transition-colors font-semibold">
              Custom Productivity Setup
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <div className="text-center bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
            <div className="text-3xl font-bold text-[#d97757] mb-2">10x</div>
            <div className="text-gray-700 font-medium">Productivity Boost</div>
          </div>
          <div className="text-center bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl">
            <div className="text-3xl font-bold text-[#d97757] mb-2">50+</div>
            <div className="text-gray-700 font-medium">AI Tools Covered</div>
          </div>
          <div className="text-center bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl">
            <div className="text-3xl font-bold text-[#d97757] mb-2">80%</div>
            <div className="text-gray-700 font-medium">Tasks Automated</div>
          </div>
          <div className="text-center bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl">
            <div className="text-3xl font-bold text-[#d97757] mb-2">30+</div>
            <div className="text-gray-700 font-medium">Hours Saved/Week</div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Essential AI Productivity Categories</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-l-4 border-blue-500">
              <div className="text-3xl mb-4">✍️</div>
              <h3 className="text-xl font-semibold mb-3 text-[#d97757]">Writing & Content</h3>
              <p className="text-gray-600 mb-4">AI tools for content creation, writing assistance, and document automation.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• ChatGPT & Claude for writing</li>
                <li>• Grammarly AI corrections</li>
                <li>• Notion AI for documentation</li>
                <li>• Copy.ai for marketing content</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-l-4 border-green-500">
              <div className="text-3xl mb-4">🎨</div>
              <h3 className="text-xl font-semibold mb-3 text-[#d97757]">Design & Visual</h3>
              <p className="text-gray-600 mb-4">Create stunning visuals, graphics, and multimedia content with AI.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Midjourney for image creation</li>
                <li>• Canva AI design features</li>
                <li>• Runway for video editing</li>
                <li>• DALL-E for custom graphics</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-l-4 border-purple-500">
              <div className="text-3xl mb-4">📊</div>
              <h3 className="text-xl font-semibold mb-3 text-[#d97757]">Data & Analytics</h3>
              <p className="text-gray-600 mb-4">Analyze data, create reports, and gain insights with AI analytics tools.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• ChatGPT data analysis</li>
                <li>• MonkeyLearn text analytics</li>
                <li>• DataRobot automation</li>
                <li>• Tableau AI insights</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-l-4 border-red-500">
              <div className="text-3xl mb-4">🤖</div>
              <h3 className="text-xl font-semibold mb-3 text-[#d97757]">Automation & Workflow</h3>
              <p className="text-gray-600 mb-4">Automate repetitive tasks and create intelligent workflows.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Zapier AI automation</li>
                <li>• Make (Integromat) workflows</li>
                <li>• UiPath RPA solutions</li>
                <li>• Microsoft Power Automate</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-l-4 border-orange-500">
              <div className="text-3xl mb-4">💬</div>
              <h3 className="text-xl font-semibold mb-3 text-[#d97757]">Communication</h3>
              <p className="text-gray-600 mb-4">Enhance communication, scheduling, and meeting productivity.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Otter.ai meeting transcription</li>
                <li>• Calendly AI scheduling</li>
                <li>• Loom AI video messages</li>
                <li>• Crystal personality insights</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-l-4 border-indigo-500">
              <div className="text-3xl mb-4">💻</div>
              <h3 className="text-xl font-semibold mb-3 text-[#d97757]">Code & Development</h3>
              <p className="text-gray-600 mb-4">AI-powered coding assistance and development acceleration.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• GitHub Copilot coding</li>
                <li>• Cursor AI code editor</li>
                <li>• Replit AI assistance</li>
                <li>• TabNine code completion</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#d97757] to-[#c86844] text-white p-12 rounded-2xl mb-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Complete AI Productivity System</h2>
            <div className="grid md:grid-cols-4 gap-6 mt-8">
              <div className="bg-white/10 p-4 rounded-xl backdrop-blur">
                <div className="text-2xl font-bold mb-2">🎯</div>
                <h3 className="font-bold mb-2">Assessment</h3>
                <p className="text-sm">Identify productivity bottlenecks and AI opportunities</p>
              </div>
              <div className="bg-white/10 p-4 rounded-xl backdrop-blur">
                <div className="text-2xl font-bold mb-2">🛠️</div>
                <h3 className="font-bold mb-2">Tool Selection</h3>
                <p className="text-sm">Choose the perfect AI tools for your specific needs</p>
              </div>
              <div className="bg-white/10 p-4 rounded-xl backdrop-blur">
                <div className="text-2xl font-bold mb-2">⚙️</div>
                <h3 className="font-bold mb-2">Integration</h3>
                <p className="text-sm">Connect tools and create seamless workflows</p>
              </div>
              <div className="bg-white/10 p-4 rounded-xl backdrop-blur">
                <div className="text-2xl font-bold mb-2">📈</div>
                <h3 className="font-bold mb-2">Optimization</h3>
                <p className="text-sm">Measure results and continuously improve efficiency</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">My Personal AI Productivity Stack</h2>
          <div className="bg-gray-50 p-8 rounded-2xl">
            <p className="text-center text-gray-700 mb-8">The exact AI tools and workflows I use to manage 160K+ students, build products, and create content</p>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-[#d97757]">Daily Workflow Tools</h3>
                <div className="space-y-3">
                  <div className="flex items-center bg-white p-3 rounded-lg">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-xs mr-3">1</div>
                    <div>
                      <div className="font-semibold">ChatGPT Plus</div>
                      <div className="text-sm text-gray-600">Primary AI assistant for all tasks</div>
                    </div>
                  </div>
                  <div className="flex items-center bg-white p-3 rounded-lg">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xs mr-3">2</div>
                    <div>
                      <div className="font-semibold">Notion AI</div>
                      <div className="text-sm text-gray-600">Documentation and knowledge management</div>
                    </div>
                  </div>
                  <div className="flex items-center bg-white p-3 rounded-lg">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xs mr-3">3</div>
                    <div>
                      <div className="font-semibold">Zapier</div>
                      <div className="text-sm text-gray-600">Automation between all tools</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 text-[#d97757]">Content & Business Tools</h3>
                <div className="space-y-3">
                  <div className="flex items-center bg-white p-3 rounded-lg">
                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-xs mr-3">4</div>
                    <div>
                      <div className="font-semibold">Cursor AI</div>
                      <div className="text-sm text-gray-600">AI-powered code and app development</div>
                    </div>
                  </div>
                  <div className="flex items-center bg-white p-3 rounded-lg">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xs mr-3">5</div>
                    <div>
                      <div className="font-semibold">Midjourney</div>
                      <div className="text-sm text-gray-600">Course thumbnails and marketing visuals</div>
                    </div>
                  </div>
                  <div className="flex items-center bg-white p-3 rounded-lg">
                    <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-xs mr-3">6</div>
                    <div>
                      <div className="font-semibold">Loom AI</div>
                      <div className="text-sm text-gray-600">Course recordings and student communications</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Productivity Success Stories</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="text-4xl text-[#d97757] mb-4">★★★★★</div>
              <p className="text-gray-700 mb-4">"Reduced content creation time from 8 hours to 45 minutes per day. AI tools gave me my life back!"</p>
              <p className="font-semibold text-gray-900">- Jennifer L., Content Creator</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="text-4xl text-[#d97757] mb-4">★★★★★</div>
              <p className="text-gray-700 mb-4">"Automated 90% of my administrative tasks. Now I focus only on high-value activities. Revenue up 200%."</p>
              <p className="font-semibold text-gray-900">- Mark T., Business Owner</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="text-4xl text-[#d97757] mb-4">★★★★★</div>
              <p className="text-gray-700 mb-4">"My team productivity increased 400%. We deliver projects 3x faster using the AI workflows from this course."</p>
              <p className="font-semibold text-gray-900">- Sarah K., Team Leader</p>
            </div>
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Transform Your Productivity Today</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Stop working harder and start working smarter. Master the AI tools that will 10x your productivity and free up 30+ hours per week.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://www.udemy.com/user/feelix-2" target="_blank" rel="noopener noreferrer"
               className="px-8 py-4 bg-[#d97757] text-white rounded-xl hover:bg-[#c86844] transition-colors font-semibold text-lg">
              Master AI Productivity Tools
            </a>
            <a href="mailto:yash@explainx.ai"
               className="px-8 py-4 border-2 border-[#d97757] text-[#d97757] rounded-xl hover:bg-[#d97757] hover:text-white transition-colors font-semibold text-lg">
              Get Custom Setup
            </a>
          </div>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-[#d97757]">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Free Productivity Assessment</h3>
            <p className="text-gray-600 mb-6">Get a personalized analysis of your current workflow and AI tool recommendations</p>
            <a href="mailto:yash@explainx.ai?subject=AI Productivity Assessment"
               className="inline-block px-8 py-4 bg-[#d97757] text-white rounded-xl hover:bg-[#c86844] transition-colors font-semibold">
              Get Free Assessment
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}