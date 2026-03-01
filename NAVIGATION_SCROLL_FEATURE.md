# 🎯 Navigation Scroll Animation

## ✅ Feature Added

The navigation bar now smoothly hides when scrolling down and shows when scrolling up!

## 🎨 How It Works

### Scroll Behavior:
- **Scroll Down** (after 100px): Navigation slides up and fades out
- **Scroll Up**: Navigation slides down and fades in
- **At Top** (< 10px): Navigation always visible

### Animation Details:
- **Duration**: 300ms
- **Easing**: Cubic bezier (0.4, 0, 0.2, 1) - smooth and natural
- **Transform**: translateY(-96px) when hidden
- **Opacity**: Fades from 100% to 0%

## 🔧 Technical Implementation

### State Management:
```javascript
const [isVisible, setIsVisible] = useState(true);
const [lastScrollY, setLastScrollY] = useState(0);
```

### Scroll Detection:
- Tracks scroll direction (up/down)
- Compares current scroll position with last position
- Updates visibility state accordingly

### CSS Transitions:
```css
transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), 
            opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);
```

## 📱 Responsive

Works perfectly on all devices:
- Mobile: Smooth hide/show on swipe
- Tablet: Optimized touch scrolling
- Desktop: Mouse wheel and trackpad scrolling

## 🎯 User Experience Benefits

1. **More Screen Space**: Content gets full attention when scrolling
2. **Always Accessible**: Quick scroll up brings nav back
3. **Smooth Animation**: No jarring transitions
4. **Performance**: Uses passive event listeners

## 🚀 Try It Out

1. Scroll down on any page
2. Watch the navigation smoothly slide up
3. Scroll up slightly
4. Navigation smoothly slides back down

The animation maintains the brutalist theme while adding modern UX polish! ✨
