# Customization Guide

Learn how to customize and extend the HTML Presentation Framework for your specific needs.

---

## 📐 Creating Custom Slide Types

### Step 1: Add to presentation.html Switch Statement

In `presentation.html`, find the large `switch(slide.type)` statement (around line 100). Add your new type:

```javascript
case 'my-custom-type':
    contentHtml += `
        <div class="custom-content">
            <h2>${slide.customTitle}</h2>
            <p>${slide.customDescription}</p>
        </div>
    `;
    break;
```

### Step 2: Define CSS Styling

In `style.css`, add styles for your layout:

```css
.layout-my-custom-type {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.custom-content {
    max-width: 800px;
    text-align: center;
}
```

### Step 3: Use in data.js

```javascript
{
    type: "my-custom-type",
    title: "My Custom Slide",
    customTitle: "Custom Title",
    customDescription: "Custom description text here",
    theme: "light"
}
```

### Example: Custom Review Slide

**data.js:**

```javascript
{
    type: "review",
    title: "Key Takeaways",
    items: [
        { point: "First insight", icon: "✓" },
        { point: "Second learning", icon: "✓" },
        { point: "Action item", icon: "→" }
    ]
}
```

**presentation.html:**

```javascript
case 'review':
    contentHtml += `<div class="review-grid">`;
    slide.items.forEach(item => {
        contentHtml += `
            <div class="review-item">
                <span class="review-icon">${item.icon}</span>
                <p>${item.point}</p>
            </div>
        `;
    });
    contentHtml += `</div>`;
    break;
```

**style.css:**

```css
.layout-review {
    justify-content: center;
    padding-top: 100px;
}

.review-grid {
    display: flex;
    flex-direction: column;
    gap: 30px;
    max-width: 600px;
}

.review-item {
    display: flex;
    align-items: center;
    gap: 20px;
    font-size: 1.3rem;
    padding: 15px;
    background: var(--card-bg);
    border-left: 4px solid var(--green);
}

.review-icon {
    font-size: 2rem;
    color: var(--blue);
}
```

---

## 🎨 Color Customization

### Predefined Color Schemes

Create a complete color theme by modifying `:root` in `style.css`.

#### Modern Dark Blue Theme

```css
:root {
    --green: #00D9FF;       /* Cyan accent */
    --navy: #0A1628;        /* Very dark blue */
    --teal: #1A3A52;        /* Softer blue-teal */
    --blue: #00A8E8;        /* Bright blue */
    --white: #FFFFFF;
    --light-bg: #162A3E;
}
```

#### Warm Orange Theme

```css
:root {
    --green: #FF6B35;       /* Bright orange */
    --navy: #2D1B00;        /* Dark brown */
    --teal: #8B5A2B;        /* Saddle brown */
    --blue: #F7931E;        /* Golden orange */
    --white: #FFFBF0;       /* Off-white */
    --light-bg: #F4E8D8;
}
```

#### Professional Grayscale

```css
:root {
    --green: #4A90E2;       /* Professional blue */
    --navy: #333333;        /* Dark gray */
    --teal: #555555;        /* Medium gray */
    --blue: #7B68EE;        /* Slate blue */
    --white: #FFFFFF;
    --light-bg: #F0F0F0;
}
```

### Generate Custom Colors

Use tools like:

