import type { Metadata } from 'next';
import ProjectCard from '@/components/project-card';
import { supabase } from '@/lib/supabase';
import type { Project } from '@/lib/supabase';

export const metadata: Metadata = {
  title: 'Projects - Portfolio',
  description: 'Browse my portfolio of web development projects showcasing my skills in React, Next.js, and modern web technologies.',
};

export const revalidate = 60;

async function getProjects(): Promise<Project[]> {
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .order('order_index', { ascending: true });

  if (error) {
    console.error('Error fetching projects:', error);
    return [];
  }

  return data || [];
}

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My Projects
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A collection of my recent work and personal projects
          </p>
        </div>

        {projects.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              No projects available at the moment. Check back soon!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
