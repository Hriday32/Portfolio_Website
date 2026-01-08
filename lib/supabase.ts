import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Project = {
  id: string;
  title: string;
  description: string;
  tech_stack: string[];
  github_url: string | null;
  live_url: string | null;
  image_url: string | null;
  order_index: number;
  created_at: string;
};

export type Experience = {
  id: string;
  role: string;
  company: string;
  duration: string;
  start_date: string;
  end_date: string | null;
  responsibilities: string[];
  order_index: number;
  created_at: string;
};

export type ContactSubmission = {
  name: string;
  email: string;
  message: string;
};
