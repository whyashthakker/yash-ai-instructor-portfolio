import { Metadata } from 'next';
import Navigation from '../components/Navigation';

export const metadata: Metadata = {
  title: 'Infloq - AI-Powered Influencer Marketing Platform | Yash Thakker',
  description: 'Infloq connects SMBs and startups with verified creators for performance-based influencer marketing campaigns. Built for growing businesses.',
  keywords: ['influencer marketing', 'creator platform', 'brand partnerships', 'AI marketing', 'performance marketing', 'SMB marketing', 'startup marketing'],
};

export default function InfoloqPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 bg-[#d97757]/10 text-[#d97757] rounded-full text-sm font-medium mb-4">
            New from AISOLO Technologies
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Infloq</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            AI-Powered Influencer Marketing Platform Built for SMBs and Startups
          </p>
          <a
            href="https://infloq.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-[#d97757] text-white rounded-xl hover:bg-[#c86844] transition-colors font-semibold shadow-lg"
          >
            Visit Infloq.com
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>

        {/* What is Infloq */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">What is Infloq?</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              Infloq is an AI-powered influencer marketing platform designed specifically for small and medium businesses
              and early-stage enterprises. We make it easy for growing companies to connect with verified content creators
              for performance-based campaigns.
            </p>
            <p>
              Unlike enterprise-focused platforms with complex pricing and steep learning curves, Infloq is built to be
              accessible. Our performance-based model means you only pay for actual results, making influencer marketing
              viable for businesses at any stage.
            </p>
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Key Features</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <div className="w-10 h-10 bg-[#d97757]/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-[#d97757]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Creator Discovery</h3>
              <p className="text-gray-600 text-sm">
                Find verified creators across Tech, Design, AI, Lifestyle, Food, Travel and more.
                AI-powered matching based on niche, platform, audience size, and location.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <div className="w-10 h-10 bg-[#d97757]/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-[#d97757]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Campaign Management</h3>
              <p className="text-gray-600 text-sm">
                End-to-end workflow from briefs through approvals to publication. Simple collaboration
                tools designed for lean teams.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <div className="w-10 h-10 bg-[#d97757]/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-[#d97757]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Performance Tracking</h3>
              <p className="text-gray-600 text-sm">
                Real-time ROI monitoring and engagement metrics. Clear dashboards that show what's
                working and what's not.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <div className="w-10 h-10 bg-[#d97757]/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-[#d97757]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">SMB-Friendly Pricing</h3>
              <p className="text-gray-600 text-sm">
                Affordable plans designed for growing businesses. No enterprise-level minimums or
                long-term commitments required.
              </p>
            </div>
          </div>
        </div>

        {/* Creator Niches */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Creator Niches</h2>
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">Tech</span>
            <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">Design</span>
            <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">AI & ML</span>
            <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">Lifestyle</span>
            <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">Food</span>
            <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">Travel</span>
            <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">Fashion</span>
            <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">Finance</span>
            <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">Health</span>
            <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">Gaming</span>
          </div>
        </div>

        {/* Who It's For */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Built For</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-2">Startups</h3>
              <p className="text-gray-600 text-sm">
                Launch influencer campaigns without enterprise budgets. Start small and scale as you grow.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-2">SMBs</h3>
              <p className="text-gray-600 text-sm">
                Access creator marketing that was previously only available to big brands with big budgets.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-2">Early Enterprises</h3>
              <p className="text-gray-600 text-sm">
                Scale your influencer programs with workflows and reporting that grow with your team.
              </p>
            </div>
          </div>
        </div>

        {/* Performance Model */}
        <div className="bg-gradient-to-r from-[#d97757]/10 to-[#d97757]/5 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Performance-Based Model</h2>
          <p className="text-gray-700 mb-6">
            Infloq operates on a performance-based pricing model. You only pay for actual results,
            not impressions or follower counts. This ensures your marketing budget delivers real ROI.
          </p>
          <div className="grid md:grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-lg font-semibold text-[#d97757]">Pay for Results</div>
              <div className="text-sm text-gray-600">Not vanity metrics</div>
            </div>
            <div>
              <div className="text-lg font-semibold text-[#d97757]">Transparent Pricing</div>
              <div className="text-sm text-gray-600">No hidden fees</div>
            </div>
            <div>
              <div className="text-lg font-semibold text-[#d97757]">Measurable ROI</div>
              <div className="text-sm text-gray-600">Track every dollar</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Ready to Get Started?</h2>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            Infloq makes influencer marketing accessible for growing businesses. Start connecting with creators today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://infloq.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-[#d97757] text-white rounded-xl hover:bg-[#c86844] transition-colors font-semibold"
            >
              Get Started Free
            </a>
            <a
              href="mailto:yash@explainx.ai"
              className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-700 rounded-xl hover:border-[#d97757] hover:text-[#d97757] transition-colors font-semibold"
            >
              Contact Us
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
