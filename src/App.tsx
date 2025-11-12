import { useState } from 'react';
import { ChevronRight, User, Target, BookOpen, Heart, Briefcase, TrendingUp, Menu, X } from 'lucide-react';
import './App.css';

const screens = {
  dashboard: 'Dashboard',
  profile: '360° Vital Profile',
  prescriptions: 'My Prescriptions',
  progress: 'Progress Tracking',
  resources: 'Learning Resources'
} as const;

type ScreenKey = keyof typeof screens;

const LifeCareerApp = () => {
  const [activeScreen, setActiveScreen] = useState<ScreenKey>('dashboard');
  const [menuOpen, setMenuOpen] = useState(false);

  // Dashboard Screen
  const DashboardScreen = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-blue-600 to-green-500 text-white rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-2">Welcome back, Jordan!</h2>
        <p className="text-blue-50">You're on your path to purpose-aligned career success</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-bold text-blue-900">Mind (Spirit)</h3>
            <User className="text-blue-600" size={24} />
          </div>
          <div className="text-3xl font-bold text-blue-700 mb-1">72%</div>
          <p className="text-sm text-blue-600">Cognitive & purpose development</p>
        </div>

        <div className="bg-green-50 border-2 border-green-200 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-bold text-green-900">Body (Action)</h3>
            <TrendingUp className="text-green-600" size={24} />
          </div>
          <div className="text-3xl font-bold text-green-700 mb-1">65%</div>
          <p className="text-sm text-green-600">Physical skills & execution</p>
        </div>

        <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-bold text-yellow-900">Soul (Heart)</h3>
            <Heart className="text-yellow-600" size={24} />
          </div>
          <div className="text-3xl font-bold text-yellow-700 mb-1">58%</div>
          <p className="text-sm text-yellow-600">Emotional & social readiness</p>
        </div>
      </div>

      <div className="bg-white border rounded-lg p-5">
        <h3 className="font-bold text-lg mb-3 flex items-center">
          <Target className="mr-2 text-blue-600" size={20} />
          Your Active Prescriptions
        </h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-blue-50 rounded">
            <div>
              <div className="font-semibold">First Prescription - Foundational Literacy</div>
              <div className="text-sm text-gray-600">Technical Math & Reading Assessment</div>
            </div>
            <button className="text-blue-600 hover:text-blue-800">Continue →</button>
          </div>
          <div className="flex items-center justify-between p-3 bg-yellow-50 rounded">
            <div>
              <div className="font-semibold">Layered Prescription - Career Direction</div>
              <div className="text-sm text-gray-600">Interest Inventory & Skills Mapping</div>
            </div>
            <button className="text-yellow-600 hover:text-yellow-800">Start →</button>
          </div>
        </div>
      </div>

      <div className="bg-white border rounded-lg p-5">
        <h3 className="font-bold text-lg mb-3">Recommended Next Steps</h3>
        <div className="space-y-2">
          <div className="flex items-start p-3 hover:bg-gray-50 rounded cursor-pointer">
            <ChevronRight className="mr-2 mt-1 text-green-600" size={20} />
            <div>
              <div className="font-semibold">Complete Physical Readiness Assessment</div>
              <div className="text-sm text-gray-600">Assess health & wellness baseline for construction pathway</div>
            </div>
          </div>
          <div className="flex items-start p-3 hover:bg-gray-50 rounded cursor-pointer">
            <ChevronRight className="mr-2 mt-1 text-green-600" size={20} />
            <div>
              <div className="font-semibold">Connect with Career Coach</div>
              <div className="text-sm text-gray-600">Schedule your first TaskHuman session</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // 360° Vital Profile Screen
  const ProfileScreen = () => (
    <div className="space-y-6">
      <div className="bg-white border rounded-lg p-5">
        <h2 className="text-2xl font-bold mb-4">Your 360° Vital Profile</h2>
        <p className="text-gray-600 mb-6">Core diagnostic baseline across 9 dimensions</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border-l-4 border-blue-500 pl-4 py-2">
            <h4 className="font-bold text-blue-900">1. Current Technical Skills</h4>
            <p className="text-sm text-gray-600">Assessment Score: 68/100</p>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
              <div className="bg-blue-600 h-2 rounded-full" style={{width: '68%'}}></div>
            </div>
          </div>

          <div className="border-l-4 border-blue-500 pl-4 py-2">
            <h4 className="font-bold text-blue-900">2. Foundational Literacy & Numeracy</h4>
            <p className="text-sm text-gray-600">Assessment Score: 72/100</p>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
              <div className="bg-blue-600 h-2 rounded-full" style={{width: '72%'}}></div>
            </div>
          </div>

          <div className="border-l-4 border-yellow-500 pl-4 py-2">
            <h4 className="font-bold text-yellow-900">3. Physical Readiness & Limitations</h4>
            <p className="text-sm text-gray-600">Status: Pending Assessment</p>
            <button className="text-sm text-yellow-600 hover:text-yellow-800 mt-1">Complete Assessment →</button>
          </div>

          <div className="border-l-4 border-yellow-500 pl-4 py-2">
            <h4 className="font-bold text-yellow-900">4. Language & Communication</h4>
            <p className="text-sm text-gray-600">Assessment Score: 75/100</p>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
              <div className="bg-yellow-600 h-2 rounded-full" style={{width: '75%'}}></div>
            </div>
          </div>

          <div className="border-l-4 border-green-500 pl-4 py-2">
            <h4 className="font-bold text-green-900">5. Cognitive & Learning Profile</h4>
            <p className="text-sm text-gray-600">Learning Style: Visual-Kinesthetic</p>
            <p className="text-xs text-gray-500 mt-1">Recommended accommodations available</p>
          </div>

          <div className="border-l-4 border-green-500 pl-4 py-2">
            <h4 className="font-bold text-green-900">6. Socio-Emotional & Behavioral</h4>
            <p className="text-sm text-gray-600">Assessment Score: 58/100</p>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
              <div className="bg-green-600 h-2 rounded-full" style={{width: '58%'}}></div>
            </div>
          </div>

          <div className="border-l-4 border-purple-500 pl-4 py-2">
            <h4 className="font-bold text-purple-900">7. Career Direction & Interests</h4>
            <p className="text-sm text-gray-600">Top Match: Construction Trades</p>
            <p className="text-xs text-gray-500 mt-1">Secondary: Advanced Manufacturing</p>
          </div>

          <div className="border-l-4 border-purple-500 pl-4 py-2">
            <h4 className="font-bold text-purple-900">8. Environmental & Life Stability</h4>
            <p className="text-sm text-gray-600">Housing: Stable | Transportation: Needs Support</p>
          </div>

          <div className="border-l-4 border-pink-500 pl-4 py-2">
            <h4 className="font-bold text-pink-900">9. Purpose & Identity</h4>
            <p className="text-sm text-gray-600">Status: Development Phase</p>
            <p className="text-xs text-gray-500 mt-1">Next session: Purpose exploration workshop</p>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-5">
        <h3 className="font-bold text-lg mb-2">Profile Insights</h3>
        <p className="text-gray-700">Based on your profile, you have strong foundational literacy skills and a clear interest in hands-on construction work. We've identified transportation planning as a priority support area to ensure career success.</p>
      </div>
    </div>
  );

  // Prescriptions Screen
  const PrescriptionsScreen = () => (
    <div className="space-y-6">
      <div className="bg-white border rounded-lg p-5">
        <h2 className="text-2xl font-bold mb-4">Your Personalized Prescriptions</h2>
        <p className="text-gray-600 mb-6">Tailored development pathway based on your 360° profile</p>

        <div className="space-y-4">
          <div className="border-2 border-blue-500 rounded-lg p-4 bg-blue-50">
            <div className="flex items-start justify-between mb-3">
              <div>
                <span className="bg-blue-600 text-white px-3 py-1 rounded text-sm font-bold">FIRST PRESCRIPTION</span>
                <h3 className="text-xl font-bold mt-2">Foundational Literacy & Numeracy</h3>
              </div>
              <span className="text-blue-600 font-bold">In Progress</span>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex items-center">
                <span className="w-48 text-gray-600">Technical Math Module:</span>
                <div className="flex-1 bg-gray-200 rounded-full h-2 mx-3">
                  <div className="bg-blue-600 h-2 rounded-full" style={{width: '80%'}}></div>
                </div>
                <span className="font-semibold">80%</span>
              </div>
              <div className="flex items-center">
                <span className="w-48 text-gray-600">Reading Comprehension:</span>
                <div className="flex-1 bg-gray-200 rounded-full h-2 mx-3">
                  <div className="bg-blue-600 h-2 rounded-full" style={{width: '65%'}}></div>
                </div>
                <span className="font-semibold">65%</span>
              </div>
              <div className="flex items-center">
                <span className="w-48 text-gray-600">Career Phonics & Vocabulary:</span>
                <div className="flex-1 bg-gray-200 rounded-full h-2 mx-3">
                  <div className="bg-blue-600 h-2 rounded-full" style={{width: '45%'}}></div>
                </div>
                <span className="font-semibold">45%</span>
              </div>
            </div>
            <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Continue Learning</button>
          </div>

          <div className="border-2 border-yellow-500 rounded-lg p-4 bg-yellow-50">
            <div className="flex items-start justify-between mb-3">
              <div>
                <span className="bg-yellow-600 text-white px-3 py-1 rounded text-sm font-bold">LAYERED PRESCRIPTION</span>
                <h3 className="text-xl font-bold mt-2">Construction Career Development</h3>
              </div>
              <span className="text-yellow-600 font-bold">Ready to Start</span>
            </div>
            <div className="space-y-2 text-sm mb-4">
              <div className="flex items-start">
                <ChevronRight className="mr-2 mt-1 text-yellow-600 flex-shrink-0" size={16} />
                <span>Language & Communication in Construction Context</span>
              </div>
              <div className="flex items-start">
                <ChevronRight className="mr-2 mt-1 text-yellow-600 flex-shrink-0" size={16} />
                <span>Blueprint Reading & Technical Literacy</span>
              </div>
              <div className="flex items-start">
                <ChevronRight className="mr-2 mt-1 text-yellow-600 flex-shrink-0" size={16} />
                <span>Safety Protocols & OSHA Fundamentals</span>
              </div>
              <div className="flex items-start">
                <ChevronRight className="mr-2 mt-1 text-yellow-600 flex-shrink-0" size={16} />
                <span>Construction-Specific Physical Conditioning</span>
              </div>
            </div>
            <button className="bg-yellow-600 text-white px-6 py-2 rounded hover:bg-yellow-700">Start Prescription</button>
          </div>

          <div className="border-2 border-gray-300 rounded-lg p-4 bg-gray-50">
            <div className="flex items-start justify-between mb-3">
              <div>
                <span className="bg-gray-600 text-white px-3 py-1 rounded text-sm font-bold">LIFELONG LEARNING</span>
                <h3 className="text-xl font-bold mt-2">Humanities & Literature in Context</h3>
              </div>
              <span className="text-gray-600 font-bold">Unlocks After Layer 1</span>
            </div>
            <p className="text-sm text-gray-600 mb-2">Connect literature and history to career success and life skills. Includes psychology, self-understanding, and music/rhythm for harmony.</p>
          </div>

          <div className="border-2 border-gray-300 rounded-lg p-4 bg-gray-50">
            <div className="flex items-start justify-between mb-3">
              <div>
                <span className="bg-green-600 text-white px-3 py-1 rounded text-sm font-bold">APPLIED LIFE ACTIONS</span>
                <h3 className="text-xl font-bold mt-2">Real-World Application & Support</h3>
              </div>
              <span className="text-gray-600 font-bold">Unlocks After Layer 2</span>
            </div>
            <p className="text-sm text-gray-600 mb-2">Employment support, housing stability, transportation planning, financial literacy, and community integration.</p>
          </div>
        </div>
      </div>

      <div className="bg-green-50 border-2 border-green-200 rounded-lg p-5">
        <h3 className="font-bold text-lg mb-2">🎯 Your Path to Purpose</h3>
        <p className="text-gray-700">You're building skills that align with your construction career interest. Each prescription connects to your long-term goals and helps develop your whole person - mind, body, and soul.</p>
      </div>
    </div>
  );

  // Progress Screen
  const ProgressScreen = () => (
    <div className="space-y-6">
      <div className="bg-white border rounded-lg p-5">
        <h2 className="text-2xl font-bold mb-4">Your Progress Journey</h2>
        
        <div className="mb-6">
          <div className="flex justify-between mb-2">
            <span className="font-semibold">Overall Development</span>
            <span className="font-bold text-blue-600">65%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-4">
            <div className="bg-gradient-to-r from-blue-600 to-green-500 h-4 rounded-full" style={{width: '65%'}}></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border rounded-lg p-4">
            <h3 className="font-bold mb-3">ENGAGE 4 Skills Development</h3>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Thinking</span>
                  <span className="font-semibold">70%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{width: '70%'}}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Communication</span>
                  <span className="font-semibold">65%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{width: '65%'}}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Behavior</span>
                  <span className="font-semibold">58%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-yellow-500 h-2 rounded-full" style={{width: '58%'}}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Action</span>
                  <span className="font-semibold">72%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-500 h-2 rounded-full" style={{width: '72%'}}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="font-bold mb-3">Stackable Credentials</h3>
            <div className="space-y-2">
              <div className="flex items-center p-2 bg-green-50 rounded">
                <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold mr-3">✓</div>
                <div className="flex-1">
                  <div className="font-semibold text-sm">OSHA 10 Safety</div>
                  <div className="text-xs text-gray-600">Completed Sep 2025</div>
                </div>
              </div>
              <div className="flex items-center p-2 bg-blue-50 rounded">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-3">⋯</div>
                <div className="flex-1">
                  <div className="font-semibold text-sm">Blueprint Reading Cert</div>
                  <div className="text-xs text-gray-600">85% complete</div>
                </div>
              </div>
              <div className="flex items-center p-2 bg-gray-50 rounded opacity-60">
                <div className="w-8 h-8 bg-gray-400 text-white rounded-full flex items-center justify-center mr-3">🔒</div>
                <div className="flex-1">
                  <div className="font-semibold text-sm">Carpentry Pre-Apprentice</div>
                  <div className="text-xs text-gray-600">Unlocks Dec 2025</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 border rounded-lg p-4 bg-blue-50">
          <h3 className="font-bold mb-3">Recent Achievements 🎉</h3>
          <div className="space-y-2 text-sm">
            <div className="flex items-start">
              <span className="mr-2">🏆</span>
              <div>
                <span className="font-semibold">Perfect Attendance:</span> Completed 4 weeks of training without absence
              </div>
            </div>
            <div className="flex items-start">
              <span className="mr-2">📚</span>
              <div>
                <span className="font-semibold">Learning Milestone:</span> Finished Technical Math Module 1
              </div>
            </div>
            <div className="flex items-start">
              <span className="mr-2">💪</span>
              <div>
                <span className="font-semibold">Physical Progress:</span> Improved lifting technique assessment score
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Resources Screen
  const ResourcesScreen = () => (
    <div className="space-y-6">
      <div className="bg-white border rounded-lg p-5">
        <h2 className="text-2xl font-bold mb-4">Learning Resources & Support</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border-2 border-blue-200 rounded-lg p-4 hover:shadow-lg transition-shadow cursor-pointer">
            <BookOpen className="text-blue-600 mb-3" size={32} />
            <h3 className="font-bold text-lg mb-2">Course Library</h3>
            <p className="text-sm text-gray-600 mb-3">Access your personalized learning modules and career-specific content</p>
            <button className="text-blue-600 hover:text-blue-800 text-sm font-semibold">Browse Courses →</button>
          </div>

          <div className="border-2 border-green-200 rounded-lg p-4 hover:shadow-lg transition-shadow cursor-pointer">
            <User className="text-green-600 mb-3" size={32} />
            <h3 className="font-bold text-lg mb-2">TaskHuman Coaching</h3>
            <p className="text-sm text-gray-600 mb-3">Connect with career coaches and mentors for personalized guidance</p>
            <button className="text-green-600 hover:text-green-800 text-sm font-semibold">Schedule Session →</button>
          </div>

          <div className="border-2 border-yellow-200 rounded-lg p-4 hover:shadow-lg transition-shadow cursor-pointer">
            <Briefcase className="text-yellow-600 mb-3" size={32} />
            <h3 className="font-bold text-lg mb-2">Job Placement Support</h3>
            <p className="text-sm text-gray-600 mb-3">Employer connections and purpose-aligned recruitment assistance</p>
            <button className="text-yellow-600 hover:text-yellow-800 text-sm font-semibold">Explore Opportunities →</button>
          </div>

          <div className="border-2 border-purple-200 rounded-lg p-4 hover:shadow-lg transition-shadow cursor-pointer">
            <Heart className="text-purple-600 mb-3" size={32} />
            <h3 className="font-bold text-lg mb-2">Community Resources</h3>
            <p className="text-sm text-gray-600 mb-3">Family support, childcare, transportation, housing assistance</p>
            <button className="text-purple-600 hover:text-purple-800 text-sm font-semibold">View Resources →</button>
          </div>
        </div>

        <div className="mt-6 border rounded-lg p-4 bg-gray-50">
          <h3 className="font-bold mb-3">Recommended for You</h3>
          <div className="space-y-2">
            <div className="flex items-start p-3 bg-white rounded hover:shadow cursor-pointer">
              <div className="w-12 h-12 bg-blue-100 rounded flex-shrink-0 mr-3"></div>
              <div>
                <div className="font-semibold text-sm">Construction Safety Fundamentals</div>
                <div className="text-xs text-gray-600">Video Series • 45 min • Aligns with OSHA certification</div>
              </div>
            </div>
            <div className="flex items-start p-3 bg-white rounded hover:shadow cursor-pointer">
              <div className="w-12 h-12 bg-green-100 rounded flex-shrink-0 mr-3"></div>
              <div>
                <div className="font-semibold text-sm">Transportation Planning Workshop</div>
                <div className="text-xs text-gray-600">Live Session • Tomorrow 2PM • Build reliable commute plan</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-white border-b shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-green-500 rounded-lg mr-3"></div>
            <div>
              <h1 className="text-xl font-bold">Life & Career Engineering</h1>
              <p className="text-xs text-gray-600">Strong Literacy. Strong Mind. Strong Soul.</p>
            </div>
          </div>
          <button 
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Navigation */}
      <div className={`bg-white border-b md:block ${menuOpen ? 'block' : 'hidden'}`}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:space-x-1">
            {(Object.entries(screens) as [ScreenKey, string][]).map(([key, label]) => (
              <button
                key={key}
                onClick={() => {
                  setActiveScreen(key);
                  setMenuOpen(false);
                }}
                className={`px-4 py-3 text-sm font-medium transition-colors ${
                  activeScreen === key
                    ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-6">
        {activeScreen === 'dashboard' && <DashboardScreen />}
        {activeScreen === 'profile' && <ProfileScreen />}
        {activeScreen === 'prescriptions' && <PrescriptionsScreen />}
        {activeScreen === 'progress' && <ProgressScreen />}
        {activeScreen === 'resources' && <ResourcesScreen />}
      </div>

      {/* Footer */}
      <div className="bg-white border-t mt-12">
        <div className="max-w-6xl mx-auto px-4 py-6 text-center text-sm text-gray-600">
          <p className="mb-2">ENGAGE → SKILL LINK → HANDSHAKE</p>
          <p className="text-xs">Developed by Serrato Corporation • Lifelong Learning Purpose</p>
        </div>
      </div>
    </div>
  );
};

export default LifeCareerApp;
