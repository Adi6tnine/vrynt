# GitHub Upload Guide for VRYNT

## ✅ What TO Upload

### Essential Files
- ✅ `src/` - All source code files
- ✅ `public/` - Public assets and index.html
- ✅ `package.json` - Project dependencies and scripts
- ✅ `README.md` - Project documentation
- ✅ `LICENSE` - MIT License file
- ✅ `CONTRIBUTING.md` - Contribution guidelines
- ✅ `.gitignore` - Git ignore rules
- ✅ `netlify.toml` - Netlify deployment configuration

### Documentation Files (Optional but Recommended)
- ✅ `DEPLOY.md` - Deployment instructions
- ✅ `SETUP.md` - Setup guide
- ✅ Any other markdown documentation

## ❌ What NOT to Upload

### Generated Files
- ❌ `node_modules/` - Dependencies (users install with `npm install`)
- ❌ `build/` - Production build (generated with `npm run build`)
- ❌ `package-lock.json` - Lock file (optional, but often excluded)
- ❌ `.netlify/` - Netlify cache directory

### Environment & Config
- ❌ `.env` - Environment variables (contains secrets)
- ❌ `.env.local` - Local environment variables
- ❌ `.env.production.local` - Production environment variables

### System Files
- ❌ `.DS_Store` - macOS system files
- ❌ `Thumbs.db` - Windows thumbnail cache
- ❌ `desktop.ini` - Windows folder settings

### Editor Files
- ❌ `.vscode/` - VS Code settings (personal preference)
- ❌ `.idea/` - IntelliJ IDEA settings
- ❌ `*.swp`, `*.swo` - Vim swap files
- ❌ `*.sublime-*` - Sublime Text files

### Logs & Cache
- ❌ `npm-debug.log*` - NPM debug logs
- ❌ `yarn-debug.log*` - Yarn debug logs
- ❌ `.eslintcache` - ESLint cache
- ❌ `.cache/` - Various cache directories

### Temporary Files
- ❌ `*.tmp` - Temporary files
- ❌ `*.temp` - Temporary files
- ❌ `*~` - Backup files

## 📋 Pre-Upload Checklist

Before pushing to GitHub:

1. **Clean Build**
   ```bash
   # Remove build directory
   rm -rf build/
   
   # Remove node_modules
   rm -rf node_modules/
   ```

2. **Update Documentation**
   - [ ] Update README.md with your info
   - [ ] Add your GitHub username
   - [ ] Add your contact information
   - [ ] Update license year if needed

3. **Verify .gitignore**
   ```bash
   # Check what will be committed
   git status
   
   # Should NOT see:
   # - node_modules/
   # - build/
   # - .env files
   # - .DS_Store
   ```

4. **Test Locally**
   ```bash
   # Fresh install
   npm install
   
   # Test development
   npm start
   
   # Test production build
   npm run build
   ```

5. **Initial Commit**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: VRYNT Fashion Rental Platform"
   git branch -M main
   git remote add origin https://github.com/yourusername/vrynt-rental-app.git
   git push -u origin main
   ```

## 🔒 Security Notes

### Never Upload:
- API keys or secrets
- Database credentials
- Private keys or certificates
- User data or personal information
- Payment gateway credentials

### If You Accidentally Upload Secrets:
1. Immediately rotate/regenerate the exposed credentials
2. Remove from Git history using `git filter-branch` or BFG Repo-Cleaner
3. Force push the cleaned history
4. Consider the credentials compromised

## 📦 Repository Size

Your repository should be approximately:
- **Without node_modules**: ~500KB - 2MB
- **With node_modules**: ~200MB+ (DON'T UPLOAD!)

If your repo is larger than 10MB (excluding node_modules), review what's being uploaded.

## 🎯 Quick Commands

```bash
# Check repository size
du -sh .

# Check what's being tracked
git ls-files

# Check what's ignored
git status --ignored

# Remove accidentally committed files
git rm --cached <file>
git commit -m "Remove accidentally committed file"
```

## ✨ Best Practices

1. **Commit Often**: Make small, focused commits
2. **Write Clear Messages**: Describe what and why
3. **Use Branches**: Create feature branches for new work
4. **Review Before Push**: Always check `git status` and `git diff`
5. **Keep It Clean**: Regularly clean up old branches

## 📞 Need Help?

If you're unsure about uploading something:
- Check if it's in `.gitignore`
- Ask yourself: "Can this be regenerated?"
- If yes → Don't upload
- If no → Upload

---

**Remember**: When in doubt, leave it out! You can always add files later, but removing them from Git history is harder.
