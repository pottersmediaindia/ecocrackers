# 🧨 Eco Crackers - Premium Online Crackers Store

A modern, responsive e-commerce platform for premium crackers and fireworks built with React JavaScript (JSX), Create React App, and Tailwind CSS.

## 🚀 Features

- **Modern E-commerce Platform**: Complete online store with product catalog, cart, and checkout
- **Admin Dashboard**: Comprehensive admin panel for managing products, orders, and customers
- **User Dashboard**: Personalized user experience with order history and profile management
- **Responsive Design**: Mobile-first approach with seamless experience across all devices
- **Real-time Animations**: Festive cracker animations and smooth UI interactions
- **JavaScript JSX**: Modern ES6+ JavaScript with React Hooks and JSX syntax
- **Tailwind CSS**: Utility-first CSS framework with custom design system

## 🛠️ Tech Stack

- **Frontend**: React 18, JavaScript ES6+, JSX, Create React App
- **Styling**: Tailwind CSS v3, PostCSS
- **UI Components**: Shadcn/ui (Radix UI primitives)
- **Icons**: Lucide React
- **Charts**: Recharts
- **Forms**: React Hook Form with Zod validation
- **Build Tool**: Create React App (React Scripts)
- **Code Quality**: ESLint, Prettier
- **Font**: Nunito Sans

## 📦 Installation

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/ecocrackers/ecommerce-platform.git
   cd ecocrackers-ecommerce
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Environment Configuration**
   ```bash
   cp .env.example .env.local
   ```
   Edit the `.env.local` file with your configuration values.

4. **Start the development server**
   ```bash
   npm start
   # or
   yarn start
   ```

5. **Open your browser**
   The app will automatically open at `http://localhost:3000`

## 🔧 Available Scripts

In the project directory, you can run:

### `npm start`
Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm test`
Launches the test runner in interactive watch mode.

### `npm run build`
Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run eject`
**Note: this is a one-way operation. Once you `eject`, you can't go back!**

### `npm run lint`
Run ESLint to check for code quality issues.

### `npm run lint:fix`
Fix ESLint issues automatically where possible.

### `npm run format`
Format code with Prettier.

### `npm run format:check`
Check if code is properly formatted.

## 📁 Project Structure

```
eco-crackers-ecommerce/
├── public/                  # Static assets
│   ├── index.html          # HTML template
│   ├── manifest.json       # PWA manifest
│   └── favicon.ico         # Favicon
├── src/
│   ├── components/         # React components
│   │   ├── ui/            # Shadcn/ui components (.jsx)
│   │   ├── figma/         # Figma-specific components (.jsx)
│   │   ├── HomePage.jsx   # Home page component
│   │   ├── AdminDashboard.jsx # Admin dashboard
│   │   └── ...            # Other page components (.jsx)
│   ├── styles/            # CSS styles
│   │   └── globals.css    # Global styles with Tailwind
│   ├── utils/             # Utility functions
│   │   └── index.js       # Helper functions
│   ├── App.jsx            # Main app component
│   ├── index.js           # Application entry point
│   └── reportWebVitals.js # Performance monitoring
├── package.json           # Dependencies and scripts
├── tailwind.config.js     # Tailwind CSS configuration
└── README.md              # This file
```

## 🎨 Design System

The application uses a custom design system with:

