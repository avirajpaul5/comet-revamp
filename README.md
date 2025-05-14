# COMET - Sneakers on a Mission

![Comet Logo](src/Assets/navbarImages/logo.png)

## Project Overview

COMET is a modern e-commerce platform for a premium sneaker brand, featuring an immersive and interactive shopping experience. The website showcases the brand's unique sneaker collections with sophisticated animations, interactive elements, and a sleek design that emphasizes both style and comfort.

The application is built with React and leverages GSAP (GreenSock Animation Platform) for smooth, high-performance animations and transitions that enhance the user experience.

## Features

- **Interactive Product Showcase**: Dynamic product displays with hover effects and interactive elements
- **Smooth Scrolling**: Implemented with React Lenis for a premium browsing experience
- **Animated Transitions**: GSAP-powered animations throughout the site
- **Responsive Design**: Optimized for various screen sizes
- **Custom Cursor**: Enhanced user interaction with a custom cursor
- **Product Carousel**: Interactive 3D product carousel for showcasing bestsellers
- **The Vault**: Limited edition collection display with special visual effects
- **Customer Reviews**: Slider showcasing customer testimonials and ratings

## Installation

Follow these steps to set up the project locally:

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd comet-revamp
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm start
   ```

4. **Open in browser**
   The application will be available at [http://localhost:3000](http://localhost:3000)

## Project Structure

```
comet-revamp/
├── public/                 # Public assets and HTML template
├── src/                    # Source code
│   ├── Assets/             # Images and other static assets
│   │   ├── Fonts/          # Custom fonts
│   │   ├── HeroImages/     # Hero section images
│   │   ├── ProductImages/  # Product images
│   │   ├── footerImages/   # Footer assets
│   │   ├── navbarImages/   # Navigation bar assets
│   │   ├── reviewImages/   # Customer review assets
│   │   ├── sliderImages/   # Slider section assets
│   │   └── vaultImages/    # Vault section assets
│   ├── Components/         # React components
│   │   ├── CustomEffects/  # Custom visual effects components
│   │   ├── BestSeller.js   # Bestseller products component
│   │   ├── CardDisplay.js  # Card display component
│   │   ├── Footer.js       # Footer component
│   │   ├── Hero.js         # Hero section component
│   │   ├── Navbar.js       # Navigation bar component
│   │   ├── Reviews.js      # Customer reviews component
│   │   ├── Scramble.js     # Text scramble effect component
│   │   ├── SliderShoes.js  # Slider for shoes component
│   │   └── Vault.js        # The Vault section component
│   ├── Styles/             # CSS stylesheets
│   ├── App.js              # Main application component
│   ├── index.js            # Application entry point
│   └── index.css           # Global styles
└── package.json            # Project dependencies and scripts
```

## Dependencies

The project relies on the following key dependencies:

- **React**: UI library for building the user interface
- **GSAP**: Animation library for creating smooth animations
- **@gsap/react**: React integration for GSAP
- **@studio-freight/react-lenis**: Smooth scrolling implementation
- **Swiper**: Touch slider for mobile-friendly interfaces
- **Tweakpane**: Debug interface for tweaking parameters

For a complete list of dependencies, refer to the `package.json` file.

## Usage

### Development

```bash
# Start development server
npm start

# Run tests
npm test
```

### Production

```bash
# Build for production
npm run build

# Serve the built application
npx serve -s build
```

## Key Components

### Hero Section

The landing section featuring a dynamic grid of product images with hover effects and animated text.

### Best Sellers

A 3D carousel showcasing the most popular products with interactive rotation.

### Slider Shoes

A vertical slider section highlighting seasonal collections with parallax effects.

### The Vault

A special section for limited edition releases with unique visual effects.

### Reviews

Customer testimonials displayed in an interactive slider with ratings and profile information.

## Browser Support

The application is optimized for modern browsers:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

Contributions to improve COMET are welcome. Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

© 2024, Grails Marketing Private Limited. All Rights Reserved.

---

Developed by Team White Space
