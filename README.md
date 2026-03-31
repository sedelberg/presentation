# 🎯 HTML Presentation Framework

A lightweight, beautiful HTML-based alternative to PowerPoint that lets you create stunning presentations using simple JSON data. Perfect for technical and business presentations alike.

## ✨ Why HTML Presentations?

- **Version Control Friendly**: Track changes in Git, collaborate easily
- **No Software Required**: Runs in any modern browser (no PowerPoint license needed)
- **Responsive Design**: Looks great on projectors, displays, and tablets
- **Keyboard Navigation**: Navigate with arrow keys or spacebar
- **Easy Customization**: Edit colors, fonts, and layouts in one place
- **Print to PDF**: Export presentations directly from your browser
- **Lightweight**: Just HTML, CSS, and JSON—minimal dependencies

---

## 🚀 Quick Start (5 Minutes)

### 1. **Open the presentation**
```bash
# Simply open in your browser
open presentation.html
# Or on Linux:
firefox presentation.html
```

### 2. **Navigate**
- **Next slide**: `→` or `Space`
- **Previous slide**: `←`
- **First slide**: `Home`
- **Last slide**: `End`
- **Fullscreen**: `F`
- **Print/Export as PDF**: `Ctrl+P` (or Cmd+P on Mac)

### 3. **Edit slides** (see examples below)
- Open `data.js` in your text editor
- Modify or add slides (see "[Slide Types](#slide-types)" section)
- Refresh `presentation.html` in browser to see changes

### 4. **Add images**
- Place images in the `images/` directory
- Reference them in `data.js` using relative paths like `"images/myimage.png"`

---

## 📁 File Structure

```
presentation/
├── presentation.html      # Main presentation viewer (no edits needed)
├── data.js               # Your slide content (EDIT THIS)
├── style.css             # Theme & styling (edit for customization)
├── README.md             # This file
├── SETUP.md              # Detailed setup instructions
├── CUSTOMIZATION.md      # Advanced customization guide
├── QUICKSTART.md         # Minimal "Hello World" example
├── data-template.js      # Examples of all slide types
├── images/               # Image assets
│   ├── logo.png
│   ├── office.png
│   └── team.png
└── examples/             # Pre-built presentation templates
    ├── sales-pitch/
    ├── training/
    └── quarterly-review/
```

---

## 🎨 Slide Types

This framework supports **17 different slide types**. Each slide is defined in `data.js` with a `type` and relevant properties.

### **Title Slides**

#### 1. **Cover** — Title slide with branding
```javascript
{
    type: "cover",
    theme: "dark",
    title: "My Awesome Presentation",
    subtitle: "A showcase of ideas",
    date: "March 31, 2026"
}
```
**Use for**: Opening slide, large visual impact

---

#### 2. **Contact** — Contact/thank you slide
```javascript
{
    type: "contact",
    theme: "dark",
    title: "Thank You",
    email: "hello@example.com",
    phone: "+1 (555) 123-4567",
    location: "New York, NY"
}
```
**Use for**: Closing slide, speaker information

---

### **Content Slides**

#### 3. **Agenda** — List of topics
```javascript
{
    type: "agenda",
    title: "Agenda",
    items: [
        "Opening remarks",
        "Market analysis",
        "Sales forecast",
        "Q&A"
    ]
}
```
**Use for**: Outlining presentation structure

---

#### 4. **Text** — Simple text with bullets
```javascript
{
    type: "text",
    title: "Key Findings",
    items: [
        "Revenue increased 25% YoY",
        "Customer satisfaction up to 92%",
        "Expanded to 3 new markets"
    ]
}
```
**Use for**: Bullet point content, quick facts

---

#### 5. **Quote** — Inspirational or impactful quote
```javascript
{
    type: "quote",
    theme: "dark",
    title: "Core Philosophy",
    quote: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney"
}
```
**Use for**: Section breaks, inspirational moments

---

#### 6. **Section-break** — Minimal topic divider
```javascript
{
    type: "section-break",
    title: "Part 2: Deep Dive",
    subtitle: "Technical Architecture",
    theme: "dark"
}
```
**Use for**: Separating major sections, visual breathing room

---

### **Data Visualization Slides**

#### 7. **KPI** — Key Performance Indicators (4 metrics)
```javascript
{
    type: "kpi",
    title: "Performance Scorecard",
    metrics: [
        { label: "Revenue", value: "$2.4M", status: "up", detail: "+12% MoM" },
        { label: "Customers", value: "1,247", status: "up", detail: "+8%" },
        { label: "Churn Rate", value: "3.2%", status: "down", detail: "Target: 2%" },
        { label: "NPS Score", value: "62", status: "up", detail: "+5 pts" }
    ]
}
```
**Use for**: Executive summaries, dashboard-style metrics

---

#### 8. **Number-highlight** — Single large number with context
```javascript
{
    type: "number-highlight",
    title: "Cost Reduction",
    number: "-$2.3M",
    text: "Annual savings achieved through process automation and infrastructure optimization."
}
```
**Use for**: Highlighting a single impactful metric

