// Mobile navigation toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Bansi's Medium articles data
const blogPosts = [
    {
        title: "Understanding Attention Mechanisms in Deep Learning",
        excerpt: "A comprehensive guide to attention mechanisms, from basic concepts to advanced implementations in transformer architectures. Learn how attention revolutionized NLP and computer vision.",
        date: "December 2024",
        icon: "🧠",
        readTime: "12 min read",
        url: "https://bansidath.in/understanding-attention-mechanisms-in-deep-learning"
    },
    {
        title: "Building Scalable ML Pipelines with MLOps",
        excerpt: "Learn how to design and implement production-ready machine learning pipelines using modern MLOps practices, including CI/CD, monitoring, and deployment strategies.",
        date: "November 2024",
        icon: "⚙️",
        readTime: "15 min read",
        url: "https://bansidath.in/building-scalable-ml-pipelines-with-mlops"
    },
    {
        title: "Computer Vision with PyTorch: From Basics to Advanced",
        excerpt: "A practical guide to implementing computer vision models using PyTorch, covering CNN architectures, transfer learning, and real-world applications.",
        date: "October 2024",
        icon: "👁️",
        readTime: "18 min read",
        url: "https://bansidath.in/computer-vision-with-pytorch-from-basics-to-advanced"
    },
    {
        title: "Natural Language Processing Fundamentals",
        excerpt: "Explore the core concepts of NLP, from text preprocessing to advanced techniques like BERT and GPT. Practical examples and code implementations included.",
        date: "September 2024",
        icon: "📝",
        readTime: "14 min read",
        url: "https://bansidath.in/natural-language-processing-fundamentals"
    },
    {
        title: "Deep Learning Model Optimization Techniques",
        excerpt: "Master the art of optimizing deep learning models for better performance, including quantization, pruning, and knowledge distillation methods.",
        date: "August 2024",
        icon: "⚡",
        readTime: "10 min read",
        url: "https://bansidath.in/deep-learning-model-optimization-techniques"
    },
    {
        title: "Machine Learning in Production: Best Practices",
        excerpt: "Essential guidelines for deploying ML models in production environments, covering monitoring, scaling, and maintaining model performance over time.",
        date: "July 2024",
        icon: "🚀",
        readTime: "16 min read",
        url: "https://bansidath.in/machine-learning-in-production-best-practices"
    }
];

// Function to create blog post cards
function createBlogCard(post) {
    return `
        <article class="blog-card">
            <div class="blog-card-image">
                ${post.icon}
            </div>
            <div class="blog-card-content">
                <h3 class="blog-card-title">${post.title}</h3>
                <p class="blog-card-excerpt">${post.excerpt}</p>
                <div class="blog-card-meta">
                    <span class="blog-card-date">${post.date}</span>
                    <a href="${post.url}" target="_blank" class="blog-card-read-more">Read on Medium</a>
                </div>
            </div>
        </article>
    `;
}

// Load blog posts
function loadBlogPosts() {
    const blogGrid = document.getElementById('blog-grid');
    if (blogGrid) {
        blogGrid.innerHTML = blogPosts.map(post => createBlogCard(post)).join('');
    }
}

// Initialize blog posts when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    loadBlogPosts();
});

// Add scroll effect to header
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.background = 'white';
        header.style.backdropFilter = 'none';
    }
});

// Add loading animation for blog cards
function animateBlogCards() {
    const cards = document.querySelectorAll('.blog-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

// Trigger animation when blog section comes into view
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateBlogCards();
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe blog section
document.addEventListener('DOMContentLoaded', () => {
    const blogSection = document.querySelector('.blog-section');
    if (blogSection) {
        observer.observe(blogSection);
    }
});

// Add click handlers for contact links
document.addEventListener('click', (e) => {
    if (e.target.closest('.contact-item')) {
        const contactItem = e.target.closest('.contact-item');
        const text = contactItem.querySelector('p').textContent;
        
        if (text.includes('@')) {
            // Email
            window.open(`mailto:${text}`, '_blank');
        } else if (text.includes('github.com')) {
            // GitHub
            window.open(`https://${text}`, '_blank');
        } else if (text.includes('linkedin.com')) {
            // LinkedIn
            window.open(`https://${text}`, '_blank');
        } else if (text.includes('medium.com')) {
            // Medium
            window.open(`https://${text}`, '_blank');
        }
    }
}); 