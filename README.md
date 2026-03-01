# 🎨 VRYNT - Fashion Rental Platform

<div align="center">
  
  ![VRYNT Logo](https://img.shields.io/badge/VRYNT-Fashion%20Rental-e879f9?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTIgMkw0IDIySDIwTDEyIDJaIiBmaWxsPSIjZmVmMDhhIi8+PC9zdmc+)
  
  **A brutalist-themed fashion rental platform designed for campus students**
  
  [![React](https://img.shields.io/badge/React-18.x-61DAFB?style=flat-square&logo=react)](https://reactjs.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.x-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
  [![Netlify](https://img.shields.io/badge/Deploy-Netlify-00C7B7?style=flat-square&logo=netlify)](https://www.netlify.com/)
  [![License](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](LICENSE)

  [Live Demo](vrynt.netlify.app) • [Features](#features) • [Installation](#installation) • [Screenshots](#screenshots)

</div>

---

## 📖 About

VRYNT is a modern fashion rental platform that allows students to rent premium designer wear for events or list their unused outfits to earn passive income. Built with a bold brutalist design aesthetic featuring vibrant colors, thick borders, and playful animations.

### 🎯 Key Highlights

- **Rent Premium Wear**: Browse curated collections of verified, dry-cleaned outfits
- **Earn Passive Cash**: List your unused designer fits and earn 60% per rental
- **Campus-Focused**: Direct hostel delivery and hassle-free returns
- **Brutalist Design**: Bold, unapologetic UI with vibrant colors and thick borders
- **Fully Responsive**: Optimized for mobile, tablet, and desktop

---

## ✨ Features

### For Renters
- 🔍 Browse curated collections (Formals, Ethnic, Party Wear)
- 📅 Flexible date selection with dynamic pricing
- 🚚 Direct campus delivery
- 💳 Secure checkout with student discounts
- ⭐ Quality-verified and professionally cleaned outfits

### For Lenders
- 📸 Easy photo upload and submission
- ✅ Brand authentication and hygiene verification
- 💰 Earn 60% of rental fees
- 🔄 Hassle-free pickup and return management

### Design Features
- 🎨 Brutalist scrapbook aesthetic
- 🌈 Vibrant color palette (Pink, Yellow, Green, Purple)
- ✂️ Rotated elements and bold shadows
- 🎭 Smooth animations and transitions
- 📱 Mobile-first responsive design

---

## 🚀 Tech Stack

- **Frontend**: React 18.x
- **Styling**: Tailwind CSS 3.x
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **Deployment**: Netlify
- **Build Tool**: Create React App

---

## 📦 Installation

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/vrynt-rental-app.git
   cd vrynt-rental-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   ```
   http://localhost:3000
   ```

### Build for Production

```bash
npm run build
```

The optimized production build will be in the `build/` folder.

---

## 🌐 Deployment

### Deploy to Netlify

#### Option 1: Netlify CLI

```bash
# Install Netlify CLI globally
npm install -g netlify-cli

# Build the project
npm run build

# Deploy to Netlify
netlify deploy --prod
```

#### Option 2: Netlify Dashboard

1. Push your code to GitHub
2. Go to [Netlify](https://app.netlify.com/)
3. Click "New site from Git"
4. Connect your repository
5. Build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `build`
6. Click "Deploy site"

The `netlify.toml` file is already configured for optimal deployment.

---

## 📁 Project Structure

```
vrynt-rental-app/
├── public/
│   └── index.html              # HTML template
├── src/
│   ├── components/
│   │   ├── Navigation.js       # Main navigation with mobile menu
│   │   ├── Footer.js           # Footer with links
│   │   └── ProductModal.js     # Add to cart modal
│   ├── pages/
│   │   ├── HomePage.js         # Landing page with workflow
│   │   ├── ShopPage.js         # Product catalog
│   │   ├── CartPage.js         # Shopping cart
│   │   ├── LoginPage.js        # Coming soon login
│   │   ├── HowItWorksPage.js   # Rental process guide
│   │   ├── AboutPage.js        # About/Manifesto
│   │   ├── FaqPage.js          # FAQs
│   │   ├── ContactPage.js      # Contact form
│   │   └── LegalPage.js        # Terms & Privacy
│   ├── App.js                  # Main app component
│   ├── App.css                 # Global styles & animations
│   ├── data.js                 # Product data
│   └── index.js                # Entry point
├── .gitignore                  # Git ignore rules
├── netlify.toml                # Netlify configuration
├── package.json                # Dependencies
└── README.md                   # This file
```

---

## 🎨 Design System

### Color Palette

```css
Primary Pink:    #e879f9
Accent Yellow:   #fef08a
Success Green:   #4ade80
Purple:          #c084fc
Coral:           #fb7185
Lime:            #D1FF26
```

### Typography

- **Font**: System fonts (sans-serif)
- **Weights**: Bold (700), Black (900)
- **Style**: Uppercase for headings, mixed case for body

### Components

- **Borders**: 3-4px solid black borders
- **Shadows**: Offset box shadows (6-12px)
- **Rotations**: -2° to 2° for playful effect
- **Animations**: Fade-up, hover transforms, smooth transitions

---

## 📸 Screenshots

### Desktop View
![Homepage Desktop](screenshots/desktop-home.png)
![Shop Page Desktop](screenshots/desktop-shop.png)

### Mobile View
![Homepage Mobile](screenshots/mobile-home.png)
![Shop Page Mobile](screenshots/mobile-shop.png)

---

## 🔧 Configuration

### Environment Variables

No environment variables required for basic setup. All configuration is in the code.

### Customization

- **Products**: Edit `src/data.js` to add/modify products
- **Colors**: Update Tailwind classes in components
- **Content**: Modify page components in `src/pages/`

---

## 🚫 What NOT to Upload to GitHub

The `.gitignore` file is configured to exclude:

- `node_modules/` - Dependencies (install with npm)
- `build/` - Production build (generated)
- `.env` - Environment variables (if added)
- `.DS_Store` - macOS system files
- `npm-debug.log*` - Debug logs
- `.vscode/` - Editor settings (optional)

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Your Name**
- GitHub: [@adi6tnine](https://github.com/adi6tnine)

---

## 🙏 Acknowledgments

- Design inspiration from brutalist web design movement
- Icons by [Lucide](https://lucide.dev/)
- Images from [Unsplash](https://unsplash.com/)
- Built with [Create React App](https://create-react-app.dev/)

---

## 📞 Support

If you have any questions or need help, please:
- Open an issue on GitHub
- Contact via email: your.email@example.com

---

<div align="center">
  
  **Made with ❤️ and bold design choices**
  
  ⭐ Star this repo if you like it!
  
</div>
