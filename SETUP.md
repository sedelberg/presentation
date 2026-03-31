# Setup & Configuration Guide

This guide covers installation, configuration, and deployment options for the HTML Presentation Framework.

---

## ⚡ Quick Setup (No Installation Required)

This framework requires **no installation**. It's just HTML, CSS, and JavaScript.

### 1. Open the Presentation

```bash
# On macOS or Linux, in terminal:
open presentation.html

# Or manually: Drag presentation.html into any browser
# Works in Chrome, Firefox, Safari, Edge, etc.
```

### 2. Edit Your Content

- Open `data.js` in your favorite text editor (VS Code, Sublime, Notepad++, etc.)
- Modify slide content
- Refresh browser (Ctrl+F5) to see changes

### 3. Add Images

- Save images to the `images/` folder
- Reference in `data.js` using `"images/filename.png"`

That's it! No build process, no dependencies, no servers needed.

---

## 📝 Configuration

### Global Settings

Edit the top of `data.js`:

```javascript
const presentationData = {
    globalTheme: "light",  // Change to "dark" for dark theme
    slides: [
        // Your slides here
    ]
};
```

### Available Global Options

| Option | Values | Default | Description |
| -------- | -------- | --------- | ------------- |
| `globalTheme` | `"light"`, `"dark"` | `"light"` | Default theme for all slides |

---

## 🎨 Customizing Appearance

### Change Brand Colors

Edit `style.css` and find the `:root` section:

```css
:root {
    --green: #01C38E;      /* Primary accent color */
    --navy: #132D46;       /* Dark blue background */
    --teal: #0F4C5C;       /* Secondary dark color */
    --blue: #0090D6;       /* Highlight/secondary color */
    --white: #FFFFFF;      /* Text on dark backgrounds */
    --light-bg: #F4F6F8;   /* Light gray for cards */
    --font-main: 'Lexend', sans-serif;
    --transition: 0.4s ease-in-out;
}
```

**Example**: Change primary green to purple

```css
--green: #9D4EDD;  /* Now all accents will be purple */
```

### Change Font

In `style.css`, modify `--font-main`:

```css
--font-main: 'Segoe UI', sans-serif;  /* Clean, modern font */
/* Or use Google Fonts: */
--font-main: 'Playfair Display', serif;  /* Elegant serif */
```

To use Google Fonts:

1. Add import at top of `style.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&display=swap');
```

1. Update `:root`:

```css
--font-main: 'Playfair Display', serif;
```

### Change Slide Padding/Spacing

In `style.css`, find the `.slide` class:

```css
.slide {
    padding: 60px 80px;  /* Change these values: [top/bottom] [left/right] */
}
```

- Smaller padding: `padding: 40px 60px;` (more compact)
- Larger padding: `padding: 80px 120px;` (more breathing room)

### Modify Header Styling

Find `.slide-header` in `style.css`:

```css
.slide-header {
    border-bottom: 2px solid var(--header-border);  /* Change thickness or remove */
    padding-bottom: 15px;  /* Space between title and border */
}
```

---

## 🖼️ Image Management

### Directory Structure

```text
presentation/
└── images/
    ├── logo.png       (Brand logo)
    ├── office.png     (Office/team photo)
    ├── product.png    (Product screenshot)
    ├── team.png       (Team photo)
    └── ...
```

### Best Practices

