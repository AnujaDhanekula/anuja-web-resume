# Quick Setup Guide for Anuja's Resume Website

## 🚀 Quick Start (3 Steps)

### Step 1: Add Your Profile Photo
1. Get a professional photo (headshot recommended)
2. Save it as: `src/assets/profile-photo.jpg`
3. Recommended: Square format, at least 500x500 pixels

### Step 2: Install & Run
Open terminal in the `anuja-resume` folder and run:
```bash
npm install
ng serve
```

### Step 3: Open Browser
Navigate to: `http://localhost:4200`

That's it! Your resume website is now running! 🎉

---

## 📝 Updating Your Information

### To Update Resume Content:
Edit the file: `src/assets/config.json`

This file contains ALL your information:
- Personal details (name, email, phone, LinkedIn)
- Professional summary
- Work experience
- Skills
- Certifications
- Education
- Target job roles

**Important:** After editing `config.json`, save the file and refresh your browser.

---

## 🎨 Customizing Colors

### Change Website Colors:
Edit: `src/app/app.component.scss`

Look for these variables at the top:
```scss
$primary-color: #3498db;      // Main blue color
$secondary-color: #2c3e50;    // Dark text color
$accent-color: #e74c3c;       // Red accent
```

Change the hex codes to your preferred colors.

---

## 🌐 Publishing Your Website

### Option 1: Netlify (Easiest)
1. Build the website:
   ```bash
   ng build --configuration production
   ```
2. Go to [netlify.com](https://www.netlify.com)
3. Sign up/Login
4. Drag and drop the `dist/anuja-resume` folder
5. Your site is live! 🚀

### Option 2: GitHub Pages
1. Install the GitHub Pages package:
   ```bash
   npm install -g angular-cli-ghpages
   ```
2. Build and deploy:
   ```bash
   ng build --configuration production --base-href "https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/"
   ngh --dir=dist/anuja-resume
   ```

### Option 3: Vercel
1. Go to [vercel.com](https://vercel.com)
2. Import your Git repository
3. Vercel will auto-detect Angular and deploy
4. Done! ✅

---

## 📱 Testing on Mobile

### Test Locally on Your Phone:
1. Find your computer's IP address:
   - Windows: Run `ipconfig` in terminal
   - Look for "IPv4 Address" (e.g., 192.168.1.5)
2. Start the dev server:
   ```bash
   ng serve --host 0.0.0.0
   ```
3. On your phone, browse to: `http://YOUR-IP:4200`
   (e.g., `http://192.168.1.5:4200`)

---

## 🔧 Common Issues & Solutions

### Issue: "ng: command not found"
**Solution:** Install Angular CLI globally:
```bash
npm install -g @angular/cli
```

### Issue: Profile photo not showing
**Solution:** 
1. Check the file is named exactly: `profile-photo.jpg`
2. Check it's in: `src/assets/` folder
3. Refresh browser with Ctrl+F5

### Issue: Config changes not appearing
**Solution:**
1. Save the `config.json` file
2. Hard refresh browser: Ctrl+F5 (Windows) or Cmd+Shift+R (Mac)

### Issue: Build errors about CSS budget
**Solution:** Already configured! The CSS budgets are increased in `angular.json`

---

## 📞 Need Help?

- Check the main README.md for detailed documentation
- All resume data is in one file: `config.json`
- Colors are in: `app.component.scss`
- Layout structure is in: `app.component.html`

---

## ✅ Checklist Before Publishing

- [ ] Profile photo added (`src/assets/profile-photo.jpg`)
- [ ] All information updated in `config.json`
- [ ] Email address is correct
- [ ] Phone numbers are correct
- [ ] LinkedIn URL is correct
- [ ] Tested on mobile (hamburger menu works)
- [ ] Download resume button works
- [ ] All sections have accurate information
- [ ] Build completes without errors: `ng build --configuration production`

---

## 🎯 What Makes This Website Special

✨ **Professional Design**
- Modern gradient animations
- Smooth scrolling effects
- Fully responsive (looks great on all devices)

🚀 **Easy to Update**
- All content in ONE JSON file
- No coding needed to update resume
- Just edit and refresh!

📱 **Mobile-First**
- Perfect on phones and tablets
- Hamburger menu for mobile
- Touch-friendly interactions

💼 **Job-Ready Features**
- Download resume button
- Multiple contact methods
- Highlights senior-level experience
- Showcases technical expertise

---

## 💡 Pro Tips

1. **Update Regularly:** Keep your `config.json` updated with latest achievements
2. **Professional Photo:** Use a high-quality headshot with good lighting
3. **LinkedIn:** Make sure your LinkedIn URL is up-to-date
4. **Keywords:** Include job-relevant keywords in your experience descriptions
5. **Mobile Test:** Always test on mobile before sharing the link

---

**Questions?** Review the main README.md for comprehensive documentation.

**Ready to impress recruiters?** Let's get your website live! 🚀
