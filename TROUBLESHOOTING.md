# Troubleshooting Guide

Complete troubleshooting guide for common issues with the HTML Presentation Framework.

---

## 🎥 **Presentation Won't Display**

### Issue: Blank white screen when opening presentation.html

**Check List:**

1. ✓ Is `presentation.html` in the same folder as `data.js` and `style.css`?
2. ✓ Are all three files present in the directory?
3. ✓ Is the file using correct extension `.html` (not `.txt` or `.htm`)?

**Solutions:**

**Solution 1: Verify File Locations**

```bash
# Check if files exist
ls -la presentation.html data.js style.css

# Output should show all three files
# If missing, copy them to your directory
```

**Solution 2: Hard Refresh Browser**

- Windows: `Ctrl + F5`
- Mac: `Cmd + Shift + R`
- This clears browser cache that might have old version

**Solution 3: Try Different Browser**

- Chrome, Firefox, Safari, or Edge
- Some older browser versions may not support ES6+ JavaScript

**Solution 4: Check Browser Console for Errors**

1. Open browser developer tools: `F12`
2. Go to "Console" tab
3. Look for red error messages
4. Screenshot the error and search for it in documentation

---

## 🖼️ **Images Not Showing**

### Issue: Slide titles appear but images are missing (broken image icon)

**Most Common Cause**: Incorrect file path in `data.js`

**Quick Fix:**

1. **Check image file exists**:

   ```bash
   ls images/
   # Should show your image files like: logo.png, team.png, etc.
   ```

2. **Check path in data.js**:
   - Should be: `"images/filename.png"` (lowercase `images/`)
   - NOT: `"Images/filename.png"` or `"./images/filename.png"` or `"/images/filename.png"`

3. **Example - CORRECT**:

   ```javascript
   {
       type: "image-split",
       title: "My Slide",
       image: "images/myimage.png",  // ✓ Correct
       content: "..."
   }
   ```

4. **Example - INCORRECT**:

   ```javascript
   {
       type: "image-split",
       image: "Images/myimage.PNG",  // ✗ Wrong (capital I, uppercase extension)
       image: "/images/myimage.png", // ✗ Wrong (leading slash)
       image: "../images/myimage.png", // ✗ Wrong (changed context path)
       image: "C:\Users\MyPC\images\myimage.png" // ✗ Wrong (full path)
   }
   ```

**Detailed Troubleshooting:**

**Step 1: Verify Image File**

```bash
# Navigate to images folder
cd images

# List all files
ls -la

# Check file size (if 0 KB, file is corrupted)
# Check file extension (should match what you referenced)
```

**Step 2: Check Spelling Exactly**

- File name: `myimage.png` → must use `"images/myimage.png"` in data.js
- Files are case-sensitive on Mac/Linux
- File name: `MyImage.png` ≠ `myimage.png` (different files)
- File name: `photo.PNG` ≠ `"images/photo.png"` (different extensions)

**Step 3: Open Browser Console**

- `F12` → Console tab
- Look for: `404 Not Found` errors for images
- Error message will show exact path it's looking for

**Step 4: Verify path in HTML**
If coming from browser console, image path should say:

- `Failed to load resource: the server responded with a status of 404 (Not Found)`
- Check the path shown in the error matches your file

---

## ⌨️ **Keyboard Controls Not Working**

### Issue: Arrow keys, spacebar not advancing slides

**Solutions:**

**Solution 1: Focus the Presentation**

- Click anywhere on the slide
- Then try arrow keys
- Some browsers require presentation to have focus

**Solution 2: Check for JavaScript Errors**

1. Open `F12` developer tools
2. Go to Console tab
3. Look for RED error messages
4. Common error: `Uncaught SyntaxError in data.js`
   - This means `data.js` has a syntax error (missing comma, quote, or bracket)

**Solution 3: Try Alternative Keys**

| Key | Action |
|-----|--------|
| `→` (right arrow) | Next |
| `Space` | Next |
| `←` (left arrow) | Previous |
| `Home` | First slide |
| `End` | Last slide |
| `F` | Fullscreen |
| `1-9` | Jump to slide 1-9 |

**Solution 4: Update presentation.html**

- Make sure you have the latest version
- If older version, it may not have all keyboard features
- Download fresh copy from repository

---

## 🔴 **Slides Not Updating After Editing data.js**