---

#### 9. **Chart-bar** — Bar chart (using Chart.js)
```javascript
{
    type: "chart-bar",
    title: "Quarterly Sales by Region",
    description: "Revenue comparison across geographic regions (in millions).",
    chartData: {
        labels: ["North America", "Europe", "Asia-Pacific", "LATAM"],
        datasets: [
            { label: "Q1 Sales", data: [120, 95, 75, 45] }
        ]
    }
}
```
**Use for**: Comparing values, trends, regional breakdowns

---

### **Layout Slides**

#### 10. **Workflow** — Process flow with steps
```javascript
{
    type: "workflow",
    title: "Production Pipeline",
    description: "Our 5-stage manufacturing workflow.",
    steps: [
        { name: "Design", detail: "CAD & Prototyping" },
        { name: "Engineering", detail: "Build & Test" },
        { name: "Manufacturing", detail: "Production" },
        { name: "Quality", detail: "QA & Inspection" },
        { name: "Delivery", detail: "Ship to Customer" }
    ]
}
```
**Use for**: Process diagrams, workflows, multi-stage journeys

---

#### 11. **Timeline** — Chronological events
```javascript
{
    type: "timeline",
    title: "Project Milestones",
    events: [
        { date: "Jan 2026", text: "Project kick-off" },
        { date: "Mar 2026", text: "Phase 1 complete" },
        { date: "Jun 2026", text: "Beta launch" },
        { date: "Sep 2026", text: "General availability" }
    ]
}
```
**Use for**: Project timelines, product roadmaps, company milestones

---

### **Media Slides**

#### 12. **Image-split** — Side-by-side text and image
```javascript
{
    type: "image-split",
    title: "Our Team",
    content: "<h3>Global Talent</h3><p>We bring together experts from around the world. Our diverse team is our greatest asset.</p><ul><li>50+ team members</li><li>15 countries</li><li>24/7 support</li></ul>",
    image: "images/team.png"
}
```
**Use for**: Product features, team highlights, before/after

---

#### 13. **Image-full** — Full-screen image with caption
```javascript
{
    type: "image-full",
    title: "Product Overview",
    image: "images/product.png",
    caption: "Our flagship platform in action"
}
```
**Use for**: Product screenshots, architectural diagrams, visual content

---

#### 14. **Image-background** — Image as background with text overlay
```javascript
{
    type: "image-background",
    theme: "dark",
    title: "Our Vision",
    content: "Building a better future through technology and innovation.",
    image: "images/office.png"
}
```
**Use for**: Inspirational slides, brand moments, dramatic visuals

---

#### 15. **Video** — Embedded videos (YouTube, Vimeo, or MP4) ✨ NEW
```javascript
{
    type: "video",
    title: "Product Demo",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    caption: "See our platform in action"
}
```
**Use for**: Product demonstrations, customer testimonials, explainer videos

---

### **Multi-Column Layouts** ✨ NEW

#### 16. **Two-column** — Side-by-side columns
```javascript
{
    type: "two-column",
    title: "Comparison Framework",
    leftLabel: "Traditional Approach",
    rightLabel: "Our Solution",
    leftContent: "<h3>Manual Processes</h3><p>Time-consuming</p><p>Error-prone</p><p>Limited scalability</p>",
    rightContent: "<h3>Automated Workflows</h3><p>Fast & efficient</p><p>Accurate & reliable</p><p>Scales effortlessly</p>"
}
```
**Use for**: Side-by-side comparisons, tutorials, pros/cons

---

#### 17. **Grid** — Responsive card grid ✨ NEW
```javascript
{
    type: "grid",
    title: "Our Core Competencies",
    description: "Five pillars of our success",
    columns: 3,
    items: [
        {
            title: "Innovation",
            description: "Cutting-edge technology",
            icon: "🚀"
        },
        {
            title: "Reliability",
            description: "99.9% uptime guarantee",
            icon: "⚙️"
        },
        {
            title: "Support",
            description: "24/7 customer support",
            icon: "🤝"
        }
    ]
}
```
**Use for**: Feature showcase, team members, product highlights

---

## 🎨 Themes

Apply themes globally or per-slide:

**Global theme** (in `data.js`):
```javascript
const presentationData = {
    globalTheme: "light",  // or "dark"
    slides: [ ... ]
};
```

**Per-slide override**:
```javascript
{
    type: "cover",
    theme: "dark",  // This slide uses dark theme
    title: "..."
}
```

### Available Themes

| Theme | Background | Text | Use Case |
|-------|-----------|------|----------|
| **light** | White | Navy | Default, high contrast, readable |
| **dark** | Navy | White | Dark rooms, projectors, dramatic |

---

## ⌨️ Keyboard Controls

