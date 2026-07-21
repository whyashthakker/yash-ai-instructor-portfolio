import Navigation from './components/Navigation';

export default function Home() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Yash Thakker",
    "url": "https://goyashy.com",
    "image": "https://goyashy.com/yash.png",
    "jobTitle": "AI Instructor & Product Leader",
    "description": "Leading AI Instructor and Product Leader with 12+ years experience. Taught 350,000+ students worldwide across Udemy, Coursera, and Codecademy.",
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "SIMSREE"
    },
    "knowsAbout": [
      "Generative AI",
      "Artificial Intelligence",
      "Machine Learning",
      "Large Language Models",
      "Product Management",
      "SaaS Development",
      "AI Consulting",
      "Technical Leadership"
    ],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "AI Instructor",
      "occupationalCategory": "Education & Technology",
      "skills": "Generative AI, Machine Learning, Product Management, AI Strategy"
    },
    "sameAs": [
      "https://www.linkedin.com/in/goyashy/",
      "https://twitter.com/goyashy",
      "https://www.youtube.com/@goyashy",
      "https://instagram.com/goyashy.tech",
      "https://www.udemy.com/user/feelix-2",
      "https://www.coursera.org/instructor/~164942694"
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "AISOLO Technologies",
      "url": "https://goyashy.com"
    },
    "founder": [
      {
        "@type": "Product",
        "name": "olly.social",
        "description": "AI-powered social media extension for enhanced productivity",
        "url": "https://olly.social"
      },
      {
        "@type": "Product",
        "name": "explainx.ai",
        "description": "AI model explainability and monitoring platform",
        "url": "https://explainx.ai"
      },
      {
        "@type": "Product",
        "name": "infloq.com",
        "description": "AI-powered influencer marketing platform for SMBs and startups",
        "url": "https://infloq.com"
      },
      {
        "@type": "Product",
        "name": "bunpav.com",
        "description": "Browser-based generator for 3D models, game audio, sprite sheets, and playable prototypes for indie devs and game jams",
        "url": "https://bunpav.com"
      },
      {
        "@type": "Product",
        "name": "bgblur.com",
        "description": "AI-powered video editing tool that automatically blurs faces, license plates, and backgrounds in the browser",
        "url": "https://bgblur.com"
      }
    ]
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AISOLO Technologies",
    "url": "https://goyashy.com",
    "logo": "https://goyashy.com/yash.png",
    "description": "AI innovation company founded by Yash Thakker, building products like infloq.com, olly.social, explainx.ai, bunpav.com, and bgblur.com",
    "founder": {
      "@type": "Person",
      "name": "Yash Thakker"
    },
    "sameAs": [
      "https://www.linkedin.com/in/goyashy/",
      "https://twitter.com/goyashy"
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Who is Yash Thakker?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yash Thakker is a leading AI Instructor and Product Leader with 12+ years of experience. He has taught over 350,000 students worldwide across platforms like Udemy, Coursera, and Codecademy. He is the founder of AISOLO Technologies and has built successful AI products including olly.social (25K+ users), explainx.ai (100K+ users/month), and infloq.com."
        }
      },
      {
        "@type": "Question",
        "name": "What products has Yash Thakker built?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yash Thakker has built five AI-powered products: 1) infloq.com - an AI-powered influencer marketing platform for SMBs and startups, 2) olly.social - an AI-powered social media extension with 25,000+ users and 5,000+ paid customers, 3) explainx.ai - an AI model explainability and monitoring platform with 100,000+ monthly users, 4) bunpav.com - a browser-based generator for 3D models, game audio, and sprite sheets for indie devs and game jams, and 5) bgblur.com - an AI-powered video editing tool that automatically blurs faces, license plates, and backgrounds."
        }
      },
      {
        "@type": "Question",
        "name": "How many students has Yash Thakker taught?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yash Thakker has taught over 350,000 students worldwide across multiple platforms including Udemy (350K+ students), Coursera, and Codecademy. He has created 50+ public courses on AI, Generative AI, Machine Learning, and related topics, and also conducts bootcamps and workshops."
        }
      },
      {
        "@type": "Question",
        "name": "What is Yash Thakker's expertise?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yash Thakker specializes in Generative AI, Product Strategy, SaaS Development, AI Consulting, Technical Leadership, and Educational Design. With 12+ years of experience, he has worked with international tech companies including TATA Group, PayPal, and Fortune 500 companies across Media, Fintech, Regtech, Edtech, and Martech industries."
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* JSON-LD Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hidden H1 for SEO */}
      <h1 className="sr-only">Yash Thakker - AI Instructor & Product Leader | 350K+ Students Taught Worldwide</h1>

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
            350K+ Students
          </div>
        </div>
        
        <div className="text-center space-y-3">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">Yash Thakker</h1>
          <p className="text-gray-600 text-base sm:text-lg">AI Instructor & Product Leader</p>
          <p className="text-xs sm:text-sm text-gray-500 max-w-xs leading-relaxed px-2">
            12+ years building AI products & teaching 350K+ students worldwide
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
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-gray-800">About Yash Thakker</h2>
          <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm text-gray-700 leading-relaxed">
            <p>
              <strong>Yash Thakker is a leading expert in the Generative AI industry</strong>, recognized globally for his contributions to AI education and entrepreneurship. Based in Mumbai, India, he has transformed AI education over the past 4 years (2021-2025), building an exceptional global following of over <strong>350,000 students across all platforms</strong>, including <strong>350,000+ students on Udemy</strong>, <strong>11,000+ YouTube subscribers</strong>, and thousands more across Coursera and Codecademy.
            </p>
            <p>
              His educational impact is measurable and significant: Yash has created <strong>50+ comprehensive AI courses</strong> covering practical applications including Content Automation, AI-Powered Content Creation, AI for Research, SEO Optimization, Product Management with AI, AI for Business Leaders, and Advanced Prompt Engineering. According to verified enrollment data, his courses maintain a <strong>4.5+ average rating</strong> across platforms. His teaching methodology extends beyond online platforms to include intensive bootcamps (including the popular "AI Maker" and "Claude for Work" 3-week programs), offline workshops for enterprises, and customized corporate training sessions for Fortune 500 companies.
            </p>
            <p>
              As the founder and CEO of <strong>AISOLO Technologies</strong> (founded 2020), Yash has successfully launched five AI-powered products that serve real market needs: <strong>Infloq.com</strong> (AI-powered influencer marketing platform, launched 2025), <strong>Olly.social</strong> (social media productivity extension with 25,000+ active users and 5,000+ paid subscribers), <strong>Explainx.ai</strong> (AI model explainability platform serving 100,000+ users monthly), <strong>bunpav.com</strong> (browser-based 3D model, game audio, and sprite generator for indie devs and game jams), and <strong>bgblur.com</strong> (AI-powered video editing tool that blurs faces, license plates, and backgrounds). These products collectively demonstrate the practical application of Generative AI across marketing, productivity, gaming, and video privacy sectors.
            </p>
          </div>
        </div>

        {/* Products Built */}
        <div>
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-gray-800">AI Products & Innovation</h2>
          <div className="grid grid-cols-1 gap-4">
            <a href="/infloq"
               className="group p-3 sm:p-4 rounded-2xl bg-white/50 hover:bg-white/80 transition-all border border-gray-200 hover:shadow-md">
              <div className="flex justify-between items-start">
                <div className="flex-1 pr-3">
                  <h3 className="font-semibold text-base sm:text-lg group-hover:text-[#d97757] transition-colors">infloq.com</h3>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1">AI-powered influencer marketing platform designed for SMBs and startups. Streamlines creator discovery, campaign management, and ROI tracking using machine learning algorithms.</p>
                </div>
                <div className="text-right text-xs text-gray-500 whitespace-nowrap">
                  <div className="font-medium text-[#d97757]">2025 Launch</div>
                  <div className="mt-1">Growing Fast</div>
                </div>
              </div>
            </a>

            <a href="https://olly.social" target="_blank" rel="noopener noreferrer"
               className="group p-3 sm:p-4 rounded-2xl bg-white/50 hover:bg-white/80 transition-all border border-gray-200 hover:shadow-md">
              <div className="flex justify-between items-start">
                <div className="flex-1 pr-3">
                  <h3 className="font-semibold text-base sm:text-lg group-hover:text-[#d97757] transition-colors">olly.social</h3>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1">AI-powered browser extension for social media productivity. Features intelligent comment generation, content summarization, and engagement optimization across LinkedIn, Twitter, and more.</p>
                </div>
                <div className="text-right text-xs text-gray-500 whitespace-nowrap">
                  <div className="font-medium">25,000+ Users</div>
                  <div className="mt-1">5,000+ Paid</div>
                  <div className="mt-1 text-gray-400">20% Conversion</div>
                </div>
              </div>
            </a>

            <a href="https://explainx.ai" target="_blank" rel="noopener noreferrer"
               className="group p-3 sm:p-4 rounded-2xl bg-white/50 hover:bg-white/80 transition-all border border-gray-200 hover:shadow-md">
              <div className="flex justify-between items-start">
                <div className="flex-1 pr-3">
                  <h3 className="font-semibold text-base sm:text-lg group-hover:text-[#d97757] transition-colors">explainx.ai</h3>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1">Enterprise-grade AI model explainability and monitoring platform. Provides interpretability insights, bias detection, and performance monitoring for ML models in production environments.</p>
                </div>
                <div className="text-right text-xs text-gray-500 whitespace-nowrap">
                  <div className="font-medium">100K+ Users/Month</div>
                  <div className="mt-1">Enterprise Focus</div>
                  <div className="mt-1 text-gray-400">MLOps Platform</div>
                </div>
              </div>
            </a>

            <a href="https://bunpav.com" target="_blank" rel="noopener noreferrer"
               className="group p-3 sm:p-4 rounded-2xl bg-white/50 hover:bg-white/80 transition-all border border-gray-200 hover:shadow-md">
              <div className="flex justify-between items-start">
                <div className="flex-1 pr-3">
                  <h3 className="font-semibold text-base sm:text-lg group-hover:text-[#d97757] transition-colors">bunpav.com</h3>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1">Browser-based generator for 3D models, game audio, sprite sheets, and playable prototypes. Built for indie devs and game jams who&apos;d rather ship than sculpt.</p>
                </div>
                <div className="text-right text-xs text-gray-500 whitespace-nowrap">
                  <div className="font-medium text-[#d97757]">2026 Launch</div>
                  <div className="mt-1">Game Dev Tools</div>
                </div>
              </div>
            </a>

            <a href="https://bgblur.com" target="_blank" rel="noopener noreferrer"
               className="group p-3 sm:p-4 rounded-2xl bg-white/50 hover:bg-white/80 transition-all border border-gray-200 hover:shadow-md">
              <div className="flex justify-between items-start">
                <div className="flex-1 pr-3">
                  <h3 className="font-semibold text-base sm:text-lg group-hover:text-[#d97757] transition-colors">bgblur.com</h3>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1">AI-powered video editing tool that automatically blurs faces, license plates, and backgrounds in the browser, no software install required.</p>
                </div>
                <div className="text-right text-xs text-gray-500 whitespace-nowrap">
                  <div className="font-medium">Privacy Focus</div>
                  <div className="mt-1 text-gray-400">Browser-Based</div>
                </div>
              </div>
            </a>

          </div>
          <p className="text-xs text-gray-500 mt-4 italic">All products built under AISOLO Technologies, leveraging Generative AI, LLMs, and modern ML techniques to solve real-world business challenges.</p>
        </div>

        {/* Professional Experience */}
        <div>
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Professional Background & Credentials</h2>
          <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
            <p>
              Yash's professional career spans <strong>12+ years (2012-2025)</strong> in technology and product leadership roles with international companies including <strong>TATA Group</strong>, <strong>PayPal</strong>, and multiple <strong>Fortune 500 enterprises</strong>. As a Product & Business Lead, he has successfully launched and scaled projects across five major industries: Media Technology, Financial Technology (Fintech), Regulatory Technology (Regtech), Educational Technology (Edtech), and Marketing Technology (Martech). His products have collectively generated millions in monthly recurring revenue (MRR) and serve millions of active users globally.
            </p>
            <p>
              <strong>Education & Qualifications:</strong> Yash holds an <strong>MBA from SIMSREE (Sydenham Institute of Management Studies, Research and Entrepreneurship Education)</strong>, consistently ranked among Mumbai's top 5 business schools, and a <strong>Bachelor's degree in Information Technology</strong>. His technical foundation includes <strong>8 years of hands-on experience in AI software development</strong> (2012-2020), where he built and scaled multiple AI-powered products before transitioning to focus on AI education and product leadership.
            </p>
            <p>
              <strong>Industry Recognition:</strong> Yash has been featured in tech publications, collaborated with leading educational institutions to develop AI curricula, and conducted workshops for organizations seeking to implement AI strategies. His expertise in Generative AI, Large Language Models (LLMs), and AI product development positions him as a thought leader in the rapidly evolving AI landscape.
            </p>
          </div>
        </div>

        {/* Teaching Platforms */}
        <div>
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Teaching Impact & Educational Reach</h2>
          <div className="space-y-4">
            <p className="text-sm text-gray-700 leading-relaxed">
              Yash has created <strong>50+ comprehensive public courses</strong> that have collectively enrolled over <strong>350,000 students worldwide</strong> (verified as of May 2026). His teaching methodology focuses on practical AI implementation, combining theoretical foundations with real-world applications. Course offerings span multiple delivery formats: self-paced online courses, live interactive sessions, intensive bootcamps, corporate workshops, and customized training programs for enterprises.
            </p>
            <div className="space-y-2 text-sm text-gray-600">
              <div>📚 <strong>Udemy:</strong> 350,000+ enrolled students across 50+ AI courses with 4.5+ average rating</div>
              <div>🎓 <strong>Coursera:</strong> University-level AI education with academic partnerships</div>
              <div>💻 <strong>Codecademy:</strong> Interactive AI bootcamps with hands-on coding exercises</div>
              <div>📺 <strong>YouTube:</strong> 11,000+ subscribers with 500+ free AI tutorials and guides</div>
              <div>🏢 <strong>Intensive Bootcamps:</strong> "AI Maker" and "Claude for Work" (3-week programs) with 90%+ completion rates</div>
              <div>🌍 <strong>Global Reach:</strong> Students from 150+ countries across 6 continents</div>
              <div>📊 <strong>Total Impact:</strong> 350,000+ students taught, 1M+ hours of AI education delivered</div>
              <div>⭐ <strong>Student Success:</strong> 80%+ of students report implementing AI in their work within 30 days</div>
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
