import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold text-gray-900">
            YourBrand
          </Link>

          <div className="flex gap-8">
            <Link href="/" className="text-gray-700 hover:text-gray-900 transition-colors">
              Home
            </Link>
            <Link href="/features" className="text-gray-700 hover:text-gray-900 transition-colors">
              Features
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-gray-900 transition-colors">
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
