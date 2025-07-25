# GitHub Basics Landing Page – Full Guide

This project is a beautiful, interactive landing page for learning the basics of GitHub. It demonstrates modern web design, responsive layouts, and interactive features using only HTML, CSS, and JavaScript.

---

## Table of Contents
- [How This Website Was Made](#how-this-website-was-made)
- [Project Structure](#project-structure)
- [index.html – Line-by-Line Explanation](#indexhtml--line-by-line-explanation)
- [style.css – Line-by-Line Explanation](#stylecss--line-by-line-explanation)
- [script.js – Line-by-Line Explanation](#scriptjs--line-by-line-explanation)

---

## How This Website Was Made

1. **Initial Setup:**
   - Created `index.html`, `style.css`, and `script.js`.
   - Linked CSS and JS in the HTML file.

2. **Modern Layout:**
   - Designed a hero section, navigation bar, features, testimonials, FAQ, about, and contact sections.
   - Used semantic HTML5 elements for structure and accessibility.

3. **Styling:**
   - Applied a dark, modern theme with gradients, rounded corners, and shadows.
   - Made the site fully responsive for mobile and desktop.
   - Added a hamburger menu for mobile navigation.

4. **Interactivity:**
   - Implemented a hamburger menu toggle with overlay.
   - Added FAQ accordion functionality.
   - Enabled smooth scrolling for navigation links.
   - Made the "Get Started" button interactive.

---

## Project Structure

```
gitrepo-practice/
├── index.html      # Main HTML file
├── style.css       # Stylesheet for the website
├── script.js       # JavaScript for interactivity
└── README.md       # This guide
```

---

## index.html – Line-by-Line Explanation

```html
<!DOCTYPE html>
```
Declares the document type as HTML5.

```html
<html lang="en">
```
Root element of the HTML document, language set to English.

```html
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Basics of Github</title>
  <link rel="stylesheet" href="style.css">
</head>
```
- `<meta charset="UTF-8">`: Sets character encoding.
- `<meta name="viewport" ...>`: Ensures responsive scaling on mobile.
- `<title>`: Sets the browser tab title.
- `<link rel="stylesheet" ...>`: Links the CSS file.

```html
<body>
```
Begins the visible content.

### Header & Navigation
```html
  <header class="header">
    <nav class="navbar">
      <div class="logo">GitHub Basics</div>
      <ul class="nav-links" id="navLinks">
        <li><a href="#features">Features</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#faq">FAQ</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div class="hamburger" id="hamburger" aria-label="Open navigation" tabindex="0">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
    <div class="nav-overlay" id="navOverlay"></div>
  </header>
```
- `<header>`: Contains the navigation bar.
- `.navbar`: Flex container for logo, links, and hamburger menu.
- `.logo`: Site title.
- `.nav-links`: Navigation links (anchors) to page sections.
- `.hamburger`: Three spans form the hamburger icon for mobile.
- `.nav-overlay`: Overlay for mobile menu.

### Main Content
```html
  <main>
```
Main content area.

#### Hero Section
```html
    <section class="hero">
      <h1>Master the Basics of GitHub</h1>
      <p>Learn version control, collaboration, and open source with our beginner-friendly guide.</p>
      <a href="#get-started" class="cta-btn" id="getStartedBtn">Get Started</a>
    </section>
```
- `.hero`: Eye-catching intro with headline, description, and call-to-action button.

#### Features Section
```html
    <section id="features" class="features">
      <h2>Features</h2>
      <div class="feature-list">
        <div class="feature-item">
          <h3>Easy to Follow</h3>
          <p>Step-by-step instructions for absolute beginners.</p>
        </div>
        <div class="feature-item">
          <h3>Interactive Examples</h3>
          <p>Practice with real GitHub commands and workflows.</p>
        </div>
        <div class="feature-item">
          <h3>Community Support</h3>
          <p>Join our forum and get help from fellow learners.</p>
        </div>
      </div>
    </section>
```
- `.features`: Highlights key benefits.
- `.feature-list`: Flex container for feature cards.

#### Testimonials Section
```html
    <section id="testimonials" class="testimonials">
      <h2>What Our Users Say</h2>
      <div class="testimonial-list">
        <div class="testimonial-item">
          <p>"This site made learning GitHub so easy!"</p>
          <span>- Alex, Student</span>
        </div>
        <div class="testimonial-item">
          <p>"The interactive examples are fantastic."</p>
          <span>- Priya, Developer</span>
        </div>
        <div class="testimonial-item">
          <p>"I finally understand open source thanks to this guide."</p>
          <span>- Sam, Designer</span>
        </div>
      </div>
    </section>
```
- `.testimonials`: User feedback for credibility.

#### FAQ Section
```html
    <section id="faq" class="faq">
      <h2>Frequently Asked Questions</h2>
      <div class="faq-list">
        <div class="faq-item">
          <button class="faq-question">What is GitHub?</button>
          <div class="faq-answer">GitHub is a platform for version control and collaboration, allowing you to manage and share code with others.</div>
        </div>
        <div class="faq-item">
          <button class="faq-question">Do I need to know coding to use GitHub?</button>
          <div class="faq-answer">No, GitHub can be used for many types of projects, not just code. However, basic knowledge of version control helps.</div>
        </div>
        <div class="faq-item">
          <button class="faq-question">Is GitHub free?</button>
          <div class="faq-answer">Yes, GitHub offers free accounts with unlimited public and private repositories.</div>
        </div>
      </div>
    </section>
```
- `.faq`: Collapsible Q&A section for common questions.

#### About & Contact
```html
    <section id="about" class="about">
      <h2>About</h2>
      <p>This site is dedicated to helping newcomers understand and use GitHub effectively. Whether you want to contribute to open source or manage your own projects, we have you covered!</p>
    </section>
    <section id="contact" class="contact">
      <h2>Contact</h2>
      <p>Questions? Suggestions? <a href="mailto:info@githubbasics.com">Email us</a>!</p>
    </section>
  </main>
```
- `.about`: Info about the site.
- `.contact`: Contact info with mailto link.

#### Footer & Scripts
```html
  <footer class="footer">
    <p>&copy; 2024 GitHub Basics. All rights reserved.</p>
  </footer>
  <script src="script.js"></script>
</body>
</html>
```
- `.footer`: Copyright.
- `<script src="script.js">`: Loads interactivity.

---

## style.css – Line-by-Line Explanation

> **Note:** For brevity, this section summarizes groups of related lines. See the file for exact code.

- **Body & Typography:**
  - Sets margin to 0, applies a modern font, dark gradient background, white text, and full viewport height.

- **Header & Navbar:**
  - Sticky header with shadow.
  - Flexbox navbar for logo, links, and hamburger.
  - Logo styled with color and size.
  - Navigation links styled for spacing, color, and hover effect.

- **Hero Section:**
  - Centered flex column, large headline, subtext, and a call-to-action button with gradient background and hover/active effects.

- **Features, Testimonials, FAQ, About, Contact:**
  - Each section has max width, margin, padding, background, rounded corners, and shadow.
  - Features and testimonials use flex layouts for cards.
  - FAQ uses collapsible items with transitions.

- **Hamburger Menu & Overlay:**
  - Hamburger hidden on desktop, shown on mobile.
  - Hamburger spans animate to "X" when active.
  - Overlay darkens background when menu is open.

- **Responsive Design:**
  - Media queries adjust layout for tablets and phones.
  - Navigation becomes a slide-in menu on mobile.

- **Button Animation:**
  - Call-to-action button animates on click.

---

## script.js – Line-by-Line Explanation

```js
console.log("this is just a simple console command")
```
- Prints a message to the browser console (for testing).

### Hamburger Menu Interactivity
```js
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
const navOverlay = document.getElementById('navOverlay');
```
- Grabs references to the hamburger icon, nav links, and overlay.

```js
function openMenu() { ... }
function closeMenu() { ... }
```
- Functions to open/close the mobile menu, toggle classes, and lock body scroll.

```js
hamburger.addEventListener('click', ...);
navOverlay.addEventListener('click', closeMenu);
```
- Opens/closes menu on hamburger or overlay click.

```js
document.querySelectorAll('.nav-links a').forEach(link => { ... });
```
- Closes menu when a nav link is clicked (on mobile).

### FAQ Accordion
```js
document.querySelectorAll('.faq-question').forEach(btn => { ... });
```
- Toggles open/close for FAQ items, closing others when one is opened.

### Smooth Scrolling
```js
document.querySelectorAll('a[href^="#"]').forEach(anchor => { ... });
```
- Smoothly scrolls to sections when nav links are clicked.

### Get Started Button
```js
const getStartedBtn = document.getElementById('getStartedBtn');
if (getStartedBtn) { ... }
```
- Shows an alert when the "Get Started" button is clicked.

---

## How to Use or Customize

1. **Open `index.html` in your browser.**
2. **Edit content** in `index.html` to match your needs.
3. **Change styles** in `style.css` for different colors, fonts, or layouts.
4. **Add more interactivity** in `script.js` as desired.

---

## Credits
- Designed and coded with modern web best practices.
- No frameworks or libraries required—just HTML, CSS, and JS!








