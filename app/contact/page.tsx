import { Metadata } from 'next';
import Navigation from '../components/Navigation';

export const metadata: Metadata = {
  title: 'Contact - Yash Thakker | AI Consulting & Partnerships',
  description: 'Get in touch with AI Instructor Yash Thakker for partnerships, consulting, speaking engagements, and collaboration opportunities.',
  keywords: ['AI consulting', 'partnerships', 'speaking engagements', 'AI instructor contact'],
};

export default function ContactPage() {
  const contactOptions = [
    {
      type: 'Partnerships & Collaborations',
      email: 'yash@explainx.ai',
      description: 'Business partnerships, course collaborations, and strategic alliances',
      icon: '🤝'
    },
    {
      type: 'Speaking Engagements',
      email: 'yash@explainx.ai',
      description: 'Conference talks, workshops, and corporate training sessions',
      icon: '🎤'
    },
    {
      type: 'AI Consulting',
      email: 'yash@explainx.ai',
      description: 'Product strategy, AI implementation, and technical guidance',
      icon: '🧠'
    },
    {
      type: 'Media & Press',
      email: 'yash@explainx.ai',
      description: 'Interview requests, podcast appearances, and media inquiries',
      icon: '📺'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Let's Connect</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to collaborate on AI projects, need consulting, or want to discuss partnerships? 
            I'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {contactOptions.map((option, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <span className="text-3xl">{option.icon}</span>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {option.type}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {option.description}
                  </p>
                  <a 
                    href={`mailto:${option.email}`}
                    className="inline-flex items-center px-4 py-2 bg-[#d97757] text-white rounded-lg hover:bg-[#c86844] transition-colors text-sm font-medium"
                  >
                    <span className="mr-2">📧</span>
                    Get in Touch
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Quick Contact</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 bg-[#d97757] text-white rounded-full flex items-center justify-center font-bold">@</span>
                  <div>
                    <div className="font-medium text-gray-800">Email</div>
                    <a href="mailto:yash@explainx.ai" className="text-[#d97757] hover:text-[#c86844]">
                      yash@explainx.ai
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 bg-[#0077b5] text-white rounded-full flex items-center justify-center font-bold">in</span>
                  <div>
                    <div className="font-medium text-gray-800">LinkedIn</div>
                    <a href="https://www.linkedin.com/in/goyashy/" target="_blank" rel="noopener noreferrer" className="text-[#d97757] hover:text-[#c86844]">
                      /in/goyashy
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 bg-[#1DA1F2] text-white rounded-full flex items-center justify-center font-bold">X</span>
                  <div>
                    <div className="font-medium text-gray-800">Twitter/X</div>
                    <a href="https://x.com/goyashy" target="_blank" rel="noopener noreferrer" className="text-[#d97757] hover:text-[#c86844]">
                      @goyashy
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 bg-[#FF0000] text-white rounded-full flex items-center justify-center font-bold">YT</span>
                  <div>
                    <div className="font-medium text-gray-800">YouTube</div>
                    <a href="https://www.youtube.com/@goyashy" target="_blank" rel="noopener noreferrer" className="text-[#d97757] hover:text-[#c86844]">
                      @goyashy
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Response Times</h3>
              <div className="space-y-4 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Partnerships & Business</span>
                  <span className="font-medium text-gray-800">24-48 hours</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Speaking Engagements</span>
                  <span className="font-medium text-gray-800">1-3 days</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Consulting Inquiries</span>
                  <span className="font-medium text-gray-800">2-5 days</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">General Questions</span>
                  <span className="font-medium text-gray-800">3-7 days</span>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-[#d97757]/10 rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>Note:</strong> For urgent matters, please mention "URGENT" in your email subject line. 
                  I prioritize partnership and consulting inquiries.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Frequently Asked Questions</h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Do you offer one-on-one mentoring?</h4>
                <p className="text-gray-600 text-sm">Currently focusing on group coaching and corporate training. Individual mentoring is limited.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">What's your speaking fee?</h4>
                <p className="text-gray-600 text-sm">Speaking fees vary based on event type, duration, and location. Contact me for a custom quote.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Do you create custom courses?</h4>
                <p className="text-gray-600 text-sm">Yes! I develop custom AI curricula for organizations and educational institutions.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Can you review my AI product?</h4>
                <p className="text-gray-600 text-sm">I offer product strategy consulting and AI implementation reviews for select clients.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}