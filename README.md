# Portfolio Website

A clean, modern portfolio website built with React, TypeScript, and Vite. Features a dark/light mode toggle, responsive design, and easy content management through JSON files.

## Features

- Clean portfolio/magazine design
- Dark/light mode toggle that respects system preferences
- Fully responsive and mobile-optimized
- Easy content management via JSON files
- About section with bio and profile image
- Featured projects showcase with GitHub links
- LinkedIn posts feed
- Resume section with embedded content and PDF download
- Social links and contact section
- Automated deployment to GitHub Pages

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

## Customizing Your Portfolio

All content is managed through JSON files in the `src/data/` directory:

### About Section (`src/data/about.json`)

Update your personal information:

```json
{
  "name": "Your Name",
  "title": "Your Title",
  "bio": "Your bio...",
  "email": "your.email@example.com",
  "location": "Your Location",
  "imageUrl": "/profile.jpg"
}
```

### Projects (`src/data/projects.json`)

Add or remove projects:

```json
[
  {
    "id": "1",
    "title": "Project Name",
    "description": "Project description...",
    "tags": ["React", "TypeScript"],
    "githubUrl": "https://github.com/...",
    "liveUrl": "https://...",
    "imageUrl": "/projects/image.jpg",
    "featured": true
  }
]
```

### LinkedIn Posts (`src/data/linkedin-posts.json`)

Add your LinkedIn posts:

```json
[
  {
    "id": "1",
    "content": "Post content...",
    "date": "2024-01-15",
    "url": "https://linkedin.com/posts/...",
    "likes": 45,
    "comments": 8
  }
]
```

### Social Links (`src/data/social-links.json`)

Update your social media links:

```json
[
  {
    "platform": "GitHub",
    "url": "https://github.com/yourusername",
    "icon": "github"
  }
]
```

### Resume (`src/data/resume.json`)

Update your resume sections, experience, education, and skills.

### Adding Images

- Place your profile image in `public/` as `profile.jpg`
- Add project images to `public/projects/`
- Add your resume PDF to `public/` as `resume.pdf`

## Deployment to GitHub Pages

### Automatic Deployment (Recommended)

The project includes a GitHub Actions workflow for automatic deployment:

1. Create a new repository on GitHub
2. Push your code to the repository
3. Go to Settings > Pages
4. Under "Build and deployment", select "GitHub Actions" as the source
5. The site will automatically deploy when you push to the main branch

### Manual Deployment

If you prefer manual deployment:

1. Update `vite.config.ts` and change the `base` to your repository name:
   ```ts
   base: '/your-repo-name/'
   ```

2. Build the project:
   ```bash
   npm run deploy
   ```

3. Deploy the `dist` folder to GitHub Pages

## Project Structure

```
src/
├── components/       # React components
├── data/            # JSON content files
├── hooks/           # Custom React hooks
├── types/           # TypeScript type definitions
├── styles/          # Additional styles (if needed)
├── App.tsx          # Main app component
└── index.css        # Global styles with theme variables

public/              # Static assets (images, resume PDF)
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run deploy` - Build and prepare for deployment

## Technologies Used

- React 19
- TypeScript
- Vite
- CSS Variables for theming
- GitHub Actions for CI/CD

## License

Feel free to use this template for your own portfolio!
