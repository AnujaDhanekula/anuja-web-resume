# Anuja Dhanekula - Professional Resume Website# AnujaResume



A modern, responsive resume website built with Angular 15+, featuring smooth animations and professional design.This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.0.



## Features## Development server



✨ **Modern Design**Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

- Gradient color schemes with purple and blue theme

- Smooth scroll animations## Code scaffolding

- Responsive layout for all devices

- Professional typographyRun `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.



🎯 **Key Sections**## Build

- Hero section with profile photo

- Professional summary and career highlightsRun `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

- Detailed work experience timeline

- Technical skills and expertise areas## Running unit tests

- Certifications and training

- Education backgroundRun `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

- Contact information with multiple channels

- Target job roles display## Running end-to-end tests



🚀 **Technical Features**Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

- Angular animations for smooth transitions

- HttpClient for data loading from config.json## Further help

- Smooth scrolling navigation

- Mobile-responsive hamburger menuTo get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

- Downloadable HTML resume
- Print-optimized styles

## Project Structure

```
anuja-resume/
├── src/
│   ├── app/
│   │   ├── app.component.html    # Main template
│   │   ├── app.component.ts      # Component logic
│   │   ├── app.component.scss    # Styling
│   │   └── app.module.ts         # Module configuration
│   ├── assets/
│   │   ├── config.json           # All resume data
│   │   └── profile-photo.jpg     # Profile image (add your photo here)
│   ├── index.html                # Main HTML file
│   └── styles.scss               # Global styles
└── angular.json                  # Angular configuration
```

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)
- Angular CLI (v15 or higher)

### Installation

1. Navigate to the project directory:
   ```bash
   cd anuja-resume
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. **Add Profile Photo** (Important):
   - Add your profile photo as `src/assets/profile-photo.jpg`
   - Recommended size: 500x500px or larger (square format)
   - Acceptable formats: JPG, JPEG, PNG

### Development Server

Run the development server:
```bash
ng serve
```

Navigate to `http://localhost:4200/`. The application will automatically reload when you make changes.

### Build for Production

Build the project for production:
```bash
ng build --configuration production
```

The build artifacts will be stored in the `dist/` directory.

## Customization

### Updating Resume Data

All resume data is stored in `src/assets/config.json`. Simply edit this file to update:
- Personal information
- Professional summary
- Work experience
- Skills and competencies
- Certifications
- Education
- Contact information

### Changing Colors

Edit the color variables in `src/app/app.component.scss`:
```scss
$primary-color: #3498db;
$secondary-color: #2c3e50;
$accent-color: #e74c3c;
// ... and more
```

### Modifying Animations

Animations are defined in `src/app/app.component.ts` using Angular's animation framework.

## Key Technologies

- **Angular 15+** - Frontend framework
- **TypeScript** - Programming language
- **SCSS** - Styling with variables and nesting
- **Angular Animations** - Smooth transitions
- **HttpClient** - Data fetching
- **Responsive Design** - Mobile-first approach

## Features Breakdown

### Navigation
- Fixed header with smooth scroll
- Active section highlighting
- Mobile hamburger menu
- Gradient brand name

### Hero Section
- Animated profile image with gradient border
- Call-to-action buttons
- Scroll indicator animation
- Responsive text sizing

### Experience Section
- Timeline-based layout
- Expandable job details
- Technology tags
- Key projects showcase

### Skills Section
- Categorized skill display
- Interactive hover effects
- Comprehensive technical breakdown

### Certifications
- Grid-based card layout
- Certification badges
- Issuer and date information

### Contact Section
- Multiple contact methods
- LinkedIn integration
- Target roles display
- Work preference information

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Deployment Options

This Angular app can be deployed to:
- **Netlify** - Drag and drop the `dist/anuja-resume` folder
- **Vercel** - Connect your Git repository
- **GitHub Pages** - Use `angular-cli-ghpages`
- **Firebase Hosting** - Use Firebase CLI
- **AWS S3** - Static website hosting

### Example: Deploy to Netlify

1. Build the project:
   ```bash
   ng build --configuration production
   ```

2. Go to [Netlify](https://www.netlify.com/)

3. Drag and drop the `dist/anuja-resume` folder

## Resume Download Feature

The website includes a built-in resume download feature that generates a formatted HTML resume from the config data. Users can download it by clicking the "Download Resume" button.

## Performance

- Optimized bundle sizes
- Lazy loading where applicable
- CSS budget configured in angular.json
- Production build with AOT compilation

## Accessibility

- Semantic HTML structure
- ARIA labels where needed
- Keyboard navigation support
- Screen reader friendly

## Contact

**Anuja Dhanekula**
- Email: dhanekulaanuja@gmail.com
- LinkedIn: [linkedin.com/in/anuja-dhanekula-835930128](https://www.linkedin.com/in/anuja-dhanekula-835930128)
- Phone (India): +91 9494569824
- Phone (USA): +1 214-490-7125

## License

This project is for personal use. Feel free to use it as a template for your own resume website.

## Credits

Designed and developed by following modern web development best practices.

---

**Built with ❤️ using Angular**