- [Coolors.co](https://coolors.co/) — Color palette generator
- [Adobe Color](https://color.adobe.com/) — Professional color exploration
- [Accessible Colors](https://accessible-colors.com/) — WCAG AA compliant

---

## ✏️ Font Customization

### Web-Safe Fonts (No extra loading)

```css
--font-main: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
--font-main: 'Georgia', serif;
--font-main: 'Courier New', monospace;
```

### Google Fonts (Requires import)

1. Visit [Google Fonts](https://fonts.google.com/)
2. Select font(s)
3. Copy import statement

Example:

```css
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700;900&family=Lora:wght@400;600&display=swap');

:root {
    --font-main: 'Roboto', sans-serif;
}

/* Use different font for headings */
.slide-title {
    font-family: 'Lora', serif;
}
```

### Font Weights & Sizes

Modify heading sizes in `style.css`:

```css
.layout-cover h1 {
    font-size: 4.5rem;      /* Title on cover slide */
    font-weight: 900;       /* Extra bold */
}

.slide-title {
    font-size: 2.5rem;      /* Slide header title */
    font-weight: 700;       /* Bold */
}

.content-body {
    font-size: 1.4rem;      /* Body text */
    font-weight: 300;       /* Light */
    line-height: 1.6;       /* Breathing room */
}
```

**Common font weights:**

- `300`: Light (elegant, thin)
- `400`: Normal (default)
- `500`: Medium (slightly heavier)
- `700`: Bold (emphasis)
- `900`: Extra bold (strong impact)

---

## 📐 Layout Customization

### Slide Dimensions

By default, presentations use full viewport (100vw × 100vh). To customize:

```css
#presentation-container {
    width: 100vw;           /* Full window width */
    height: 100vh;          /* Full window height */
    /* Or use fixed dimensions: */
    /* width: 1920px; */
    /* height: 1080px; */
}
```

### Content Area Padding

Change how much space between slide edge and content:

```css
.slide {
    padding: 60px 80px;     /* [top/bottom] [left/right] */
    /* For compact: */
    /* padding: 40px 60px; */
    /* For spacious: */
    /* padding: 80px 120px; */
}
```

### Column Layouts

Modify grid systems:

```css
/* Make 2-column layouts equal or unequal */
.kpi-grid {
    grid-template-columns: repeat(2, 1fr);  /* 50-50 split */
    /* Or: 1fr 2fr; for 33-66 split */
    gap: 30px;
}

/* Change workflow steps arrangement */
.workflow-container {
    flex-direction: row;         /* Horizontal (current) */
    /* Or: flex-direction: column; for vertical */
}
```

---

## 🎬 Animation & Transitions

### Slide Transitions

Modify in `style.css`:

```css
.slide {
    transition: opacity 0.4s ease-in-out, transform 0.4s ease-in-out;
    /* Current: fade in with slide from right */
    
    /* Alternative: faster fade */
    /* transition: opacity 0.2s ease-out; */
    
    /* Alternative: slower, bouncy */
    /* transition: opacity 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55), 
                  transform 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55); */
}

.slide.active {
    opacity: 1;
    visibility: visible;
    transform: translateX(0);
    /* Change slide-in direction: */
    /* transform: translateY(0); for top-to-bottom */
    /* transform: scale(1); for zoom-in */
}
```

### Background Animation

The moving background pattern is controlled by:

```css
@keyframes panBackground {
    0% { background-position: 0% 0%; }
    50% { background-position: 100% 100%; }
    100% { background-position: 0% 0%; }
}

.slide {
    animation: panBackground 40s linear infinite;
    /* Slower: 60s */
    /* Faster: 20s */
    /* Disable: animation: none; */
}
```

### Disable All Animations

```css
.slide {
    animation: none !important;
}

.slide.active {
    transition: none !important;
    opacity: 1;
    transform: none;
}
```

---

## 🎯 Header & Footer Customization

### Modify Slide Header

```css
.slide-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    border-bottom: 2px solid var(--header-border);
    padding-bottom: 15px;
    margin-bottom: 40px;
}

/* Make header larger and styled */
.slide-title {
    font-size: 3rem;
    text-transform: uppercase;
    letter-spacing: 2px;
}

/* Hide header on specific slides */
.layout-cover .slide-header,
.layout-image-background .slide-header {
    display: none;
}
```

### Add a Footer

Create a global footer on every slide:

**In presentation.html**, after slide content is generated:

```javascript
if(slide.type !== 'cover') {
    contentHtml = `
        <div class="slide-wrapper">
            ${contentHtml}
            <div class="slide-footer">
                <span>© 2026 My Company</span>
                <span class="footer-page">${index + 1}</span>
            </div>
        </div>
    `;
}
```

**In style.css:**

```css
.slide-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: auto;
    padding-top: 30px;
    border-top: 1px solid var(--header-border);
    font-size: 0.9rem;
    opacity: 0.6;
}
```

---

## 🌙 Dark Mode Toggle

Add a button to switch themes without editing:

**In presentation.html**, add to controls:

```html
<div class="controls">
    <button class="btn" onclick="toggleTheme()">🌙</button>
    <button class="btn" onclick="prevSlide()">&#9664; Prev</button>
    <button class="btn" onclick="nextSlide()">Next &#9654;</button>
</div>
```

**In presentation.html**, add to script:

```javascript
function toggleTheme() {
    presentationData.globalTheme = presentationData.globalTheme === 'light' ? 'dark' : 'light';
    buildPresentation();
}
```

---

## 📱 Responsive Design

### Mobile/Tablet Adjustments

Add to `style.css`:

```css
@media (max-width: 768px) {
    .slide {
        padding: 40px 30px;     /* Smaller margins */
    }
    
    .slide-title {
        font-size: 1.8rem;      /* Smaller titles */
    }
    
    .split-layout {
        flex-direction: column;  /* Stack vertically */
        gap: 20px;
    }
    
    .kpi-grid {
        grid-template-columns: 1fr;  /* Single column */
    }
    
    .workflow-container {
        flex-wrap: wrap;        /* Allow wrapping */
    }
}

@media (max-width: 480px) {
    .slide {
        padding: 30px 20px;
    }
    
    .slide-title {
        font-size: 1.5rem;
    }
    
    .content-body {
        font-size: 1.1rem;
    }
}
```

---

## 🔌 Adding External Libraries

### Chart.js Extended

Chart.js is already loaded. Add more chart types:

```javascript
{
    type: "chart-line",
    title: "Growth Over Time",
    chartData: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May"],
        datasets: [{
            label: "Monthly Revenue",
            data: [10, 15, 13, 20, 25],
            borderColor: "var(--green)",
            type: "line"
        }]
    }
}
```

### Add Highlight.js for Code Highlighting

1.Add to `presentation.html`:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/highlight.js@11.3.1/styles/atom-one-dark.min.css">
<script src="https://cdn.jsdelivr.net/npm/highlight.js@11.3.1/highlight.min.js"></script>
```

2.Use `<pre><code>` blocks in slides

---

## ✨ Advanced: Custom Themes

Create reusable theme files:

**themes/vibrant.css:**

```css
:root {
    --green: #FF006E;
    --navy: #3A0CA3;
    --teal: #7209B7;
    --blue: #F72585;
    --white: #FFFFFF;
    --light-bg: #F4F1FF;
}
```

**themes/minimal.css:**

```css
:root {
    --green: #000000;
    --navy: #FFFFFF;
    --teal: #F0F0F0;
    --blue: #666666;
    --white: #000000;
    --light-bg: #F5F5F5;
}
```

Link in `presentation.html`:

```html
<link rel="stylesheet" href="style.css">
<link rel="stylesheet" href="themes/vibrant.css">  <!-- Override defaults -->
```

---

## 🐛 Testing Changes

1. **Save all files**
2. **Hard refresh browser**: `Ctrl+F5` (Windows) or `Cmd+Shift+R` (Mac)
3. **Check browser console** (F12) for errors
4. **Test all slide types** that use modified styles

---

## 📚 More Resources

- [CSS-Tricks: Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [MDN: CSS Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)
- [Chart.js Docs](https://www.chartjs.org/docs/latest/)
- [Google Fonts](https://fonts.google.com/)

---

## 💡 Tips & Tricks

1. **Use CSS variables**: Change one value, update entire theme
2. **Test before presenting**: Always check on actual projector/display
3. **Keyboard shortcuts**: Test navigation on actual presentation device
4. **Accessibility**: Ensure text contrast meets [WCAG AA standards](https://www.w3.org/WAI/WCAG21/quickref/)
5. **Git version control**: Keep backups of `style.css` before major changes

---

See [README.md](README.md) for complete feature list and [SETUP.md](SETUP.md) for deployment options.
