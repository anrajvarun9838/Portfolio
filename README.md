# AI & Machine Learning Portfolio

A modern, responsive personal portfolio website showcasing my projects, technical skills, professional experience, and achievements in Artificial Intelligence, Machine Learning, and Software Development.

Designed with a clean interface and a professional layout to present my technical work, highlight practical AI applications, and provide an easy way to explore my projects and professional profile.

## Features

- **Professional Portfolio** – A clean and modern personal portfolio.
- **Project Showcase** – Displays AI, Machine Learning, Deep Learning, and full-stack projects.
- **Technical Skills** – Highlights programming languages, frameworks, and development tools.
- **Professional Summary** – Presents my technical background and areas of expertise.
- **Responsive Design** – Optimized for desktop, tablet, and mobile devices.
- **GitHub Integration** – Direct links to project repositories.
- **Easy Customization** – Portfolio content can be updated through a centralized profile data file.

## Technologies Used

This project is built using:

- **React** – Component-based frontend development.
- **TypeScript** – Type-safe JavaScript development.
- **Vite** – Fast development server and build tool.
- **Tailwind CSS** – Utility-first styling.
- **shadcn/ui** – Reusable UI components.
- **Lucide React** – Icon library.

## 📂 Project Structure

```text
EXECUTIVE-ONE-PAGER-PRO/
├── public/
│   └── assets/
├── src/
│   ├── components/
│   ├── sections/
│   ├── data/
│   │   └── profile.ts
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── package.json
├── vite.config.ts
├── tsconfig.json
└── README.md
```

## Getting Started

Follow these steps to run the project locally.

### Prerequisites

Make sure you have installed:

- [Node.js](https://nodejs.org/)
- npm (included with Node.js)
- Git

### Installation

**1. Clone the repository**

```bash
git clone https://github.com/YOUR_USERNAME/EXECUTIVE-ONE-PAGER-PRO.git
```

**2. Navigate to the project directory**

```bash
cd EXECUTIVE-ONE-PAGER-PRO
```

**3. Install dependencies**

```bash
npm install
```

**4. Start the development server**

```bash
npm run dev
```

Open the local URL displayed in your terminal to view the portfolio.

##  Customization

### Update Portfolio Information

Most personal information and project details can be managed through:

```text
src/data/profile.ts
```

You can update:

- Professional summary
- Technical skills
- Project names and descriptions
- Project technologies
- GitHub repository links
- Personal and professional links

### Add a New Project

Add a new project object to the projects section in `src/data/profile.ts`.

```typescript
{
  name: "Project Name",
  description: "Brief description of the project.",
  technologies: ["Python", "Machine Learning", "React"],
  link: "https://github.com/YOUR_USERNAME/PROJECT_NAME",
}
```

The project will appear on the portfolio wherever the project data is rendered.

### Customize the Design

Modify the styling and theme through:

```text
src/index.css
```

You can adjust colors, typography, spacing, backgrounds, and other visual elements to match your preferred design.

## Build for Production

To create an optimized production build:

```bash
npm run build
```

The generated production files will be available in:

```text
dist/
```

To preview the production build locally:

```bash
npm run preview
```

## 🌐 Deployment

The portfolio can be deployed using platforms such as:

- [Vercel](https://vercel.com/)
- [Netlify](https://www.netlify.com/)

### Deploying on Vercel

1. Push the project to GitHub.
2. Sign in to Vercel using your GitHub account.
3. Import the portfolio repository.
4. Configure the following build settings:

   - **Framework:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`

5. Click **Deploy**.

Your portfolio will be available through a public URL after deployment.


⭐ If you find this portfolio useful or inspiring, feel free to explore the repository and its projects.