// src/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-700">
      <div className="container mx-auto p-4 flex justify-between items-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} Janith Gayashan. All Rights Reserved.</p>
        <div className="flex space-x-4">
          <a href="https://github.com/JanithGayashan" target="_blank" rel="noopener noreferrer" className="hover:text-white">GitHub</a>
          <a href="http://www.linkedin.com/in/janith-gayashan" target="_blank" rel="noopener noreferrer" className="hover:text-white">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}