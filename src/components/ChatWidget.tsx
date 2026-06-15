'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { v4 as uuidv4 } from 'uuid';
import { sendChatMessage } from '@/app/projects/services/chatApi';

interface Message {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  timestamp: Date;
}

interface ChatWidgetProps {
  onClose: () => void;
}

// Constants for robust session management
const THREAD_KEY = "chat_thread_id";
const TIME_KEY = "chat_last_activity";
const SESSION_TIMEOUT_MS = 30 * 60 * 1000; // 30 minutes

export default function ChatWidget({ onClose }: ChatWidgetProps) {
  const router = useRouter();
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [threadId, setThreadId] = useState<string>('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const generateUniqueId = () => `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;

  // The initial greeting message stored as a constant so we can easily reset to it
  const INITIAL_GREETING: Message = {
    id: 'welcome',
    sender: 'bot',
    text: "Hello. I am Janith's AI Assistant. How can I help you explore his portfolio, technical skills, or machine learning projects today?",
    timestamp: new Date(),
  };

  useEffect(() => {
    // 1. Initialize Session on Load & Sync Across Tabs
    const initSession = () => {
      const storedThreadId = localStorage.getItem(THREAD_KEY);
      const lastActivity = localStorage.getItem(TIME_KEY);
      const now = Date.now();

      // If a valid, non-expired session exists, use it!
      if (storedThreadId && lastActivity && (now - parseInt(lastActivity)) < SESSION_TIMEOUT_MS) {
        setThreadId(storedThreadId);
        setMessages([INITIAL_GREETING]);
      } else {
        // Otherwise, start a fresh session
        createNewSession();
      }
    };

    initSession();

    // 2. Listen for "New Chat" clicks from other tabs!
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === THREAD_KEY && e.newValue) {
        setThreadId(e.newValue);
        setMessages([INITIAL_GREETING]); // Reset to initial greeting automatically
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  // Helper to Create a Fresh Session
  const createNewSession = () => {
    const newSessionId = `session_${uuidv4()}`;
    localStorage.setItem(THREAD_KEY, newSessionId);
    localStorage.setItem(TIME_KEY, Date.now().toString());
    setThreadId(newSessionId);
    setMessages([INITIAL_GREETING]);
  };

  // --- UPGRADED: The Session Reset Logic ---
  const handleNewChat = () => {
    if (isLoading) return; // Prevent resetting while the AI is currently typing
    createNewSession();
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading || !threadId) return;

    const userMessageText = input.trim();
    setInput('');
    
    // --- TIMEOUT CHECK BEFORE SENDING ---
    const lastActivity = localStorage.getItem(TIME_KEY);
    const now = Date.now();
    let activeThreadId = threadId;

    // If the user went to lunch while typing and the session expired, force a new ID safely
    if (lastActivity && (now - parseInt(lastActivity) > SESSION_TIMEOUT_MS)) {
      activeThreadId = `session_${uuidv4()}`;
      localStorage.setItem(THREAD_KEY, activeThreadId);
      setThreadId(activeThreadId);
      // We purposefully don't wipe the UI here so the user doesn't lose what they were looking at, 
      // but the backend will treat it as a fresh state securely.
    }
    
    // Update the timestamp to keep the session alive across all tabs
    localStorage.setItem(TIME_KEY, now.toString());
    // ------------------------------------

    const userMessage: Message = {
      id: generateUniqueId(),
      sender: 'user',
      text: userMessageText,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    try {
      const response = await sendChatMessage({
        thread_id: activeThreadId, // Passing the actively validated thread ID
        message: userMessageText,
      });

      const botMessage: Message = {
        id: generateUniqueId(),
        sender: 'bot',
        text: response.reply,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);

      if (response.action === 'NAVIGATE' && response.target) {
        setTimeout(() => {
          router.push(response.target);
        }, 800);
      }

    } catch (error: any) {
      setMessages((prev) => [
        ...prev,
        {
          id: generateUniqueId(),
          sender: 'bot',
          text: 'Connection temporarily unavailable. Please try again shortly.',
          timestamp: new Date(),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[500px] w-full shadow-2xl rounded-2xl overflow-hidden border bg-slate-900/60 backdrop-blur-xl border-slate-700/50">
      
      {/* Header Bar */}
      <div className="h-[60px] px-4 flex items-center justify-between border-b border-slate-700/50 bg-slate-900/50">
        <div className="flex items-center gap-3">
          <div className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
          </div>
          <span className="font-medium text-sm tracking-wide text-slate-100">AI Assistant</span>
        </div>
        
        {/* Header Controls (New Chat + Close) */}
        <div className="flex items-center gap-1">
          {/* New Chat Button */}
          <button 
            onClick={handleNewChat}
            disabled={isLoading}
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-700/50 rounded-lg transition-colors disabled:opacity-50"
            title="Start New Chat"
            aria-label="Start New Chat"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              <line x1="12" y1="9" x2="12" y2="15"></line>
              <line x1="9" y1="12" x2="15" y2="12"></line>
            </svg>
          </button>

          {/* Close Button */}
          <button 
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-700/50 rounded-lg transition-colors"
            title="Close Assistant"
            aria-label="Close Chat"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>

      {/* Messages Feed */}
      <div className="flex-1 p-4 overflow-y-auto space-y-4 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div
              className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed shadow-sm ${
                msg.sender === 'user'
                  ? 'bg-violet-600 text-white rounded-tr-sm'
                  : 'bg-slate-800/80 text-slate-200 border border-slate-700/50 rounded-tl-sm'
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}

        {/* Processing Indicator */}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-slate-800/80 text-slate-400 rounded-2xl rounded-tl-sm px-4 py-3 text-sm flex items-center gap-2 shadow-sm border border-slate-700/50">
              <div className="flex gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-500 animate-bounce [animation-delay:-0.3s]" />
                <span className="w-1.5 h-1.5 rounded-full bg-slate-500 animate-bounce [animation-delay:-0.15s]" />
                <span className="w-1.5 h-1.5 rounded-full bg-slate-500 animate-bounce" />
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Section */}
      <form onSubmit={handleSendMessage} className="p-3 bg-slate-900/50 border-t border-slate-700/50">
        <div className="relative flex items-center">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask a question..."
            disabled={isLoading}
            className="w-full bg-slate-800/60 border border-slate-700/50 rounded-full pl-4 pr-12 py-3 text-sm text-slate-100 focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/50 disabled:opacity-50 placeholder-slate-400 transition-all shadow-inner"
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="absolute right-1.5 p-2 bg-violet-600 text-white rounded-full shadow-md hover:bg-violet-500 disabled:opacity-40 transition-all"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          </button>
        </div>
      </form>

    </div>
  );
}