| Key | Action |
|-----|--------|
| `→` or `Space` | Next slide |
| `←` | Previous slide |
| `Home` | First slide |
| `End` | Last slide |
| `F` | Fullscreen mode |
| `Ctrl+P` / `Cmd+P` | Print/Export as PDF |

---

## 🖼️ Images

### Recommended Image Sizes
- **Full-screen images**: 1920×1080 px (16:9)
- **Logos**: 200×80 px or larger (at any aspect ratio)
- **Split images**: 800×600 px
- **Cards in grid**: 400×300 px

### Supported Formats
- PNG (recommended for graphics)
- JPG (best for photos)
- WebP (modern, smaller file size)
- GIF (animations supported)

### Adding Images
1. Save images to the `images/` folder
2. Reference in `data.js`: `"images/myimage.png"`
3. Refresh browser

---

## 📊 Charts

Charts use [Chart.js](https://www.chartjs.org/). Currently supported:

### **Bar Charts** (`type: "chart-bar"`)
```javascript
{
    type: "chart-bar",
    title: "Sales by Region",
    chartData: {
        labels: ["Q1", "Q2", "Q3", "Q4"],
        datasets: [{
            label: "Revenue ($M)",
            data: [120, 151, 106, 92]
        }]
    }
}
```

### Supported Chart Types
- ✅ Bar charts (vertical)
- 🔄 (Coming soon) Pie/doughnut, line, area

---

## 🎯 Real-World Examples

### Sales Pitch Presentation
See `examples/sales-pitch/` for a complete pre-built sales presentation structure.

### Training Module
See `examples/training/` for an educational presentation with learning objectives, key concepts, and assessments.

### Quarterly Business Review
See `examples/quarterly-review/` for KPI dashboards, timeline, and metrics.

---

## 🔧 Customization

For detailed customization options, see [CUSTOMIZATION.md](CUSTOMIZATION.md).

### Quick Customizations

**Change brand colors** in `style.css`:
```css
:root {
    --green: #01C38E;      /* Primary accent */
    --blue: #0090D6;       /* Secondary */
    --navy: #132D46;       /* Dark backgrounds */
    --white: #FFFFFF;
}
```

**Change fonts**:
```css
:root {
    --font-main: 'Lexend', sans-serif;  /* Currently using Lexend */
}
```

**Modify slide padding/spacing**:
```css
.slide {
    padding: 60px 80px;  /* Top/bottom and left/right */
}
```

---

## 🚀 Publishing & Sharing

### Option 1: Local File
- Open `presentation.html` directly in browser
- Works offline

### Option 2: Simple Web Server
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js (if installed)
npx http-server
```
Then open `http://localhost:8000/presentation.html`

### Option 3: GitHub Pages
- Push to GitHub repo
- Enable GitHub Pages in repo settings
- Access at `https://yourusername.github.io/presentation/`

### Option 4: Cloud Storage
- Upload to AWS S3, Google Drive, or OneDrive
- Share link with viewers

---

## ❓ Troubleshooting

**Images not showing?**
- Verify image file exists in `images/` folder
- Check file path in `data.js` (should be `"images/filename.png"`)
- Check browser console (F12) for error messages

**Chart not rendering?**
- Ensure Chart.js library loaded (it auto-loads from CDN)
- Check chart data format in `data.js`
- Look for JavaScript errors in browser console

**Keyboard controls not working?**
- Click on the presentation to ensure it has focus
- Refresh browser
- Try different browser if issue persists

**Presentation not updating after editing?**
- Hard refresh browser: `Ctrl+F5` (Windows) or `Cmd+Shift+R` (Mac)
- Clear browser cache if problem persists
- Ensure you've saved `data.js`

**Theme not applying?**
- Check `theme` property spelling (must be exactly `"light"` or `"dark"`)
- Verify global theme in `presentationData.globalTheme`
- Hard refresh browser (Ctrl+F5)

For more help, see [SETUP.md](SETUP.md) and [CUSTOMIZATION.md](CUSTOMIZATION.md).

---

## 📋 Browser Support

- ✅ Chrome/Chromium (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ⚠️ IE 11 (basic support, no responsive features)

Requires: ES6+ support, CSS Flexbox/Grid

---

## 📄 License

This project is open source. Modify and share freely.

---

## 🤝 Contributing

Have ideas for improvements? Found a bug?
1. Create an issue describing the problem
2. Submit a pull request with changes
3. Include before/after screenshots if visual changes

---

## 📚 Next Steps

- 👉 **Start here**: See [QUICKSTART.md](QUICKSTART.md) for a 5-minute minimal example
- 📖 **Learn more**: Read [SETUP.md](SETUP.md) for detailed configuration
- 🎨 **Customize**: Check [CUSTOMIZATION.md](CUSTOMIZATION.md) for advanced tweaks
- 📋 **Get templates**: Browse `examples/` folder for pre-built presentations
- 🔍 **Explore types**: See `data-template.js` for examples of all 17 slide types

---

**Happy presenting! 🎉**
