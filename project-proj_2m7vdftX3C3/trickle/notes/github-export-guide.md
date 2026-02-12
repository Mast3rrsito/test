# How to Export to GitHub Pages

Since this project uses pure HTML, CSS (Tailwind via CDN), and React (via CDN) without a complex build step, deploying to GitHub Pages is very simple.

## Step 1: Download Your Files
First, you need to get the files from this project to your local machine.
1. Download all the files from the current artifact (index.html, projects.html, contact.html, app.js, components folder, etc.).
2. Maintain the exact folder structure:
   ```
   / (root)
   ├── index.html
   ├── projects.html
   ├── contact.html
   ├── app.js
   ├── projects-app.js
   ├── contact-app.js
   └── components/
       ├── TopNav.js
       ├── MenuButtons.js
       ├── ScrambleText.js
       └── ...
   ```

## Step 2: Create a GitHub Repository
1. Log in to [GitHub](https://github.com).
2. Click the **+** icon in the top right and select **New repository**.
3. Name your repository (e.g., `my-portfolio`).
4. Make sure it is **Public** (GitHub Pages is free for public repositories).
5. Click **Create repository**.

## Step 3: Upload Files
1. In your new repository, click on the **uploading an existing file** link.
2. Drag and drop all your files and folders (including the `components` folder) into the upload area.
3. Commit the changes by clicking **Commit changes**.

## Step 4: Enable GitHub Pages
1. Go to your repository's **Settings** tab.
2. In the left sidebar, click on **Pages**.
3. Under **Build and deployment** > **Source**, select **Deploy from a branch**.
4. Under **Branch**, select `main` (or `master`) and folder `/ (root)`.
5. Click **Save**.

## Step 5: Live Site
- GitHub will take a minute or two to build your site.
- Refresh the Pages settings page to see your live URL (usually `https://<username>.github.io/<repository-name>/`).

## Troubleshooting
- **404 Error**: Make sure your main file is named `index.html`.
- **Styles/Scripts missing**: Ensure you uploaded the `components` folder and that the paths in your HTML files match the folder structure.