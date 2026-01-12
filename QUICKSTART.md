# Quick Start Guide

Your portfolio website is ready! Here's how to customize and deploy it.

## View Your Site Locally

The development server is already running at: http://localhost:5173

You should see your portfolio with:
- About section
- Featured projects
- LinkedIn posts
- Resume
- Contact information

## Customize Your Content

### 1. Update Your Personal Information

Edit `src/data/about.json`:
```json
{
  "name": "Your Full Name",
  "title": "Your Professional Title",
  "bio": "Your bio/description",
  "email": "your.email@example.com",
  "location": "Your City, Country"
}
```

### 2. Add Your Projects

Edit `src/data/projects.json` - add or remove projects as needed. Each project should have:
- Unique ID
- Title and description
- Tags (tech stack)
- GitHub URL (required)
- Live URL (optional)
- Image URL (optional)

### 3. Add LinkedIn Posts

Edit `src/data/linkedin-posts.json` - add your recent posts. Update the URLs to point to your actual LinkedIn posts.

### 4. Update Social Links

Edit `src/data/social-links.json` with your actual social media URLs:
- GitHub
- LinkedIn
- Twitter
- Email

### 5. Update Resume

Edit `src/data/resume.json` with your:
- Work experience
- Education
- Skills

### 6. Add Images

Place these files in the `public/` folder:
- `profile.jpg` - Your profile picture
- `resume.pdf` - Your resume PDF
- `projects/` folder - Project screenshots

## Testing Changes

The site has hot reload enabled. Any changes you make to the JSON files or code will automatically refresh in your browser.

## Deploy to GitHub Pages

### Step 1: Create a GitHub Repository

1. Go to https://github.com/new
2. Name your repository (e.g., `portfolio` or `your-username.github.io`)
3. Make it public
4. Don't initialize with README (we already have one)

### Step 2: Push Your Code

```bash
# Initialize git if not already done
git init

# Add all files
git add .

# Commit
git commit -m "Initial portfolio site"

# Add your remote (replace with your repository URL)
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git

# Push to main branch
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click Settings
3. Click Pages in the left sidebar
4. Under "Build and deployment":
   - Source: Select "GitHub Actions"
5. Your site will deploy automatically!

### Step 4: Update Base URL (if needed)

If you're using `username.github.io`, keep the base as `/` in `vite.config.ts`.

If you're using a project repository (e.g., `username.github.io/portfolio`):
1. Edit `vite.config.ts`
2. Change `base: '/'` to `base: '/your-repo-name/'`
3. Commit and push the change

## Your Site URL

- If your repo is named `username.github.io`: https://username.github.io
- If it's a project repo: https://username.github.io/repo-name

## Need Help?

- The site should build automatically when you push to main
- Check the "Actions" tab on GitHub to see deployment status
- Make sure GitHub Pages is enabled in repository settings
- Ensure the repository is public (or you have GitHub Pro for private repos)

## Local Development Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build locally
```

## Tips

1. Test locally before deploying
2. Keep your content updated regularly
3. Use high-quality images (but optimize them for web)
4. Update your LinkedIn posts periodically
5. Keep your resume current

Enjoy your new portfolio! 🚀
