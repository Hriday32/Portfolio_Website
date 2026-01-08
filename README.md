# Modern Portfolio Website

A professional, modern portfolio website built with Next.js 13 (App Router), React, TypeScript, and Tailwind CSS. Features a database-backed content management system using Supabase.

## Features

- **Modern Tech Stack**: Next.js 13 App Router, React 18, TypeScript, Tailwind CSS
- **Database Integration**: Supabase for dynamic content management
- **SEO Optimized**: Metadata and Open Graph tags for all pages
- **Responsive Design**: Mobile-first approach, works on all devices
- **Server Components**: Utilizes Next.js server components for optimal performance
- **Type Safety**: Full TypeScript support
- **UI Components**: Pre-built components using shadcn/ui
- **Contact Form**: Functional contact form with database storage

## Folder Structure

```
portfolio/
├── app/                        # Next.js App Router pages
│   ├── about/                 # About page
│   ├── contact/               # Contact page
│   ├── experience/            # Experience page
│   ├── projects/              # Projects page
│   ├── layout.tsx             # Root layout with navbar & footer
│   ├── page.tsx               # Home page
│   └── globals.css            # Global styles
├── components/                 # Reusable components
│   ├── ui/                    # shadcn/ui components
│   ├── navbar.tsx             # Navigation bar
│   ├── footer.tsx             # Footer component
│   ├── hero.tsx               # Hero section
│   ├── project-card.tsx       # Project display card
│   ├── experience-card.tsx    # Experience display card
│   ├── contact-form.tsx       # Contact form
│   └── skills-section.tsx     # Skills display
├── lib/                       # Utility functions
│   ├── supabase.ts           # Supabase client & types
│   └── utils.ts              # Helper functions
├── hooks/                     # Custom React hooks
└── public/                    # Static assets
```

## Database Schema

### Projects Table
- `id`: UUID (Primary Key)
- `title`: Project name
- `description`: Project description
- `tech_stack`: Array of technologies used
- `github_url`: GitHub repository link
- `live_url`: Live demo link (optional)
- `image_url`: Project screenshot (optional)
- `order_index`: Display order
- `created_at`: Timestamp

### Experiences Table
- `id`: UUID (Primary Key)
- `role`: Job title
- `company`: Company name
- `duration`: Duration string (e.g., "Jan 2023 - Present")
- `start_date`: Start date
- `end_date`: End date (null if current)
- `responsibilities`: Array of responsibilities
- `order_index`: Display order
- `created_at`: Timestamp

### Contact Submissions Table
- `id`: UUID (Primary Key)
- `name`: Sender name
- `email`: Sender email
- `message`: Message content
- `created_at`: Timestamp

## Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone the repository** (or this is already your project):
```bash
git clone <your-repo-url>
cd portfolio
```

2. **Install dependencies**:
```bash
npm install
```

3. **Environment variables are already configured** in `.env`:
```
NEXT_PUBLIC_SUPABASE_URL=<your-supabase-url>
NEXT_PUBLIC_SUPABASE_ANON_KEY=<your-anon-key>
```

4. **Run the development server**:
```bash
npm run dev
```

5. **Open your browser** and navigate to `http://localhost:3000`

## Customization Guide

### 1. Personal Information

Update these files with your information:

**`components/hero.tsx`**:
- Replace "Your Name" with your name
- Update the intro text
- Modify statistics if needed

**`components/footer.tsx`**:
- Update social media links (GitHub, LinkedIn, email)
- Replace "Your Name" in copyright

**`app/contact/page.tsx`**:
- Update email address
- Update GitHub and LinkedIn links
- Update location

### 2. Skills

Edit `components/skills-section.tsx`:
- Add/remove skills
- Adjust skill levels (0-100)
- Change icons

### 3. About Page

Edit `app/about/page.tsx`:
- Update professional summary
- Modify the "Who I Am", "What I Do", "My Passion" sections

### 4. Projects & Experience

Projects and experience are managed through the Supabase database. You can:

**Option 1: Direct Database Access**
- Log into Supabase dashboard
- Navigate to Table Editor
- Add/edit/delete entries

**Option 2: SQL Queries**
```sql
-- Add a new project
INSERT INTO projects (title, description, tech_stack, github_url, live_url, order_index)
VALUES ('Project Name', 'Description', ARRAY['React', 'Next.js'], 'https://github.com/...', 'https://demo.com', 1);

-- Add experience
INSERT INTO experiences (role, company, duration, start_date, responsibilities, order_index)
VALUES ('Frontend Developer', 'Company Name', 'Jan 2024 - Present', '2024-01-01',
ARRAY['Responsibility 1', 'Responsibility 2'], 1);
```

### 5. Styling & Theme

The project uses Tailwind CSS with a neutral color scheme:
- **Primary**: Blue gradient (customizable in `tailwind.config.ts`)
- **Background**: White/Gray (light mode) / Dark gray (dark mode)
- **Accent colors**: Defined in `globals.css`

To change colors:
1. Edit `tailwind.config.ts` for Tailwind colors
2. Edit `globals.css` for CSS variables

## Building for Production

```bash
npm run build
```

This creates an optimized production build in the `.next` folder.

## Deployment

### Deploy to Vercel (Recommended)

1. **Install Vercel CLI**:
```bash
npm i -g vercel
```

2. **Deploy**:
```bash
vercel
```

3. **Follow the prompts**:
- Link to existing project or create new
- Configure project settings
- Vercel will automatically detect Next.js

4. **Environment Variables**:
- The `.env` file variables are automatically used
- No additional configuration needed

### Alternative: Deploy via Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import your Git repository
4. Vercel auto-detects Next.js settings
5. Click "Deploy"

The site will be live at `https://your-project.vercel.app`

## Managing Content

### Adding Projects

Use the Supabase dashboard or SQL:
```sql
INSERT INTO projects (title, description, tech_stack, github_url, live_url, order_index)
VALUES (
  'My New Project',
  'A detailed description of the project',
  ARRAY['Next.js', 'TypeScript', 'Tailwind CSS'],
  'https://github.com/yourusername/project',
  'https://project-demo.vercel.app',
  4
);
```

### Adding Experience

```sql
INSERT INTO experiences (role, company, duration, start_date, end_date, responsibilities, order_index)
VALUES (
  'Senior Frontend Developer',
  'New Company Inc.',
  'Jun 2024 - Present',
  '2024-06-01',
  NULL,
  ARRAY[
    'Lead frontend development team',
    'Architected scalable React applications',
    'Mentored junior developers'
  ],
  2
);
```

### Viewing Contact Form Submissions

```sql
SELECT * FROM contact_submissions ORDER BY created_at DESC;
```

## Technologies Used

- **Framework**: Next.js 13 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: Supabase (PostgreSQL)
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Icons**: Lucide React
- **Deployment**: Vercel

## Performance Optimizations

- Server-side rendering for all pages
- Static generation where possible
- Image optimization (when images are added)
- Automatic code splitting
- CSS optimization

## SEO Features

- Metadata for all pages
- Open Graph tags
- Twitter Card tags
- Semantic HTML structure
- Proper heading hierarchy

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.

## Support

For questions or issues:
- Check the documentation above
- Review the code comments
- Open an issue on GitHub

## Future Enhancements

Consider adding:
- Blog section
- Dark mode toggle
- Animations with Framer Motion
- Image gallery
- Testimonials section
- Resume download functionality
- Analytics integration

---

Built with ❤️ using Next.js and TypeScript
