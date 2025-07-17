console.log("this is just a simple console command")

// Hamburger menu interactivity
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
const navOverlay = document.getElementById('navOverlay');

function openMenu() {
  hamburger.classList.add('active');
  navLinks.classList.add('open');
  navOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeMenu() {
  hamburger.classList.remove('active');
  navLinks.classList.remove('open');
  navOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

hamburger.addEventListener('click', () => {
  if (hamburger.classList.contains('active')) {
    closeMenu();
  } else {
    openMenu();
  }
});

navOverlay.addEventListener('click', closeMenu);

// Close menu on nav link click (mobile)
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', closeMenu);
});

// FAQ accordion interactivity
document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', function() {
    const item = this.parentElement;
    item.classList.toggle('open');
    // Close others
    document.querySelectorAll('.faq-item').forEach(other => {
      if (other !== item) other.classList.remove('open');
    });
  });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href').slice(1);
    const target = document.getElementById(targetId);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Interactive Get Started button
const getStartedBtn = document.getElementById('getStartedBtn');
if (getStartedBtn) {
  getStartedBtn.addEventListener('click', function(e) {
    e.preventDefault();
    alert('Welcome! Start exploring the basics of GitHub below.');
  });
}