import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Machine Learning Instructor - Yash Thakker | Expert ML Training',
  description: 'Learn Machine Learning from expert instructor Yash Thakker. Comprehensive ML courses, algorithms, practical projects, and real-world applications.',
  keywords: 'machine learning instructor, ML training, machine learning course, AI machine learning, ML algorithms, data science training',
  robots: 'index, follow',
};

export default function MachineLearningInstructorPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
            Machine Learning Expert Instructor
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Master Machine Learning from fundamentals to advanced applications with industry expert Yash Thakker. 12+ years of ML experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://www.udemy.com/user/feelix-2" target="_blank" rel="noopener noreferrer"
               className="px-8 py-4 bg-[#d97757] text-white rounded-xl hover:bg-[#c86844] transition-colors font-semibold">
              Enroll in ML Courses
            </a>
            <a href="mailto:yash@explainx.ai"
               className="px-8 py-4 border-2 border-[#d97757] text-[#d97757] rounded-xl hover:bg-[#d97757] hover:text-white transition-colors font-semibold">
              Custom ML Training
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <div className="text-center bg-gradient-to-br from-blue-50 to-indigo-100 p-6 rounded-xl">
            <div className="text-3xl font-bold text-[#d97757] mb-2">12+</div>
            <div className="text-gray-700 font-medium">Years ML Experience</div>
          </div>
          <div className="text-center bg-gradient-to-br from-green-50 to-teal-100 p-6 rounded-xl">
            <div className="text-3xl font-bold text-[#d97757] mb-2">25+</div>
            <div className="text-gray-700 font-medium">ML Projects</div>
          </div>
          <div className="text-center bg-gradient-to-br from-purple-50 to-pink-100 p-6 rounded-xl">
            <div className="text-3xl font-bold text-[#d97757] mb-2">50K+</div>
            <div className="text-gray-700 font-medium">ML Students</div>
          </div>
          <div className="text-center bg-gradient-to-br from-orange-50 to-red-100 p-6 rounded-xl">
            <div className="text-3xl font-bold text-[#d97757] mb-2">4.8★</div>
            <div className="text-gray-700 font-medium">ML Course Rating</div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Machine Learning Expertise</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-l-4 border-blue-500">
              <div className="text-3xl mb-4">🧠</div>
              <h3 className="text-xl font-semibold mb-3 text-[#d97757]">Supervised Learning</h3>
              <p className="text-gray-600 mb-4">Master classification and regression algorithms with hands-on implementation.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Linear & Logistic Regression</li>
                <li>• Decision Trees & Random Forest</li>
                <li>• Support Vector Machines</li>
                <li>• Neural Networks</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-l-4 border-green-500">
              <div className="text-3xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold mb-3 text-[#d97757]">Unsupervised Learning</h3>
              <p className="text-gray-600 mb-4">Discover patterns in data through clustering and dimensionality reduction.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• K-Means & Hierarchical Clustering</li>
                <li>• PCA & t-SNE</li>
                <li>• Association Rules</li>
                <li>• Anomaly Detection</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-l-4 border-purple-500">
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-3 text-[#d97757]">Deep Learning</h3>
              <p className="text-gray-600 mb-4">Build and train neural networks for complex pattern recognition tasks.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Artificial Neural Networks</li>
                <li>• Convolutional Neural Networks</li>
                <li>• Recurrent Neural Networks</li>
                <li>• Transfer Learning</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-l-4 border-red-500">
              <div className="text-3xl mb-4">🤖</div>
              <h3 className="text-xl font-semibold mb-3 text-[#d97757]">Reinforcement Learning</h3>
              <p className="text-gray-600 mb-4">Train agents to make decisions through interaction with environments.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Q-Learning</li>
                <li>• Policy Gradients</li>
                <li>• Multi-Agent Systems</li>
                <li>• Game Playing AI</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-l-4 border-orange-500">
              <div className="text-3xl mb-4">📊</div>
              <h3 className="text-xl font-semibold mb-3 text-[#d97757]">Data Science & Analytics</h3>
              <p className="text-gray-600 mb-4">Extract insights from data using statistical methods and ML techniques.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Feature Engineering</li>
                <li>• Model Selection & Validation</li>
                <li>• Time Series Analysis</li>
                <li>• A/B Testing</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-l-4 border-indigo-500">
              <div className="text-3xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold mb-3 text-[#d97757]">MLOps & Deployment</h3>
              <p className="text-gray-600 mb-4">Deploy ML models to production with scalable and maintainable systems.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Model Deployment</li>
                <li>• Model Monitoring</li>
                <li>• CI/CD for ML</li>
                <li>• Cloud ML Platforms</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#d97757] to-[#c86844] text-white p-12 rounded-2xl mb-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Comprehensive ML Learning Path</h2>
            <div className="grid md:grid-cols-4 gap-6 mt-8">
              <div className="bg-white/10 p-4 rounded-xl backdrop-blur">
                <div className="text-2xl font-bold mb-2">📚</div>
                <h3 className="font-bold mb-2">Foundations</h3>
                <p className="text-sm">Statistics, Linear Algebra, Python Programming</p>
              </div>
              <div className="bg-white/10 p-4 rounded-xl backdrop-blur">
                <div className="text-2xl font-bold mb-2">🔧</div>
                <h3 className="font-bold mb-2">Tools & Libraries</h3>
                <p className="text-sm">Scikit-learn, TensorFlow, PyTorch, Pandas</p>
              </div>
              <div className="bg-white/10 p-4 rounded-xl backdrop-blur">
                <div className="text-2xl font-bold mb-2">🎯</div>
                <h3 className="font-bold mb-2">Algorithms</h3>
                <p className="text-sm">All major ML algorithms with practical implementation</p>
              </div>
              <div className="bg-white/10 p-4 rounded-xl backdrop-blur">
                <div className="text-2xl font-bold mb-2">🚀</div>
                <h3 className="font-bold mb-2">Production</h3>
                <p className="text-sm">Deploy and scale ML models in real applications</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Real-World ML Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3 text-[#d97757]">Industry Projects Built</h3>
              <div className="space-y-3">
                <div className="flex items-center bg-white p-3 rounded-lg">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xs mr-3">1</div>
                  <div>
                    <div className="font-semibold">Fraud Detection System</div>
                    <div className="text-sm text-gray-600">PayPal - Reduced false positives by 60%</div>
                  </div>
                </div>
                <div className="flex items-center bg-white p-3 rounded-lg">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-xs mr-3">2</div>
                  <div>
                    <div className="font-semibold">Recommendation Engine</div>
                    <div className="text-sm text-gray-600">E-commerce - 40% increase in sales</div>
                  </div>
                </div>
                <div className="flex items-center bg-white p-3 rounded-lg">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xs mr-3">3</div>
                  <div>
                    <div className="font-semibold">Predictive Maintenance</div>
                    <div className="text-sm text-gray-600">Manufacturing - $2M cost savings</div>
                  </div>
                </div>
                <div className="flex items-center bg-white p-3 rounded-lg">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-xs mr-3">4</div>
                  <div>
                    <div className="font-semibold">Customer Churn Prediction</div>
                    <div className="text-sm text-gray-600">SaaS - 35% churn reduction</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3 text-[#d97757]">Course Project Portfolio</h3>
              <div className="space-y-3">
                <div className="flex items-center bg-white p-3 rounded-lg">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xs mr-3">🏠</div>
                  <div>
                    <div className="font-semibold">House Price Prediction</div>
                    <div className="text-sm text-gray-600">Regression with feature engineering</div>
                  </div>
                </div>
                <div className="flex items-center bg-white p-3 rounded-lg">
                  <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-xs mr-3">📷</div>
                  <div>
                    <div className="font-semibold">Image Classification</div>
                    <div className="text-sm text-gray-600">CNN with TensorFlow/PyTorch</div>
                  </div>
                </div>
                <div className="flex items-center bg-white p-3 rounded-lg">
                  <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold text-xs mr-3">💬</div>
                  <div>
                    <div className="font-semibold">Sentiment Analysis</div>
                    <div className="text-sm text-gray-600">NLP with LSTM networks</div>
                  </div>
                </div>
                <div className="flex items-center bg-white p-3 rounded-lg">
                  <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xs mr-3">🎮</div>
                  <div>
                    <div className="font-semibold">Game Playing AI</div>
                    <div className="text-sm text-gray-600">Reinforcement learning agent</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">ML Student Success Stories</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">A</div>
                <div className="ml-4">
                  <h4 className="font-semibold">Anita Sharma</h4>
                  <p className="text-sm text-gray-600">Data Scientist at Google</p>
                </div>
              </div>
              <div className="text-4xl text-[#d97757] mb-3">★★★★★</div>
              <p className="text-gray-700 italic">"Yash's ML course gave me the foundation to land my dream job at Google. The practical projects were game-changers!"</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">R</div>
                <div className="ml-4">
                  <h4 className="font-semibold">Rahul Patel</h4>
                  <p className="text-sm text-gray-600">ML Engineer at Flipkart</p>
                </div>
              </div>
              <div className="text-4xl text-[#d97757] mb-3">★★★★★</div>
              <p className="text-gray-700 italic">"From zero ML knowledge to building production systems. The hands-on approach and real projects made all the difference."</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">S</div>
                <div className="ml-4">
                  <h4 className="font-semibold">Sneha Gupta</h4>
                  <p className="text-sm text-gray-600">AI Startup Founder</p>
                </div>
              </div>
              <div className="text-4xl text-[#d97757] mb-3">★★★★★</div>
              <p className="text-gray-700 italic">"Used the ML skills to build my AI startup. Now have 50+ enterprise clients and $2M ARR. Thank you Yash!"</p>
            </div>
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Master Machine Learning Today</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join 50,000+ students who have mastered machine learning with comprehensive, practical training from industry expert.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://www.udemy.com/user/feelix-2" target="_blank" rel="noopener noreferrer"
               className="px-8 py-4 bg-[#d97757] text-white rounded-xl hover:bg-[#c86844] transition-colors font-semibold text-lg">
              Start ML Journey
            </a>
            <a href="mailto:yash@explainx.ai"
               className="px-8 py-4 border-2 border-[#d97757] text-[#d97757] rounded-xl hover:bg-[#d97757] hover:text-white transition-colors font-semibold text-lg">
              Custom ML Training
            </a>
          </div>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-[#d97757]">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Enterprise ML Training Available</h3>
            <p className="text-gray-600 mb-6">Custom machine learning training programs for teams and organizations</p>
            <a href="mailto:yash@explainx.ai?subject=Enterprise ML Training"
               className="inline-block px-8 py-4 bg-[#d97757] text-white rounded-xl hover:bg-[#c86844] transition-colors font-semibold">
              Book Enterprise ML Training
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}