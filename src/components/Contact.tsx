// src/components/Contact.tsx
export default function Contact() {
  return (
    <div className="text-center">
      <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
      <p className="text-lg text-gray-400 mb-8">
        My inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
      </p>
      <a 
        href="mailto:your.email@example.com"
        className="bg-yellow-500 text-gray-900 font-bold py-3 px-8 rounded-lg hover:bg-yellow-600 transition duration-300 text-lg"
      >
        Say Hello
      </a>
    </div>
  );
}