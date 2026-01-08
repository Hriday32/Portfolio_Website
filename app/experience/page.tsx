import type { Metadata } from 'next';
import ExperienceCard from '@/components/experience-card';
import { supabase } from '@/lib/supabase';
import type { Experience } from '@/lib/supabase';

export const metadata: Metadata = {
  title: 'Experience - Portfolio',
  description: 'View my professional work experience and career journey as a Frontend Developer.',
};

export const revalidate = 60;

async function getExperiences(): Promise<Experience[]> {
  const { data, error } = await supabase
    .from('experiences')
    .select('*')
    .order('order_index', { ascending: true });

  if (error) {
    console.error('Error fetching experiences:', error);
    return [];
  }

  return data || [];
}

export default async function ExperiencePage() {
  const experiences = await getExperiences();

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Work Experience
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My professional journey and career highlights
          </p>
        </div>

        {experiences.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              No experience entries available at the moment.
            </p>
          </div>
        ) : (
          <div className="space-y-8">
            {experiences.map((experience) => (
              <ExperienceCard key={experience.id} experience={experience} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
