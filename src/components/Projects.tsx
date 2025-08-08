// src/components/Projects.tsx
export default function Projects() {
  return (
    <div>
      <h2 className="text-4xl font-bold text-white text-center mb-12">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Project Card 1 */}
        <div className="bg-gray-800 rounded-lg overflow-hidden">
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-yellow-400 mb-2">ERP System</h3>
            <p className="text-gray-400 mb-4">A full-stack system to manage company resources, built with Angular and Spring Boot.</p>
            <a href="#" className="text-yellow-500 hover:underline">View Details →</a>
          </div>
        </div>
        {/* Project Card 2 */}
        <div className="bg-gray-800 rounded-lg overflow-hidden">
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-yellow-400 mb-2">AI Image Classifier</h3>
            <p className="text-gray-400 mb-4">An interactive demo where you can upload an image and see a model's prediction in real-time.</p>
            <a href="#" className="text-yellow-500 hover:underline">View Details →</a>
          </div>
        </div>
        {/* Add more cards */}
      </div>
    </div>
  );
}