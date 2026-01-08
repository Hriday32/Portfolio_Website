/*
  # Portfolio Website Schema

  1. New Tables
    - `projects`
      - `id` (uuid, primary key)
      - `title` (text) - Project name
      - `description` (text) - Project description
      - `tech_stack` (text[]) - Array of technologies used
      - `github_url` (text) - GitHub repository link
      - `live_url` (text, optional) - Live demo link
      - `image_url` (text, optional) - Project screenshot
      - `order_index` (integer) - Display order
      - `created_at` (timestamp)
    
    - `experiences`
      - `id` (uuid, primary key)
      - `role` (text) - Job title
      - `company` (text) - Company name
      - `duration` (text) - e.g., "Jan 2023 - Present"
      - `start_date` (date) - Start date
      - `end_date` (date, optional) - End date (null if current)
      - `responsibilities` (text[]) - Array of responsibilities
      - `order_index` (integer) - Display order
      - `created_at` (timestamp)
    
    - `contact_submissions`
      - `id` (uuid, primary key)
      - `name` (text) - Sender name
      - `email` (text) - Sender email
      - `message` (text) - Message content
      - `created_at` (timestamp)
  
  2. Security
    - Enable RLS on all tables
    - Projects: Public read access
    - Experiences: Public read access
    - Contact submissions: Public insert access only
*/

-- Create projects table
CREATE TABLE IF NOT EXISTS projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  tech_stack text[] NOT NULL DEFAULT '{}',
  github_url text,
  live_url text,
  image_url text,
  order_index integer NOT NULL DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Create experiences table
CREATE TABLE IF NOT EXISTS experiences (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  role text NOT NULL,
  company text NOT NULL,
  duration text NOT NULL,
  start_date date NOT NULL,
  end_date date,
  responsibilities text[] NOT NULL DEFAULT '{}',
  order_index integer NOT NULL DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Create contact submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE experiences ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- RLS Policies for projects (public read)
CREATE POLICY "Anyone can view projects"
  ON projects FOR SELECT
  TO anon, authenticated
  USING (true);

-- RLS Policies for experiences (public read)
CREATE POLICY "Anyone can view experiences"
  ON experiences FOR SELECT
  TO anon, authenticated
  USING (true);

-- RLS Policies for contact submissions (public insert only)
CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Insert sample projects
INSERT INTO projects (title, description, tech_stack, github_url, live_url, order_index) VALUES
('E-Commerce Platform', 'A full-featured e-commerce platform with cart functionality, payment integration, and admin dashboard.', ARRAY['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Stripe'], 'https://github.com/yourusername/ecommerce', 'https://ecommerce-demo.vercel.app', 1),
('Task Management App', 'A collaborative task management application with real-time updates and team collaboration features.', ARRAY['React', 'TypeScript', 'Supabase', 'Tailwind CSS'], 'https://github.com/yourusername/task-manager', 'https://taskmanager-demo.vercel.app', 2),
('Weather Dashboard', 'A beautiful weather dashboard with 7-day forecasts, location search, and interactive maps.', ARRAY['Next.js', 'TypeScript', 'OpenWeather API', 'Chart.js'], 'https://github.com/yourusername/weather-app', 'https://weather-demo.vercel.app', 3);

-- Insert sample experience
INSERT INTO experiences (role, company, duration, start_date, end_date, responsibilities, order_index) VALUES
('Frontend Developer', 'Tech Solutions Inc.', 'Jan 2024 - Present', '2024-01-01', NULL, ARRAY[
  'Developed and maintained responsive web applications using React and Next.js',
  'Collaborated with UI/UX designers to implement pixel-perfect designs',
  'Optimized application performance, reducing load time by 40%',
  'Implemented unit tests and end-to-end tests using Jest and Playwright',
  'Mentored junior developers and conducted code reviews'
], 1);
