import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AI Consulting Services - Yash Thakker | Expert AI Strategy & Implementation',
  description: 'Professional AI consulting services by Yash Thakker. AI strategy, implementation, and transformation for businesses. 12+ years experience with Fortune 500 companies.',
  keywords: 'AI consulting, artificial intelligence consultant, AI strategy, AI implementation, business AI transformation, AI advisor',
  robots: 'index, follow',
};

export default function AIConsultingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
            AI Consulting Services
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Transform your business with expert AI strategy and implementation. Trusted by Fortune 500 companies and growing startups.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:yash@explainx.ai"
               className="px-8 py-4 bg-[#d97757] text-white rounded-xl hover:bg-[#c86844] transition-colors font-semibold">
              Book Consultation
            </a>
            <Link href="/contact"
               className="px-8 py-4 border-2 border-[#d97757] text-[#d97757] rounded-xl hover:bg-[#d97757] hover:text-white transition-colors font-semibold">
              Discuss Your Project
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-[#d97757] mb-2">12+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#d97757] mb-2">100+</div>
            <div className="text-gray-600">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#d97757] mb-2">$50M+</div>
            <div className="text-gray-600">Value Generated</div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Comprehensive AI Consulting Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-l-4 border-blue-500">
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-3 text-[#d97757]">AI Strategy Development</h3>
              <p className="text-gray-600 mb-4">Comprehensive AI roadmap aligned with your business objectives and industry requirements.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• AI readiness assessment</li>
                <li>• Strategic planning</li>
                <li>• ROI projections</li>
                <li>• Implementation timeline</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-l-4 border-green-500">
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-3 text-[#d97757]">AI Implementation</h3>
              <p className="text-gray-600 mb-4">End-to-end implementation of AI solutions tailored to your specific business needs.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Custom AI development</li>
                <li>• System integration</li>
                <li>• Workflow automation</li>
                <li>• Performance optimization</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-l-4 border-purple-500">
              <div className="text-3xl mb-4">🏢</div>
              <h3 className="text-xl font-semibold mb-3 text-[#d97757]">Enterprise AI Transformation</h3>
              <p className="text-gray-600 mb-4">Large-scale AI adoption across departments with change management and training.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Organization-wide strategy</li>
                <li>• Change management</li>
                <li>• Team training</li>
                <li>• Governance frameworks</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-l-4 border-red-500">
              <div className="text-3xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold mb-3 text-[#d97757]">AI Audit & Optimization</h3>
              <p className="text-gray-600 mb-4">Review and optimize existing AI systems for better performance and cost efficiency.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Performance analysis</li>
                <li>• Cost optimization</li>
                <li>• Security assessment</li>
                <li>• Upgrade recommendations</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-l-4 border-orange-500">
              <div className="text-3xl mb-4">📊</div>
              <h3 className="text-xl font-semibold mb-3 text-[#d97757]">AI Analytics & Insights</h3>
              <p className="text-gray-600 mb-4">Advanced analytics and business intelligence using AI and machine learning.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Predictive analytics</li>
                <li>• Customer insights</li>
                <li>• Market analysis</li>
                <li>• Performance metrics</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-l-4 border-indigo-500">
              <div className="text-3xl mb-4">🎓</div>
              <h3 className="text-xl font-semibold mb-3 text-[#d97757]">AI Training & Education</h3>
              <p className="text-gray-600 mb-4">Comprehensive training programs for teams and leadership on AI adoption.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Executive workshops</li>
                <li>• Technical training</li>
                <li>• Best practices</li>
                <li>• Certification programs</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#d97757] to-[#c86844] text-white p-12 rounded-2xl mb-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Industries We Serve</h2>
            <div className="grid md:grid-cols-4 gap-6 mt-8">
              <div className="bg-white/10 p-4 rounded-xl backdrop-blur">
                <h3 className="font-bold mb-2">🏦 Fintech</h3>
                <p className="text-sm">Risk analysis, fraud detection, algorithmic trading</p>
              </div>
              <div className="bg-white/10 p-4 rounded-xl backdrop-blur">
                <h3 className="font-bold mb-2">🏥 Healthcare</h3>
                <p className="text-sm">Diagnosis assistance, drug discovery, patient care</p>
              </div>
              <div className="bg-white/10 p-4 rounded-xl backdrop-blur">
                <h3 className="font-bold mb-2">🛒 E-commerce</h3>
                <p className="text-sm">Recommendation systems, inventory, personalization</p>
              </div>
              <div className="bg-white/10 p-4 rounded-xl backdrop-blur">
                <h3 className="font-bold mb-2">🏭 Manufacturing</h3>
                <p className="text-sm">Predictive maintenance, quality control, optimization</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Trusted by Leading Companies</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-[#d97757] rounded-full flex items-center justify-center text-white font-bold text-xl">T</div>
                <div className="ml-4">
                  <h4 className="text-xl font-semibold">TATA Group</h4>
                  <p className="text-gray-600">AI Strategy & Implementation</p>
                </div>
              </div>
              <p className="text-gray-700">"Yash helped us develop a comprehensive AI strategy that increased operational efficiency by 40% across multiple business units."</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">P</div>
                <div className="ml-4">
                  <h4 className="text-xl font-semibold">PayPal</h4>
                  <p className="text-gray-600">Fraud Detection AI</p>
                </div>
              </div>
              <p className="text-gray-700">"The AI fraud detection system reduced false positives by 60% while maintaining 99.8% accuracy. Exceptional consulting expertise."</p>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Our Consulting Process</h2>
          <div className="space-y-6">
            
            <div className="flex items-start space-x-6 bg-white p-6 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-[#d97757] rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">1</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Discovery & Assessment</h3>
                <p className="text-gray-600">Comprehensive analysis of your current state, challenges, and AI readiness to identify opportunities and create a tailored strategy.</p>
              </div>
            </div>

            <div className="flex items-start space-x-6 bg-white p-6 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-[#d97757] rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">2</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Strategy Development</h3>
                <p className="text-gray-600">Design comprehensive AI roadmap with clear milestones, ROI projections, risk assessment, and implementation timeline.</p>
              </div>
            </div>

            <div className="flex items-start space-x-6 bg-white p-6 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-[#d97757] rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">3</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Implementation & Integration</h3>
                <p className="text-gray-600">Execute the strategy with hands-on implementation, system integration, team training, and change management support.</p>
              </div>
            </div>

            <div className="flex items-start space-x-6 bg-white p-6 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-[#d97757] rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">4</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Optimization & Scale</h3>
                <p className="text-gray-600">Continuous monitoring, performance optimization, and scaling strategies to maximize ROI and business impact.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Ready to Transform Your Business with AI?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Get expert guidance from a proven AI consultant. Let's discuss how AI can accelerate your business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:yash@explainx.ai"
               className="px-8 py-4 bg-[#d97757] text-white rounded-xl hover:bg-[#c86844] transition-colors font-semibold text-lg">
              Schedule Free Consultation
            </a>
            <Link href="/contact"
               className="px-8 py-4 border-2 border-[#d97757] text-[#d97757] rounded-xl hover:bg-[#d97757] hover:text-white transition-colors font-semibold text-lg">
              Send Project Details
            </Link>
          </div>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-[#d97757]">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Start with a Free AI Assessment</h3>
            <p className="text-gray-600 mb-6">Get a complimentary 30-minute consultation to identify AI opportunities in your business</p>
            <a href="mailto:yash@explainx.ai?subject=Free AI Assessment Request"
               className="inline-block px-8 py-4 bg-[#d97757] text-white rounded-xl hover:bg-[#c86844] transition-colors font-semibold">
              Claim Free Assessment
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}