### Issue: Changes to data.js don't appear in browser

**Solution 1: Save the File**

- In your text editor, save with `Ctrl+S` or `Cmd+S`
- Look for save indicator (dot or asterisk disappears from filename)

**Solution 2: Hard Refresh Browser**

- **Windows**: `Ctrl + F5` (not just F5)
- **Mac**: `Cmd + Shift + R`
- **Why?**: Browser caches old data.js file

**Solution 3: Clear Cache Completely**

1. Open browser settings/preferences
2. Find "Clear browsing data"
3. Check "Cached images and files"
4. Click "Clear"
5. Restart browser

**Solution 4: Check for Syntax Errors in data.js**

1. Open `F12` → Console
2. Look for red errors related to `data.js`
3. Common errors:
   - Missing comma between slide objects
   - Missing closing quote or bracket
   - Extra comma after last item in array

**Syntax Error Example**:

```javascript
const presentationData = {
    slides: [
        {
            type: "cover",
            title: "First Slide",
            subtitle: "Subtitle"
            // ❌ Missing comma above ^
        },
        // ...
    ]
};
```

**Fixed Version**:

```javascript
const presentationData = {
    slides: [
        {
            type: "cover",
            title: "First Slide",
            subtitle: "Subtitle"  // ✓ Comma added
        },
        // ...
    ]
};
```

---

## 🎨 **Styling Issues**

### Issue: Colors/fonts not applying correctly

**Possible Causes:**

**Cause 1: Browser Cache**

- Solution: Hard refresh `Ctrl+F5` or `Cmd+Shift+R`

**Cause 2: CSS file not found**

- Check `style.css` is in same folder as `presentation.html`
- Verify file is named exactly `style.css` (lowercase)

**Cause 3: Syntax error in style.css**

- Open `F12` → go to Elements/Inspector
- Look for any CSS warnings (usually yellow)
- Check for missing semicolons or closing brackets

**Cause 4: Override not specific enough**

- If you added custom CSS, make sure it's more specific than default
- Use `!important` if necessary:

  ```css
  .slide-title {
      color: #FF0000 !important;  /* Forces this color */
  }
  ```

**Debug CSS:**

1. Open `F12` developer tools
2. Right-click on element with wrong style
3. Select "Inspect"
4. Look at "Styles" panel on right
5. See which CSS rules are applied and which are crossed out
6. Find the active rule and modify in `style.css`

---

## 📊 **Charts Not Rendering**

### Issue: Blank space where chart should be

**Possible Causes:**

**Cause 1: Chart.js library not loading**

- This loads from CDN (internet required)
- Check internet connection
- Open `F12` console for `Chart.js` errors

**Cause 2: Incorrect chart data format**

- Check `chartData` object structure
- Must have `labels` array and `datasets` array
- Each dataset must have `label`, `data` array

**Correct Format**:

```javascript
{
    type: "chart-bar",
    title: "Sales",
    chartData: {
        labels: ["Q1", "Q2", "Q3", "Q4"],  // ✓ Array of labels
        datasets: [{
            label: "Revenue",
            data: [100, 120, 130, 150]  // ✓ Array of numbers
        }]
    }
}
```

**Common Errors**:

```javascript
// ❌ Wrong: labels as string
labels: "January, February, March"

// ❌ Wrong: data without dataset wrapper
data: [100, 120, 130]

// ❌ Wrong: mismatched data length
labels: ["Q1", "Q2"],
datasets: [{ data: [100, 120, 130] }]  // 3 data points, 2 labels
```

**Cause 3: Canvas element not found**

- Framework auto-creates canvas
- If chart still doesn't appear:
  1. Check HTML has canvas element: `<canvas id="chart-0"></canvas>`
  2. Refresh browser
  3. Check console for errors

---

## 🚫 **Browser Compatibility Issues**

### Issue: Presentation works in one browser but not another

**Check Browser Compatibility:**

| Browser | Support | Minimum Version |
|---------|---------|-----------------|
| Chrome | ✅ Full | 90+ |
| Firefox | ✅ Full | 88+ |
| Safari | ✅ Full | 14+ |
| Edge | ✅ Full | 90+ |
| IE 11 | ⚠️ Partial | 11 |

**Solutions:**

**For IE 11**:

