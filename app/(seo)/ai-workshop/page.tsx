import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Workshop - Yash Thakker | Hands-on AI Training Workshop',
  description: 'Join intensive AI workshops by Yash Thakker. Hands-on learning, real projects, and practical AI skills. Available online and offline.',
  keywords: 'AI workshop, artificial intelligence workshop, AI training workshop, hands-on AI learning, AI bootcamp workshop',
  robots: 'index, follow',
};

export default function AIWorkshopPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <div className="inline-block bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
            🔥 INTENSIVE HANDS-ON TRAINING
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
            AI Workshops
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Intensive hands-on AI workshops for teams and individuals. Build real AI applications, master tools, and transform your skills in days.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:yash@explainx.ai?subject=AI Workshop Booking"
               className="px-8 py-4 bg-[#d97757] text-white rounded-xl hover:bg-[#c86844] transition-colors font-semibold">
              Book AI Workshop
            </a>
            <a href="mailto:yash@explainx.ai?subject=Corporate AI Workshop"
               className="px-8 py-4 border-2 border-[#d97757] text-[#d97757] rounded-xl hover:bg-[#d97757] hover:text-white transition-colors font-semibold">
              Corporate Workshop
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <div className="text-center bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
            <div className="text-3xl font-bold text-[#d97757] mb-2">100+</div>
            <div className="text-gray-700 font-medium">Workshops Conducted</div>
          </div>
          <div className="text-center bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl">
            <div className="text-3xl font-bold text-[#d97757] mb-2">5K+</div>
            <div className="text-gray-700 font-medium">Workshop Participants</div>
          </div>
          <div className="text-center bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl">
            <div className="text-3xl font-bold text-[#d97757] mb-2">95%</div>
            <div className="text-gray-700 font-medium">Satisfaction Rate</div>
          </div>
          <div className="text-center bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl">
            <div className="text-3xl font-bold text-[#d97757] mb-2">2-5</div>
            <div className="text-gray-700 font-medium">Days Duration</div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Workshop Types</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-l-4 border-blue-500">
              <div className="text-3xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold mb-3 text-[#d97757]">AI for Business Workshop</h3>
              <p className="text-gray-600 mb-4">2-day intensive workshop for business leaders and teams to implement AI solutions.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• AI strategy development</li>
                <li>• Tools implementation</li>
                <li>• ROI measurement</li>
                <li>• Team training</li>
              </ul>
              <div className="mt-4 text-sm font-semibold text-blue-600">Duration: 2 Days | Max: 20 participants</div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-l-4 border-green-500">
              <div className="text-3xl mb-4">💻</div>
              <h3 className="text-xl font-semibold mb-3 text-[#d97757]">Hands-on AI Development</h3>
              <p className="text-gray-600 mb-4">3-day technical workshop for developers and technical teams to build AI applications.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• AI application development</li>
                <li>• API integrations</li>
                <li>• Model deployment</li>
                <li>• Production systems</li>
              </ul>
              <div className="mt-4 text-sm font-semibold text-green-600">Duration: 3 Days | Max: 15 participants</div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-l-4 border-purple-500">
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-3 text-[#d97757]">AI Marketing Workshop</h3>
              <p className="text-gray-600 mb-4">2-day workshop focused on AI-powered marketing strategies and automation.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• AI marketing tools</li>
                <li>• Content automation</li>
                <li>• Campaign optimization</li>
                <li>• Analytics and insights</li>
              </ul>
              <div className="mt-4 text-sm font-semibold text-purple-600">Duration: 2 Days | Max: 25 participants</div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-l-4 border-red-500">
              <div className="text-3xl mb-4">🎓</div>
              <h3 className="text-xl font-semibold mb-3 text-[#d97757]">Executive AI Workshop</h3>
              <p className="text-gray-600 mb-4">1-day strategic workshop for C-level executives and senior leadership.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• AI business transformation</li>
                <li>• Strategic decision making</li>
                <li>• Risk assessment</li>
                <li>• Investment planning</li>
              </ul>
              <div className="mt-4 text-sm font-semibold text-red-600">Duration: 1 Day | Max: 12 participants</div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-l-4 border-orange-500">
              <div className="text-3xl mb-4">🔧</div>
              <h3 className="text-xl font-semibold mb-3 text-[#d97757]">AI Tools Mastery</h3>
              <p className="text-gray-600 mb-4">2-day workshop covering 20+ AI tools for productivity and automation.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• ChatGPT advanced techniques</li>
                <li>• Design and content tools</li>
                <li>• Automation workflows</li>
                <li>• Integration strategies</li>
              </ul>
              <div className="mt-4 text-sm font-semibold text-orange-600">Duration: 2 Days | Max: 20 participants</div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-l-4 border-indigo-500">
              <div className="text-3xl mb-4">🏢</div>
              <h3 className="text-xl font-semibold mb-3 text-[#d97757]">Custom Corporate Workshop</h3>
              <p className="text-gray-600 mb-4">Tailored workshop designed specifically for your organization's needs and goals.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Custom curriculum</li>
                <li>• Industry-specific focus</li>
                <li>• Flexible duration</li>
                <li>• On-site or virtual</li>
              </ul>
              <div className="mt-4 text-sm font-semibold text-indigo-600">Duration: Flexible | Custom group size</div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#d97757] to-[#c86844] text-white p-12 rounded-2xl mb-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Workshop Learning Methodology</h2>
            <div className="grid md:grid-cols-4 gap-6 mt-8">
              <div className="bg-white/10 p-4 rounded-xl backdrop-blur">
                <div className="text-2xl font-bold mb-2">🎯</div>
                <h3 className="font-bold mb-2">Learn by Doing</h3>
                <p className="text-sm">80% hands-on practical work with real projects</p>
              </div>
              <div className="bg-white/10 p-4 rounded-xl backdrop-blur">
                <div className="text-2xl font-bold mb-2">🏗️</div>
                <h3 className="font-bold mb-2">Build Real Solutions</h3>
                <p className="text-sm">Create actual AI applications you can use immediately</p>
              </div>
              <div className="bg-white/10 p-4 rounded-xl backdrop-blur">
                <div className="text-2xl font-bold mb-2">👥</div>
                <h3 className="font-bold mb-2">Small Groups</h3>
                <p className="text-sm">Maximum 25 participants for personalized attention</p>
              </div>
              <div className="bg-white/10 p-4 rounded-xl backdrop-blur">
                <div className="text-2xl font-bold mb-2">🎁</div>
                <h3 className="font-bold mb-2">Take-Home Resources</h3>
                <p className="text-sm">Templates, tools, and resources for continued learning</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Workshop Success Stories</h2>
          <div className="grid md:grid-cols-2 gap-8">
            
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl">T</div>
                <div className="ml-4">
                  <h4 className="text-xl font-semibold">Tech Mahindra</h4>
                  <p className="text-gray-600">Corporate AI Workshop - 50 employees</p>
                </div>
              </div>
              <p className="text-gray-700 mb-3">"Exceptional workshop that transformed how our team approaches AI. Within 2 weeks, we had implemented 5 AI solutions that saved 100+ hours weekly."</p>
              <p className="text-sm text-green-600 font-semibold">Result: 100+ hours saved weekly</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-xl">S</div>
                <div className="ml-4">
                  <h4 className="text-xl font-semibold">Startup Incubator</h4>
                  <p className="text-gray-600">AI for Startups Workshop - 30 founders</p>
                </div>
              </div>
              <p className="text-gray-700 mb-3">"Incredibly practical workshop. 20 out of 30 startups implemented AI solutions within a month. Average productivity increase of 300%."</p>
              <p className="text-sm text-green-600 font-semibold">Result: 300% productivity increase</p>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Workshop Formats</h2>
          <div className="grid md:grid-cols-3 gap-6">
            
            <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-blue-200">
              <div className="text-center mb-4">
                <div className="text-3xl mb-2">🏢</div>
                <h3 className="text-xl font-semibold text-[#d97757]">On-site Corporate</h3>
              </div>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Conducted at your office</li>
                <li>• Customized for your team</li>
                <li>• Industry-specific examples</li>
                <li>• Team building focus</li>
                <li>• Follow-up support included</li>
              </ul>
              <div className="mt-4 text-center">
                <div className="text-lg font-bold text-[#d97757]">Starting ₹2,50,000</div>
                <div className="text-sm text-gray-500">For up to 25 participants</div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-green-200">
              <div className="text-center mb-4">
                <div className="text-3xl mb-2">💻</div>
                <h3 className="text-xl font-semibold text-[#d97757]">Virtual Workshop</h3>
              </div>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Interactive online sessions</li>
                <li>• Global accessibility</li>
                <li>• Recording provided</li>
                <li>• Breakout room activities</li>
                <li>• Digital resources included</li>
              </ul>
              <div className="mt-4 text-center">
                <div className="text-lg font-bold text-[#d97757]">Starting ₹1,50,000</div>
                <div className="text-sm text-gray-500">For up to 25 participants</div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-purple-200">
              <div className="text-center mb-4">
                <div className="text-3xl mb-2">🎯</div>
                <h3 className="text-xl font-semibold text-[#d97757]">Public Workshop</h3>
              </div>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Open enrollment</li>
                <li>• Mumbai/Bangalore locations</li>
                <li>• Networking opportunities</li>
                <li>• Mixed industry exposure</li>
                <li>• Certificate provided</li>
              </ul>
              <div className="mt-4 text-center">
                <div className="text-lg font-bold text-[#d97757]">₹15,000</div>
                <div className="text-sm text-gray-500">Per participant</div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Ready to Transform Your Team with AI?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Book an intensive AI workshop and see immediate results. Perfect for teams, companies, and individuals serious about AI adoption.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:yash@explainx.ai?subject=AI Workshop Booking Request"
               className="px-8 py-4 bg-[#d97757] text-white rounded-xl hover:bg-[#c86844] transition-colors font-semibold text-lg">
              Book Workshop Now
            </a>
            <a href="mailto:yash@explainx.ai?subject=Workshop Details and Pricing"
               className="px-8 py-4 border-2 border-[#d97757] text-[#d97757] rounded-xl hover:bg-[#d97757] hover:text-white transition-colors font-semibold text-lg">
              Get Detailed Proposal
            </a>
          </div>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-[#d97757]">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Free Workshop Consultation</h3>
            <p className="text-gray-600 mb-6">Schedule a free 30-minute consultation to discuss your team's AI training needs and workshop options</p>
            <a href="mailto:yash@explainx.ai?subject=Free Workshop Consultation"
               className="inline-block px-8 py-4 bg-[#d97757] text-white rounded-xl hover:bg-[#c86844] transition-colors font-semibold">
              Schedule Free Consultation
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}