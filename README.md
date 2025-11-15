# Node Website

A minimalist website for Node, a fellowship program at UC San Diego.

## GitHub Pages Setup

Follow these steps to deploy this website to GitHub Pages:

### 1. Create a GitHub Repository

1. Go to [github.com](https://github.com) and sign in (or create an account)
2. Click the "+" icon in the top right and select "New repository"
3. Name your repository (e.g., `node-website` or `mayer`)
4. Make it **Public** (required for free GitHub Pages)
5. **Don't** initialize with README, .gitignore, or license (we already have these)
6. Click "Create repository"

### 2. Push Your Code to GitHub

Open your terminal in this project directory and run:

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit"

# Add your GitHub repository as remote (replace USERNAME and REPO-NAME)
git remote add origin https://github.com/USERNAME/REPO-NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### 3. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** (top menu)
3. Scroll down to **Pages** in the left sidebar
4. Under **Source**, select **Deploy from a branch**
5. Select **main** branch and **/ (root)** folder
6. Click **Save**

### 4. Access Your Website

Your website will be live at:
```
https://USERNAME.github.io/REPO-NAME/
```

It may take a few minutes for the site to be available. GitHub will show you the URL once it's ready.

## Local Development

To run the site locally:

```bash
# Install dependencies
yarn install

# Start development server
yarn dev
```

The site will be available at `http://localhost:5173`

## Project Structure

- `index.html` - Home page with terminal typing animation
- `about.html` - About page with Node fellowship information
- `style.css` - All styling
- `script.js` - Typing animation and state management

