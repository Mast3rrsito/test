# Portfolio Master Website

This project is a multi-page personal portfolio website featuring a dark, cyber/sci-fi aesthetic with React and Tailwind CSS.

## Features
- **Scrambled Text Animation**: Custom text effect for titles and status indicators.
- **Dynamic Gradient Background**: Green to black gradient with texture overlay.
- **Interactive UI**: Hover effects on buttons and interactive central selection square.
- **Multi-page Structure**: Separate HTML files for Home, Projects, and Contact pages.

## Project Structure
- `index.html`: Main entry point (Home).
- `projects.html`: Portfolio showcase page.
- `contact.html`: Contact form page.
- `projects-app.js`: JS entry for projects page.
- `contact-app.js`: JS entry for contact page.
- `components/`: Reusable React components.
  - `ScrambleText.js`: The text scrambling logic.
  - `MenuButtons.js`: Left side navigation (Updated style: rounded, thick border, no arrows).
  - `TopNav.js`: Top center navigation bar with rounded corners.
  - (Removed) `TopRightCorner.js`: Animated status indicator.
  - (Removed) `OptionSquare.js`: Previously central widget.
- `app.js`: Main layout and composition for the home page.

## Maintenance
- When updating styles, check `index.html` for global CSS variables and font imports.
- Ensure all new pages include the necessary CDN scripts for React and Tailwind.
- Always check this README when updating the file structure.

## Guides
- [Export to GitHub Pages](github-export-guide.md): Instructions for hosting this site on GitHub.
