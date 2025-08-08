// src/components/Experience.tsx
export default function Experience() {
  // You can map over an array of experience objects later
  return (
    <div>
      <h2 className="text-4xl font-bold text-white text-center mb-12">Experience</h2>
      <div className="max-w-3xl mx-auto">
        {/* Experience Item 1 */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-yellow-400">Software Engineer Intern</h3>
          <p className="text-lg text-gray-300">Tech Company Inc. | Summer 2024</p>
          <ul className="list-disc list-inside text-gray-400 mt-2">
            <li>Developed a feature for the main product using Angular and Spring Boot.</li>
            <li>Contributed to the backend API, improving endpoint performance by 15%.</li>
            <li>Participated in daily stand-ups and agile development cycles.</li>
          </ul>
        </div>
        {/* Add more items here */}
      </div>
    </div>
  );
}