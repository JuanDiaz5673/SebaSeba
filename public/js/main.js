// Force scroll to top on page load
window.history.scrollRestoration = 'manual';
window.scrollTo(0, 0);

// Navbar scroll effect + active nav link — single throttled scroll handler
const navbar = document.getElementById('navbar');
const sections = document.querySelectorAll('section[id]');
const bottomNavItems = document.querySelectorAll('.bottom-nav-item');

let ticking = false;
window.addEventListener('scroll', () => {
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(() => {
    const scrollY = window.scrollY;

    // Navbar background
    navbar.classList.toggle('scrolled', scrollY > 50);

    // Active nav link highlighting
    const offset = scrollY + 120;
    let currentSection = '';
    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');
      const link = document.querySelector(`.nav-link[href="#${id}"]`);
      const isActive = offset >= top && offset < top + height;
      if (link) link.classList.toggle('active', isActive);
      if (isActive) currentSection = id;
    });

    // Update bottom nav active state
    bottomNavItems.forEach(item => {
      const section = item.dataset.section;
      const mapped = (currentSection === 'reviews' || currentSection === 'instagram' || currentSection === 'about')
        ? 'gallery' : currentSection;
      item.classList.toggle('active', section === mapped);
    });

    ticking = false;
  });
});

// Mobile menu toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navBackdrop = document.getElementById('navBackdrop');

function openMenu() {
  navMenu.classList.add('open');
  navToggle.classList.add('active');
  navBackdrop.classList.add('visible');
  document.body.style.overflow = 'hidden';
}

function closeMenu() {
  navMenu.classList.remove('open');
  navToggle.classList.remove('active');
  navBackdrop.classList.remove('visible');
  document.body.style.overflow = '';
}

navToggle.addEventListener('click', () => {
  navMenu.classList.contains('open') ? closeMenu() : openMenu();
});

navBackdrop.addEventListener('click', closeMenu);

// Close mobile menu on link click
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', closeMenu);
});

// Close mobile menu when bottom nav is tapped
bottomNavItems.forEach(item => {
  item.addEventListener('click', closeMenu);
});

// Menu tabs
const menuTabs = document.querySelectorAll('.menu-tab');
const menuCategories = document.querySelectorAll('.menu-category');

menuTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const category = tab.dataset.category;
    menuTabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    menuCategories.forEach(cat => {
      cat.classList.toggle('active', cat.id === `cat-${category}`);
    });
  });
});

// Contact form
document.getElementById('contactForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const btn = e.target.querySelector('button[type="submit"]');
  const originalText = btn.textContent;
  btn.textContent = 'Message Sent!';
  btn.style.background = '#4a8c5c';
  btn.style.borderColor = '#4a8c5c';
  btn.disabled = true;

  setTimeout(() => {
    btn.textContent = originalText;
    btn.style.background = '';
    btn.style.borderColor = '';
    btn.disabled = false;
    e.target.reset();
  }, 3000);
});

// Animate elements on scroll
const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('.menu-item, .location-card, .review-card, .about-content, .about-image').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

// Gallery carousel
const galleryGrid = document.querySelector('.gallery-grid');
const prevBtn = document.querySelector('.gallery-btn.prev');
const nextBtn = document.querySelector('.gallery-btn.next');

if (galleryGrid) {
  const items = Array.from(galleryGrid.querySelectorAll('.gallery-item'));
  const total = items.length;
  let currentIndex = 0;
  let isAnimating = false;

  function positionItems() {
    const itemWidth = items[0].offsetWidth;
    const gap = 30;

    items.forEach((item, i) => {
      let offset = i - currentIndex;
      if (offset > total / 2) offset -= total;
      if (offset < -total / 2) offset += total;

      const x = offset * (itemWidth + gap);
      const absOffset = Math.abs(offset);
      const scale = absOffset === 0 ? 1.15 : Math.max(0.7, 1 - absOffset * 0.12);
      const opacity = absOffset === 0 ? 1 : Math.max(0.3, 1 - absOffset * 0.2);
      const visible = absOffset <= 3;

      item.style.transform = `translate(-50%, -50%) translateX(${x}px) scale(${scale})`;
      item.style.zIndex = 10 - absOffset;

      if (visible) {
        item.classList.add('visible');
        item.style.opacity = opacity;
      } else {
        item.classList.remove('visible');
        item.style.opacity = 0;
      }

      item.classList.toggle('focused', absOffset === 0);
    });
  }

  function goTo(index) {
    if (isAnimating) return;
    isAnimating = true;
    currentIndex = ((index % total) + total) % total;
    positionItems();
    setTimeout(() => { isAnimating = false; }, 500);
  }

  function next() { goTo(currentIndex + 1); }
  function prev() { goTo(currentIndex - 1); }

  positionItems();

  // Recalculate on resize / orientation change
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(positionItems, 150);
  });

  if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', prev);
    nextBtn.addEventListener('click', next);
  }

  // Swipe support
  let touchStartX = 0;
  galleryGrid.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });
  galleryGrid.addEventListener('touchend', (e) => {
    const diff = touchStartX - e.changedTouches[0].screenX;
    if (Math.abs(diff) > 40) {
      diff > 0 ? next() : prev();
    }
  });

  // Mouse wheel / trackpad
  galleryGrid.addEventListener('wheel', (e) => {
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
      e.preventDefault();
      if (e.deltaX > 20) next();
      else if (e.deltaX < -20) prev();
    }
  }, { passive: false });

  // Keyboard
  document.addEventListener('keydown', (e) => {
    const rect = galleryGrid.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    }
  });
}