- **Primary Colors**: Red (#dc2626) and Gold (#f59e0b)
- **Typography**: Nunito Sans font family
- **Components**: Shadcn/ui component library
- **Animations**: Custom cracker and firework animations
- **Responsive**: Mobile-first design approach

## 🔐 Authentication

### Admin Access
- **Email**: admin@eco.com
- **Password**: admin123
- **Features**: Full dashboard access, product management, order management

### User Access
- **Registration**: Available through the login page
- **Features**: Order history, profile management, wishlist

## 📱 Pages and Features

### Public Pages
- **Home**: Product catalog with search and filtering
- **About**: Company information and history
- **Contact**: Contact form and business details
- **Track Order**: Order tracking functionality
- **Cart**: Shopping cart with checkout process

### Admin Dashboard
- **Analytics**: Sales metrics and performance charts
- **Products**: CRUD operations for product management
- **Orders**: Order management and status updates
- **Customers**: Customer management and analytics
- **Settings**: System configuration and preferences

### User Dashboard
- **Profile**: Personal information management
- **Orders**: Order history and tracking
- **Wishlist**: Saved products
- **Settings**: Account preferences

## 🌟 Key Features

### E-commerce Functionality
- Product catalog with categories and search
- Shopping cart with quantity management
- Responsive product grid and list views
- Video product demos
- Product filtering and sorting

### Admin Features
- Real-time analytics dashboard
- Product management with image uploads
- Order management with status tracking
- Customer analytics and segmentation
- System settings and configuration

### User Experience
- Smooth animations and transitions
- Mobile-responsive design
- WhatsApp integration for customer support
- Social media integration
- SEO-optimized structure

## 🚀 Deployment

### Production Build
```bash
npm run build
```

This builds the app for production to the `build` folder.

### Deployment Platforms
- **Vercel**: Zero-configuration deployment
- **Netlify**: Continuous deployment from Git
- **AWS S3**: Static website hosting
- **GitHub Pages**: Free hosting for public repositories

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
```bash
npm run build
# Upload the build folder to Netlify
```

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file in the root directory:

```env
REACT_APP_NAME=Eco Crackers
REACT_APP_CONTACT_PHONE=+91 9876543210
REACT_APP_CONTACT_EMAIL=info@ecocrackers.in
REACT_APP_WHATSAPP_NUMBER=+919876543210
# Add other variables as needed
```

### Tailwind Customization
Modify `tailwind.config.js` to customize:
- Colors and theme
- Typography settings
- Animation keyframes
- Responsive breakpoints

### Adding New Components
1. Create component file in `src/components/` with `.jsx` extension
2. Import and use in your pages
3. Follow the existing naming conventions

## 🧪 Testing

### Running Tests
```bash
npm test
```

### Test Coverage
```bash
npm test -- --coverage
```

## 📊 Performance

The application is optimized for:
- **Fast Loading**: Create React App's optimized build
- **Bundle Size**: Code splitting and tree shaking
- **SEO**: Proper meta tags and semantic HTML
- **Accessibility**: ARIA labels and keyboard navigation
- **Mobile Performance**: Responsive images and lazy loading

## 🔧 Development

### Code Style
- **ESLint**: Code quality and consistency
- **Prettier**: Code formatting
- **JSX**: React component syntax

### Adding Dependencies
```bash
npm install package-name
# or
yarn add package-name
```

### Component Guidelines
- Use `.jsx` extension for all React components
- Follow functional component patterns with hooks
- Use proper JSX syntax and formatting
- Import components with `.jsx` extension when needed

### File Structure
- All React components should use `.jsx` extension
- Utility functions can use `.js` extension
- Import statements should include file extensions for local components

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Use `.jsx` extension for React components
- Follow the existing code style
- Add tests for new features
- Update documentation as needed
- Ensure responsive design

## 🐛 Troubleshooting

### Common Issues

1. **Module Not Found**: Check file extensions in import statements
   ```bash
   # Correct for JSX components
   import HomePage from './components/HomePage.jsx';
   ```

2. **Build Errors**: Check for syntax errors and missing imports

3. **Styling Issues**: Make sure Tailwind classes are properly imported

4. **Performance Issues**: Use React Developer Tools to profile components

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support and questions:
- **Email**: info@ecocrackers.in
- **Phone**: +91 9876543210
- **WhatsApp**: +91 9876543210
- **Website**: https://ecocrackers.in

## 🙏 Acknowledgments

- [Create React App](https://create-react-app.dev/) for the build toolchain
- [Shadcn/ui](https://ui.shadcn.com/) for the component library
- [Lucide](https://lucide.dev/) for the icon set
- [Tailwind CSS](https://tailwindcss.com/) for the styling framework
- [React](https://reactjs.org/) for the UI framework

---

**Made with ❤️ by the Eco Crackers Team using React JavaScript (JSX)**

### JSX File Structure
```
src/
├── components/
│   ├── HomePage.jsx
│   ├── AboutPage.jsx
│   ├── ContactPage.jsx
│   ├── AdminDashboard.jsx
│   ├── UserDashboard.jsx
│   ├── ui/
│   │   ├── button.jsx
│   │   ├── input.jsx
│   │   ├── card.jsx
│   │   └── ...
│   └── figma/
│       └── ImageWithFallback.jsx
├── App.jsx
├── index.js
└── utils/
    └── index.js
```

All React components use `.jsx` extension for better development experience and clear identification of JSX syntax files.