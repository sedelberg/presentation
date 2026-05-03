# Customization Guide

Learn how to customize and extend the HTML Presentation Framework using its modular architecture.

---

## 📐 Creating Custom Slide Types

The framework uses a **Registry Pattern**. All rendering logic lives in `renderer.js`.

### Step 1: Add to renderer.js

Open `renderer.js` and add a new function to the `SlideRenderer` object:

```javascript
const SlideRenderer = {
    // ... existing types ...

    'my-custom-type': (slide, index, slideDiv) => {
        return `
            <div class="custom-container">
                <h1 class="gradient-text">${slide.title}</h1>
                <div class="custom-body">${slide.content}</div>
            </div>
        `;
    }
};
```

### Step 2: Define CSS Styling

In `style.css`, add styles using the `.layout-[type]` class:

```css
.layout-my-custom-type {
    justify-content: center;
    align-items: center;
}

.custom-container {
    background: var(--card-bg);
    padding: var(--s8);
    border-radius: 20px;
}
```

### Step 3: Use in data.js

```javascript
{
    type: "my-custom-type",
    title: "Revolutionary Idea",
    content: "This is my custom layout in action."
}
```

---

## 🎨 Global Design System

The framework is built on a strict **8px grid system**. Use these variables in your CSS for perfect alignment:

- `var(--s1)`: 8px
- `var(--s2)`: 16px
- `var(--s3)`: 24px
- `var(--s4)`: 32px
- `var(--s6)`: 48px
- `var(--s10)`: 80px

### Color Palette

Modify these in `:root` for a total brand overhaul:

```css
:root {
    --green: #01C38E;      /* Primary Accent */
    --blue: #0090D6;       /* Secondary Accent */
    --navy: #132D46;       /* Background / Base */
}
```

---

## 🎬 Cinematic Transitions

Slides transition using a combination of **Blur**, **Scale**, and **3D Translation**.

You can adjust the "Premium feel" by modifying these variables in `style.css`:

```css
:root {
    --transition-speed: 0.8s;
    --transition-easing: cubic-bezier(0.4, 0, 0.2, 1);
}
```

To change the "entrance" effect, look for the `.slide` and `.slide.active` classes.

---

## 💻 Technical Integrations

### Code Syntax Highlighting

We use **Prism.js**. To change the code theme, replace the CDN link in `presentation.html` with any theme from [Prism Themes](https://github.com/PrismJS/prism-themes).

### Charts

We use **Chart.js** with the **Datalabels plugin**. The default colors and rounding are handled in the `initChart` function inside `presentation.html`.

---

## 🌙 Live Theme Switching

The dynamic theme switcher (🎨 button) works by updating CSS variables on the `:root` element. If you add new variables for your custom slides, make sure they reference these base variables to ensure they update correctly during a live theme change.

---

## 📚 More Resources

- [Chart.js Documentation](https://www.chartjs.org/)
- [Prism.js Languages](https://prismjs.com/#supported-languages)
- [html2pdf.js Options](https://github.com/eKoopmans/html2pdf.js)

---

Happy hacking! 🚀
