'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/blog', label: 'Blog' },
    { href: '/social', label: 'Social' },
    { href: '/faq', label: 'FAQ' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-3 sm:py-4">
          <Link href="/" className="text-lg sm:text-xl font-bold text-[#d97757]">
            Yash Thakker
          </Link>
          
          <div className="hidden md:flex space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  pathname === item.href
                    ? 'text-[#d97757]'
                    : 'text-gray-600 hover:text-[#d97757]'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu - simplified for now */}
          <div className="md:hidden flex space-x-4">
            <Link href="/contact" className="text-xs px-3 py-1 bg-[#d97757] text-white rounded-full font-medium">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}