# Vector Visions - React App

A professional vector art services website built with React, featuring vectorization, digitization, and custom patch services.

## 🚀 Features

- **Modern React Architecture**: Built with React 18 and modern hooks
- **Responsive Design**: Mobile-first design with Tailwind CSS
- **Smooth Animations**: Framer Motion for engaging user interactions
- **Client-Side Routing**: React Router for seamless navigation
- **Professional UI**: Clean, modern interface with orange accent colors
- **Before/After Comparisons**: Showcase service quality with image comparisons
- **Contact Forms**: Interactive forms for customer inquiries
- **Portfolio Gallery**: Display of previous work and samples

## 🛠️ Tech Stack

- **Frontend**: React 18
- **Routing**: React Router DOM
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Build Tool**: Vite
- **Package Manager**: npm

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── HomePage/       # Home page specific components
│   ├── Navbar.jsx      # Navigation component
│   └── Footer.jsx      # Footer component
├── pages/              # Page components
│   ├── HomePage.jsx    # Main home page
│   ├── CompanyPage.jsx # Company information
│   ├── ServicesPage.jsx # Services overview
│   ├── PricingPage.jsx # Pricing information
│   ├── PortfolioPage.jsx # Portfolio gallery
│   ├── ContactPage.jsx # Contact information
│   └── pricing/        # Pricing sub-pages
├── App.jsx             # Main app component with routing
├── main.jsx            # App entry point
└── index.css           # Global styles and Tailwind imports
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm (comes with Node.js)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd vector-visions-master
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 🎨 Key Components

### FeaturedServices
- **Special Offer Banner**: Prominent display of current offers
- **Before/After Comparisons**: Visual showcase of service quality
- **Service Descriptions**: Detailed information about each service
- **Feature Lists**: Bullet points highlighting key benefits

### Navigation
- **Responsive Design**: Works on all device sizes
- **Active States**: Visual feedback for current page
- **Mobile Menu**: Collapsible navigation for mobile devices

### Home Page Sections
- **Hero Section**: Eye-catching introduction with rotating images
- **About Brief**: Company overview and mission
- **Portfolio Snapshot**: Sample of recent work
- **Client Testimonials**: Customer feedback and reviews
- **Pricing Preview**: Overview of service costs
- **Contact CTA**: Call-to-action for customer engagement
- **Contact Form**: Interactive inquiry form

## 🖼️ Image Assets

The app uses images from the `public/` directory:
- Logo and branding images
- Hero section background images
- Portfolio samples and before/after comparisons
- Service showcase images

## 🔧 Customization

### Colors
The app uses a custom color palette defined in `tailwind.config.js`:
- Primary: `#F97316` (Orange)
- Secondary: `#EA580C` (Dark Orange)
- Dark: `#0B0B0B` (Near Black)

### Styling
- All styles use Tailwind CSS classes
- Custom CSS can be added to `src/index.css`
- Component-specific styles are co-located with components

## 📱 Responsive Design

The app is fully responsive with:
- Mobile-first approach
- Breakpoints for tablet and desktop
- Optimized layouts for all screen sizes
- Touch-friendly mobile navigation

## 🚀 Performance Features

- **Code Splitting**: Automatic route-based code splitting
- **Lazy Loading**: Images and components load as needed
- **Optimized Builds**: Vite for fast development and optimized production builds
- **Smooth Animations**: Hardware-accelerated animations with Framer Motion

## 🔍 SEO Features

- Semantic HTML structure
- Meta tags and descriptions
- Proper heading hierarchy
- Alt text for images
- Clean URL structure

## 📞 Support

For questions or support, please contact the development team.

## 📄 License

This project is proprietary software. All rights reserved.

---

**Built with ❤️ using React and modern web technologies**
