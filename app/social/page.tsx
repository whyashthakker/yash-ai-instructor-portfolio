import { Metadata } from 'next';
import Navigation from '../components/Navigation';

export const metadata: Metadata = {
  title: 'Social Channels - Yash Thakker | AI Content & Community',
  description: 'Connect with Yash Thakker across all social platforms. YouTube tutorials, LinkedIn insights, Twitter updates, and Instagram behind-the-scenes content.',
  keywords: ['Yash Thakker social media', 'AI tutorials YouTube', 'LinkedIn AI insights', 'Twitter AI updates'],
};

export default function SocialPage() {
  const socialChannels = [
    {
      platform: 'YouTube',
      handle: '@goyashy',
      url: 'https://www.youtube.com/@goyashy',
      followers: '11K+ Subscribers',
      description: 'In-depth AI tutorials, course previews, and technical deep-dives into Generative AI and Machine Learning.',
      content: 'AI Tutorials • Course Previews • Tech Reviews • Live Streams',
      color: 'bg-red-500',
      icon: 'YT'
    },
    {
      platform: 'LinkedIn',
      handle: 'goyashy',
      url: 'https://www.linkedin.com/in/goyashy/',
      followers: 'Professional Network',
      description: 'Industry insights, AI trends, product updates, and professional networking in the AI space.',
      content: 'Industry Insights • Product Updates • Career Advice • Networking',
      color: 'bg-blue-600',
      icon: 'in'
    },
    {
      platform: 'Twitter/X',
      handle: '@goyashy',
      url: 'https://x.com/goyashy',
      followers: 'Active Community',
      description: 'Real-time AI news, quick tips, industry discussions, and engagement with the AI community.',
      content: 'AI News • Quick Tips • Community Discussions • Industry Updates',
      color: 'bg-black',
      icon: 'X'
    },
    {
      platform: 'Instagram',
      handle: '@goyashy.tech',
      url: 'https://instagram.com/goyashy.tech',
      followers: 'Behind-the-scenes',
      description: 'Behind-the-scenes content, personal insights, travel updates, and visual AI content.',
      content: 'Behind-the-scenes • Personal Stories • Travel • Visual AI Content',
      color: 'bg-gradient-to-br from-purple-500 to-pink-500',
      icon: 'IG'
    }
  ];

  const courseChannels = [
    {
      platform: 'Udemy',
      url: 'https://www.udemy.com/user/feelix-2',
      students: '90K+ Students',
      courses: '50+ Courses',
      description: 'Comprehensive AI courses covering Generative AI, Machine Learning, and practical applications.',
      color: 'bg-purple-600'
    },
    {
      platform: 'Coursera',
      url: 'https://www.coursera.org/instructor/~164942694',
      students: 'University Quality',
      courses: 'Academic Courses',
      description: 'University-level AI education with structured curriculum and academic rigor.',
      color: 'bg-blue-500'
    },
    {
      platform: 'Codecademy',
      url: 'https://try.codecademy.com/ai-2/us',
      students: 'Interactive Learning',
      courses: 'AI Bootcamps',
      description: 'Hands-on, interactive AI bootcamps with practical coding exercises.',
      color: 'bg-green-500'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Social Channels & Community</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Connect with me across all platforms for AI insights, tutorials, industry updates, and behind-the-scenes content.
          </p>
        </div>

        {/* Social Media Channels */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-8 text-center">Social Media</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {socialChannels.map((channel, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-all">
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 ${channel.color} text-white rounded-full flex items-center justify-center font-bold text-sm`}>
                    {channel.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-xl font-semibold text-gray-800">{channel.platform}</h3>
                      <span className="text-sm text-gray-500">{channel.handle}</span>
                    </div>
                    <div className="text-sm font-medium text-[#d97757] mb-3">{channel.followers}</div>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">{channel.description}</p>
                    <div className="text-xs text-gray-500 mb-4">{channel.content}</div>
                    <a 
                      href={channel.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-[#d97757] text-white rounded-lg hover:bg-[#c86844] transition-colors text-sm font-medium"
                    >
                      Follow on {channel.platform} →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Course Platforms */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-8 text-center">Learning Platforms</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {courseChannels.map((channel, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-all text-center">
                <div className={`w-16 h-16 ${channel.color} text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4`}>
                  {channel.platform.slice(0, 2)}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{channel.platform}</h3>
                <div className="flex justify-center gap-4 text-sm text-[#d97757] font-medium mb-3">
                  <span>{channel.students}</span>
                  <span>•</span>
                  <span>{channel.courses}</span>
                </div>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{channel.description}</p>
                <a 
                  href={channel.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 border border-[#d97757] text-[#d97757] rounded-lg hover:bg-[#d97757] hover:text-white transition-colors text-sm font-medium"
                >
                  View Courses →
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Content Calendar */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 mb-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Content Schedule</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-red-500 text-white rounded-full flex items-center justify-center font-bold mx-auto mb-3">MON</div>
              <h4 className="font-semibold text-gray-800 mb-2">YouTube</h4>
              <p className="text-sm text-gray-600">New tutorials and course content</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mx-auto mb-3">WED</div>
              <h4 className="font-semibold text-gray-800 mb-2">LinkedIn</h4>
              <p className="text-sm text-gray-600">Industry insights and articles</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold mx-auto mb-3">FRI</div>
              <h4 className="font-semibold text-gray-800 mb-2">Twitter/X</h4>
              <p className="text-sm text-gray-600">AI news and community discussions</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-full flex items-center justify-center font-bold mx-auto mb-3">SUN</div>
              <h4 className="font-semibold text-gray-800 mb-2">Instagram</h4>
              <p className="text-sm text-gray-600">Behind-the-scenes content</p>
            </div>
          </div>
        </div>

        {/* Community Guidelines */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Community Guidelines</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-[#d97757] mb-3">What to Expect</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• High-quality AI and tech content</li>
                <li>• Practical tutorials and insights</li>
                <li>• Industry trends and analysis</li>
                <li>• Community discussions and Q&A</li>
                <li>• Behind-the-scenes glimpses</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-[#d97757] mb-3">Engagement Tips</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Ask questions in comments</li>
                <li>• Share your own AI projects</li>
                <li>• Tag @goyashy in your posts</li>
                <li>• Use #AIWithYash hashtag</li>
                <li>• Join live streams and Q&A sessions</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}