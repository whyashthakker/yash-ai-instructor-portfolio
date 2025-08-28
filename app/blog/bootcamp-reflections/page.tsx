import { Metadata } from 'next';
import Navigation from '../../components/Navigation';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Bootcamp Reflections: Teaching 100+ Non-Coders | Yash Thakker',
  description: 'Key insights from teaching over 100 students with zero coding experience how to build AI applications using Cursor AI, ChatGPT, and Claude.',
  keywords: ['AI bootcamp', 'non-coders', 'prompt engineering', 'Cursor AI', 'ChatGPT', 'Claude', 'teaching insights'],
};

export default function BootcampReflectionsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="max-w-3xl mx-auto px-6 py-12">
        <Link href="/blog" className="text-[#d97757] hover:text-[#c86844] text-sm mb-6 inline-block">← Back to Blog</Link>
        
        <article className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
          <header className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <span className="px-3 py-1 bg-[#d97757]/10 text-[#d97757] text-sm font-medium rounded-full">
                Education Insights
              </span>
              <time className="text-sm text-gray-500">August 28, 2025</time>
              <span className="text-sm text-gray-500">•</span>
              <span className="text-sm text-gray-500">10 min read</span>
            </div>
            
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              Reflections from My Latest AI Bootcamp: Teaching 100+ Non-Coders
            </h1>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Recently, I completed an intensive AI bootcamp where I taught over 100 students with zero coding experience 
              how to build AI applications using modern tools like Cursor AI, ChatGPT, and Claude. Here are my key takeaways.
            </p>
          </header>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">The Challenge: Diverse Learning Paces</h2>
            <p>
              One of the biggest challenges I faced was managing the diverse learning paces of 100+ students. Some picked up 
              concepts quickly, while others needed more time to grasp the fundamentals. This experience taught me that 
              <strong> having pre-resources is crucial</strong> for students to self-learn and catch up at their own pace.
            </p>

            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Teaching Them How to Fish</h2>
            <p>
              Instead of spoon-feeding solutions, I focused on <strong>teaching students how to fish</strong> rather than giving them fish. 
              This approach encourages self-reliance and builds problem-solving skills that extend beyond the bootcamp. 
              Students learned to approach problems systematically and find solutions independently.
            </p>

            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Prompt Engineering: The Critical Skill</h2>
            <p>
              <strong>Prompt engineering emerged as the most important skill</strong> in the entire curriculum. Students who mastered 
              this skill could effectively communicate with AI tools and get better results. It's not just about asking questions 
              – it's about asking the right questions in the right way.
            </p>

            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">AI Tools That Made the Difference</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-3">Essential Tools Used:</h3>
              <ul className="space-y-2 text-sm">
                <li><strong>Cursor AI:</strong> Code editor with AI assistance for real-time coding help</li>
                <li><strong>ChatGPT:</strong> Problem-solving and code explanation</li>
                <li><strong>Claude:</strong> Complex reasoning and detailed explanations</li>
              </ul>
            </div>

            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">The Human Element</h2>
            <p>
              Despite all the AI tools, students consistently valued <strong>the instructor as the main asset</strong>. 
              They appreciated human guidance in navigating the complexity of AI development, understanding when to use 
              which tool, and getting personalized feedback on their approach.
            </p>

            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">The Dependency Challenge</h2>
            <p>
              A concerning pattern emerged: <strong>students intentionally relied on me for knowledge</strong> rather than 
              developing independent learning habits. This dependency is something I'm still figuring out how to address 
              effectively while maintaining support and guidance.
            </p>

            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Education Methods Are Evolving</h2>
            <p>
              This experience reinforced that <strong>education and learning methods are rapidly changing</strong>. 
              Traditional teaching approaches don't always work in the AI era. As an instructor, I need to continuously 
              adapt to new methods that balance technology assistance with human guidance.
            </p>

            <div className="bg-[#d97757]/10 p-6 rounded-lg mt-8">
              <h3 className="font-semibold text-gray-800 mb-3">Looking Forward</h3>
              <p className="text-sm text-gray-700">
                We're planning many more bootcamps in the future, incorporating these learnings to create even better 
                educational experiences. The goal is to find the perfect balance between AI assistance, self-learning, 
                and human mentorship.
              </p>
            </div>

            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Key Takeaways for Educators</h2>
            <ul className="space-y-2">
              <li>• Provide comprehensive pre-resources for self-paced learning</li>
              <li>• Focus on prompt engineering as a foundational skill</li>
              <li>• Encourage independence while providing guidance</li>
              <li>• Embrace new teaching methods for the AI era</li>
              <li>• Balance technology tools with human mentorship</li>
            </ul>

            <div className="border-t border-gray-200 pt-6 mt-8">
              <p className="text-sm text-gray-600">
                These reflections come from real experience teaching 100+ students. Every bootcamp teaches me something new 
                about effective education in the AI age.
              </p>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}