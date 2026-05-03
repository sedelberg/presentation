# HTML Presentation Framework - Agent Instructions

## Overview
This repository contains a professional-grade HTML-based presentation framework. It allows users to create cinematic, feature-rich presentations using simple JSON data rendered dynamically via a modular registry pattern.

## Core Architecture
- `presentation.html`: The main engine. It handles state management (navigation, progress, fullscreen), keyboard listeners, and global UI components (Slide Sorter, Theme Panel). **Do not modify unless changing core navigation or adding global UI features.**
- `renderer.js`: **[CRITICAL]** The modular rendering registry. Every slide type's HTML generation logic lives here in the `SlideRenderer` object. **This is where you add or modify slide layouts.**
- `presenter.html`: The synchronized secondary view. Uses the `BroadcastChannel API` to sync with the main window. Shows current/next previews and speaker notes.
- `data.js`: The active presentation data. **The primary file to modify when creating or updating a presentation.**
- `style.css`: The design system (8px grid) and cinematic transitions. It uses CSS variables extensively for live theming.

## Coding Conventions
1. **Slide Creation**: ALWAYS update the `presentationData` object in `data.js`. Use the `notes` field for speaker notes.
2. **Slide Types**: The framework supports 25+ slide types (e.g., `cover`, `team`, `code`, `table`, `map`, `testimonial`, `grid`, `kpi`). Refer to `renderer.js` for the full registry.
3. **Themes**: Slides default to `globalTheme`. Individual slides can override with a `theme` property.
4. **Assets**: Place images in `images/`. YouTube/Vimeo URLs in `video` slides are automatically transformed into embed format by the renderer.
5. **Styling**: Adhere to the 8px spacing system (`var(--s1)` to `var(--s12)`). Use CSS variables for colors to support the Live Theme Switcher.

## Workflows
- **Adding a New Slide Type**: 
    1. Add a renderer function to `SlideRenderer` in `renderer.js`.
    2. Add corresponding styling in `style.css` using the `.layout-[type]` convention.
- **Presenter View**: Launch by clicking the 📽️ icon in the UI. Ensure notes are added to `data.js`.
- **Slide Sorter**: Activated by the `G` key or 🔳 icon.
- **Exporting**: Use the 📄 icon for high-fidelity PDF export via `html2pdf.js`.
- **Downloading Data**: Use the 💾 icon to export the current `presentationData` as a `data.js` file.