- Works but some features missing
- No CSS Grid (some layouts break)
- Keyboard shortcuts may not work
- Suggestion: Use modern browser instead

**For Older Browser Versions**:

- Update browser to latest version
- Most browsers auto-update now

**For Mobile Browsers**:

- Should work fine on iPad, Android tablets
- May have issues with very small screens (phones)
- Adjust CSS media queries if needed

---

## 🔗 **Links and Navigation Issues**

### Issue: Can't navigate to specific slides or hyperlinks broken

**For Navigation**:

- Use Home key to go to first slide
- Use End key to go to last slide
- Use number keys 1-9 to jump to slides 1-9
- Use arrow keys or space to advance

**For External Links**:

- HTML content supports standard `<a href>` tags
- Example: `content: "<a href='https://google.com'>Click here</a>"`
- Links will open in current tab/window
- To open in new tab: `<a href='...' target='_blank'>`

---

## 💻 **JavaScript Errors**

### Issue: Red errors in browser console

**Common Error #1: "Cannot read property 'slides' of undefined"**

**Cause**: `data.js` not loading or has syntax error

**Solution**:

1. Check `data.js` exists in same folder
2. Check for syntax errors (missing commas, brackets)
3. Ensure `data.js` is loaded before main script in HTML
4. Try fresh copy of `data.js` from examples

**Common Error #2: "Unexpected token 'x' in JSON"**

**Cause**: Invalid JavaScript syntax in `data.js`

**Solution**:

1. Look at line number in error
2. Check around that line for missing quotes, commas, brackets
3. Use online JSON validator: [jsonlint.com](https://jsonlint.com)
4. Paste your `data.js` content to find exact error

**Common Error #3: "ReferenceError: presentationData is not defined"**

**Cause**: `data.js` file not found or not included in HTML

**Solution**:

1. Verify `data.js` exists in folder
2. Check HTML has `<script src="data.js"></script>` tag
3. Make sure it's before the main script tag

---

## 🔊 **Video Issues**

### Issue: Video not playing or embed not showing

**For YouTube Videos**:

- Must use **embed** URL: `https://www.youtube.com/embed/VIDEO_ID`
- NOT the watch URL: `https://www.youtube.com/watch?v=VIDEO_ID`

**Correct**:

```javascript
videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
```

**Incorrect**:

```javascript
videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
```

**For Vimeo Videos**:

- Must use **player** URL: `https://player.vimeo.com/video/VIDEO_ID`

**For MP4 Files**:

- File should be in `images/` folder or served from URL
- Example: `videoUrl: "images/demo.mp4"` or `"https://cdn.example.com/video.mp4"`

**If Video Still Won't Play**:

1. Check URL is correct in browser address bar
2. Verify video isn't age-restricted (YouTube)
3. Check content is accessible without login
4. Try different video source
5. Check browser console for CORS errors

---

## ❓ **Still Not Solved?**

### Getting More Help

1. **Check the Documentation**:
   - [README.md](README.md) - Feature reference
   - [SETUP.md](SETUP.md) - Setup instructions
   - [CUSTOMIZATION.md](CUSTOMIZATION.md) - Advanced options

2. **Look at Examples**:
   - Browse `/examples/` folder for working presentations
   - Compare your `data.js` to example files

3. **Gather Information**:
   - Screenshot of error
   - Browser console output (F12)
   - Exact error message
   - Steps to reproduce

4. **Search Documentation**:
   - Use Ctrl+F to search this guide for keywords
   - Search README and SETUP for your issue

---

## 📋 **Quick Reference: Common Fixes**

| Problem | Quick Fix |
|---------|-----------|
| Presentation won't load | Hard refresh: Ctrl+F5 |
| Images not showing | Check path: `"images/filename.png"` |
| Keyboard not working | Click on slide to focus it |
| Changes not appearing | Save data.js, then Ctrl+F5 |
| Colors wrong | Clear cache and refresh |
| Chart blank | Check data format, verify internet |
| Video not working | Use embed URL for YouTube |
| Styles broken | Check style.css in correct folder |
| Too many errors | Download fresh files from repository |

---

**Still stuck?** Make sure you've tried:

1. ✓ Hard refresh (Ctrl+F5)
2. ✓ Checked browser console (F12)
3. ✓ Verified file paths
4. ✓ Looked at examples
5. ✓ Read relevant documentation

Happy presenting! 🎉
