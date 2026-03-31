# HTML Presentation Framework - Examples & Templates

This directory contains three pre-built presentation templates designed as starting points for common business scenarios.

---

## 📋 Quick Start with Examples

Each example folder contains a `data.js` file with a complete presentation.

**To use an example:**

1. Copy the `data.js` file from an example folder
2. Replace the `data.js` in your root `presentation/` directory
3. Open `presentation.html` in your browser
4. Edit the content to fit your needs

**Or** run the example directly from its folder:

1. Copy `presentation.html` and `style.css` into the example folder
2. Open the example's `presentation.html` in your browser

---

## 🎯 Available Templates

### 1. **Sales Pitch** (`sales-pitch/`)

**Best for**: Selling a product or service to prospects

**Includes**:

- Problem statement & market opportunity
- Solution overview & key differentiators
- Customer success metrics & ROI calculations
- Case studies with before/after comparisons
- Implementation timeline
- Pricing tiers & options
- Calls to action
- 20 slides total

**Key Features**:

- KPI cards showing customer success
- Charts demonstrating ROI
- Comparison matrices (us vs. competitors)
- Implementation workflow
- Before/after split layouts

**When to Use**:

- Prospective customer meetings
- Investor pitches
- Sales team presentations
- Product demos

**Customize**:

- Replace company name and contact info
- Update financial figures and customer names
- Change industry/use case examples
- Adjust timeline for your sales cycle

---

### 2. **Training Module** (`training/`)

**Best for**: Educational content and team training

**Includes**:

- Learning objectives upfront
- Structured course modules (5 modules)
- Real-world case studies
- Best practices and key takeaways
- Hands-on practice guidance
- Next steps for continued learning
- 25 slides total

**Key Features**:

- Clear learning objectives
- Module breaks for pacing
- Comparison matrices (good vs. bad approaches)
- Real-world examples with grid layouts
- Workflow diagram explaining processes
- Timeline for learning journey

**When to Use**:

- Employee onboarding
- Skills workshops
- Team training sessions
- Educational webinars
- Internal knowledge sharing

**Customize**:

- Replace training topics with your content
- Update case studies with your company examples
- Adjust learning timeline (1-4 weeks)
- Change tools mentioned to your stack

---

### 3. **Quarterly Business Review** (`quarterly-review/`)

**Best for**: Executive reporting and stakeholder updates

**Includes**:

- Performance scorecard with KPIs
- Revenue analysis by segment
- Customer metrics & retention
- Product roadmap & releases
- Team/HR highlights
- Financial performance
- Strategic initiatives
- Forward guidance
- 28 slides total

**Key Features**:

- Multiple KPI cards tracking different metrics
- Revenue trend charts
- Customer segment comparisons
- Roadmap timeline
- Before/after financial comparisons
- Strategic priority grids
- Executive quotes and messaging

**When to Use**:

- Board meetings
- Investor updates
- Company all-hands meetings
- Executive leadership reviews
- Stakeholder reports

**Customize**:

- Update all financial figures
- Replace company metrics with actual numbers
- Adjust roadmap for your Q2/Q3/Q4
- Update team headcount numbers
- Change strategic initiatives to match your focus areas

---

## 🔧 How to Customize Templates

### Step 1: Choose Your Template

Identify which template best matches your needs.

### Step 2: Copy the Data

```bash
# Example: Copy sales pitch to your main directory
cp examples/sales-pitch/data.js data.js
```

Or manually copy the content from `examples/[template]/data.js` to your `data.js`

### Step 3: Edit Content

Open `data.js` in your text editor and replace placeholder text:

- Titles and subtitles
- Company/product names
- Metrics and numbers
- Contact information
- Testimonials and quotes

### Step 4: Add Your Images

1. Place your images in the `images/` folder
2. Update image paths in `data.js`:

   ```javascript
   image: "images/your-image.png"
   ```

### Step 5: Test

1. Save `data.js`
2. Refresh `presentation.html` in browser
3. Test keyboard navigation (arrows, space, F for fullscreen)
4. Verify all images load correctly

---

## 📊 Metric Placeholders

Each template uses realistic but placeholder metrics. Common ones to customize:

**Revenue Figures**:

- `$42.3M` - Total revenue
- `$1.2M` - Monthly amount
- `28%` - Growth percentage

**Customer Metrics**:

- `4,250` - Total customers
- `2.1%` - Churn rate
- `97.9%` - Retention rate
- `95%` - NPS or satisfaction score

**Team Metrics**:

- `187` - Total employees
- `+24 YoY` - Headcount growth
- `1.2%` - Attrition rate

---

## 🎨 Styling Templates

All templates use the default light theme. To change:

1. **Dark theme**: In `data.js`, change `globalTheme: "light"` to `"dark"`
2. **Custom colors**: Edit `style.css` at `:root` section
3. **Fonts**: Modify `--font-main` in `style.css`
4. **Spacing**: Adjust `.slide { padding: }` in `style.css`

See [CUSTOMIZATION.md](/../CUSTOMIZATION.md) for advanced styling options.

---

## 📋 Creating Your Own Template

To create a new template:

1. **Design your slide structure**: Plan out your story arc
2. **Use combination of types**: Mix KPIs, charts, text, images, workflows
3. **Start simple**: Begin with 5-10 core slides
4. **Expand gradually**: Add supporting details and examples
5. **Test thoroughly**: Check all slides render correctly

See [README.md](/../README.md) for complete slide type reference.

---

## 💡 Pro Tips

1. **Brand your templates**: Add your company logo and colors
2. **Make templates shareable**: Use GitHub or Google Drive
3. **Create variations**: Multiple templates for different audiences
4. **Keep templates updated**: Update examples quarterly with current metrics
5. **Test before presenting**: Always test on actual projector/display

---

## ❓ Common Customizations

### Change All Dates

Search `data.js` for "2026" and replace with current year/dates.

### Update All Company Names

Search for placeholder names and replace throughout.

### Adjust Financial Figures

Scale metrics to match your business size:

- Startup: Divide all numbers by 10
- Enterprise: Multiply by appropriate factor
- Non-profit: Replace revenue with donations/impact metrics

### Add/Remove Slides

Edit the `slides` array in `data.js`:

- **Add**: Copy a slide object and fill in content
- **Remove**: Delete a slide object
- **Reorder**: Move slide objects up/down in array

---

## 🚀 Next Steps

1. Copy an example to your directory
2. Customize content for your needs
3. Add your own images
4. Test in fullscreen (press `F`)
5. Export as PDF (Ctrl+P)
6. Share with your audience

---

## 📚 Learn More

- See [README.md](/../README.md) for complete feature documentation
- See [QUICKSTART.md](/../QUICKSTART.md) for 5-minute intro
- See [SETUP.md](/../SETUP.md) for deployment options
- See [CUSTOMIZATION.md](/../CUSTOMIZATION.md) for advanced customization

---

**Tips**: These templates are starting points - feel free to reorganize, combine, or create your own slide sequences. The best presentations tell YOUR story in YOUR way.

Happy presenting! 🎉
