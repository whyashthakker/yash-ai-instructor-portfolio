import { Metadata } from 'next';
import Navigation from '../components/Navigation';

export const metadata: Metadata = {
  title: 'FAQ - Yash Thakker | AI Instructor & Product Leader | 250K+ Students',
  description: 'Frequently asked questions about AI instruction, consulting, and product development by Yash Thakker. Learn about 50+ AI courses, corporate training, consulting services, and AI products (olly.social, explainx.ai, infloq.com).',
  keywords: ['AI instructor FAQ', 'AI consulting questions', 'AI course FAQ', 'Yash Thakker services', 'AI training information', 'Generative AI courses', 'corporate AI training', 'AI product development', 'Udemy AI instructor', 'Coursera AI courses'],
};

export default function FAQPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What types of AI courses does Yash Thakker offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yash Thakker offers 50+ comprehensive AI courses including Generative AI, Large Language Models (LLMs), ChatGPT, Claude AI, Prompt Engineering, Machine Learning, AI for Business, and AI Productivity. Courses are available on Udemy (250,000+ students), Coursera, Codecademy, and through direct corporate training programs. All courses focus on practical applications with hands-on projects."
        }
      },
      {
        "@type": "Question",
        "name": "Are Yash Thakker's AI courses suitable for beginners?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Yash Thakker's courses cater to all skill levels. Beginners can start with foundational courses covering AI basics, while advanced practitioners benefit from specialized courses in cutting-edge technologies. With an average 4.5+ rating across platforms and 250,000+ students taught, the courses are designed for progressive learning from beginner to expert level."
        }
      },
      {
        "@type": "Question",
        "name": "Does Yash Thakker offer corporate AI training?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Yash Thakker provides customized corporate training programs for organizations including Fortune 500 companies, TATA Group, and PayPal. Training can be tailored to specific needs including AI implementation, prompt engineering, AI strategy, and organizational AI literacy. Programs include intensive bootcamps like 'AI Maker' and 'Claude for Work' (3-week programs) with 90%+ completion rates."
        }
      },
      {
        "@type": "Question",
        "name": "What AI consulting services does Yash Thakker provide?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yash Thakker offers strategic AI consulting including: AI implementation strategy, product development guidance, technical architecture review, AI transformation roadmap development, LLM integration consulting, and Generative AI strategy. With 12+ years of experience across Fintech, Edtech, Martech, and other industries, he provides end-to-end AI consultation for businesses of all sizes."
        }
      },
      {
        "@type": "Question",
        "name": "What AI products has Yash Thakker built?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yash Thakker has built three successful AI products under AISOLO Technologies: 1) infloq.com - AI-powered influencer marketing platform (launched 2025), 2) olly.social - social media productivity extension with 25,000+ active users and 5,000+ paid subscribers (20% conversion rate), and 3) explainx.ai - enterprise-grade AI model explainability platform serving 100,000+ monthly users."
        }
      },
      {
        "@type": "Question",
        "name": "How many students has Yash Thakker taught?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yash Thakker has taught over 250,000 students worldwide (as of May 2026) across Udemy, Coursera, Codecademy, YouTube, and bootcamp programs. His students span 150+ countries across 6 continents, with over 1 million hours of AI education delivered. According to student surveys, 80%+ report implementing AI in their work within 30 days of completing his courses."
        }
      },
      {
        "@type": "Question",
        "name": "Does Yash Thakker work with startups?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Yash Thakker has extensive experience working with startups to implement AI solutions and develop AI-powered products. He offers flexible engagement models suitable for early-stage companies, including fractional AI leadership, product development consultation, and technical architecture guidance. As the founder of AISOLO Technologies, he understands the unique challenges startups face."
        }
      },
      {
        "@type": "Question",
        "name": "How can I contact Yash Thakker?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can contact Yash Thakker via email at yash@explainx.ai or connect on LinkedIn (linkedin.com/in/goyashy), Twitter/X (@goyashy), or through the contact form on goyashy.com. For course-related queries, you can message him directly on Udemy, Coursera, or Codecademy. He's based in Mumbai, India (GMT+5:30) but works with clients globally across all time zones."
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

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
                  I offer <strong>50+ comprehensive AI courses</strong> including Generative AI, Large Language Models (LLMs), ChatGPT, Claude AI, Prompt Engineering, Machine Learning, AI for Business, and AI Productivity. Courses are available on <strong>Udemy (250,000+ students)</strong>, Coursera, Codecademy, and through direct corporate training programs. All courses focus on practical applications with hands-on projects and maintain an average <strong>4.5+ rating</strong>.
                </p>
              </div>

              <div className="border-b border-gray-100 pb-6">
                <h3 className="text-lg font-semibold text-[#d97757] mb-2">Are your courses suitable for beginners?</h3>
                <p className="text-gray-700">
                  Absolutely! My courses cater to all skill levels, from complete beginners to advanced AI practitioners. With <strong>250,000+ students taught worldwide</strong>, I've developed a proven methodology for progressive learning. Beginners start with foundational courses covering AI basics, while advanced practitioners benefit from specialized courses in cutting-edge technologies. According to student data, <strong>80%+ implement AI in their work within 30 days</strong> of completing my courses.
                </p>
              </div>

              <div className="pb-6">
                <h3 className="text-lg font-semibold text-[#d97757] mb-2">Do you offer corporate training?</h3>
                <p className="text-gray-700">
                  Yes, I provide customized corporate training programs for organizations including <strong>Fortune 500 companies, TATA Group, and PayPal</strong>. Training can be tailored to your team's specific needs including AI implementation, prompt engineering, AI strategy, and organizational AI literacy. Programs include intensive bootcamps like <strong>"AI Maker"</strong> and <strong>"Claude for Work"</strong> (3-week programs) with <strong>90%+ completion rates</strong>. I've trained teams across Media, Fintech, Regtech, Edtech, and Martech industries.
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
                  I offer strategic AI consulting services with <strong>12+ years of experience</strong> across multiple industries. Services include: AI implementation strategy, product development guidance, technical architecture review, AI transformation roadmap development, LLM integration consulting, and Generative AI strategy. I've worked with companies across <strong>Fintech, Edtech, Martech, Media, and Regtech</strong> sectors, helping them successfully integrate AI into their operations and achieve measurable business outcomes.
                </p>
              </div>

              <div className="border-b border-gray-100 pb-6">
                <h3 className="text-lg font-semibold text-[#d97757] mb-2">How long are typical consulting engagements?</h3>
                <p className="text-gray-700">
                  Consulting engagements are flexible and project-based, ranging from short-term strategic sessions (1-2 weeks for AI audits and roadmaps) to long-term implementation partnerships (3-12 months for full AI transformation). We define the scope based on your specific objectives, budget, and timeline. I also offer fractional AI leadership roles for ongoing strategic guidance without full-time commitment.
                </p>
              </div>

              <div className="pb-6">
                <h3 className="text-lg font-semibold text-[#d97757] mb-2">Do you work with startups?</h3>
                <p className="text-gray-700">
                  Yes! As the founder of <strong>AISOLO Technologies</strong> (established 2020), I have extensive experience working with startups to implement AI solutions and develop AI-powered products. I've successfully launched <strong>three AI products</strong> (infloq.com, olly.social, explainx.ai) and understand the unique challenges early-stage companies face. I offer flexible engagement models including fractional AI leadership, product development consultation, and technical architecture guidance tailored to startup budgets and timelines.
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
                  I've built three successful AI products under <strong>AISOLO Technologies</strong>:
                  <strong>(1) infloq.com</strong> - AI-powered influencer marketing platform (launched 2025) for SMBs and startups,
                  <strong>(2) olly.social</strong> - social media productivity extension with <strong>25,000+ active users</strong> and <strong>5,000+ paid subscribers</strong> (20% conversion rate), and
                  <strong>(3) explainx.ai</strong> - enterprise-grade AI model explainability platform serving <strong>100,000+ monthly users</strong>. All products leverage Generative AI, LLMs, and modern ML techniques to solve real-world business challenges.
                </p>
              </div>

              <div className="pb-6">
                <h3 className="text-lg font-semibold text-[#d97757] mb-2">Can you help with product development?</h3>
                <p className="text-gray-700">
                  Yes, I provide comprehensive product development consultation based on <strong>12+ years</strong> of building and scaling AI products. Services include: technical architecture design, AI/ML integration strategy, product roadmap development, go-to-market strategy, and team building guidance. I've successfully launched products that collectively serve <strong>hundreds of thousands of users</strong> and generate substantial MRR (Monthly Recurring Revenue). Whether you're building an MVP or scaling an existing product, I can guide your team through the entire development lifecycle.
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
                  You can contact me via <strong>email: yash@explainx.ai</strong> or connect on social platforms:
                  <strong>LinkedIn</strong> (linkedin.com/in/goyashy), <strong>Twitter/X</strong> (@goyashy), or through the contact form on goyashy.com.
                  For course-related queries, you can message me directly on <strong>Udemy, Coursera, or Codecademy</strong>.
                  I typically respond to partnership and consulting inquiries within <strong>24-48 hours</strong>.
                </p>
              </div>

              <div className="pb-6">
                <h3 className="text-lg font-semibold text-[#d97757] mb-2">What are your availability hours?</h3>
                <p className="text-gray-700">
                  I'm based in <strong>Mumbai, India (GMT+5:30)</strong> but work with clients globally across all time zones.
                  I maintain flexible hours to accommodate international consulting and training sessions, including
                  early morning and late evening calls for clients in the Americas, Europe, Asia, and other regions.
                  With students from <strong>150+ countries across 6 continents</strong>, I'm experienced in managing global collaboration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
