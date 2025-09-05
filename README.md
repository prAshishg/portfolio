# Professional Developer Portfolio

A modern, responsive portfolio website for Ashish Gupta, a Senior Java Developer with 4.6+ years of experience.

## 🌐 Live Demo

[View Live Portfolio](https://prashishg.github.io/portfolio/)

## 📋 Features

- **Responsive Design** - Works perfectly on all devices
- **Day/Night Theme Toggle** - Switch between light and dark modes
- **Interactive Elements** - Smooth animations and transitions
- **Project Modals** - Detailed project information in popup modals
- **Contact Form** - Functional contact form that opens email client
- **Social Integration** - Links to LinkedIn, GitHub, and StackOverflow

## 🛠️ Technologies Used

- HTML5
- CSS3 (with CSS Variables for theming)
- JavaScript (ES6+)
- Font Awesome Icons
- Google Fonts (Poppins)

## 📁 Project Structure

```
portfolio/
├── index.html
├── styles/
│   ├── main.css
│   └── modal.css
├── scripts/
│   └── main.js
├── assets/
│   ├── ashish_gupta.png
│   ├── neo_banking.png
│   ├── payment_aggregator.png
│   └── skychain.png
└── README.md
```

## 🚀 Getting Started

### Prerequisites

No special prerequisites needed. Just a modern web browser.

### Installation

1. Clone the repository:
```bash
git clone https://github.com/prAshishg/portfolio.git
```

2. Navigate to the project directory:
```bash
cd portfolio
```

3. Open `index.html` in your browser or use a local server.

### GitHub Pages Deployment

This portfolio is automatically deployed via GitHub Pages from the main branch.

## 🎨 Customization

### Personal Information

Update the following in `index.html`:
- Name, title, and description
- Contact information
- Social media links
- Experience details
- Project information

### Styling

Modify CSS variables in `styles/main.css` to change the color scheme:
```css
:root {
    --primary: #your-color;
    --primary-dark: #your-dark-color;
    /* Other variables */
}
```

### Adding Projects

Add new project cards in the Projects section:
```html
<div class="project-card">
    <div class="project-image">
        <img src="path-to-image" alt="Project Name">
    </div>
    <div class="project-info">
        <h3 class="project-title">Project Name</h3>
        <p class="project-description">Project description</p>
        <div class="project-tech">
            <span class="tech-tag">Technology</span>
        </div>
        <a class="project-link view-details" data-project="project-id">View Details</a>
    </div>
</div>
```

Don't forget to add the corresponding modal at the bottom of the file.

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 992px
- Desktop: > 992px

## 🌓 Theme System

The portfolio includes a theme toggle that:
- Switches between light and dark modes
- Saves user preference in localStorage
- Respects system preference by default
- Footer always remains in dark mode regardless of theme

## 📧 Contact Form

The contact form opens the user's default email client with pre-filled information using the `mailto:` protocol.

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check [issues page](https://github.com/prAshishg/portfolio/issues).

## 📞 Contact

Ashish Gupta - [ashishgupta9819r@gmail.com](mailto:ashishgupta9819r@gmail.com)

Project Link: [https://github.com/prAshishg/portfolio](https://github.com/prAshishg/portfolio)

Live Demo: [https://prashishg.github.io/portfolio/](https://prashishg.github.io/portfolio/)

## 🙏 Acknowledgments

- Icons by [Font Awesome](https://fontawesome.com/)
- Fonts by [Google Fonts](https://fonts.google.com/)
- Placeholder images by [Unsplash](https://unsplash.com/)

---

⭐️ Feel free to star this repository if you find it helpful!