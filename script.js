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

// List of all Medium articles extracted from the export
const blogPosts = [
  {
    title: "How “Attention Is All You Need” Revolutionised AI (And Changed Everything)",
    excerpt: "A beginner’s guide to the paper that made ChatGPT possible.",
    date: "June 27, 2025",
    url: "https://medium.com/@bansimaddali/how-attention-is-all-you-need-revolutionised-ai-and-changed-everything-648aa60505b8"
  },
  {
    title: "🧠 From Basics to Breakthroughs: The Complete Guide to GhostConvBlock in Deep Learning",
    excerpt: "Convolutional Neural Networks (CNNs) revolutionised image processing by mimicking how the human brain processes visual data. But as CNNs became deeper and more powerful, they also became heavier — slower and computationally expensive.",
    date: "June 29, 2025",
    url: "https://medium.com/@bansimaddali/from-basics-to-breakthroughs-the-complete-guide-to-ghostconvblock-in-deep-learning-ba77ad239130"
  },
  {
    title: "The Future of LLM Security, Encryption & Privacy: Breakthroughs and Challenges in 2025",
    excerpt: "Large Language Models (LLMs) like ChatGPT and GPT-4 have transformed how we interact with technology, enabling applications ranging from customer service chatbots to advanced content generation. However, as these models become more integrated into our daily lives, concerns about their security, privacy, and ethical implications have grown.",
    date: "June 6, 2025",
    url: "https://medium.com/@bansimaddali/the-future-of-llm-security-encryption-privacy-breakthroughs-and-challenges-in-2025-d1302f2b67f2"
  },
  {
    title: "Gravity, Quantum Physics, and Ancient India: A Journey Towards the Theory of Everything",
    excerpt: "How modern science and ancient Indian wisdom might be pointing to the same universal truth.",
    date: "May 21, 2025",
    url: "https://medium.com/@bansimaddali/gravity-quantum-physics-and-ancient-india-a-journey-towards-the-theory-of-everything-ad91b0a563b8"
  },
  {
    title: "Understanding MB Conv Block: The Building Block Behind Efficient Deep Learning",
    excerpt: "Learn how a simple idea called the MB Conv Block helps build powerful AI models that can run on your smartphone, smart watch, or even a tiny sensor.",
    date: "May 20, 2025",
    url: "https://medium.com/@bansimaddali/understanding-mb-conv-block-the-building-block-behind-efficient-deep-learning-f1f8e1afe97f"
  },
  {
    title: "Trip to Tadoba Andhari National Park — Tiger Safari",
    excerpt: "Tadoba National Park located in Chandrapur District of Maharashtra, near to Nagpur.",
    date: "April 1, 2023",
    url: "https://medium.com/@bansimaddali/trip-to-tadoba-andhari-national-park-tiger-safari-850f37084ae1"
  },
  {
    title: "Learning Google ML Engineering and clearing the Certification",
    excerpt: "This blog is all about how to learn ML Engineering on Google Cloud Platform.",
    date: "February 12, 2023",
    url: "https://medium.com/@bansimaddali/learning-google-ml-engineering-and-clearing-the-certification-3783fac82d72"
  },
  {
    title: "Implementing ‘Deep’ Reinforcement Learning in Python",
    excerpt: "If you are new to RL, Please have a look at this blog post. https://bansidath.in/2022/04/11/reinforcement-learning-native-code/",
    date: "July 15, 2022",
    url: "https://medium.com/@bansimaddali/implementing-deep-reinforcement-learning-in-python-d01ed9d739d6"
  },
  {
    title: "Histogram Equalization in CV",
    excerpt: "Pre-Processing in Computer Vision is one of the crucial tasks, right placement of objects under “right” lighting may help us to achieve the best performance of the model.",
    date: "July 14, 2022",
    url: "https://medium.com/@bansimaddali/histogram-equalization-in-cv-cede7eb18e07"
  },
  {
    title: "Plant Disease using Keras and Fast API",
    excerpt: "The Kaggle link https://www.kaggle.com/datasets/emmarex/plantdisease",
    date: "July 9, 2022",
    url: "https://medium.com/@bansimaddali/plant-disease-using-keras-and-fast-api-e045d9423953"
  }
  // ... (add more articles here if needed)
];

function createBlogCard(post) {
  return `
    <article class="blog-card">
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

function loadBlogPosts() {
  const blogGrid = document.getElementById('blog-grid');
  if (blogGrid) {
    blogGrid.innerHTML = blogPosts.map(post => createBlogCard(post)).join('');
  }
}

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