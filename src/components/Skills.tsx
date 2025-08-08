// src/components/Skills.tsx
export default function Skills() {
  const skillCategories = {
    "Languages": ["Python", "Java", "SQL", "TypeScript"],
    "AI/ML": ["PyTorch", "TensorFlow", "Scikit-learn", "Hugging Face"],
    "Web Tech": ["Next.js", "React", "Node.js", "Spring Boot"],
    "Tools & MLOps": ["Docker", "Git", "AWS", "Vercel"]
  };

  return (
    <div>
      <h2 className="text-4xl font-bold text-white text-center mb-12">Technical Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {Object.entries(skillCategories).map(([category, skills]) => (
          <div key={category} className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-yellow-400 mb-4">{category}</h3>
            <ul className="space-y-2">
              {skills.map(skill => (
                <li key={skill} className="text-gray-300">{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}