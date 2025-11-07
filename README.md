# Portfolio Frontend

Modern, responsive portfolio website built with React and Vite.

## Features

- Clean, elegant design with muted color palette
- Fully responsive layout
- Smooth animations and transitions
- Dynamic content loaded from backend API
- Sections: Hero, About, Experience, Projects, Contact

## Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Custom CSS with CSS variables
- **HTTP Client**: Fetch API

## Setup

1. Install dependencies:
```bash
npm install
```

2. Configure API endpoint:
Create a `.env` file in the `fe` directory:
```
VITE_API_URL=http://localhost:8000
```

3. Run development server:
```bash
npm run dev
```

The app will be available at `http://localhost:5173`

## Build for Production

```bash
npm run build
```

The production build will be in the `dist/` directory.

## Project Structure

```
fe/
├── src/
│   ├── components/      # React components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx          # Main app component
│   ├── App.css          # Global styles
│   └── main.jsx         # Entry point
├── public/              # Static assets
└── index.html           # HTML template
```

## Component Overview

- **Navbar**: Navigation bar with smooth scroll links
- **Hero**: Main introduction section with name and title
- **About**: Biography and skills showcase
- **Experience**: Work experience timeline
- **Projects**: Project cards grid
- **Contact**: Contact information buttons
- **Footer**: Site footer with copyright

## Styling

The design uses a muted dark theme with:
- Background: `#0f0f0f`
- Surface: `#1a1a1a`
- Accent: `#6b7280`
- Text: `#e8e8e8`

All colors are defined as CSS variables in `App.css` for easy customization.

## API Integration

The app fetches all portfolio data from the backend API on load. To update content, use the admin panel at `http://localhost:8000/admin` instead of modifying code.
