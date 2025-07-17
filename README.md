# Bansi Maddali - Personal Blog

A modern, responsive personal blog showcasing my work as a Senior Machine Learning Engineer, built with HTML, CSS, and JavaScript, designed to be deployed on GitHub Pages.

## Features

- 🎨 Modern, clean design with smooth animations
- 📱 Fully responsive - works on all devices
- ⚡ Fast loading with optimized assets
- 🔍 SEO-friendly structure
- 🎯 Easy to customize and extend
- 📝 Sample blog posts included
- 🌐 Ready for GitHub Pages deployment

## Quick Start

### 1. Clone or Download

```bash
git clone https://github.com/yourusername/your-blog-repo.git
cd your-blog-repo
```

### 2. Customize Your Blog

The blog is already customized for Bansi Maddali with:

- **Professional ML Engineer branding** - Updated title and hero section
- **Real Medium articles** - Links to actual published content
- **Professional contact information** - Email, GitHub, LinkedIn, and Medium links
- **ML-focused content** - Articles about AI, ML, computer vision, and MLOps

To further customize:
- **`index.html`** - Update personal information and branding
- **`styles.css`** - Modify colors, fonts, and layout
- **`script.js`** - Add new Medium articles to the blogPosts array

### 3. Test Locally

Open `index.html` in your web browser to preview your blog locally.

## Deploying to GitHub Pages

### Method 1: Using GitHub's Web Interface

1. **Create a new repository** on GitHub
   - Go to [github.com](https://github.com)
   - Click "New repository"
   - Name it `yourusername.github.io` (replace `yourusername` with your actual GitHub username)
   - Make it public
   - Don't initialize with README (we already have one)

2. **Upload your files**
   - Click "uploading an existing file"
   - Drag and drop all your blog files (`index.html`, `styles.css`, `script.js`, `README.md`)
   - Commit the changes

3. **Enable GitHub Pages**
   - Go to your repository's Settings
   - Scroll down to "Pages" section
   - Under "Source", select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder
   - Click "Save"

4. **Your blog is live!**
   - Visit `https://yourusername.github.io` to see your blog

### Method 2: Using Git Commands

```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial blog setup"

# Add remote repository (replace with your repo URL)
git remote add origin https://github.com/yourusername/yourusername.github.io.git

# Push to GitHub
git push -u origin main
```

Then follow steps 3-4 from Method 1 to enable GitHub Pages.

## Customization Guide

### Changing Colors

Edit the CSS variables in `styles.css`:

```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #667eea;
    --text-color: #333;
    --background-color: #fafafa;
}
```

### Adding New Medium Articles

Edit the `blogPosts` array in `script.js`:

```javascript
const blogPosts = [
    {
        title: "Your New Article Title",
        excerpt: "A brief description of your article...",
        date: "December 2024",
        icon: "🧠",
        readTime: "10 min read",
        url: "https://bansidath.in/your-article-url"
    },
    // Add more articles...
];
```

### Updating Contact Information

Edit the contact section in `index.html`:

```html
<div class="contact-item">
    <i class="fas fa-envelope"></i>
    <p>your.actual.email@example.com</p>
</div>
```

### Adding Your Own Domain

1. Purchase a domain name
2. In your repository's Settings > Pages:
   - Add your custom domain
   - Create a `CNAME` file in your repository with your domain name
3. Configure DNS settings with your domain provider

## File Structure

```
your-blog/
├── index.html          # Main HTML file
├── styles.css          # CSS styles
├── script.js           # JavaScript functionality
├── README.md           # This file
└── .gitignore          # Git ignore file (optional)
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Contributing

Feel free to fork this project and customize it for your own blog. If you make improvements, consider sharing them with the community!

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you encounter any issues or have questions:

1. Check the [GitHub Pages documentation](https://pages.github.com/)
2. Review the [GitHub Pages troubleshooting guide](https://docs.github.com/en/pages/getting-started-with-github-pages/troubleshooting-jekyll-build-errors-for-github-pages-sites)
3. Open an issue in this repository

## Updates and Maintenance

To keep your blog updated:

1. **Regular content updates**: Edit `script.js` to add new blog posts
2. **Design updates**: Modify `styles.css` for visual changes
3. **Feature additions**: Enhance `script.js` with new functionality
4. **Security**: Keep dependencies updated if you add any

---

**Happy blogging! 🚀** 