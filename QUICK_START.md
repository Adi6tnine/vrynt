# 🚀 VRYNT - Quick Start Guide

## ⚡ 30-Second Setup

```bash
# Clone and install
git clone https://github.com/yourusername/vrynt-rental-app.git
cd vrynt-rental-app
npm install

# Start development
npm start
```

Visit: http://localhost:3000

## 📦 Available Commands

| Command | Description |
|---------|-------------|
| `npm start` | Start development server |
| `npm run build` | Build for production |
| `npm test` | Run tests |
| `npm run eject` | Eject from CRA (⚠️ irreversible) |

## 🎨 Key Features

- ✨ Brutalist design with vibrant colors
- 📱 Fully responsive (mobile-first)
- 🛍️ Product catalog with filtering
- 🛒 Shopping cart with date selection
- 📅 Dynamic pricing calculation
- 🎭 Smooth animations
- 🚀 Netlify-ready deployment

## 📂 Project Structure

```
src/
├── components/     # Reusable components
├── pages/          # Page components
├── App.js          # Main app
├── data.js         # Product data
└── App.css         # Global styles
```

## 🎯 Quick Customization

### Change Colors
Edit Tailwind classes in components:
- Pink: `bg-[#e879f9]`
- Yellow: `bg-[#fef08a]`
- Green: `bg-[#4ade80]`
- Purple: `bg-[#c084fc]`

### Add Products
Edit `src/data.js`:
```javascript
{
  id: 9,
  name: "Your Product",
  category: "Formals",
  pricePerDay: 299,
  originalPrice: 2999,
  image: "https://images.unsplash.com/...",
  rating: "⭐ 4.8",
  description: "Your description"
}
```

### Modify Pages
All pages are in `src/pages/`:
- `HomePage.js` - Landing page
- `ShopPage.js` - Product catalog
- `CartPage.js` - Shopping cart
- etc.

## 🌐 Deploy to Netlify

### Option 1: Netlify CLI
```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod
```

### Option 2: GitHub Integration
1. Push to GitHub
2. Connect to Netlify
3. Build settings:
   - Build command: `npm run build`
   - Publish directory: `build`

## 🐛 Common Issues

**Port 3000 already in use?**
```bash
# Kill process on port 3000
npx kill-port 3000
```

**Module not found?**
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

**Build fails?**
```bash
# Clear cache and rebuild
npm run build -- --reset-cache
```

## 📚 Documentation

- 📖 [Full README](README.md)
- 🚀 [Deployment Guide](DEPLOY.md)
- 🔧 [Setup Instructions](SETUP.md)
- 📤 [GitHub Upload Guide](GITHUB_UPLOAD_GUIDE.md)

## 🤝 Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## 📞 Support

- 🐛 [Report Issues](https://github.com/yourusername/vrynt-rental-app/issues)
- 💬 [Discussions](https://github.com/yourusername/vrynt-rental-app/discussions)
- 📧 Email: your.email@example.com

## 📄 License

MIT License - see [LICENSE](LICENSE) file.

---

**Need more details?** Check the full [README.md](README.md)
