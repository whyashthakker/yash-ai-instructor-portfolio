import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AI Instructor - Yash Thakker | Expert AI Training & Education',
  description: 'Learn AI from industry expert Yash Thakker. 120K+ students trained in Generative AI, Machine Learning, and AI applications. Join our comprehensive AI courses.',
  keywords: 'AI instructor, artificial intelligence training, machine learning courses, AI education, generative AI instructor, AI teacher',
  robots: 'index, follow',
};

export default function AIInstructorPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
            Leading AI Instructor
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Transform your career with expert AI training from Yash Thakker - trusted by 120,000+ students worldwide
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://www.udemy.com/user/feelix-2" target="_blank" rel="noopener noreferrer"
               className="px-8 py-4 bg-[#d97757] text-white rounded-xl hover:bg-[#c86844] transition-colors font-semibold">
              View Udemy Courses
            </a>
            <a href="mailto:yash@explainx.ai"
               className="px-8 py-4 border-2 border-[#d97757] text-[#d97757] rounded-xl hover:bg-[#d97757] hover:text-white transition-colors font-semibold">
              Book Consultation
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Why Choose Our AI Training?</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-[#d97757] rounded-full flex items-center justify-center text-white font-bold">1</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Proven Track Record</h3>
                  <p className="text-gray-600">120,000+ students successfully trained across multiple platforms with 90,000+ students on Udemy alone.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-[#d97757] rounded-full flex items-center justify-center text-white font-bold">2</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Industry Experience</h3>
                  <p className="text-gray-600">12+ years building AI products for Fortune 500 companies including TATA Group and PayPal.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-[#d97757] rounded-full flex items-center justify-center text-white font-bold">3</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Practical Approach</h3>
                  <p className="text-gray-600">Hands-on learning with real-world projects and applications that you can implement immediately.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">AI Expertise Areas</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h4 className="font-semibold text-[#d97757] mb-2">Generative AI</h4>
                <p className="text-sm text-gray-600">ChatGPT, GPT-4, Claude, and LLM applications</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h4 className="font-semibold text-[#d97757] mb-2">Machine Learning</h4>
                <p className="text-sm text-gray-600">ML algorithms, model training, and deployment</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h4 className="font-semibold text-[#d97757] mb-2">AI Automation</h4>
                <p className="text-sm text-gray-600">Workflow automation and productivity tools</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h4 className="font-semibold text-[#d97757] mb-2">Prompt Engineering</h4>
                <p className="text-sm text-gray-600">Advanced prompting techniques and strategies</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Course Statistics</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#d97757] mb-2">120K+</div>
              <div className="text-gray-600">Students Trained</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#d97757] mb-2">50+</div>
              <div className="text-gray-600">AI Courses Created</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#d97757] mb-2">12+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#d97757] mb-2">4.7★</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-8 rounded-2xl mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Featured AI Courses</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-[#d97757]">Complete AI Mastery</h3>
              <p className="text-gray-600 mb-4">Comprehensive course covering all aspects of artificial intelligence from basics to advanced applications.</p>
              <a href="https://www.udemy.com/user/feelix-2" target="_blank" rel="noopener noreferrer"
                 className="inline-block bg-[#d97757] text-white px-4 py-2 rounded-lg hover:bg-[#c86844] transition-colors">
                View on Udemy
              </a>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-[#d97757]">Generative AI for Business</h3>
              <p className="text-gray-600 mb-4">Learn how to implement generative AI solutions in real business scenarios and workflows.</p>
              <a href="https://www.udemy.com/user/feelix-2" target="_blank" rel="noopener noreferrer"
                 className="inline-block bg-[#d97757] text-white px-4 py-2 rounded-lg hover:bg-[#c86844] transition-colors">
                View on Udemy
              </a>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-[#d97757]">AI Automation & Productivity</h3>
              <p className="text-gray-600 mb-4">Master AI tools and techniques to automate workflows and boost productivity significantly.</p>
              <a href="https://www.udemy.com/user/feelix-2" target="_blank" rel="noopener noreferrer"
                 className="inline-block bg-[#d97757] text-white px-4 py-2 rounded-lg hover:bg-[#c86844] transition-colors">
                View on Udemy
              </a>
            </div>
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Ready to Start Your AI Journey?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who have transformed their careers with our comprehensive AI training programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://www.udemy.com/user/feelix-2" target="_blank" rel="noopener noreferrer"
               className="px-8 py-4 bg-[#d97757] text-white rounded-xl hover:bg-[#c86844] transition-colors font-semibold text-lg">
              Browse All Courses
            </a>
            <Link href="/contact"
               className="px-8 py-4 border-2 border-[#d97757] text-[#d97757] rounded-xl hover:bg-[#d97757] hover:text-white transition-colors font-semibold text-lg">
              Get Custom Training
            </Link>
          </div>
        </div>

        <div className="border-t pt-8">
          <div className="text-center text-gray-600">
            <p className="mb-4">Also available on:</p>
            <div className="flex justify-center space-x-6">
              <a href="https://www.coursera.org/instructor/~164942694" target="_blank" rel="noopener noreferrer"
                 className="text-[#d97757] hover:underline">Coursera</a>
              <a href="https://try.codecademy.com/ai-2/us" target="_blank" rel="noopener noreferrer"
                 className="text-[#d97757] hover:underline">Codecademy</a>
              <a href="https://www.youtube.com/@goyashy" target="_blank" rel="noopener noreferrer"
                 className="text-[#d97757] hover:underline">YouTube</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}