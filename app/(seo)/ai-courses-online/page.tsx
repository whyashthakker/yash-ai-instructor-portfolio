import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Courses Online - Yash Thakker | Complete Online AI Training',
  description: 'Best online AI courses by Yash Thakker. Learn AI, Machine Learning, ChatGPT, and automation. 50+ courses, 160K+ students, lifetime access.',
  keywords: 'AI courses online, online AI training, artificial intelligence courses, machine learning online course, AI education online',
  robots: 'index, follow',
};

export default function AICoursesOnlinePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
            Online AI Courses
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Complete online AI education from beginner to expert. Learn at your own pace with 50+ comprehensive courses and lifetime access.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://www.udemy.com/user/feelix-2" target="_blank" rel="noopener noreferrer"
               className="px-8 py-4 bg-[#d97757] text-white rounded-xl hover:bg-[#c86844] transition-colors font-semibold">
              Browse All Online Courses
            </a>
            <a href="mailto:yash@explainx.ai"
               className="px-8 py-4 border-2 border-[#d97757] text-[#d97757] rounded-xl hover:bg-[#d97757] hover:text-white transition-colors font-semibold">
              Custom Online Training
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <div className="text-center bg-blue-50 p-6 rounded-xl border-2 border-blue-200">
            <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
            <div className="text-gray-700 font-medium">Online Courses</div>
          </div>
          <div className="text-center bg-green-50 p-6 rounded-xl border-2 border-green-200">
            <div className="text-3xl font-bold text-green-600 mb-2">160K+</div>
            <div className="text-gray-700 font-medium">Students Enrolled</div>
          </div>
          <div className="text-center bg-purple-50 p-6 rounded-xl border-2 border-purple-200">
            <div className="text-3xl font-bold text-purple-600 mb-2">500+</div>
            <div className="text-gray-700 font-medium">Hours Content</div>
          </div>
          <div className="text-center bg-orange-50 p-6 rounded-xl border-2 border-orange-200">
            <div className="text-3xl font-bold text-orange-600 mb-2">4.8★</div>
            <div className="text-gray-700 font-medium">Average Rating</div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Featured Online AI Courses</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-3 rounded-t-xl -m-6 mb-4">
                <h3 className="text-lg font-bold">Complete AI Mastery</h3>
                <p className="text-sm opacity-90">Beginner to Expert</p>
              </div>
              <p className="text-gray-600 mb-4">Comprehensive course covering all aspects of AI from fundamentals to advanced applications.</p>
              <div className="flex justify-between items-center mb-3">
                <span className="text-[#d97757] font-semibold">⭐ 4.9 (8,200+ students)</span>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Bestseller</span>
              </div>
              <a href="https://www.udemy.com/user/feelix-2" target="_blank" rel="noopener noreferrer"
                 className="block w-full text-center bg-[#d97757] text-white py-3 rounded-lg hover:bg-[#c86844] transition-colors font-semibold">
                Enroll Now
              </a>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white p-3 rounded-t-xl -m-6 mb-4">
                <h3 className="text-lg font-bold">ChatGPT for Business</h3>
                <p className="text-sm opacity-90">Professional Applications</p>
              </div>
              <p className="text-gray-600 mb-4">Master ChatGPT for business productivity, automation, and professional workflows.</p>
              <div className="flex justify-between items-center mb-3">
                <span className="text-[#d97757] font-semibold">⭐ 4.8 (12,500+ students)</span>
                <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs">Most Popular</span>
              </div>
              <a href="https://www.udemy.com/user/feelix-2" target="_blank" rel="noopener noreferrer"
                 className="block w-full text-center bg-[#d97757] text-white py-3 rounded-lg hover:bg-[#c86844] transition-colors font-semibold">
                Enroll Now
              </a>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-3 rounded-t-xl -m-6 mb-4">
                <h3 className="text-lg font-bold">AI Content Creation</h3>
                <p className="text-sm opacity-90">Marketing & Content</p>
              </div>
              <p className="text-gray-600 mb-4">Create amazing content 10x faster using AI tools and automation workflows.</p>
              <div className="flex justify-between items-center mb-3">
                <span className="text-[#d97757] font-semibold">⭐ 4.7 (6,800+ students)</span>
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">New</span>
              </div>
              <a href="https://www.udemy.com/user/feelix-2" target="_blank" rel="noopener noreferrer"
                 className="block w-full text-center bg-[#d97757] text-white py-3 rounded-lg hover:bg-[#c86844] transition-colors font-semibold">
                Enroll Now
              </a>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#d97757] to-[#c86844] text-white p-12 rounded-2xl mb-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Why Choose Our Online AI Courses?</h2>
            <div className="grid md:grid-cols-3 gap-8 mt-8">
              <div className="bg-white/10 p-6 rounded-xl backdrop-blur">
                <div className="text-3xl mb-3">🎓</div>
                <h3 className="font-bold mb-2">Expert Instructor</h3>
                <p className="text-sm">Learn from Yash Thakker - 12+ years experience, 160K+ students taught</p>
              </div>
              <div className="bg-white/10 p-6 rounded-xl backdrop-blur">
                <div className="text-3xl mb-3">⏰</div>
                <h3 className="font-bold mb-2">Learn at Your Pace</h3>
                <p className="text-sm">Self-paced learning with lifetime access to all course materials</p>
              </div>
              <div className="bg-white/10 p-6 rounded-xl backdrop-blur">
                <div className="text-3xl mb-3">🏆</div>
                <h3 className="font-bold mb-2">Practical Projects</h3>
                <p className="text-sm">Real-world projects and hands-on exercises for immediate application</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Course Categories</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-blue-800">Fundamentals</h3>
              <ul className="text-sm text-blue-700 space-y-2">
                <li>• AI & ML Basics</li>
                <li>• Understanding LLMs</li>
                <li>• AI Ethics & Safety</li>
                <li>• Getting Started</li>
              </ul>
              <div className="mt-4 text-sm font-medium text-blue-600">8 Courses Available</div>
            </div>

            <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-500 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-green-800">Business Applications</h3>
              <ul className="text-sm text-green-700 space-y-2">
                <li>• AI for Business</li>
                <li>• Productivity Tools</li>
                <li>• Process Automation</li>
                <li>• ROI & Strategy</li>
              </ul>
              <div className="mt-4 text-sm font-medium text-green-600">12 Courses Available</div>
            </div>

            <div className="bg-purple-50 p-6 rounded-xl border-l-4 border-purple-500 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-purple-800">Content & Creative</h3>
              <ul className="text-sm text-purple-700 space-y-2">
                <li>• Content Creation</li>
                <li>• Marketing AI</li>
                <li>• Social Media</li>
                <li>• Design & Video</li>
              </ul>
              <div className="mt-4 text-sm font-medium text-purple-600">15 Courses Available</div>
            </div>

            <div className="bg-orange-50 p-6 rounded-xl border-l-4 border-orange-500 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-orange-800">Advanced Topics</h3>
              <ul className="text-sm text-orange-700 space-y-2">
                <li>• Custom AI Solutions</li>
                <li>• API Integration</li>
                <li>• AI Development</li>
                <li>• Specialized Tools</li>
              </ul>
              <div className="mt-4 text-sm font-medium text-orange-600">15 Courses Available</div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Student Success Stories</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#d97757] rounded-full flex items-center justify-center text-white font-bold">R</div>
                <div className="ml-4">
                  <h4 className="font-semibold">Rachel M.</h4>
                  <p className="text-sm text-gray-600">Marketing Professional</p>
                </div>
              </div>
              <div className="text-4xl text-[#d97757] mb-3">★★★★★</div>
              <p className="text-gray-700 italic">"Completed 5 online courses and transformed my career. Now leading AI initiatives at my company with 40% salary increase!"</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">J</div>
                <div className="ml-4">
                  <h4 className="font-semibold">James L.</h4>
                  <p className="text-sm text-gray-600">Small Business Owner</p>
                </div>
              </div>
              <div className="text-4xl text-[#d97757] mb-3">★★★★★</div>
              <p className="text-gray-700 italic">"Online format was perfect for my busy schedule. Implemented AI solutions that saved 25 hours per week!"</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">K</div>
                <div className="ml-4">
                  <h4 className="font-semibold">Kavya P.</h4>
                  <p className="text-sm text-gray-600">Student from India</p>
                </div>
              </div>
              <div className="text-4xl text-[#d97757] mb-3">★★★★★</div>
              <p className="text-gray-700 italic">"Accessible pricing and excellent content quality. Landed my dream AI job right after course completion!"</p>
            </div>
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Start Your Online AI Journey</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join 160,000+ students learning AI online. Get lifetime access, learn at your pace, and transform your career.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://www.udemy.com/user/feelix-2" target="_blank" rel="noopener noreferrer"
               className="px-8 py-4 bg-[#d97757] text-white rounded-xl hover:bg-[#c86844] transition-colors font-semibold text-lg">
              Browse All Online Courses
            </a>
            <a href="https://www.coursera.org/instructor/~164942694" target="_blank" rel="noopener noreferrer"
               className="px-8 py-4 border-2 border-[#d97757] text-[#d97757] rounded-xl hover:bg-[#d97757] hover:text-white transition-colors font-semibold text-lg">
              View Coursera Programs
            </a>
          </div>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-[#d97757]">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">30-Day Money-Back Guarantee</h3>
            <p className="text-gray-600 mb-6">All online courses come with a 30-day money-back guarantee. Learn risk-free!</p>
            <div className="flex justify-center space-x-8 text-sm mb-4">
              <div>✓ Lifetime Access</div>
              <div>✓ Mobile Learning</div>
              <div>✓ Certificate of Completion</div>
              <div>✓ Community Support</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}