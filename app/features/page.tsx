import Navigation from "@/components/Navigation";

export default function Features() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-white pt-16">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FFF8F0] to-white">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Powerful Features
            </h1>
            <p className="text-xl text-gray-600">
              Everything you need to succeed, all in one place.
            </p>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Feature 1 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#D86F2C]/10 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">⚡</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
                  <p className="text-gray-600">
                    Experience blazing-fast performance with our optimized infrastructure
                    that handles millions of requests seamlessly.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#D86F2C]/10 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">🔒</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Secure by Default</h3>
                  <p className="text-gray-600">
                    Your data is protected with enterprise-grade security and encryption,
                    ensuring complete privacy and compliance.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#D86F2C]/10 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">📊</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Advanced Analytics</h3>
                  <p className="text-gray-600">
                    Get deep insights with powerful analytics and reporting tools
                    that help you make data-driven decisions.
                  </p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#D86F2C]/10 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">🎨</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Beautiful Design</h3>
                  <p className="text-gray-600">
                    Enjoy a stunning, intuitive interface that makes complex tasks
                    simple and delightful to use.
                  </p>
                </div>
              </div>

              {/* Feature 5 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#D86F2C]/10 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">🔄</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Real-time Sync</h3>
                  <p className="text-gray-600">
                    Stay in sync across all your devices with automatic real-time
                    updates and seamless collaboration.
                  </p>
                </div>
              </div>

              {/* Feature 6 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#D86F2C]/10 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">🌍</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Global Scale</h3>
                  <p className="text-gray-600">
                    Deploy worldwide with our global infrastructure, ensuring
                    low latency and high availability everywhere.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Coming Soon Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Coming Soon
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg border-2 border-[#D86F2C]/20">
                <h3 className="text-lg font-semibold mb-2">API Integration</h3>
                <p className="text-gray-600">
                  Connect with your favorite tools and services through our powerful API.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg border-2 border-[#D86F2C]/20">
                <h3 className="text-lg font-semibold mb-2">Mobile Apps</h3>
                <p className="text-gray-600">
                  Native iOS and Android apps for on-the-go productivity.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg border-2 border-[#D86F2C]/20">
                <h3 className="text-lg font-semibold mb-2">AI Assistant</h3>
                <p className="text-gray-600">
                  Smart AI-powered features to automate your workflow.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg border-2 border-[#D86F2C]/20">
                <h3 className="text-lg font-semibold mb-2">Team Collaboration</h3>
                <p className="text-gray-600">
                  Advanced team features for seamless collaboration at scale.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Experience These Features?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join our waitlist and get early access when we launch.
            </p>
            <a
              href="/"
              className="inline-block bg-[#D86F2C] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#C05F1F] transition-colors"
            >
              Join the Waitlist
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
