# 🎯 HTML Presentation Framework

A professional-grade, lightweight HTML-based alternative to PowerPoint that lets you create stunning, cinematic presentations using simple JSON data. Perfect for technical talks, executive reviews, and high-stakes business pitches.

## ✨ Why this Framework?

- **Cinematic Transitions**: Built-in 3D transforms, blurs, and staggered animations for a premium feel.
- **Professional Presenter View**: Synchronized secondary window with speaker notes, timers, and next-slide previews.
- **Slide Sorter**: Non-linear navigation with a "Bird's Eye" grid view (Press `G`).
- **Dynamic Theming**: On-the-fly brand color customization without editing code.
- **High-Fidelity PDF Export**: One-click professional handouts using `html2pdf.js`.
- **Modular Registry**: Easily extendable architecture—add new slide types in seconds.
- **Lightweight & Portable**: No software, no build steps, no dependencies. Works offline.

---

## 🚀 Quick Start (5 Minutes)

### 1. **Open the presentation**

Simply open `presentation.html` in any modern web browser.

### 2. **Professional Controls**

- **Next slide**: `→` or `Space`
- **Previous slide**: `←`
- **Slide Sorter**: `G` (Grid view)
- **Fullscreen**: `F`
- **Presenter View**: Click the 📽️ icon (opens synchronized window)
- **Theme Settings**: Click the 🎨 icon (change brand colors)
- **Export PDF**: Click the 📄 icon

### 3. **Edit slides**

- Open `data.js` in your text editor.
- Modify the `presentationData` object.
- Refresh the browser to see your changes.

---

## 📁 File Structure

```text
presentation/
├── presentation.html      # Main presentation engine
├── presenter.html         # [NEW] Professional Presenter View
├── renderer.js            # [NEW] Modular slide rendering logic
├── data.js               # Your active presentation content (EDIT THIS)
├── data-template.js      # Showcase of all 25+ slide variations
├── style.css             # Design system, themes & cinematic animations
├── README.md             # This guide
├── QUICKSTART.md         # Minimal 5-minute setup
├── CUSTOMIZATION.md      # Advanced dev guide (adding slide types)
├── images/               # Image assets
└── examples/             # Pre-built presentation templates
```

---

## 🎨 Slide Library

This framework supports **over 25 slide variations**. Below are the core high-impact types:

### **Professional Staples**

#### 1. **Cover** — Impactful opening with gradient text
#### 2. **Team** — Circular avatars with roles and social icons ✨ NEW
#### 3. **Testimonial** — Large-scale social proof with logos ✨ NEW
#### 4. **Map** — Interactive SVG world map with "pinging" markers ✨ NEW

### **Data & Logic**

#### 5. **KPI** — 4-metric dashboard with status indicators
#### 6. **Chart-bar** — Dynamic data visualization via Chart.js
#### 7. **Table** — Professional comparison matrix with ✓/✗ support ✨ NEW
#### 8. **Code** — Syntax-highlighted technical snippets (Prism.js) ✨ NEW

### **Narrative & Layout**

#### 9. **Workflow** — Step-by-step process diagrams
#### 10. **Timeline** — Chronological roadmap of events
#### 11. **Two-column** — Side-by-side content/comparison
#### 12. **Grid** — Impactful glassmorphism feature showcase (updated)

### **Media**

#### 13. **Video** — Smart YouTube/Vimeo/MP4 embedding (auto-transformed)
#### 14. **Image-background** — Immersive visual storytelling
#### 15. **Image-split** — Balanced text and media layouts

*(See `data-template.js` for JSON schemas of all types)*

---

## ⌨️ Keyboard Shortcuts

| Key | Action |
| ----- | -------- |
| `→` / `Space` | Next Slide |
| `←` | Previous Slide |
| `G` | Toggle Slide Sorter (Grid) |
| `F` | Toggle Fullscreen |
| `Home` / `End` | Jump to Start / End |
| `1-9` | Jump to Slide N |

---

## 🎨 Design System

The framework uses a strict **8px grid system** for perfect alignment.

**Customizing Colors:**
You can change brand colors directly in the UI (🎨 icon) or edit `style.css`:
- `--green`: Primary Accent
- `--blue`: Secondary Accent
- `--navy`: Base Dark Color

---

## 📄 License & Contributing

This project is open-source. Feel free to fork, modify, and share!

### Next Steps:
- 👉 **Start**: [QUICKSTART.md](QUICKSTART.md)
- 📖 **Customize**: [CUSTOMIZATION.md](CUSTOMIZATION.md)
- ⚙️ **Setup**: [SETUP.md](SETUP.md)

Happy presenting! 🚀
