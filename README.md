# Portfolio - Gonçalo Sousa

A modern, responsive portfolio website built with Next.js, featuring internationalization support and showcasing my projects and skills as a Software Developer.

## 🌟 Features

- **Multilingual Support**: Available in English and Portuguese using `next-intl`
- **Responsive Design**: Optimized for all devices with Tailwind CSS
- **Modern UI**: Clean and professional design with smooth animations
- **Project Showcase**: Detailed project pages with images and descriptions
- **Technology Stack Display**: Interactive technology icons with hover effects
- **Dark Theme**: Elegant dark theme optimized for readability

## 🚀 Projects Showcase

The portfolio features a dedicated projects section where I showcase my work. Each project includes detailed descriptions, technologies used, and live demos or source code links where available.

## 🛠️ Technologies Used

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Internationalization**: next-intl

## 📋 Prerequisites

Before running this project, make sure you have:

- Node.js 18+ installed
- npm, yarn, pnpm, or bun package manager

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio-new
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the portfolio.

## 📁 Project Structure

```
portfolio-new/
├── src/
│   ├── app/
│   │   └── [locale]/          # Internationalized routes
│   │       ├── layout.tsx     # Root layout
│   │       ├── page.tsx       # Home page
│   │       └── projects/      # Projects pages
│   ├── components/            # Reusable components
│   │   ├── card.tsx
│   │   ├── navbar.tsx
│   │   ├── footer.tsx
│   │   └── svg/              # SVG icons
│   └── i18n/                 # Internationalization
├── messages/                 # Translation files
│   ├── en.json
│   └── pt.json
├── public/                   # Static assets
└── tailwind.config.ts       # Tailwind configuration
```

## 🌐 Internationalization

The portfolio supports multiple languages:
- **English** (`/en`)
- **Portuguese** (`/pt`)

Language switching is handled automatically based on the URL locale parameter.

## 🎨 Customization

### Adding New Projects
1. Add project images to the `public/` directory
2. Update translation files in `messages/`
3. Create project page in `src/app/[locale]/projects/[project]/`
4. Update the projects grid in `src/app/[locale]/projects/page.tsx`

### Styling
The project uses Tailwind CSS for styling. Custom styles can be added in:
- `src/app/globals.css` for global styles
- Component-specific classes in individual components

## 📦 Build and Deployment

### Build for Production
```bash
npm run build
```

### Start Production Server
```bash
npm start
```

### Lint Code
```bash
npm run lint
```

## 🚀 Deployment

This portfolio can be easily deployed to:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- Any platform that supports Node.js applications

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.