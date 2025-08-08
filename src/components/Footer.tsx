// src/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-700">
      <div className="container mx-auto p-4 flex justify-between items-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} Your Name. All Rights Reserved.</p>
        <div className="flex space-x-4">
          <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer" className="hover:text-white">GitHub</a>
          <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="hover:text-white">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}