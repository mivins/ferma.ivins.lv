import Image from "next/image";
import Navigation from "@/components/Navigation";
import WaitlistForm from "@/components/WaitlistForm";

export default function Home() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
              Welcome to the Future
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto">
              Join thousands of early adopters and be the first to experience our revolutionary platform.
            </p>
            <WaitlistForm />
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">
              Why Join Our Waitlist?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🚀</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Early Access</h3>
                <p className="text-gray-600">
                  Be among the first to try our platform before the official launch.
                </p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">💎</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Exclusive Benefits</h3>
                <p className="text-gray-600">
                  Get special perks and discounts reserved only for early supporters.
                </p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🎯</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Shape the Future</h3>
                <p className="text-gray-600">
                  Your feedback will directly influence our product development.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join our waitlist today and be part of something amazing.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
