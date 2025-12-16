import Link from 'next/link';
import Image from 'next/image';

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#FFF8F0]/95 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-[#D86F2C]">FERMA</span>
            <span className="text-sm font-semibold text-[#7FAA3C] bg-[#7FAA3C]/10 px-2 py-1 rounded">RELOADED</span>
          </Link>

          <div className="flex items-center gap-8">
            <Link href="/" className="text-gray-700 hover:text-[#D86F2C] transition-colors font-medium">
              Home
            </Link>
            <Link href="/features" className="text-gray-700 hover:text-[#D86F2C] transition-colors font-medium">
              Features
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-[#D86F2C] transition-colors font-medium">
              About
            </Link>
            <button className="flex items-center gap-2 text-gray-700">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-medium">LV</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
