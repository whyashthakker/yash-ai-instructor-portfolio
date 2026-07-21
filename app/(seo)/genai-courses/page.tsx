import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Generative AI Courses - Yash Thakker | Complete GenAI Training Programs',
  description: 'Comprehensive Generative AI courses by Yash Thakker. Learn ChatGPT, GPT-4, LLMs, and AI applications. 50+ courses, 350K+ students on Udemy.',
  keywords: 'generative AI courses, ChatGPT course, GPT-4 training, LLM courses, AI course online, generative AI certification, Udemy AI courses',
  robots: 'index, follow',
};

export default function GenAICoursesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
            Generative AI Courses
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Master Generative AI with 50+ comprehensive courses designed by industry expert Yash Thakker
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://www.udemy.com/user/feelix-2" target="_blank" rel="noopener noreferrer"
               className="px-8 py-4 bg-[#d97757] text-white rounded-xl hover:bg-[#c86844] transition-colors font-semibold">
              Browse All Courses on Udemy
            </a>
            <a href="https://www.coursera.org/instructor/~164942694" target="_blank" rel="noopener noreferrer"
               className="px-8 py-4 border-2 border-[#d97757] text-[#d97757] rounded-xl hover:bg-[#d97757] hover:text-white transition-colors font-semibold">
              View Coursera Programs
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-[#d97757] mb-2">50+</div>
            <div className="text-gray-600">GenAI Courses</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#d97757] mb-2">350K+</div>
            <div className="text-gray-600">Students Enrolled</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#d97757] mb-2">4.7★</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#d97757] mb-2">500+</div>
            <div className="text-gray-600">Hours of Content</div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Featured Generative AI Courses</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-blue-500">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold mr-4">GPT</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Complete ChatGPT Mastery</h3>
                  <div className="text-sm text-gray-500">⭐ 4.8 • 15,000+ students</div>
                </div>
              </div>
              <p className="text-gray-600 mb-4">Master ChatGPT, GPT-4, and advanced prompt engineering techniques for maximum productivity.</p>
              <ul className="text-sm text-gray-600 mb-4 space-y-1">
                <li>• Advanced Prompt Engineering</li>
                <li>• GPT-4 API Integration</li>
                <li>• Business Applications</li>
                <li>• Automation Workflows</li>
              </ul>
              <a href="https://www.udemy.com/user/feelix-2" target="_blank" rel="noopener noreferrer"
                 className="block w-full text-center bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors font-semibold">
                Enroll on Udemy
              </a>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-purple-500">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center text-white font-bold mr-4">LLM</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Large Language Models</h3>
                  <div className="text-sm text-gray-500">⭐ 4.7 • 12,000+ students</div>
                </div>
              </div>
              <p className="text-gray-600 mb-4">Deep dive into LLMs, transformer architecture, and building custom AI applications.</p>
              <ul className="text-sm text-gray-600 mb-4 space-y-1">
                <li>• Transformer Architecture</li>
                <li>• Fine-tuning Models</li>
                <li>• Custom LLM Applications</li>
                <li>• Model Deployment</li>
              </ul>
              <a href="https://www.udemy.com/user/feelix-2" target="_blank" rel="noopener noreferrer"
                 className="block w-full text-center bg-purple-500 text-white py-3 rounded-lg hover:bg-purple-600 transition-colors font-semibold">
                Enroll on Udemy
              </a>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-green-500">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center text-white font-bold mr-4">BIZ</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">AI for Business Leaders</h3>
                  <div className="text-sm text-gray-500">⭐ 4.9 • 18,000+ students</div>
                </div>
              </div>
              <p className="text-gray-600 mb-4">Strategic implementation of GenAI in business operations, ROI measurement, and team training.</p>
              <ul className="text-sm text-gray-600 mb-4 space-y-1">
                <li>• AI Strategy Development</li>
                <li>• ROI Measurement</li>
                <li>• Team Implementation</li>
                <li>• Risk Management</li>
              </ul>
              <a href="https://www.udemy.com/user/feelix-2" target="_blank" rel="noopener noreferrer"
                 className="block w-full text-center bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition-colors font-semibold">
                Enroll on Udemy
              </a>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-red-500">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center text-white font-bold mr-4">AUT</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">AI Content Automation</h3>
                  <div className="text-sm text-gray-500">⭐ 4.6 • 10,000+ students</div>
                </div>
              </div>
              <p className="text-gray-600 mb-4">Automate content creation, marketing, and social media using advanced AI tools and techniques.</p>
              <ul className="text-sm text-gray-600 mb-4 space-y-1">
                <li>• Content Generation Systems</li>
                <li>• Marketing Automation</li>
                <li>• Social Media AI</li>
                <li>• Workflow Integration</li>
              </ul>
              <a href="https://www.udemy.com/user/feelix-2" target="_blank" rel="noopener noreferrer"
                 className="block w-full text-center bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition-colors font-semibold">
                Enroll on Udemy
              </a>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-orange-500">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold mr-4">API</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">AI API Development</h3>
                  <div className="text-sm text-gray-500">⭐ 4.8 • 8,000+ students</div>
                </div>
              </div>
              <p className="text-gray-600 mb-4">Build and integrate AI APIs, create custom applications, and scale AI solutions effectively.</p>
              <ul className="text-sm text-gray-600 mb-4 space-y-1">
                <li>• OpenAI API Integration</li>
                <li>• Custom AI Applications</li>
                <li>• Scaling Solutions</li>
                <li>• Performance Optimization</li>
              </ul>
              <a href="https://www.udemy.com/user/feelix-2" target="_blank" rel="noopener noreferrer"
                 className="block w-full text-center bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition-colors font-semibold">
                Enroll on Udemy
              </a>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-indigo-500">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-indigo-500 rounded-lg flex items-center justify-center text-white font-bold mr-4">PRO</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">AI Productivity Mastery</h3>
                  <div className="text-sm text-gray-500">⭐ 4.9 • 22,000+ students</div>
                </div>
              </div>
              <p className="text-gray-600 mb-4">Maximize productivity with AI tools, automate daily tasks, and create efficient AI-powered workflows.</p>
              <ul className="text-sm text-gray-600 mb-4 space-y-1">
                <li>• Productivity AI Tools</li>
                <li>• Task Automation</li>
                <li>• Workflow Optimization</li>
                <li>• Time Management</li>
              </ul>
              <a href="https://www.udemy.com/user/feelix-2" target="_blank" rel="noopener noreferrer"
                 className="block w-full text-center bg-indigo-500 text-white py-3 rounded-lg hover:bg-indigo-600 transition-colors font-semibold">
                Enroll on Udemy
              </a>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#d97757] to-[#c86844] text-white p-12 rounded-2xl mb-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Learning Paths for Every Level</h2>
            <div className="grid md:grid-cols-3 gap-8 mt-8">
              <div className="bg-white/10 p-6 rounded-xl backdrop-blur">
                <h3 className="text-xl font-bold mb-3">🚀 Beginner Path</h3>
                <p className="mb-4">New to AI? Start with fundamentals and build your foundation.</p>
                <ul className="text-sm space-y-2">
                  <li>• AI Fundamentals</li>
                  <li>• ChatGPT Basics</li>
                  <li>• Prompt Engineering</li>
                  <li>• Practical Applications</li>
                </ul>
              </div>
              <div className="bg-white/10 p-6 rounded-xl backdrop-blur">
                <h3 className="text-xl font-bold mb-3">⚡ Intermediate Path</h3>
                <p className="mb-4">Ready to build AI solutions and automate workflows.</p>
                <ul className="text-sm space-y-2">
                  <li>• API Integration</li>
                  <li>• Custom Applications</li>
                  <li>• Business Implementation</li>
                  <li>• Advanced Automation</li>
                </ul>
              </div>
              <div className="bg-white/10 p-6 rounded-xl backdrop-blur">
                <h3 className="text-xl font-bold mb-3">🎯 Expert Path</h3>
                <p className="mb-4">Master advanced concepts and lead AI transformation.</p>
                <ul className="text-sm space-y-2">
                  <li>• LLM Fine-tuning</li>
                  <li>• Enterprise Solutions</li>
                  <li>• AI Strategy</li>
                  <li>• Team Leadership</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Available on Multiple Platforms</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-purple-50 rounded-xl">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">U</div>
              <h3 className="text-xl font-semibold mb-3">Udemy</h3>
              <p className="text-gray-600 mb-4">350,000+ students across 50+ comprehensive AI courses with lifetime access.</p>
              <a href="https://www.udemy.com/user/feelix-2" target="_blank" rel="noopener noreferrer"
                 className="inline-block bg-purple-500 text-white px-6 py-3 rounded-lg hover:bg-purple-600 transition-colors">
                Browse Udemy Courses
              </a>
            </div>
            
            <div className="text-center p-6 bg-blue-50 rounded-xl">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">C</div>
              <h3 className="text-xl font-semibold mb-3">Coursera</h3>
              <p className="text-gray-600 mb-4">University-quality programs with certificates and guided projects.</p>
              <a href="https://www.coursera.org/instructor/~164942694" target="_blank" rel="noopener noreferrer"
                 className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors">
                View Coursera Programs
              </a>
            </div>
            
            <div className="text-center p-6 bg-green-50 rounded-xl">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">CC</div>
              <h3 className="text-xl font-semibold mb-3">Codecademy</h3>
              <p className="text-gray-600 mb-4">Interactive bootcamps and hands-on coding experiences with AI.</p>
              <a href="https://try.codecademy.com/ai-2/us" target="_blank" rel="noopener noreferrer"
                 className="inline-block bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors">
                Join Codecademy
              </a>
            </div>
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Start Your GenAI Learning Journey</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Choose from 50+ expertly designed courses and join 350,000+ students mastering Generative AI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://www.udemy.com/user/feelix-2" target="_blank" rel="noopener noreferrer"
               className="px-8 py-4 bg-[#d97757] text-white rounded-xl hover:bg-[#c86844] transition-colors font-semibold text-lg">
              Start with Udemy Courses
            </a>
            <Link href="/ai-bootcamp"
               className="px-8 py-4 border-2 border-[#d97757] text-[#d97757] rounded-xl hover:bg-[#d97757] hover:text-white transition-colors font-semibold text-lg">
              Join Live Bootcamp
            </Link>
          </div>
        </div>

        <div className="bg-gray-50 p-8 rounded-2xl">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Need Custom GenAI Training?</h3>
            <p className="text-gray-600 mb-6">Get personalized training programs designed for your specific needs and skill level</p>
            <a href="mailto:yash@explainx.ai"
               className="inline-block px-8 py-4 bg-[#d97757] text-white rounded-xl hover:bg-[#c86844] transition-colors font-semibold">
              Request Custom Training
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}