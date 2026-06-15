'use client';

import React, { useState } from 'react';
import ChatWidget from './ChatWidget';

export default function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      
      {/* The Chat Window (Stays mounted to keep history, uses CSS to hide/show) */}
      <div 
        className={`transition-all duration-300 ease-out origin-bottom-right w-[350px] sm:w-[420px] ${
          isOpen 
            ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto mb-4 relative' 
            : 'opacity-0 scale-50 translate-y-10 pointer-events-none absolute bottom-0 right-0'
        }`}
      >
        <ChatWidget onClose={() => setIsOpen(false)} />
      </div>

      {/* The Floating Action Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`w-14 h-14 bg-violet-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 focus:outline-none ${
          isOpen ? 'opacity-0 scale-50 pointer-events-none absolute bottom-0 right-0' : 'opacity-100 scale-100 relative'
        }`}
        aria-label="Open AI Assistant"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
      </button>
      
    </div>
  );
}