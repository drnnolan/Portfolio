# Portfolio

Personal portfolio site for Jake Darren Olan, a full-stack web developer — showcasing projects in React/Next.js, FastAPI, and applied AI.

Built with React 19, Vite, and Tailwind CSS v4.

## Development

```bash
npm install
npm run dev      # dev server at localhost:5173
npm run build    # production bundle to dist/
npm run preview  # serve the built bundle locally
```

## Structure

```
src/
  main.jsx            entry point
  App.jsx             page composition
  index.css           Tailwind import + design tokens (@theme)
  data/content.js     all site content — edit here to update the CV
  hooks/useTheme.js   dark/light theme with localStorage persistence
  components/
    ui.jsx            shared primitives (Section, Tag, Eyebrow, ButtonLink)
    Header.jsx        sticky nav + theme toggle
    Hero.jsx          name, lede, meta panel
    About.jsx
    Work.jsx          experience & projects list
    Entry.jsx         single work/project entry
    Skills.jsx
    Education.jsx     education + certificates
    Footer.jsx        contact card
```

Content lives entirely in `src/data/content.js` — adding a project or certificate means
editing that file, not the components.

## Deployment

The build output in `dist/` is fully static. Deploy to Vercel, Netlify, or GitHub Pages.
