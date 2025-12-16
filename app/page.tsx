import Image from "next/image";
import Navigation from "@/components/Navigation";
import WaitlistForm from "@/components/WaitlistForm";

export default function Home() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-[#FFF8F0]">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div>
                <div className="inline-flex items-center gap-2 bg-[#F5E6D3] text-[#D86F2C] px-4 py-2 rounded-full mb-6">
                  <span className="w-2 h-2 bg-[#D86F2C] rounded-full"></span>
                  <span className="font-semibold text-sm">The legend returns</span>
                </div>

                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-gray-900 mb-6 leading-tight">
                  The same old Ferma.
                  <br />
                  <span className="text-[#D86F2C]">Just much better.</span>
                </h1>

                <p className="text-lg sm:text-xl text-gray-700 mb-8 leading-relaxed">
                  Remember growing your farm back in 2010? We're bringing Ferma back, modernized.
                  No fees. No hidden payments. Just pure fun with real friends.
                </p>

                <button className="bg-[#D86F2C] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#C05F1F] transition-colors text-lg inline-flex items-center gap-2 shadow-lg hover:shadow-xl">
                  Piesakies jaunumiem
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </div>

              {/* Right Image */}
              <div className="relative">
                <div className="bg-gradient-to-br from-[#F5E6D3] to-[#FFE8CC] rounded-3xl p-8 shadow-2xl">
                  <Image
                    src="/fema logo with background.png"
                    alt="Ferma Game"
                    width={600}
                    height={600}
                    className="w-full h-auto rounded-2xl"
                    priority
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#7FAA3C]/20 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#D86F2C]/20 rounded-full blur-2xl"></div>
              </div>
            </div>

            {/* Scroll indicator */}
            <div className="flex justify-center mt-16">
              <svg className="w-6 h-6 text-gray-400 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </section>

        {/* Why Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-bold text-center text-gray-900 mb-4">
              Why are we doing this?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#D86F2C] to-[#7FAA3C] mx-auto mb-16"></div>

            <div className="grid md:grid-cols-4 gap-8">
              {/* Feature 1 */}
              <div className="text-center p-6 hover:bg-[#FFF8F0] rounded-2xl transition-colors">
                <div className="w-20 h-20 bg-gradient-to-br from-[#D86F2C] to-[#C05F1F] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Nostalgia</h3>
                <p className="text-gray-600 leading-relaxed">
                  Relive the golden days of social gaming with friends
                </p>
              </div>

              {/* Feature 2 */}
              <div className="text-center p-6 hover:bg-[#FFF8F0] rounded-2xl transition-colors">
                <div className="w-20 h-20 bg-gradient-to-br from-[#7FAA3C] to-[#6A8F34] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Modern Times</h3>
                <p className="text-gray-600 leading-relaxed">
                  Updated for today with better graphics and gameplay
                </p>
              </div>

              {/* Feature 3 */}
              <div className="text-center p-6 hover:bg-[#FFF8F0] rounded-2xl transition-colors">
                <div className="w-20 h-20 bg-gradient-to-br from-[#E89F3C] to-[#D86F2C] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Community</h3>
                <p className="text-gray-600 leading-relaxed">
                  Connect with old friends and make new ones
                </p>
              </div>

              {/* Feature 4 */}
              <div className="text-center p-6 hover:bg-[#FFF8F0] rounded-2xl transition-colors">
                <div className="w-20 h-20 bg-gradient-to-br from-[#8FAA3C] to-[#7FAA3C] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Pure Fun</h3>
                <p className="text-gray-600 leading-relaxed">
                  No hidden costs, just honest farming fun
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#D86F2C] to-[#C05F1F]">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Start Farming Again?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Sign up for updates and be the first to know when we launch.
            </p>
            <button className="bg-white text-[#D86F2C] px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors text-lg inline-flex items-center gap-2 shadow-xl">
              Join the Waitlist
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        </section>
      </div>
    </>
  );
}
