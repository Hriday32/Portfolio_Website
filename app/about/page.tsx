import type { Metadata } from 'next';
import { User, Code, Sparkles } from 'lucide-react';
import SkillsSection from '@/components/skills-section';
import { Card, CardContent } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'About Me - Portfolio',
  description: 'Learn more about my background, skills, and experience as a Frontend Developer.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Passionate Frontend Developer with expertise in building modern web applications
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4">
                  <User className="text-blue-600 dark:text-blue-400" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Who I Am</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  A dedicated Frontend Developer with 1+ year of experience in creating beautiful
                  and functional web applications.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-4">
                  <Code className="text-green-600 dark:text-green-400" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2">What I Do</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  I specialize in building responsive, user-friendly interfaces using React,
                  Next.js, and modern web technologies.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mb-4">
                  <Sparkles className="text-purple-600 dark:text-purple-400" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2">My Passion</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  I love turning complex problems into simple, elegant solutions that delight
                  users and exceed expectations.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Professional Summary
          </h2>
          <Card>
            <CardContent className="pt-6">
              <div className="prose dark:prose-invert max-w-none">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  As a Frontend Developer with over a year of professional experience, I have
                  developed a strong foundation in modern web development technologies and best
                  practices. My journey in web development has been driven by a passion for
                  creating intuitive and visually appealing user interfaces.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  I specialize in building scalable and performant web applications using React.js
                  and Next.js, with a keen eye for detail and a commitment to writing clean,
                  maintainable code. My experience includes working with TypeScript, implementing
                  responsive designs with Tailwind CSS, and managing version control with Git.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  I'm constantly learning and adapting to new technologies and methodologies to
                  stay at the forefront of web development. I believe in the power of
                  collaboration, continuous improvement, and creating web experiences that make a
                  real difference.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Technical Skills
          </h2>
          <SkillsSection />
        </div>
      </div>
    </div>
  );
}
