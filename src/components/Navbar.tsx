// src/components/Navbar.tsx
import Link from 'next/link';

export default function Navbar() {
  const navLinks = [
    { title: "About", path: "#about" },
    { title: "Experience", path: "#experience" },
    { title: "Skills", path: "#skills" },
    { title: "Projects", path: "#projects" },
    { title: "Contact", path: "#contact" },
  ];

  return (
    // 'fixed top-0' makes it sticky. 'bg-opacity-90 backdrop-blur-sm' gives it a cool glassy effect.
    <nav className="fixed top-0 left-0 right-0 z-10 bg-gray-900 bg-opacity-90 backdrop-blur-sm border-b border-gray-700">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link href="/" className="text-2xl font-bold text-white">
          Janith Gayashan
        </Link>
        
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <Link key={link.title} href={link.path} className="text-gray-300 hover:text-yellow-400 transition-colors duration-300">
              {link.title}
            </Link>
          ))}
        </div>
        
        {/* We can add a mobile menu button here later if needed */}
      </div>
    </nav>
  );
}