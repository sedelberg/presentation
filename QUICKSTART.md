# Quick Start: Create Your First Presentation (5 Minutes)

## 🎯 The Simplest Possible Example

This guide walks through creating a minimal 3-slide presentation from scratch.

---

## Step 1: Open presentation.html (1 min)

```bash
# On any computer, simply open the file in a web browser:
open presentation.html    # macOS
# Or Linux:
firefox presentation.html

# Or on Windows: Right-click presentation.html and select "Open with Chrome"
```

You should see a beautiful Data & Analytics presentation. ✨

---

## Step 2: Create Your Data (2 min)

Open `data.js` in any text editor (VS Code, Notepad++, Sublime, etc.).

Replace **everything** with this minimal example:

```javascript
const presentationData = {
    globalTheme: "light",
    slides: [
        {
            type: "cover",
            theme: "dark",
            title: "My First Presentation",
            subtitle: "Created in HTML",
            date: "March 31, 2026"
        },
        {
            type: "text",
            title: "Key Points",
            items: [
                "Point 1: Something important",
                "Point 2: Another important idea",
                "Point 3: The conclusion"
            ]
        },
        {
            type: "contact",
            theme: "dark",
            title: "Thank You",
            email: "you@example.com",
            phone: "+1 (555) 123-4567",
            location: "Your City"
        }
    ]
};
```

**Save the file** (Ctrl+S or Cmd+S).

---

## Step 3: View Your Presentation (1 min)

Go back to your browser and **refresh** (F5 or Ctrl+R).

You now have a working 3-slide presentation! 🎉

**Navigate:**

- Press `→` (right arrow) to go to next slide
- Press `←` (left arrow) to go to previous slide
- Press `Space` to advance
- Press `F` for fullscreen

---

## 🚀 Next: Customize Your Presentation

### Add Your Own Title & Info

Change the `title`, `subtitle`, `email`, `phone`, and `location` to your information.

### Add More Slides

Add more objects to the `slides` array:

```javascript
const presentationData = {
    globalTheme: "light",
    slides: [
        // ... existing slides ...
        {
            type: "agenda",
            title: "Today's Agenda",
            items: [
                "Introduction",
                "Main topic",
                "Key points",
                "Q&A"
            ]
        },
        {
            type: "number-highlight",
            title: "The Impact",
            number: "+42%",
            text: "Our solution improved efficiency"
        }
    ]
};
```

Save and refresh in browser. ✅

---

## 🎨 Try Different Slide Types

### Metrics & KPIs

```javascript
{
    type: "kpi",
    title: "Performance",
    metrics: [
        { label: "Revenue", value: "$1M", status: "up", detail: "+20% YoY" },
        { label: "Users", value: "5K", status: "up", detail: "+15%" },
        { label: "Churn", value: "2%", status: "down", detail: "Excellent" },
        { label: "NPS", value: "72", status: "up", detail: "+5 points" }
    ]
}
```

### Charts & Data

```javascript
{
    type: "chart-bar",
    title: "Sales by Region",
    description: "Q1 sales breakdown",
    chartData: {
        labels: ["North", "South", "East", "West"],
        datasets: [{ label: "Sales ($K)", data: [120, 90, 150, 110] }]
    }
}
```

### Images

```javascript
{
    type: "image-split",
    title: "Our Team",
    content: "<p>Meet the talented people behind the scenes</p",
    image: "images/team.png"
}
```

---

## 📋 All Available Slide Types

**Title Slides:**

- `cover` — Title slide with branding
- `contact` — Thank you / contact information
- `section-break` — Minimal section divider

**Content:**

- `text` — Bullets and text
- `agenda` — List of topics
- `quote` — Inspirational quote

**Data:**

- `kpi` — 4 metrics dashboard
- `number-highlight` — Single large number
- `chart-bar` — Bar chart

**Layouts:**

- `workflow` — Process flow diagram
- `timeline` — Project timeline
- `two-column` — Side-by-side content
- `grid` — Card grid

**Media:**

- `image-split` — Text + image side-by-side
- `image-full` — Full-screen image
- `image-background` — Image with text overlay
- `video` — Embedded video

See [README.md](README.md) for details and examples of each.

---

## 🎨 Quick Styling Changes

To change colors, edit `style.css` at the very top:

```css
:root {
    --green: #01C38E;      /* Change this number to any hex color */
    --blue: #0090D6;       /* #FF0000 = red, #0000FF = blue, etc. */
    --navy: #132D46;       /* #FFFF00 = yellow */
    /* ... etc ... */
}
```

**Example colors:**

- Bright green: `#00FF00`
- Purple: `#9D4EDD`
- Orange: `#FF8C42`

Find more colors at: [Coolors.co](https://coolors.co/)

---

## ❌ Stuck? Common Issues

**Presentation doesn't update?**
→ Hard refresh: `Ctrl+F5` (Windows) or `Cmd+Shift+R` (Mac)

**JavaScript errors?**
→ Open browser console (F12), look for red errors. Usually a missing comma or quote in `data.js`

**Slides not showing?**
→ Make sure you saved `data.js` and refreshed browser

**Images not showing?**
→ Images must be in `images/` folder, referenced as `"images/filename.png"`

---

## 📚 Next Steps

- 📖 Read [README.md](README.md) for complete feature list and examples
- ⚙️ See [SETUP.md](SETUP.md) to deploy online or customize configuration
- 🎨 Visit [CUSTOMIZATION.md](CUSTOMIZATION.md) for advanced styling and theme creation
- 📋 Check `data-template.js` for comprehensive examples of all slide types
- 📁 Browse `examples/` folder for pre-built templates (sales, training, quarterly review)

---

## 💡 Pro Tips

1. **Copy the original `data.js`** as backup before making changes
2. **Test in fullscreen** (Press `F`) before presenting
3. **Export as PDF** (Ctrl+P) to create a static version for sharing
4. **Use GitHub Pages** to host online (see [SETUP.md](SETUP.md))
5. **Keyboard navigation works best** on projectors/large displays

---

## 🎉 You're Ready

You now have a working HTML presentation. Follow the documentation links above to learn more advanced features.

Happy presenting! 🚀

---

**Questions?** See [SETUP.md](SETUP.md) (Setup & Deployment) or [CUSTOMIZATION.md](CUSTOMIZATION.md) (Advanced Styling)
