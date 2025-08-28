import Navigation from './components/Navigation';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <div className="flex flex-col lg:flex-row">
      {/* Left Side - Profile */}
      <div className="w-full lg:w-2/5 flex flex-col items-center justify-center p-4 lg:p-6 space-y-3 lg:space-y-4 lg:fixed lg:h-screen lg:pt-16">
        <div className="relative">
          <img 
            src="/yash.png" 
            alt="Yash Thakker - AI Instructor and Product Leader"
            className="w-48 h-48 lg:w-56 lg:h-56 rounded-full object-cover shadow-xl"
          />
          <div className="absolute -bottom-3 -right-3 bg-[#d97757] text-white px-4 py-2 rounded-full text-xs font-medium shadow-lg">
            120K+ Students
          </div>
        </div>
        
        <div className="text-center space-y-3">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">Yash Thakker</h1>
          <p className="text-gray-600 text-base sm:text-lg">AI Instructor & Product Leader</p>
          <p className="text-xs sm:text-sm text-gray-500 max-w-xs leading-relaxed px-2">
            12+ years building AI products & teaching 120K+ students worldwide
          </p>
        </div>

        {/* Expertise */}
        <div className="text-center space-y-2 lg:space-y-4 max-w-xs">
          <h3 className="text-base lg:text-lg font-semibold text-gray-800">Core Expertise</h3>
          <div className="grid grid-cols-2 gap-1 lg:gap-2 text-xs text-gray-600">
            <div className="text-left">
              <div>• Generative AI</div>
              <div>• Product Strategy</div>
              <div>• SaaS Development</div>
            </div>
            <div className="text-left">
              <div>• AI Consulting</div>
              <div>• Technical Leadership</div>
              <div>• Educational Design</div>
            </div>
          </div>
          <div className="text-xs text-gray-500 mt-4">
            <div>Gaming • Coding • Traveling</div>
          </div>
        </div>

        {/* Primary CTA - Contact */}
        <div className="text-center space-y-3 w-full max-w-sm">
          <a href="mailto:yash@explainx.ai" 
             className="inline-flex items-center justify-center w-full px-4 lg:px-6 py-3 lg:py-4 bg-[#d97757] text-white rounded-xl hover:bg-[#c86844] transition-colors text-xs lg:text-sm font-semibold shadow-lg focus:outline-none focus:ring-2 focus:ring-[#d97757] focus:ring-offset-2">
            <span className="w-4 lg:w-5 h-4 lg:h-5 mr-1 lg:mr-2 bg-white/20 rounded-full flex items-center justify-center">
              <span className="text-xs font-bold">@</span>
            </span>
            Contact for Partnerships
          </a>
          <p className="text-xs text-gray-500">yash@explainx.ai</p>
        </div>

        {/* Course Platforms */}
        <div className="text-center space-y-2 w-full max-w-sm">
          <h4 className="text-xs font-semibold text-gray-700">Courses & Education</h4>
          <div className="flex gap-1 lg:gap-2 justify-center">
            <a href="https://www.udemy.com/user/feelix-2" target="_blank" rel="noopener noreferrer"
               className="flex-1 min-w-0 px-2 lg:px-3 py-2 text-xs border border-gray-300 text-gray-600 rounded-lg hover:border-[#d97757] hover:text-[#d97757] transition-colors text-center">
              Udemy
            </a>
            <a href="https://www.coursera.org/instructor/~164942694" target="_blank" rel="noopener noreferrer"
               className="flex-1 min-w-0 px-2 lg:px-3 py-2 text-xs border border-gray-300 text-gray-600 rounded-lg hover:border-[#d97757] hover:text-[#d97757] transition-colors text-center">
              Coursera
            </a>
            <a href="https://try.codecademy.com/ai-2/us" target="_blank" rel="noopener noreferrer"
               className="flex-1 min-w-0 px-2 lg:px-3 py-2 text-xs border border-gray-300 text-gray-600 rounded-lg hover:border-[#d97757] hover:text-[#d97757] transition-colors text-center">
              Codecademy
            </a>
          </div>
        </div>

        {/* Social Platforms */}
        <div className="text-center space-y-2 w-full max-w-sm">
          <h4 className="text-xs font-semibold text-gray-700">Social & Content</h4>
          <div className="flex gap-1 lg:gap-2 justify-center">
            <a href="https://www.youtube.com/@goyashy" target="_blank" rel="noopener noreferrer"
               className="flex-1 min-w-0 px-2 lg:px-3 py-2 text-xs border border-gray-300 text-gray-600 rounded-lg hover:border-[#d97757] hover:text-[#d97757] transition-colors text-center">
              YouTube
            </a>
            <a href="https://www.linkedin.com/in/goyashy/" target="_blank" rel="noopener noreferrer"
               className="flex-1 min-w-0 px-2 lg:px-3 py-2 text-xs border border-gray-300 text-gray-600 rounded-lg hover:border-[#d97757] hover:text-[#d97757] transition-colors text-center">
              LinkedIn
            </a>
          </div>
          <div className="flex gap-1 lg:gap-2 justify-center">
            <a href="https://x.com/goyashy" target="_blank" rel="noopener noreferrer"
               className="flex-1 min-w-0 px-2 lg:px-3 py-2 text-xs border border-gray-300 text-gray-600 rounded-lg hover:border-[#d97757] hover:text-[#d97757] transition-colors text-center">
              Twitter/X
            </a>
            <a href="https://instagram.com/goyashy.tech" target="_blank" rel="noopener noreferrer"
               className="flex-1 min-w-0 px-2 lg:px-3 py-2 text-xs border border-gray-300 text-gray-600 rounded-lg hover:border-[#d97757] hover:text-[#d97757] transition-colors text-center">
              Instagram
            </a>
          </div>
        </div>
      </div>

      {/* Right Side - Content */}
      <div className="w-full lg:w-3/5 lg:ml-[40%] flex flex-col px-4 sm:px-6 lg:pr-16 lg:pl-12 py-4 sm:py-6 lg:py-12 space-y-6 sm:space-y-8 lg:space-y-12 lg:max-h-screen lg:overflow-y-auto">
        
        {/* About Section */}
        <div>
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-gray-800">About</h2>
          <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm text-gray-700 leading-relaxed">
            <p>
              Yash is a distinguished expert in the Generative AI industry, known for his significant contributions to AI education and entrepreneurship. Based in Mumbai, he has profoundly influenced AI learning over the past four years, amassing an impressive online following with over <strong>120,000 students across all platforms</strong>, including <strong>90,000+ students on Udemy</strong> and more than <strong>11,000 YouTube subscribers</strong>.
            </p>
            <p>
              His educational impact includes conducting live sessions on AI for enhanced productivity and collaborating with tech institutes to develop specialized AI courses. Yash's <strong>50+ AI courses</strong> focus on practical applications such as Content Automation, Content Creation, AI for Research, SEO, Product Management, AI for Leaders, and Prompt Engineering. His teaching extends beyond online platforms to include bootcamps, offline workshops, and corporate training sessions.
            </p>
            <p>
              As the founder of <strong>AISOLO Technologies</strong>, Yash drives forward-looking projects like Olly.social, Snapy.ai, Explainx.ai, and Revns.com - all leveraging Generative AI to solve real-world use cases.
            </p>
          </div>
        </div>

        {/* Products Built */}
        <div>
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-gray-800">Products Built</h2>
          <div className="grid grid-cols-1 gap-4">
            <a href="https://olly.social" target="_blank" rel="noopener noreferrer" 
               className="group p-3 sm:p-4 rounded-2xl bg-white/50 hover:bg-white/80 transition-all border border-gray-200 hover:shadow-md">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-base sm:text-lg group-hover:text-[#d97757] transition-colors">olly.social</h3>
                  <p className="text-xs sm:text-sm text-gray-600">AI-powered social media extension for enhanced productivity</p>
                </div>
                <div className="text-right text-xs text-gray-500">
                  <div>25K+ Users</div>
                  <div>5K+ Paid</div>
                </div>
              </div>
            </a>
            
            <a href="https://snapy.ai" target="_blank" rel="noopener noreferrer"
               className="group p-3 sm:p-4 rounded-2xl bg-white/50 hover:bg-white/80 transition-all border border-gray-200 hover:shadow-md">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-base sm:text-lg group-hover:text-[#d97757] transition-colors">snapy.ai</h3>
                  <p className="text-xs sm:text-sm text-gray-600">AI-powered content creation and automation platform</p>
                </div>
                <div className="text-right text-xs text-gray-500">
                  <div>35K+ Users</div>
                </div>
              </div>
            </a>

          </div>
        </div>

        {/* Professional Experience */}
        <div>
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Professional Background</h2>
          <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
            <p>
              Yash's professional background spans over <strong>12 years</strong> with international tech companies as a Product & Business Lead, leading projects that have made significant impacts in various industries including Media, Fintech, Regtech, Edtech, and Martech. These projects have achieved notable successes, generating substantial monthly recurring revenue and reaching millions of active users.
            </p>
            <p>
              He holds an <strong>MBA from SIMSREE</strong>, one of Mumbai's top business schools, and a <strong>bachelor's degree in Information Technology</strong>. Previously, Yash spent 8 years in the AI software development field, building and scaling AI-powered products.
            </p>
          </div>
        </div>

        {/* Teaching Platforms */}
        <div>
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Teaching & Education</h2>
          <div className="space-y-4">
            <p className="text-sm text-gray-700 leading-relaxed">
              Created <strong>50+ public courses</strong> with over <strong>120,000 students</strong> across multiple platforms including bootcamps, workshops, and online courses. Specializes in AI productivity solutions, delivering live sessions and collaborating with institutes to develop AI-focused courses.
            </p>
            <div className="space-y-2 text-sm text-gray-600">
              <div>📚 <strong>Udemy:</strong> 90K+ students across 50+ AI courses</div>
              <div>🎓 <strong>Coursera:</strong> University-quality AI education</div>
              <div>💻 <strong>Codecademy:</strong> Interactive AI bootcamps</div>
              <div>📺 <strong>YouTube:</strong> 11K+ subscribers, AI tutorials</div>
              <div>🏢 <strong>Bootcamps & Workshops:</strong> Corporate training & offline sessions</div>
              <div>📊 <strong>Total Reach:</strong> 120K+ students across all platforms</div>
            </div>
          </div>
        </div>

        {/* Companies Worked With */}
        <div>
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Trusted By</h2>
          <div className="space-y-4 mb-4">
            <p className="text-sm text-gray-700 leading-relaxed">
              Collaborated with leading organizations across multiple industries, providing AI consultation and product leadership that has generated significant business impact and user engagement.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <span className="bg-white/60 px-4 py-2 rounded-xl text-sm font-medium border border-gray-200">TATA Group</span>
            <span className="bg-white/60 px-4 py-2 rounded-xl text-sm font-medium border border-gray-200">PayPal</span>
            <span className="bg-white/60 px-4 py-2 rounded-xl text-sm font-medium border border-gray-200">Fortune 500s</span>
            <span className="bg-white/60 px-4 py-2 rounded-xl text-sm font-medium border border-gray-200">Tech Institutes</span>
          </div>
        </div>

      </div>
      </div>
    </div>
  );
}
