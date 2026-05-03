# Quick Start: Create Your First Presentation (5 Minutes)

## 🎯 The Simplest Possible Example

This guide walks through creating a professional 3-slide presentation from scratch.

---

## Step 1: Open presentation.html (1 min)

Simply open the file in any modern web browser. You should see a cinematic Data & Analytics presentation. ✨

---

## Step 2: Create Your Data (2 min)

Open `data.js` in any text editor and replace the content with this example:

```javascript
const presentationData = {
    globalTheme: "light",
    slides: [
        {
            type: "cover",
            theme: "dark",
            title: "My Technical Talk",
            subtitle: "Built with Cinematic HTML",
            date: "May 2026",
            notes: "Welcome the audience and introduce the topic."
        },
        {
            type: "code",
            title: "The Core Logic",
            filename: "main.js",
            language: "javascript",
            code: "function start() {\n  console.log('Presentation Active! 🚀');\n}",
            notes: "Explain how the code highlighting works via Prism.js."
        },
        {
            type: "contact",
            theme: "dark",
            title: "Let's Connect",
            email: "you@example.com",
            location: "San Francisco, CA"
        }
    ]
};
```

**Save the file** (Ctrl+S).

---

## Step 3: View & Control (1 min)

Go back to your browser and **refresh** (F5).

### ⌨️ Master the Controls

- **Advance**: `→` or `Space`
- **Slide Sorter**: Press `G` to see the "Bird's Eye" grid.
- **Presenter View**: Click the **📽️** icon to open your notes in a second window.
- **Brand Colors**: Click the **🎨** icon to change your theme on the fly.
- **Export**: Click the **📄** icon to save a professional PDF.

---

## 🎨 Professional Slide Types

Try adding these to your `slides` array:

### Team Showcase
```javascript
{
    type: "team",
    title: "The Lead Developers",
    members: [
        { name: "Alex Riv", role: "UI/UX", image: "images/team.png" },
        { name: "Sam Tech", role: "Backend", image: "images/team.png" }
    ]
}
```

### Global Reach
```javascript
{
    type: "map",
    title: "Our Global Footprint",
    locations: [{ x: 200, y: 150, label: "HQ" }]
}
```

### Competitive Matrix
```javascript
{
    type: "table",
    title: "How We Compare",
    headers: ["Feature", "Us", "Them"],
    rows: [["Speed", true, false], ["Cost", "Low", "High"]]
}
```

---

## ❌ Stuck?

**Presentation doesn't update?** Hard refresh: `Ctrl+F5`.
**Images not showing?** Must be in `images/` folder.
**YouTube errors?** The framework auto-transforms URLs, just ensure they are valid.

Happy presenting! 🚀
