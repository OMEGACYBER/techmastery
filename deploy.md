# Deployment Guide

## GitHub Repository Setup

1. Create a new repository on GitHub:
   - Go to https://github.com/new
   - Repository name: `techmastery-pro`
   - Make it public or private
   - **Don't** initialize with README, .gitignore, or license

2. Connect your local repository:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/techmastery-pro.git
   git push -u origin main
   ```

## Vercel Deployment

1. Go to https://vercel.com and sign in with GitHub
2. Click "New Project"
3. Import your `techmastery-pro` repository
4. Configure settings:
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

5. Add Environment Variables:
   - Name: `GEMINI_API_KEY`
   - Value: Your Gemini API key from https://makersuite.google.com/app/apikey

6. Click "Deploy"

## Post-Deployment

- Your app will be available at: `https://techmastery-pro.vercel.app`
- You can set up a custom domain in Vercel settings
- Environment variables can be updated in Vercel dashboard

## Local Development

```bash
npm install
npm run dev
```

Visit http://localhost:5173
