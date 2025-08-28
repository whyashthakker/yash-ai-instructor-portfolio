export default function Home() {
  return (
    <div className="h-screen flex bg-background text-foreground overflow-hidden">
      {/* Left Side - Profile */}
      <div className="w-2/5 flex flex-col items-center justify-center p-12 space-y-8">
        <div className="relative">
          <img 
            src="/yash.png" 
            alt="Yash Thakker - AI Instructor and Product Leader"
            className="w-64 h-64 rounded-full object-cover shadow-xl"
          />
          <div className="absolute -bottom-3 -right-3 bg-[#d97757] text-white px-4 py-2 rounded-full text-xs font-medium shadow-lg">
            100K+ Students
          </div>
        </div>
        
        <div className="text-center space-y-3">
          <h1 className="text-4xl font-bold">Yash Thakker</h1>
          <p className="text-gray-600 text-lg">AI Instructor & Product Leader</p>
          <p className="text-sm text-gray-500 max-w-xs leading-relaxed">
            12+ years building AI products & teaching the next generation
          </p>
        </div>

        {/* Expertise */}
        <div className="text-center space-y-4 max-w-xs">
          <h3 className="text-lg font-semibold text-gray-800">Core Expertise</h3>
          <div className="grid grid-cols-2 gap-2 text-xs text-gray-600">
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
      </div>

      {/* Right Side - Content */}
      <div className="w-3/5 flex flex-col justify-center pr-16 pl-12 space-y-12">
        
        {/* Products Built */}
        <div>
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Products Built</h2>
          <div className="grid grid-cols-1 gap-4">
            <a href="https://olly.social" target="_blank" rel="noopener noreferrer" 
               className="group p-4 rounded-2xl bg-white/50 hover:bg-white/80 transition-all border border-gray-200 hover:shadow-md">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-lg group-hover:text-[#d97757] transition-colors">olly.social</h3>
                  <p className="text-sm text-gray-600">AI-powered social media extension</p>
                </div>
                <div className="text-right text-xs text-gray-500">
                  <div>25K+ Users</div>
                  <div>5K+ Paid</div>
                </div>
              </div>
            </a>
            
            <a href="https://snapy.ai" target="_blank" rel="noopener noreferrer"
               className="group p-4 rounded-2xl bg-white/50 hover:bg-white/80 transition-all border border-gray-200 hover:shadow-md">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-lg group-hover:text-[#d97757] transition-colors">snapy.ai</h3>
                  <p className="text-sm text-gray-600">AI-powered content creation tool</p>
                </div>
                <div className="text-right text-xs text-gray-500">
                  <div>35K+ Users</div>
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* Teaching Platforms */}
        <div>
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Teaching Platforms</h2>
          <div className="flex gap-4">
            <a href="https://www.udemy.com/user/feelix-2" target="_blank" rel="noopener noreferrer"
               className="inline-flex items-center justify-center px-6 py-3 bg-[#d97757] text-white rounded-lg hover:bg-[#c86844] transition-colors text-sm font-medium shadow-sm border-0 focus:outline-none focus:ring-2 focus:ring-[#d97757] focus:ring-offset-2">
              Udemy Courses
            </a>
            
            <a href="https://www.coursera.org/instructor/~164942694" target="_blank" rel="noopener noreferrer"
               className="inline-flex items-center justify-center px-6 py-3 bg-white text-[#d97757] border border-[#d97757] rounded-lg hover:bg-[#d97757] hover:text-white transition-colors text-sm font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-[#d97757] focus:ring-offset-2">
              Coursera Classes
            </a>
            
            <a href="https://try.codecademy.com/ai-2/us" target="_blank" rel="noopener noreferrer"
               className="inline-flex items-center justify-center px-6 py-3 bg-white text-[#d97757] border border-[#d97757] rounded-lg hover:bg-[#d97757] hover:text-white transition-colors text-sm font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-[#d97757] focus:ring-offset-2">
              Codecademy
            </a>
          </div>
        </div>

        {/* Companies Worked With */}
        <div>
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Trusted By</h2>
          <div className="flex flex-wrap gap-3">
            <span className="bg-white/60 px-4 py-2 rounded-xl text-sm font-medium border border-gray-200">TATA Group</span>
            <span className="bg-white/60 px-4 py-2 rounded-xl text-sm font-medium border border-gray-200">PayPal</span>
            <span className="bg-white/60 px-4 py-2 rounded-xl text-sm font-medium border border-gray-200">Fortune 500s</span>
          </div>
        </div>

        {/* Connect */}
        <div>
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Connect</h2>
          <div className="flex gap-4 mb-4">
            <a href="https://www.linkedin.com/in/goyashy/" target="_blank" rel="noopener noreferrer"
               className="inline-flex items-center justify-center px-6 py-3 bg-[#d97757] text-white rounded-lg hover:bg-[#c86844] transition-colors text-sm font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-[#d97757] focus:ring-offset-2">
              <span className="w-4 h-4 mr-2 bg-white text-[#d97757] rounded text-xs flex items-center justify-center font-bold">in</span>
              LinkedIn
            </a>
            
            <a href="https://www.youtube.com/@goyashy" target="_blank" rel="noopener noreferrer"
               className="inline-flex items-center justify-center px-6 py-3 bg-white text-[#d97757] border border-[#d97757] rounded-lg hover:bg-[#d97757] hover:text-white transition-colors text-sm font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-[#d97757] focus:ring-offset-2">
              <span className="w-4 h-4 mr-2 bg-[#d97757] text-white rounded text-xs flex items-center justify-center font-bold">YT</span>
              YouTube
            </a>
          </div>
          
          <div className="flex gap-6 text-sm">
            <a href="https://x.com/goyashy" target="_blank" rel="noopener noreferrer" 
               className="inline-flex items-center text-gray-600 hover:text-[#d97757] transition-colors">
              <span className="w-6 h-6 mr-2 bg-gray-200 text-gray-700 rounded-full text-xs flex items-center justify-center font-bold">X</span>
              Twitter/X
            </a>
            <a href="https://instagram.com/goyashy.tech" target="_blank" rel="noopener noreferrer"
               className="inline-flex items-center text-gray-600 hover:text-[#d97757] transition-colors">
              <span className="w-6 h-6 mr-2 bg-gray-200 text-gray-700 rounded-full text-xs flex items-center justify-center font-bold">IG</span>
              Instagram
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
