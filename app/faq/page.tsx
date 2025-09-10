import { Metadata } from 'next';
import Navigation from '../components/Navigation';

export const metadata: Metadata = {
  title: 'FAQ - Yash Thakker | AI Instructor & Product Leader',
  description: 'Frequently asked questions about AI instruction, consulting, and product development services by Yash Thakker. Learn about course offerings, consulting engagements, and more.',
  keywords: ['AI instructor FAQ', 'AI consulting questions', 'AI course FAQ', 'Yash Thakker services', 'AI training information'],
};

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Common questions about AI instruction, consulting, and product development services
          </p>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-8">
          {/* AI Training & Courses */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">AI Training & Courses</h2>
            <div className="space-y-6">
              <div className="border-b border-gray-100 pb-6">
                <h3 className="text-lg font-semibold text-[#d97757] mb-2">What types of AI courses do you offer?</h3>
                <p className="text-gray-700">
                  I offer a comprehensive range of AI courses including Generative AI, LLMs, ChatGPT, Prompt Engineering, 
                  and Machine Learning. Courses are available through platforms like Udemy and through direct corporate training.
                </p>
              </div>
              
              <div className="border-b border-gray-100 pb-6">
                <h3 className="text-lg font-semibold text-[#d97757] mb-2">Are your courses suitable for beginners?</h3>
                <p className="text-gray-700">
                  Yes! My courses cater to all skill levels. For beginners, I offer foundational courses that start from the basics. 
                  Advanced practitioners can benefit from specialized courses in cutting-edge AI technologies.
                </p>
              </div>

              <div className="pb-6">
                <h3 className="text-lg font-semibold text-[#d97757] mb-2">Do you offer corporate training?</h3>
                <p className="text-gray-700">
                  Yes, I provide customized corporate training programs. These can be tailored to your team's specific needs, 
                  whether it's AI implementation, prompt engineering, or general AI literacy for your organization.
                </p>
              </div>
            </div>
          </div>

          {/* Consulting Services */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">AI Consulting</h2>
            <div className="space-y-6">
              <div className="border-b border-gray-100 pb-6">
                <h3 className="text-lg font-semibold text-[#d97757] mb-2">What consulting services do you provide?</h3>
                <p className="text-gray-700">
                  I offer strategic AI consulting services including AI implementation strategy, product development guidance, 
                  technical architecture review, and AI transformation roadmap development for businesses.
                </p>
              </div>

              <div className="border-b border-gray-100 pb-6">
                <h3 className="text-lg font-semibold text-[#d97757] mb-2">How long are typical consulting engagements?</h3>
                <p className="text-gray-700">
                  Consulting engagements vary based on project scope. They can range from short-term strategic sessions 
                  to long-term implementation partnerships. We'll define the scope based on your specific needs.
                </p>
              </div>

              <div className="pb-6">
                <h3 className="text-lg font-semibold text-[#d97757] mb-2">Do you work with startups?</h3>
                <p className="text-gray-700">
                  Absolutely! I have extensive experience working with startups to implement AI solutions and develop 
                  AI-powered products. I offer flexible engagement models suitable for early-stage companies.
                </p>
              </div>
            </div>
          </div>

          {/* Products & Tools */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Products & Tools</h2>
            <div className="space-y-6">
              <div className="border-b border-gray-100 pb-6">
                <h3 className="text-lg font-semibold text-[#d97757] mb-2">What products have you built?</h3>
                <p className="text-gray-700">
                  I've built several successful AI products including Olly.social (25K+ users) for social media growth 
                  and Snapy.ai (35K+ users) for AI video editing. I also founded AISOLO Technologies and ExplainX.ai.
                </p>
              </div>

              <div className="pb-6">
                <h3 className="text-lg font-semibold text-[#d97757] mb-2">Can you help with product development?</h3>
                <p className="text-gray-700">
                  Yes, I provide product development consultation and can guide your team through the process of building 
                  AI-powered products. This includes technical architecture, AI integration, and go-to-market strategy.
                </p>
              </div>
            </div>
          </div>

          {/* Contact & Availability */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Contact & Availability</h2>
            <div className="space-y-6">
              <div className="border-b border-gray-100 pb-6">
                <h3 className="text-lg font-semibold text-[#d97757] mb-2">How can I get in touch?</h3>
                <p className="text-gray-700">
                  You can reach me through the contact form on this website, or connect with me on LinkedIn. 
                  For course-related queries, you can also message me on the respective course platforms.
                </p>
              </div>

              <div className="pb-6">
                <h3 className="text-lg font-semibold text-[#d97757] mb-2">What are your availability hours?</h3>
                <p className="text-gray-700">
                  I'm based in Mumbai, India (GMT+5:30) but work with clients globally. I maintain flexible hours 
                  to accommodate different time zones for consulting and training sessions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
