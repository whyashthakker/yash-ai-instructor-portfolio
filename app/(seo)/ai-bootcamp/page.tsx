import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AI Bootcamp - Yash Thakker | Intensive AI Training Program',
  description: 'Join our intensive AI bootcamp led by Yash Thakker. Hands-on training in AI, ChatGPT, and automation. Transform your career in weeks, not years.',
  keywords: 'AI bootcamp, artificial intelligence bootcamp, ChatGPT bootcamp, AI training intensive, machine learning bootcamp, AI career change',
  robots: 'index, follow',
};

export default function AIBootcampPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <div className="inline-block bg-[#d97757] text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
            🔥 LIVE BOOTCAMP • LIMITED SEATS
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
            Intensive AI Bootcamp
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Transform your career in 4 weeks with hands-on AI training. Build real projects, master AI tools, and join 120K+ successful students.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:yash@explainx.ai" 
               className="px-8 py-4 bg-[#d97757] text-white rounded-xl hover:bg-[#c86844] transition-colors font-semibold">
              Reserve Your Spot
            </a>
            <a href="https://www.udemy.com/user/feelix-2" target="_blank" rel="noopener noreferrer"
               className="px-8 py-4 border-2 border-[#d97757] text-[#d97757] rounded-xl hover:bg-[#d97757] hover:text-white transition-colors font-semibold">
              View Course Curriculum
            </a>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#d97757] to-[#c86844] text-white p-8 rounded-2xl mb-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Next Bootcamp Starting Soon!</h2>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div className="bg-white/20 p-4 rounded-xl">
                <div className="text-2xl font-bold">4 Weeks</div>
                <div className="text-sm">Intensive Training</div>
              </div>
              <div className="bg-white/20 p-4 rounded-xl">
                <div className="text-2xl font-bold">Live</div>
                <div className="text-sm">Interactive Sessions</div>
              </div>
              <div className="bg-white/20 p-4 rounded-xl">
                <div className="text-2xl font-bold">25</div>
                <div className="text-sm">Max Students</div>
              </div>
              <div className="bg-white/20 p-4 rounded-xl">
                <div className="text-2xl font-bold">100%</div>
                <div className="text-sm">Hands-on Projects</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">What Makes Our Bootcamp Different?</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#d97757] rounded-full flex items-center justify-center text-white font-bold">1</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Build Real AI Applications</h3>
                  <p className="text-gray-600">No theory-only learning. Build 5+ real AI applications using Cursor AI, ChatGPT, Claude, and modern tools.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#d97757] rounded-full flex items-center justify-center text-white font-bold">2</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Small Cohort, Personal Attention</h3>
                  <p className="text-gray-600">Maximum 25 students per batch ensures personalized guidance and direct interaction with instructor.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#d97757] rounded-full flex items-center justify-center text-white font-bold">3</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Industry Expert Instructor</h3>
                  <p className="text-gray-600">Learn from Yash Thakker - 12+ years building AI products, 120K+ students taught, Fortune 500 experience.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Bootcamp Outcomes</h2>
            <div className="bg-green-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 text-green-800">After 4 Weeks, You'll Be Able To:</h3>
              <ul className="space-y-3 text-green-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Build AI applications without coding background
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Master advanced prompt engineering techniques
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Automate business processes with AI workflows
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Create AI-powered content and marketing systems
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Integrate AI tools into existing business operations
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Start your own AI consulting practice
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">4-Week Intensive Curriculum</h2>
          <div className="grid md:grid-cols-2 gap-6">
            
            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-500">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">W1</div>
                <h3 className="text-xl font-semibold ml-4">Week 1: AI Foundations</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li>• Understanding AI, ML, and LLMs</li>
                <li>• ChatGPT, Claude, and Gemini mastery</li>
                <li>• Advanced prompt engineering</li>
                <li>• AI tools ecosystem overview</li>
                <li>• First AI application build</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-green-500">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">W2</div>
                <h3 className="text-xl font-semibold ml-4">Week 2: AI Development</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li>• Cursor AI and no-code development</li>
                <li>• API integrations and workflows</li>
                <li>• Building AI-powered websites</li>
                <li>• Database integration with AI</li>
                <li>• Project: Personal AI assistant</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-purple-500">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">W3</div>
                <h3 className="text-xl font-semibold ml-4">Week 3: Business Applications</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li>• AI content creation systems</li>
                <li>• Marketing automation with AI</li>
                <li>• Customer service AI bots</li>
                <li>• Data analysis and insights</li>
                <li>• Project: Business AI solution</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-red-500">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white font-bold">W4</div>
                <h3 className="text-xl font-semibold ml-4">Week 4: Advanced & Launch</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li>• Advanced AI integrations</li>
                <li>• Monetizing AI applications</li>
                <li>• AI consulting and services</li>
                <li>• Portfolio development</li>
                <li>• Final project presentation</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-12 rounded-2xl mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Recent Bootcamp Success Stories</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">A</div>
                <div className="ml-4">
                  <h4 className="font-semibold">Arjun Patel</h4>
                  <p className="text-sm text-gray-600">Marketing Manager</p>
                </div>
              </div>
              <p className="text-gray-700 italic mb-3">"Went from zero AI knowledge to building automated marketing systems. Increased my team's productivity by 300%."</p>
              <p className="text-sm text-[#d97757] font-semibold">Now: AI Consultant earning ₹2L+/month</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">S</div>
                <div className="ml-4">
                  <h4 className="font-semibold">Sneha Gupta</h4>
                  <p className="text-sm text-gray-600">Non-tech Professional</p>
                </div>
              </div>
              <p className="text-gray-700 italic mb-3">"Built my first AI app in week 2! Now running my own AI automation agency with 5 clients."</p>
              <p className="text-sm text-[#d97757] font-semibold">Revenue: ₹5L in first 3 months</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">R</div>
                <div className="ml-4">
                  <h4 className="font-semibold">Rohit Sharma</h4>
                  <p className="text-sm text-gray-600">Software Developer</p>
                </div>
              </div>
              <p className="text-gray-700 italic mb-3">"Added AI skills to my profile and got promoted to AI Lead with 70% salary increase in 2 months."</p>
              <p className="text-sm text-[#d97757] font-semibold">New Role: Senior AI Developer</p>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Bootcamp Details & Pricing</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-xl border-2 border-[#d97757]">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">AI Mastery Bootcamp</h3>
                <p className="text-gray-600">4-Week Intensive Program</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-xl font-semibold mb-4 text-[#d97757]">What's Included:</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li>✓ 4 weeks of live training (20 hours)</li>
                    <li>✓ 5+ hands-on AI projects</li>
                    <li>✓ All AI tools and resources</li>
                    <li>✓ Personal mentorship sessions</li>
                    <li>✓ Certificate of completion</li>
                    <li>✓ Lifetime community access</li>
                    <li>✓ Job placement assistance</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-4 text-[#d97757]">Bootcamp Schedule:</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li>📅 <strong>Duration:</strong> 4 weeks</li>
                    <li>🕐 <strong>Time:</strong> 7-9 PM IST (Weekdays)</li>
                    <li>👥 <strong>Batch Size:</strong> Max 25 students</li>
                    <li>💻 <strong>Format:</strong> Live online sessions</li>
                    <li>🎯 <strong>Level:</strong> Beginner to Advanced</li>
                    <li>🌍 <strong>Language:</strong> English + Hindi</li>
                  </ul>
                </div>
              </div>
              
              <div className="text-center border-t pt-8">
                <div className="mb-6">
                  <div className="text-3xl font-bold text-[#d97757]">₹24,999</div>
                  <div className="text-gray-500 line-through">₹49,999</div>
                  <div className="text-sm text-green-600 font-semibold">Early Bird: 50% OFF</div>
                </div>
                <a href="mailto:yash@explainx.ai"
                   className="inline-block px-8 py-4 bg-[#d97757] text-white rounded-xl hover:bg-[#c86844] transition-colors font-semibold text-lg">
                  Secure Your Spot Now
                </a>
                <p className="text-sm text-gray-500 mt-4">Limited seats • Next batch starts in 2 weeks</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Ready to Transform Your Career?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join the next batch of AI professionals. Limited seats available for personalized attention.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:yash@explainx.ai"
               className="px-8 py-4 bg-[#d97757] text-white rounded-xl hover:bg-[#c86844] transition-colors font-semibold text-lg">
              Apply for Bootcamp
            </a>
            <Link href="/contact"
               className="px-8 py-4 border-2 border-[#d97757] text-[#d97757] rounded-xl hover:bg-[#d97757] hover:text-white transition-colors font-semibold text-lg">
              Ask Questions
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}