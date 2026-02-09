import { Metadata } from 'next';
import Navigation from '../components/Navigation';

export const metadata: Metadata = {
  title: 'About - Yash Thakker | AI Instructor & Product Leader',
  description: 'Learn about Yash Thakker\'s journey in AI education and product development. 12+ years experience, 160K+ students taught, founder of AISOLO Technologies.',
  keywords: ['Yash Thakker bio', 'AI instructor background', 'product leader experience', 'AISOLO Technologies founder'],
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <img 
            src="/yash.png" 
            alt="Yash Thakker - AI Instructor and Product Leader"
            className="w-32 h-32 rounded-full object-cover shadow-xl mx-auto mb-6"
          />
          <h1 className="text-4xl font-bold text-gray-800 mb-4">About Yash Thakker</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Transforming AI education and building products that shape the future of technology
          </p>
        </div>

        {/* Journey Section */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">My Journey</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              My entrepreneurial journey began early. From age 10-15, I spent countless hours at my father's small shop, absorbing the 
              <strong>Gujarati business mindset</strong> - the values of hard work, customer service, and turning challenges into opportunities. 
              This foundation shaped my approach to building products and teaching.
            </p>
            <p className="mb-4">
              I'm Yash Thakker, founder of <strong>AISOLO Technologies</strong> and <strong>ExplainX.ai</strong>, with over <strong>12 years of experience</strong> 
              building AI products and teaching the next generation of AI practitioners. Based in Mumbai, I've dedicated my career 
              to making artificial intelligence accessible and transformative for individuals and organizations worldwide.
            </p>
            <p>
              Today, having taught over <strong>160,000 students</strong> across multiple platforms and built products serving 
              <strong>60,000+ users</strong>, I continue bridging the gap between cutting-edge AI research and practical applications 
              that drive real business value.
            </p>
          </div>
        </div>

        {/* Education & Credentials */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Education & Credentials</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="w-8 h-8 bg-[#d97757] text-white rounded-full flex items-center justify-center text-sm font-bold">🎓</span>
                <div>
                  <div className="font-semibold text-gray-800">MBA</div>
                  <div className="text-gray-600">SIMSREE, Mumbai</div>
                  <div className="text-sm text-gray-500">One of Mumbai's top business schools</div>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <span className="w-8 h-8 bg-[#d97757] text-white rounded-full flex items-center justify-center text-sm font-bold">💻</span>
                <div>
                  <div className="font-semibold text-gray-800">Bachelor's in Information Technology</div>
                  <div className="text-gray-600">Technical Foundation</div>
                  <div className="text-sm text-gray-500">Strong engineering background</div>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <span className="w-8 h-8 bg-[#d97757] text-white rounded-full flex items-center justify-center text-sm font-bold">🏆</span>
                <div>
                  <div className="font-semibold text-gray-800">Industry Certifications</div>
                  <div className="text-gray-600">AI & Machine Learning</div>
                  <div className="text-sm text-gray-500">Continuous learning and expertise</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Core Expertise</h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="text-sm">
                <div className="font-medium text-gray-800">• Generative AI</div>
                <div className="font-medium text-gray-800">• Product Strategy</div>
                <div className="font-medium text-gray-800">• SaaS Development</div>
                <div className="font-medium text-gray-800">• Technical Leadership</div>
              </div>
              <div className="text-sm">
                <div className="font-medium text-gray-800">• AI Consulting</div>
                <div className="font-medium text-gray-800">• Educational Design</div>
                <div className="font-medium text-gray-800">• Prompt Engineering</div>
                <div className="font-medium text-gray-800">• Business Development</div>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-gray-200">
              <h4 className="font-semibold text-gray-800 mb-3">Interests</h4>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Gaming</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Coding</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Traveling</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Tech Innovation</span>
              </div>
            </div>
          </div>
        </div>

        {/* Professional Timeline */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 mb-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Professional Experience</h3>
          <div className="space-y-4 text-sm">
            <div className="border-l-4 border-[#d97757] pl-4">
              <h4 className="font-semibold text-gray-800">Founder - ExplainX.ai & AISOLO Technologies</h4>
              <p className="text-gray-600">Jun 2023 - Present • Mumbai</p>
              <p className="text-gray-700 mt-2">70K+ Udemy students, 30+ courses in GenAI. Building AI products and e-learning materials. 200+ live training hours.</p>
            </div>
            
            <div className="border-l-4 border-gray-300 pl-4">
              <h4 className="font-semibold text-gray-800">Maker - Infloq.com & Olly.social</h4>
              <p className="text-gray-600">2023 - Present</p>
              <p className="text-gray-700 mt-2">AI-powered influencer marketing platform for SMBs and social media growth extension (25K+ users).</p>
            </div>

            <div className="border-l-4 border-gray-300 pl-4">
              <h4 className="font-semibold text-gray-800">Technical Officer & Product Lead - Fynd/PixelBin</h4>
              <p className="text-gray-600">Jul 2022 - Sep 2023 • Mumbai</p>
              <p className="text-gray-700 mt-2">Built generative AI capabilities for digital asset management platform.</p>
            </div>

            <div className="border-l-4 border-gray-300 pl-4">
              <h4 className="font-semibold text-gray-800">Product Manager - IDfy</h4>
              <p className="text-gray-600">Mar 2021 - Jul 2022 • Mumbai</p>
              <p className="text-gray-700 mt-2">Led API product development for fraud-free KYC solutions in RegTech.</p>
            </div>

            <div className="border-l-4 border-gray-300 pl-4">
              <h4 className="font-semibold text-gray-800">Co-founder - Casereads</h4>
              <p className="text-gray-600">Nov 2019 - May 2021 • Mumbai</p>
              <p className="text-gray-700 mt-2">50+ business schools, 100+ authors, 10K MAU, 2M+ lives impacted.</p>
            </div>

            <div className="border-l-4 border-gray-300 pl-4">
              <h4 className="font-semibold text-gray-800">Product Manager - InsideIIM</h4>
              <p className="text-gray-600">Nov 2020 - Mar 2021 • Mumbai</p>
              <p className="text-gray-700 mt-2">Led product roadmap, strategy, partnerships for education platform.</p>
            </div>

            <div className="border-l-4 border-gray-300 pl-4">
              <h4 className="font-semibold text-gray-800">Junior Product Manager - SDL (RWS Group)</h4>
              <p className="text-gray-600">Feb 2017 - Jun 2019 • Mumbai</p>
              <p className="text-gray-700 mt-2">ML-based translation products. Top clients grew 120% in 2 years.</p>
            </div>

            <div className="border-l-4 border-gray-300 pl-4">
              <h4 className="font-semibold text-gray-800">Software Developer - NUTECH Solutions</h4>
              <p className="text-gray-600">Jun 2016 - Jan 2017 • Navi Mumbai</p>
              <p className="text-gray-700 mt-2">Empowered final year students to build impactful projects.</p>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 mb-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Impact</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-[#d97757]">160K+</div>
              <div className="text-xs text-gray-600">Students Taught</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-[#d97757]">50+</div>
              <div className="text-xs text-gray-600">Courses Created</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-[#d97757]">60K+</div>
              <div className="text-xs text-gray-600">Product Users</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-[#d97757]">12+</div>
              <div className="text-xs text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Mission & Vision</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-[#d97757] mb-3">Mission</h4>
              <p className="text-gray-700">
                To democratize AI education and empower individuals and organizations to leverage 
                artificial intelligence for solving real-world problems and driving meaningful innovation.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-[#d97757] mb-3">Vision</h4>
              <p className="text-gray-700">
                A future where AI literacy is universal, enabling every person and business to harness 
                the transformative power of artificial intelligence for positive impact and sustainable growth.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}