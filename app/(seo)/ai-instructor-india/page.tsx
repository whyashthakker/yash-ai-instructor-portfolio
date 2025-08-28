import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AI Instructor India - Yash Thakker | Top AI Training in Mumbai & India',
  description: 'Leading AI instructor in India. Expert AI training from Mumbai-based Yash Thakker. 120K+ students trained in Artificial Intelligence across India.',
  keywords: 'AI instructor India, AI training Mumbai, artificial intelligence course India, AI expert India, machine learning instructor India',
  robots: 'index, follow',
};

export default function AIInstructorIndiaPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
            Top AI Instructor in India
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Leading AI education from Mumbai to the world - Trusted by 120,000+ students across India and globally
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://www.udemy.com/user/feelix-2" target="_blank" rel="noopener noreferrer"
               className="px-8 py-4 bg-[#d97757] text-white rounded-xl hover:bg-[#c86844] transition-colors font-semibold">
              Join AI Courses
            </a>
            <a href="mailto:yash@explainx.ai"
               className="px-8 py-4 border-2 border-[#d97757] text-[#d97757] rounded-xl hover:bg-[#d97757] hover:text-white transition-colors font-semibold">
              Book Consultation
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Why Choose AI Training in India?</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-[#d97757] rounded-full flex items-center justify-center text-white font-bold">🇮🇳</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Local Expertise, Global Standards</h3>
                  <p className="text-gray-600">Mumbai-based instructor with international experience working with TATA Group, PayPal, and Fortune 500 companies.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-[#d97757] rounded-full flex items-center justify-center text-white font-bold">💰</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Affordable World-Class Training</h3>
                  <p className="text-gray-600">Get premium AI education at Indian pricing - up to 70% less than international alternatives.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-[#d97757] rounded-full flex items-center justify-center text-white font-bold">🕐</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Indian Time Zone Training</h3>
                  <p className="text-gray-600">Live sessions, workshops, and bootcamps scheduled for Indian professionals and students.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">AI Training Across India</h2>
            <div className="bg-gradient-to-br from-orange-50 to-green-50 p-6 rounded-xl">
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-3 bg-white rounded-lg">
                  <div className="font-bold text-[#d97757]">Mumbai</div>
                  <div className="text-sm text-gray-600">Headquarters</div>
                </div>
                <div className="text-center p-3 bg-white rounded-lg">
                  <div className="font-bold text-[#d97757]">Delhi</div>
                  <div className="text-sm text-gray-600">Online Training</div>
                </div>
                <div className="text-center p-3 bg-white rounded-lg">
                  <div className="font-bold text-[#d97757]">Bangalore</div>
                  <div className="text-sm text-gray-600">Tech Hub Focus</div>
                </div>
                <div className="text-center p-3 bg-white rounded-lg">
                  <div className="font-bold text-[#d97757]">Hyderabad</div>
                  <div className="text-sm text-gray-600">Corporate Training</div>
                </div>
              </div>
              <p className="text-center text-gray-700">
                <strong>Pan-India Coverage:</strong> Chennai, Pune, Kolkata, Ahmedabad, Jaipur, and more
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-orange-500 to-green-600 text-white p-12 rounded-2xl mb-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Made in India, Recognized Globally</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold">120K+</div>
                <div>Indian Students</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">50+</div>
                <div>AI Courses</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">100+</div>
                <div>Indian Companies</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">12+</div>
                <div>Years Experience</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Popular AI Courses for Indian Professionals</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border-l-4 border-orange-500">
              <h3 className="text-xl font-semibold mb-3 text-[#d97757]">AI for Indian Businesses</h3>
              <p className="text-gray-600 mb-4">Learn how Indian companies like TATA, Reliance, and startups are using AI to transform their operations.</p>
              <div className="text-sm text-gray-500 mb-3">
                <span className="bg-orange-100 px-2 py-1 rounded">Hindi + English</span>
              </div>
              <a href="https://www.udemy.com/user/feelix-2" target="_blank" rel="noopener noreferrer"
                 className="text-[#d97757] font-semibold hover:underline">View Course →</a>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border-l-4 border-green-500">
              <h3 className="text-xl font-semibold mb-3 text-[#d97757]">AI for Government & Public Sector</h3>
              <p className="text-gray-600 mb-4">Specialized training for government officials, public sector, and policy makers on AI implementation.</p>
              <div className="text-sm text-gray-500 mb-3">
                <span className="bg-green-100 px-2 py-1 rounded">Policy Focus</span>
              </div>
              <a href="https://www.udemy.com/user/feelix-2" target="_blank" rel="noopener noreferrer"
                 className="text-[#d97757] font-semibold hover:underline">View Course →</a>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border-l-4 border-blue-500">
              <h3 className="text-xl font-semibold mb-3 text-[#d97757]">AI for Indian Startups</h3>
              <p className="text-gray-600 mb-4">From Flipkart to Zomato - learn how Indian unicorns leverage AI and build your own AI-powered startup.</p>
              <div className="text-sm text-gray-500 mb-3">
                <span className="bg-blue-100 px-2 py-1 rounded">Startup Focus</span>
              </div>
              <a href="https://www.udemy.com/user/feelix-2" target="_blank" rel="noopener noreferrer"
                 className="text-[#d97757] font-semibold hover:underline">View Course →</a>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Success Stories from India</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold mr-4">R</div>
                <div>
                  <div className="font-semibold">Rajesh Sharma</div>
                  <div className="text-sm text-gray-600">TCS, Senior Developer</div>
                </div>
              </div>
              <p className="text-gray-700 italic">"Yash's AI course helped me transition from traditional IT to AI. Now I lead AI projects at TCS with 60% salary increase."</p>
            </div>
            
            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mr-4">P</div>
                <div>
                  <div className="font-semibold">Priya Patel</div>
                  <div className="text-sm text-gray-600">Startup Founder, Mumbai</div>
                </div>
              </div>
              <p className="text-gray-700 italic">"Started my AI consulting firm after Yash's bootcamp. Now serving 20+ Indian companies with AI solutions."</p>
            </div>
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Join India's Leading AI Community</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Connect with thousands of Indian AI professionals and students advancing their careers with artificial intelligence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href="https://www.udemy.com/user/feelix-2" target="_blank" rel="noopener noreferrer"
               className="px-8 py-4 bg-[#d97757] text-white rounded-xl hover:bg-[#c86844] transition-colors font-semibold text-lg">
              Start Learning AI Today
            </a>
            <Link href="/ai-bootcamp"
               className="px-8 py-4 border-2 border-[#d97757] text-[#d97757] rounded-xl hover:bg-[#d97757] hover:text-white transition-colors font-semibold text-lg">
              Join AI Bootcamp
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600">
            <div>💳 Indian Payment Methods</div>
            <div>🎓 Indian Case Studies</div>
            <div>🇮🇳 Hindi + English Support</div>
            <div>⏰ India Time Zone</div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-orange-100 to-green-100 p-8 rounded-2xl">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Corporate AI Training for Indian Companies</h3>
            <p className="text-gray-600 mb-6">Custom AI training programs for Indian enterprises, government organizations, and educational institutions</p>
            <div className="flex justify-center space-x-8 mb-6 text-sm">
              <div>🏢 Enterprise Training</div>
              <div>🎓 University Partnerships</div>
              <div>🏛️ Government Programs</div>
            </div>
            <a href="mailto:yash@explainx.ai"
               className="inline-block px-8 py-4 bg-[#d97757] text-white rounded-xl hover:bg-[#c86844] transition-colors font-semibold">
              Book Corporate Training
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}