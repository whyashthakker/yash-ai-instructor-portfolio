import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Prompt Engineering Course - Yash Thakker | Master AI Prompting Techniques',
  description: 'Master prompt engineering with expert training from Yash Thakker. Learn advanced prompting techniques for ChatGPT, Claude, and other AI models.',
  keywords: 'prompt engineering course, AI prompting, ChatGPT prompts, prompt optimization, AI communication, prompt design',
  robots: 'index, follow',
};

export default function PromptEngineeringCoursePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
            Prompt Engineering Mastery
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Master the art and science of prompt engineering. Unlock 10x productivity with advanced AI communication techniques.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://www.udemy.com/user/feelix-2" target="_blank" rel="noopener noreferrer"
               className="px-8 py-4 bg-[#d97757] text-white rounded-xl hover:bg-[#c86844] transition-colors font-semibold">
              Enroll in Course
            </a>
            <a href="mailto:yash@explainx.ai"
               className="px-8 py-4 border-2 border-[#d97757] text-[#d97757] rounded-xl hover:bg-[#d97757] hover:text-white transition-colors font-semibold">
              Custom Training
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Why Prompt Engineering?</h2>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-3 text-blue-800">🚀 10x Productivity Boost</h3>
                <p className="text-blue-700">Master prompting techniques can increase your AI output quality by 1000% and reduce time spent by 90%.</p>
              </div>
              <div className="bg-green-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-3 text-green-800">💰 High-Demand Skill</h3>
                <p className="text-green-700">Prompt engineers earn $150K-$300K annually. It's the most sought-after skill in the AI revolution.</p>
              </div>
              <div className="bg-purple-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-3 text-purple-800">🎯 Universal Application</h3>
                <p className="text-purple-700">Works across all AI models - ChatGPT, Claude, Gemini, Midjourney, and future AI systems.</p>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Course Highlights</h2>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="grid grid-cols-2 gap-6 text-center mb-6">
                <div>
                  <div className="text-3xl font-bold text-[#d97757]">50+</div>
                  <div className="text-gray-600">Prompting Techniques</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#d97757]">100+</div>
                  <div className="text-gray-600">Ready-to-Use Prompts</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#d97757]">20+</div>
                  <div className="text-gray-600">Real-World Projects</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#d97757]">4.9★</div>
                  <div className="text-gray-600">Student Rating</div>
                </div>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li>✓ Beginner to advanced techniques</li>
                <li>✓ Industry-specific prompt templates</li>
                <li>✓ Hands-on practical exercises</li>
                <li>✓ Prompt optimization strategies</li>
                <li>✓ AI model comparison guide</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Advanced Prompting Techniques You'll Master</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-4">🧠</div>
              <h3 className="text-xl font-semibold mb-3 text-[#d97757]">Chain-of-Thought</h3>
              <p className="text-gray-600">Guide AI through step-by-step reasoning for complex problem-solving and analysis.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-3 text-[#d97757]">Few-Shot Learning</h3>
              <p className="text-gray-600">Teach AI by example with strategic input-output pairs for consistent results.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-4">🎭</div>
              <h3 className="text-xl font-semibold mb-3 text-[#d97757]">Role-Based Prompting</h3>
              <p className="text-gray-600">Assign specific roles to AI for expertise in different domains and perspectives.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-4">🔄</div>
              <h3 className="text-xl font-semibold mb-3 text-[#d97757]">Iterative Refinement</h3>
              <p className="text-gray-600">Progressive prompt improvement techniques for optimal AI performance.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-4">📊</div>
              <h3 className="text-xl font-semibold mb-3 text-[#d97757]">Structured Outputs</h3>
              <p className="text-gray-600">Generate formatted data, tables, code, and structured information reliably.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-4">🛡️</div>
              <h3 className="text-xl font-semibold mb-3 text-[#d97757]">Prompt Security</h3>
              <p className="text-gray-600">Protect against prompt injection and ensure reliable AI behavior.</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#d97757] to-[#c86844] text-white p-12 rounded-2xl mb-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Industry-Specific Prompt Templates</h2>
            <div className="grid md:grid-cols-4 gap-6 mt-8">
              <div className="bg-white/10 p-4 rounded-xl backdrop-blur">
                <h3 className="font-bold mb-2">📈 Marketing</h3>
                <ul className="text-sm space-y-1">
                  <li>• Ad copywriting</li>
                  <li>• Content strategy</li>
                  <li>• SEO optimization</li>
                </ul>
              </div>
              <div className="bg-white/10 p-4 rounded-xl backdrop-blur">
                <h3 className="font-bold mb-2">💼 Business</h3>
                <ul className="text-sm space-y-1">
                  <li>• Strategy analysis</li>
                  <li>• Report writing</li>
                  <li>• Decision making</li>
                </ul>
              </div>
              <div className="bg-white/10 p-4 rounded-xl backdrop-blur">
                <h3 className="font-bold mb-2">💻 Development</h3>
                <ul className="text-sm space-y-1">
                  <li>• Code generation</li>
                  <li>• Debugging</li>
                  <li>• Documentation</li>
                </ul>
              </div>
              <div className="bg-white/10 p-4 rounded-xl backdrop-blur">
                <h3 className="font-bold mb-2">🎓 Education</h3>
                <ul className="text-sm space-y-1">
                  <li>• Lesson planning</li>
                  <li>• Assessment</li>
                  <li>• Research</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Course Modules</h2>
          <div className="space-y-6">
            
            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-500">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">1</div>
                <h3 className="text-xl font-semibold ml-4">Foundation of Prompt Engineering</h3>
              </div>
              <div className="ml-16 text-gray-600">
                <p className="mb-3">Understanding AI models, tokenization, context windows, and basic prompt structure.</p>
                <ul className="grid md:grid-cols-2 gap-2 text-sm">
                  <li>• How AI models work</li>
                  <li>• Prompt anatomy</li>
                  <li>• Context and memory</li>
                  <li>• Model limitations</li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-green-500">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">2</div>
                <h3 className="text-xl font-semibold ml-4">Advanced Prompting Strategies</h3>
              </div>
              <div className="ml-16 text-gray-600">
                <p className="mb-3">Master sophisticated techniques for complex tasks and consistent results.</p>
                <ul className="grid md:grid-cols-2 gap-2 text-sm">
                  <li>• Chain-of-thought reasoning</li>
                  <li>• Few-shot and zero-shot learning</li>
                  <li>• Role-based prompting</li>
                  <li>• Prompt chaining</li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-purple-500">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">3</div>
                <h3 className="text-xl font-semibold ml-4">Business Applications</h3>
              </div>
              <div className="ml-16 text-gray-600">
                <p className="mb-3">Apply prompting techniques to real business scenarios and workflows.</p>
                <ul className="grid md:grid-cols-2 gap-2 text-sm">
                  <li>• Content creation systems</li>
                  <li>• Customer service automation</li>
                  <li>• Data analysis prompts</li>
                  <li>• Marketing campaigns</li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-red-500">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white font-bold">4</div>
                <h3 className="text-xl font-semibold ml-4">Optimization & Security</h3>
              </div>
              <div className="ml-16 text-gray-600">
                <p className="mb-3">Fine-tune prompts for performance and protect against common issues.</p>
                <ul className="grid md:grid-cols-2 gap-2 text-sm">
                  <li>• Prompt optimization techniques</li>
                  <li>• A/B testing prompts</li>
                  <li>• Security and prompt injection</li>
                  <li>• Cost optimization</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Student Success Stories</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="text-4xl text-[#d97757] mb-4">★★★★★</div>
              <p className="text-gray-700 mb-4">"Increased my content creation speed by 500%. Now I can produce a week's worth of content in 2 hours."</p>
              <p className="font-semibold text-gray-900">- Lisa Chen, Content Creator</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="text-4xl text-[#d97757] mb-4">★★★★★</div>
              <p className="text-gray-700 mb-4">"Got hired as a Prompt Engineer at $180K/year after completing this course. Best investment ever!"</p>
              <p className="font-semibold text-gray-900">- David Rodriguez, Prompt Engineer</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="text-4xl text-[#d97757] mb-4">★★★★★</div>
              <p className="text-gray-700 mb-4">"My marketing campaigns perform 3x better now. The ROI on this course was achieved in the first month."</p>
              <p className="font-semibold text-gray-900">- Sarah Kumar, Marketing Director</p>
            </div>
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Start Your Prompt Engineering Journey</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Master the most valuable skill in the AI era. Join 160,000+ students who have transformed their productivity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://www.udemy.com/user/feelix-2" target="_blank" rel="noopener noreferrer"
               className="px-8 py-4 bg-[#d97757] text-white rounded-xl hover:bg-[#c86844] transition-colors font-semibold text-lg">
              Enroll in Course Now
            </a>
            <Link href="/ai-bootcamp"
               className="px-8 py-4 border-2 border-[#d97757] text-[#d97757] rounded-xl hover:bg-[#d97757] hover:text-white transition-colors font-semibold text-lg">
              Join Live Bootcamp
            </Link>
          </div>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-[#d97757]">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Corporate Prompt Engineering Training</h3>
            <p className="text-gray-600 mb-6">Custom training programs for teams and organizations to maximize AI productivity</p>
            <a href="mailto:yash@explainx.ai"
               className="inline-block px-8 py-4 bg-[#d97757] text-white rounded-xl hover:bg-[#c86844] transition-colors font-semibold">
              Book Team Training
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}