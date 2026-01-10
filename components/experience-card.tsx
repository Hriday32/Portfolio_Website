import { Briefcase, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Experience } from '@/lib/data';

interface ExperienceCardProps {
  experience: Experience;
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-xl mb-2">{experience.role}</CardTitle>
            <div className="flex items-center text-gray-600 dark:text-gray-400 mb-2">
              <Briefcase size={16} className="mr-2" />
              <span className="font-medium">{experience.company}</span>
            </div>
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-500">
              <Calendar size={16} className="mr-2" />
              <span>{experience.duration}</span>
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <ul className="space-y-2">
          {experience.responsibilities.map((responsibility, index) => (
            <li key={index} className="flex items-start">
              <span className="text-blue-600 dark:text-blue-400 mr-2 mt-1">•</span>
              <span className="text-gray-700 dark:text-gray-300 text-sm">{responsibility}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
