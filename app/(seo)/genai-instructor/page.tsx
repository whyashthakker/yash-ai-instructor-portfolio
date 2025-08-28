import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Generative AI Instructor - Yash Thakker | GPT, LLM & AI Training Expert',
  description: 'Master Generative AI with expert instruction from Yash Thakker. Learn ChatGPT, GPT-4, Claude, and LLM applications. 120K+ students trained worldwide.',
  keywords: 'generative AI instructor, GPT training, LLM instructor, ChatGPT course, generative AI expert, AI teacher, generative AI education',
  robots: 'index, follow',
};

export default function GenAIInstructorPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
            Generative AI Instructor
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Master the future of AI with comprehensive Generative AI training from industry expert Yash Thakker
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://www.udemy.com/user/feelix-2" target="_blank" rel="noopener noreferrer"
               className="px-8 py-4 bg-[#d97757] text-white rounded-xl hover:bg-[#c86844] transition-colors font-semibold">
              Enroll in GenAI Courses
            </a>
            <a href="mailto:yash@explainx.ai"
               className="px-8 py-4 border-2 border-[#d97757] text-[#d97757] rounded-xl hover:bg-[#d97757] hover:text-white transition-colors font-semibold">
              Custom GenAI Training
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Generative AI Expertise</h2>
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-3 text-[#d97757]">Large Language Models</h3>
                <p className="text-gray-700">Master GPT-4, Claude, Gemini, and other cutting-edge LLMs for various applications and use cases.</p>
              </div>
              <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-3 text-[#d97757]">Prompt Engineering</h3>
                <p className="text-gray-700">Learn advanced prompting techniques, chain-of-thought reasoning, and prompt optimization strategies.</p>
              </div>
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-3 text-[#d97757]">AI Applications</h3>
                <p className="text-gray-700">Build real-world applications using generative AI for content creation, automation, and business solutions.</p>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">GenAI Tools & Platforms</h2>
            <div className="grid grid-cols-1 gap-4">
              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-[#d97757]">
                <h4 className="font-bold text-lg mb-2">OpenAI GPT Models</h4>
                <p className="text-gray-600">GPT-4, GPT-3.5, DALL-E, Whisper, and OpenAI API integration</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-[#d97757]">
                <h4 className="font-bold text-lg mb-2">Anthropic Claude</h4>
                <p className="text-gray-600">Claude 3, Claude 2, and advanced reasoning capabilities</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-[#d97757]">
                <h4 className="font-bold text-lg mb-2">Google Bard & Gemini</h4>
                <p className="text-gray-600">Latest Google AI models and multimodal capabilities</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-[#d97757]">
                <h4 className="font-bold text-lg mb-2">Specialized AI Tools</h4>
                <p className="text-gray-600">Midjourney, Stable Diffusion, RunwayML, and more</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#d97757] to-[#c86844] text-white p-12 rounded-2xl mb-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Why Learn Generative AI?</h2>
            <div className="grid md:grid-cols-3 gap-8 mt-8">
              <div className="text-center">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-semibold mb-2">Career Growth</h3>
                <p>AI skills are the most in-demand, with 40% salary increases for AI professionals</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-semibold mb-2">Productivity Boost</h3>
                <p>Automate 70% of repetitive tasks and increase output by 10x with AI</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-semibold mb-2">Future-Ready</h3>
                <p>Stay ahead of the curve in the AI revolution transforming every industry</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Generative AI Curriculum</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-2xl mb-3">🎓</div>
              <h3 className="text-xl font-semibold mb-3 text-[#d97757]">GenAI Fundamentals</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Understanding LLMs</li>
                <li>• Transformer Architecture</li>
                <li>• Training vs Inference</li>
                <li>• AI Ethics & Bias</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-2xl mb-3">🎯</div>
              <h3 className="text-xl font-semibold mb-3 text-[#d97757]">Advanced Prompting</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Chain-of-Thought</li>
                <li>• Few-Shot Learning</li>
                <li>• Role-Based Prompts</li>
                <li>• Prompt Optimization</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-2xl mb-3">🔧</div>
              <h3 className="text-xl font-semibold mb-3 text-[#d97757]">API Integration</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• OpenAI API</li>
                <li>• Claude API</li>
                <li>• Custom Applications</li>
                <li>• Error Handling</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-2xl mb-3">🎨</div>
              <h3 className="text-xl font-semibold mb-3 text-[#d97757]">Content Generation</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Text Generation</li>
                <li>• Image Creation</li>
                <li>• Code Generation</li>
                <li>• Video & Audio</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-2xl mb-3">⚙️</div>
              <h3 className="text-xl font-semibold mb-3 text-[#d97757]">Automation & Workflows</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• AI Agents</li>
                <li>• Workflow Design</li>
                <li>• Integration Tools</li>
                <li>• Scaling Solutions</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-2xl mb-3">📊</div>
              <h3 className="text-xl font-semibold mb-3 text-[#d97757]">Business Applications</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• ROI Measurement</li>
                <li>• Use Case Design</li>
                <li>• Team Training</li>
                <li>• Strategy Planning</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Student Success Stories</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="text-4xl text-[#d97757] mb-4">★★★★★</div>
              <p className="text-gray-700 mb-4">"Yash's GenAI course transformed how I work. I now automate 80% of my content creation and focus on strategy."</p>
              <p className="font-semibold text-gray-900">- Sarah M., Marketing Director</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="text-4xl text-[#d97757] mb-4">★★★★★</div>
              <p className="text-gray-700 mb-4">"Best investment I made for my career. Got a 50% salary raise after completing the Generative AI certification."</p>
              <p className="font-semibold text-gray-900">- Mike K., Software Engineer</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="text-4xl text-[#d97757] mb-4">★★★★★</div>
              <p className="text-gray-700 mb-4">"Yash explains complex GenAI concepts in simple terms. Now I'm building AI solutions for my startup."</p>
              <p className="font-semibold text-gray-900">- Alex R., Entrepreneur</p>
            </div>
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Start Your GenAI Journey Today</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join 120,000+ students who have mastered Generative AI with our comprehensive training programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://www.udemy.com/user/feelix-2" target="_blank" rel="noopener noreferrer"
               className="px-8 py-4 bg-[#d97757] text-white rounded-xl hover:bg-[#c86844] transition-colors font-semibold text-lg">
              View All GenAI Courses
            </a>
            <Link href="/ai-bootcamp"
               className="px-8 py-4 border-2 border-[#d97757] text-[#d97757] rounded-xl hover:bg-[#d97757] hover:text-white transition-colors font-semibold text-lg">
              Join GenAI Bootcamp
            </Link>
          </div>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-[#d97757]">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Ready for Enterprise GenAI Training?</h3>
            <p className="text-gray-600 mb-6">Custom Generative AI training programs for teams and organizations</p>
            <a href="mailto:yash@explainx.ai"
               className="inline-block px-8 py-4 bg-[#d97757] text-white rounded-xl hover:bg-[#c86844] transition-colors font-semibold">
              Book Enterprise Consultation
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}