1. **Optimize images**: Compress before adding to reduce file size
   - Use [TinyPNG.com](https://tinypng.com/) or similar
   - Target <200KB per image for fast loading

2. **Naming convention**: Use descriptive, lowercase names
   - ✅ `product-dashboard.png`
   - ❌ `img1.png`

3. **Recommended sizes**:
   - **Logo**: 200×80 px
   - **Hero/full-screen**: 1920×1080 px
   - **Cards/split layouts**: 800×600 px

4. **Supported formats**:
   - PNG: Best for graphics, logos (use for crisp lines)
   - JPG: Best for photos (more compression)
   - WebP: Modern format, smallest file size (fallback to JPG)

---

## 🚀 Publishing & Deployment

### Option 1: Local File (Simplest)

No setup needed!

```bash
# Just open the file in your browser
open presentation.html
```

**Pros**: Works offline, instant
**Cons**: Can't easily share or present from projector

---

### Option 2: Local Web Server

Use a simple HTTP server for better testing.

#### Python 3 (recommended)

```bash
cd /path/to/presentation
python -m http.server 8000
```

Then visit: `http://localhost:8000/presentation.html`

#### Python 2

```bash
python -m SimpleHTTPServer 8000
```

#### Node.js

```bash
npx http-server
```

#### Ruby

```bash
ruby -run -ehttpd . -p8000
```

**Pros**: Test locally like it's on a server
**Cons**: Must run server command each time

---

### Option 3: GitHub Pages (Recommended for Sharing)

Host your presentation on GitHub for free.

#### Step 1: Create a GitHub repository

1. Go to [github.com/new](https://github.com/new)
2. Name it `presentation` (or anything)
3. Click "Create repository"

#### Step 2: Push your files

```bash
cd /path/to/presentation
git init
git add .
git commit -m "Initial presentation"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/presentation.git
git push -u origin main
```

#### Step 3: Enable GitHub Pages

1. Go to repository settings
2. Scroll to "Pages" section
3. Set "Source" to "main" branch
4. Click "Save"

Your presentation is now live at: `https://YOUR_USERNAME.github.io/presentation/`

**Pros**: Free, shareable link, version control, collaborative editing
**Cons**: Public (unless you make repo private)

---

### Option 4: Cloud Storage

#### Google Drive

1. Upload all files to a folder
2. Right-click `presentation.html`
3. Select "Open with" → Choose "Google Drive"
4. Share the link

#### OneDrive

1. Upload to OneDrive
2. Right-click `presentation.html`
3. Select "Share"
4. Get shareable link

#### AWS S3

```bash
# Configure AWS CLI first
aws s3 sync . s3://my-bucket/presentation/

# Make files public (in S3 console)
# Access at: https://my-bucket.s3.amazonaws.com/presentation.html
```

**Pros**: Cloud-based, works anywhere
**Cons**: May require cloud account setup

---

## 🔌 Advanced Setup

### Using a Custom Domain

If hosting on GitHub Pages with a custom domain:

1. Create `CNAME` file in repo:

```text
myslides.com
```

1. Configure DNS to point to GitHub Pages (see GitHub docs)

### Using a Build Tool (Optional)

If you want to use npm/webpack for advanced features:

```bash
npm init -y
npm install --save-dev webpack webpack-cli
```

Then create `webpack.config.js` (but most users won't need this).

---

## 🔐 Security Considerations

### If Hosting Online

1. **Check image URLs**: Ensure all images load correctly
2. **Validate data.js**: No sensitive information should be in slides
3. **HTTPS**: Use https:// when sharing over internet
4. **Access control**: If on private server, password-protect if needed

### Local Use

No security concerns when running locally.

---

## 🌐 Browser Compatibility

| Browser | Support | Notes |
| --------- | --------- | ------- |
| Chrome/Chromium | ✅ Full | Latest versions (90+) |
| Firefox | ✅ Full | Latest versions (88+) |
| Safari | ✅ Full | Latest versions (14+) |
| Edge | ✅ Full | Latest versions (90+) |
| IE 11 | ⚠️ Partial | Basic support, some features missing |
| Mobile browsers | ✅ Full | Works on iPad, tablets, phones |

### Required Browser Features

- ES6+ JavaScript support
- CSS Flexbox and Grid
- `sessionStorage` or `localStorage` (for state management)

---

## 📊 Performance Tips

### Optimize for Presentations

1. **Compress images**: Reduce to <200KB each

   ```bash
   # Using ImageMagick
   convert image.jpg -quality 80 -resize 1920x1080 optimized.jpg
   ```

2. **Minimize network requests**: Minimize external CDN calls
   - Chart.js loads from CDN (necessary for charts)
   - Fonts load from Google Fonts (optimize with fewer weights)

3. **Pre-load presentation**: Open in browser tab 5 minutes before presenting
   - Browser will cache all assets
   - Ensures smooth animation during live presentation

4. **Test on presentation device**:
   - Test on actual projector/monitor before presenting
   - Check that text is readable from 10 feet away

### Monitor File Size

```bash
# Check total size
du -sh .

# Check individual files
du -h presentation.html data.js style.css
du -sh images/
```

Typical sizes:

- `presentation.html`: 6-8 KB
- `data.js`: 2-5 KB (depends on content)
- `style.css`: 8-10 KB
- `images/`: 500 KB - 2 MB (depends on number/quality)

---

## 🐛 Troubleshooting Setup

### Presentation.html won't open

- **Solution**: Drag file directly into Chrome/Firefox window

### Images still not showing

- **Check**: Does the file exist in `images/` folder?
- **Check**: Is path correct in `data.js`? Must be `"images/filename.png"` (lowercase)
- **Debug**: Open browser console (F12), look for 404 errors

### Changes not appearing after editing data.js

- **Solution**: Hard refresh browser: `Ctrl+F5` (Windows) or `Cmd+Shift+R` (Mac)
- **Alternative**: Clear browser cache completely

### Styles look wrong

- **Solution**: Make sure `style.css` is in same folder as `presentation.html`
- **Solution**: Hard refresh (Ctrl+F5)

### JavaScript errors in console

- **Check**: Browser version is recent (Chrome/Firefox within last 6 months)
- **Check**: No syntax errors in `data.js` (missing commas, quotes)

---

## 📚 Next Steps

- See [QUICKSTART.md](QUICKSTART.md) for 5-minute minimal example
- See [CUSTOMIZATION.md](CUSTOMIZATION.md) for advanced tweaks
- See [README.md](README.md) for complete feature list
