# Sriram S - Portfolio Website 🚀

A beautiful, modern, and fully responsive portfolio website built with React. This portfolio showcases your skills, projects, and experience as a Full Stack Developer.

## ✨ Features

- **Modern Design**: Clean white background with beautiful gradient accents
- **Fully Responsive**: Works perfectly on all devices (mobile, tablet, desktop)
- **Smooth Animations**: Light, elegant animations throughout the site
- **User-Friendly**: Easy navigation with smooth scrolling
- **Performance Optimized**: Fast loading and smooth interactions
- **SEO Friendly**: Optimized for search engines

## 📑 Sections

1. **Navigation Bar** - Sticky navbar with mobile hamburger menu
2. **Hero Section** - Eye-catching introduction with floating animations
3. **About Section** - Personal information and background
4. **Projects Section** - Showcase of all your mini projects
5. **Skills Section** - Technical skills with progress bars
6. **Contact Section** - Contact form and social links
7. **Footer** - Footer with links and copyright

## 🎨 Design Highlights

- **White Background** - Clean and professional look
- **Color Scheme**: 
  - Primary Color: #4f46e5 (Indigo)
  - Secondary Color: #10b981 (Green)
  - Text: #1f2937 (Dark Gray)
- **Typography**: Modern sans-serif fonts
- **Animations**: CSS animations for elements (fade-in, slide-up, float, etc.)

## 📱 Responsive Design

- Desktop (1024px and above)
- Tablet (768px - 1023px)
- Mobile (Below 768px)
- Extra small devices (Below 480px)

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd "New folder"
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open your browser and visit:
```
http://localhost:3000
```

## 🛠️ Development

### Build for Production
```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## 📂 Project Structure

```
portfolio/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── Hero.js
│   │   ├── About.js
│   │   ├── Projects.js
│   │   ├── Skills.js
│   │   ├── Contact.js
│   │   └── Footer.js
│   ├── styles/
│   │   ├── App.css
│   │   ├── Navbar.css
│   │   ├── Hero.css
│   │   ├── About.css
│   │   ├── Projects.css
│   │   ├── Skills.css
│   │   ├── Contact.css
│   │   └── Footer.css
│   ├── App.js
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## 🎯 Customization

### Edit Your Information
1. **Hero Section**: Update `src/components/Hero.js`
2. **About Section**: Update `src/components/About.js`
3. **Projects**: Edit `src/components/Projects.js` to add your own projects
4. **Skills**: Modify `src/components/Skills.js` with your tech stack
5. **Contact**: Update contact details in `src/components/Contact.js`

### Change Colors
Edit the CSS variables in `src/styles/App.css`:
```css
:root {
  --primary-color: #4f46e5;
  --secondary-color: #10b981;
  /* ... other colors ... */
}
```

### Modify Animations
All animations are defined in `src/styles/App.css`. You can:
- Change animation duration
- Modify keyframes
- Add new animations

## 📧 Contact Form

The contact form is ready to receive submissions. To enable email sending:
1. Integrate with a backend service (Node.js server)
2. Use services like Netlify Forms, FormSubmit, or EmailJS
3. Update the form submission logic in `src/components/Contact.js`

## 🌐 Deployment

### Deploy to Netlify
1. Build the project: `npm run build`
2. Connect your GitHub repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `build/`
5. Deploy!

### Deploy to Vercel
1. Push code to GitHub
2. Connect repository to Vercel
3. Vercel will automatically detect and configure the React app
4. Deploy!

## 📚 Technologies Used

- **React 18**: JavaScript library for building user interfaces
- **CSS3**: Modern styling with animations and gradients
- **JavaScript (ES6+)**: For interactivity and component logic
- **Responsive Design**: Mobile-first approach with media queries

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Support

If you need help customizing your portfolio:
1. Check the code comments
2. Review React documentation: https://reactjs.org
3. Explore CSS animations: https://developer.mozilla.org/en-US/docs/Web/CSS/animation

## ✅ Checklist Before Launch

- [ ] Update personal information in all sections
- [ ] Add real project descriptions and links
- [ ] Update skills list and proficiency levels
- [ ] Add your contact information
- [ ] Add social media links (GitHub, LinkedIn, Twitter, etc.)
- [ ] Test responsiveness on different devices
- [ ] Test all links and navigation
- [ ] Optimize images (if any)
- [ ] Set up form submission backend
- [ ] Deploy to hosting platform

---

Made with ❤️ using React | Sriram S
