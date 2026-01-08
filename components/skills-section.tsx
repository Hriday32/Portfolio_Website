import { Card } from '@/components/ui/card';

const skills = [
  {
    name: 'React.js',
    level: 90,
    icon: '⚛️',
  },
  {
    name: 'Next.js',
    level: 85,
    icon: '▲',
  },
  {
    name: 'TypeScript',
    level: 80,
    icon: '📘',
  },
  {
    name: 'JavaScript',
    level: 90,
    icon: '📜',
  },
  {
    name: 'Tailwind CSS',
    level: 85,
    icon: '🎨',
  },
  {
    name: 'Git',
    level: 75,
    icon: '🔀',
  },
];

export default function SkillsSection() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {skills.map((skill) => (
        <Card key={skill.name} className="p-6 hover:shadow-lg transition-shadow duration-300">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <span className="text-2xl">{skill.icon}</span>
              <h3 className="font-semibold text-gray-900 dark:text-white">{skill.name}</h3>
            </div>
            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
              {skill.level}%
            </span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-blue-600 to-cyan-600 h-2 rounded-full transition-all duration-1000"
              style={{ width: `${skill.level}%` }}
            />
          </div>
        </Card>
      ))}
    </div>
  );
}
