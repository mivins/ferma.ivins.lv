import Navigation from "@/components/Navigation";
import Image from "next/image";

export default function About() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-white pt-16">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              About Us
            </h1>
            <p className="text-xl text-gray-600">
              Building the future, one innovation at a time.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-4">
                Founded in 2025, our mission is to revolutionize the way people interact with technology.
                We believe in creating solutions that are not only powerful but also intuitive and accessible to everyone.
              </p>
              <p className="text-gray-600 mb-4">
                Our team is composed of passionate innovators, designers, and engineers who share a common vision:
                to build products that make a real difference in people's lives.
              </p>
              <p className="text-gray-600">
                We're just getting started, and we're excited to have you join us on this journey.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Our Values
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-semibold mb-3">Innovation</h3>
                <p className="text-gray-600">
                  We constantly push boundaries and explore new possibilities to deliver cutting-edge solutions.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-xl font-semibold mb-3">Collaboration</h3>
                <p className="text-gray-600">
                  We believe in the power of teamwork and value every voice in our community.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="text-4xl mb-4">✨</div>
                <h3 className="text-xl font-semibold mb-3">Excellence</h3>
                <p className="text-gray-600">
                  We're committed to delivering the highest quality in everything we do.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Join Us on This Journey
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Be part of our story from the very beginning.
            </p>
            <a
              href="/"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Join the Waitlist
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
