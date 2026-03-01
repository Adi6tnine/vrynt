# Contributing to VRYNT

First off, thank you for considering contributing to VRYNT! 🎉

## Code of Conduct

This project and everyone participating in it is governed by respect and professionalism. Please be kind and courteous to others.

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check existing issues. When you create a bug report, include as many details as possible:

- **Use a clear and descriptive title**
- **Describe the exact steps to reproduce the problem**
- **Provide specific examples**
- **Describe the behavior you observed and what you expected**
- **Include screenshots if possible**
- **Include your environment details** (OS, browser, Node version)

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, include:

- **Use a clear and descriptive title**
- **Provide a detailed description of the suggested enhancement**
- **Explain why this enhancement would be useful**
- **List any alternatives you've considered**

### Pull Requests

1. Fork the repo and create your branch from `main`
2. If you've added code, ensure it follows the existing style
3. Make sure your code works on mobile, tablet, and desktop
4. Test your changes thoroughly
5. Update documentation if needed
6. Write a clear commit message

## Development Setup

```bash
# Clone your fork
git clone https://github.com/your-username/vrynt-rental-app.git

# Install dependencies
npm install

# Start development server
npm start
```

## Style Guidelines

### JavaScript Style Guide

- Use functional components with hooks
- Use meaningful variable and function names
- Keep components small and focused
- Add comments for complex logic
- Use ES6+ features

### CSS/Tailwind Guidelines

- Follow the brutalist design system
- Use Tailwind utility classes
- Maintain consistent spacing (4px increments)
- Keep borders 3-4px thick
- Use the defined color palette

### Component Structure

```javascript
import React from 'react';

export default function ComponentName({ prop1, prop2 }) {
  // State and hooks
  
  // Event handlers
  
  // Render
  return (
    <div className="...">
      {/* Component content */}
    </div>
  );
}
```

## Commit Messages

- Use present tense ("Add feature" not "Added feature")
- Use imperative mood ("Move cursor to..." not "Moves cursor to...")
- Limit first line to 72 characters
- Reference issues and pull requests

Examples:
```
Add product filtering by category
Fix mobile navigation menu overflow
Update README with deployment instructions
```

## Testing

Before submitting a PR:

1. Test on Chrome, Firefox, and Safari
2. Test on mobile devices (or use browser dev tools)
3. Check all pages and features work
4. Verify no console errors
5. Test with different screen sizes

## Questions?

Feel free to open an issue with your question or reach out to the maintainers.

Thank you for contributing! 🚀
