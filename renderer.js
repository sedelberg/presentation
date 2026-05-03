/**
 * Slide Renderer Registry
 * Each function returns the HTML content for the slide.
 * Some renderers may also directly modify the slideDiv (e.g., for background images).
 */
const SlideRenderer = {
    // Helper to generate the standard slide header
    renderHeader: (slide) => {
        const excludedTypes = ['cover', 'image-background', 'section-break', 'contact'];
        if (excludedTypes.includes(slide.type)) return '';
        
        return `
            <div class="slide-header">
                <div class="slide-title">${slide.title}</div>
                <img src="images/Logo.svg" class="brand-logo" alt="Brand Logo" onerror="this.style.display='none'">
            </div>
        `;
    },

    cover: (slide) => `
        <img src="images/Logo.png" class="brand-logo" alt="Brand Logo" onerror="this.style.display='none'" style="margin-bottom: 30px; height: 80px;">
        <h1 class="gradient-text">${slide.title}</h1>
        <h2>${slide.subtitle}</h2>
        <p style="margin-top:40px; font-size:1.2rem; opacity:0.8;">${slide.date || ''}</p>
    `,

    agenda: (slide) => {
        let listHtml = slide.items ? `<ul>${slide.items.map(i => `<li>${i}</li>`).join('')}</ul>` : slide.content;
        return `<div class="content-body">${listHtml}</div>`;
    },

    text: (slide) => SlideRenderer.agenda(slide), // Same logic as agenda

    kpi: (slide) => {
        let html = `<div class="kpi-grid">`;
        slide.metrics.forEach(m => {
            let color = m.status === 'up' ? 'var(--green)' : 'var(--blue)';
            let arrow = m.status === 'up' ? '▲' : '▼';
            html += `
                <div class="kpi-card">
                    <div class="kpi-label">${m.label}</div>
                    <div class="kpi-value">${m.value}</div>
                    <div class="kpi-detail"><span style="color:${color}">${arrow}</span> ${m.detail}</div>
                </div>
            `;
        });
        html += `</div>`;
        return html;
    },

    workflow: (slide) => {
        let html = `<p class="content-body">${slide.description}</p><div class="workflow-container">`;
        slide.steps.forEach(s => {
            html += `<div class="workflow-step"><h4>${s.name}</h4><p>${s.detail}</p></div>`;
        });
        html += `</div>`;
        return html;
    },

    timeline: (slide) => {
        let html = `<div class="timeline">`;
        slide.events.forEach(e => {
            html += `<div class="timeline-item"><div class="timeline-date">${e.date}</div><p>${e.text}</p></div>`;
        });
        html += `</div>`;
        return html;
    },

    'image-split': (slide) => `
        <div class="split-layout">
            <div class="split-text content-body">${slide.content}</div>
            <div class="split-image" style="background-image: url('${slide.image}')"></div>
        </div>
    `,

    'image-full': (slide) => `
        <div class="full-image-container">
            <img src="${slide.image}" class="full-image" alt="Slide Image">
            ${slide.caption ? `<div class="image-caption">${slide.caption}</div>` : ''}
        </div>
    `,

    'image-background': (slide, index, slideDiv) => {
        slideDiv.style.backgroundImage = `url('${slide.image}')`;
        slideDiv.style.backgroundSize = 'cover';
        slideDiv.style.backgroundPosition = 'center';
        slideDiv.style.animation = 'none'; 
        return `
            <img src="images/Logo.png" class="brand-logo" alt="Brand Logo" style="position: absolute; top: 60px; right: 80px; z-index: 10;" onerror="this.style.display='none'">
            <h2>${slide.title}</h2>
            <p>${slide.content}</p>
        `;
    },

    'number-highlight': (slide) => `
        <div class="big-number">${slide.number}</div>
        <div class="big-number-text">${slide.text}</div>
    `,

    quote: (slide) => `
        <div class="quote-text">${slide.quote}</div>
        <div class="quote-author">— ${slide.author}</div>
    `,

    'chart-bar': (slide, index) => `
        <p class="content-body">${slide.description}</p>
        <div class="chart-container"><canvas id="chart-${index}"></canvas></div>
    `,

    contact: (slide) => `
        <div class="contact-box">
            <img src="images/Logo.png" class="brand-logo" style="margin-bottom: 30px; height: 70px;" alt="Brand Logo" onerror="this.style.display='none'">
            <h2>${slide.title}</h2>
            <p>📧 ${slide.email}</p>
            <p>📞 ${slide.phone}</p>
            <p>📍 ${slide.location}</p>
        </div>
    `,

    'section-break': (slide) => `
        <div class="section-break-content">
            <img src="images/Logo.png" class="brand-logo" style="margin-bottom: 40px; height: 65px;" alt="Brand Logo" onerror="this.style.display='none'">
            <h1 class="section-title">${slide.title}</h1>
            ${slide.subtitle ? `<h2 class="section-subtitle">${slide.subtitle}</h2>` : ''}
        </div>
    `,

    'two-column': (slide) => `
        <div class="two-column-layout">
            <div class="column">
                ${slide.leftLabel ? `<h3 class="column-label">${slide.leftLabel}</h3>` : ''}
                <div class="column-content">${slide.leftContent}</div>
            </div>
            <div class="column">
                ${slide.rightLabel ? `<h3 class="column-label">${slide.rightLabel}</h3>` : ''}
                <div class="column-content">${slide.rightContent}</div>
            </div>
        </div>
    `,

    comparison: (slide) => {
        let html = `<div class="comparison-grid">`;
        html += `<div class="comparison-column"><h3>${slide.leftLabel}</h3>`;
        slide.leftItems.forEach(item => {
            html += `<div class="comparison-item"><span class="item-icon">✗</span><p>${item}</p></div>`;
        });
        html += `</div>`;
        html += `<div class="comparison-column"><h3>${slide.rightLabel}</h3>`;
        slide.rightItems.forEach(item => {
            html += `<div class="comparison-item"><span class="item-icon">✓</span><p>${item}</p></div>`;
        });
        html += `</div></div>`;
        return html;
    },

    grid: (slide) => `
        <div class="grid-container" style="--grid-columns: ${slide.columns || 3}">
            ${slide.items.map(item => `
                <div class="grid-card">
                    ${item.icon ? `<div class="grid-icon">${item.icon}</div>` : ''}
                    ${item.image ? `<div class="grid-image" style="background-image: url('${item.image}')"></div>` : ''}
                    <h4>${item.title}</h4>
                    <p>${item.description}</p>
                </div>
            `).join('')}
        </div>
    `,

    video: (slide) => {
        let videoSrc = slide.videoUrl;
        
        // Transform YouTube URL to embed format if needed
        if (videoSrc.includes('youtube.com/watch')) {
            const videoId = new URL(videoSrc).searchParams.get('v');
            videoSrc = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&rel=0`;
        } else if (videoSrc.includes('youtu.be/')) {
            const videoId = videoSrc.split('/').pop();
            videoSrc = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&rel=0`;
        } else if (videoSrc.includes('vimeo.com/') && !videoSrc.includes('player.vimeo.com')) {
            const videoId = videoSrc.split('/').pop();
            videoSrc = `https://player.vimeo.com/video/${videoId}?autoplay=1&muted=1`;
        }

        return `
            <div class="video-container">
                <div class="video-wrapper">
                    ${videoSrc.includes('youtube.com') || videoSrc.includes('vimeo.com') ?
                        `<iframe src="${videoSrc}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>` :
                        `<video controls autoplay muted style="width: 100%; height: 100%;"><source src="${videoSrc}" type="video/mp4">Your browser does not support the video tag.</video>`
                    }
                </div>
                ${slide.caption ? `<div class="video-caption">${slide.caption}</div>` : ''}
            </div>
        `;
    },

    team: (slide) => `
        <div class="team-grid">
            ${slide.members.map(m => `
                <div class="team-card">
                    <div class="team-avatar" style="background-image: url('${m.image}')"></div>
                    <h4>${m.name}</h4>
                    <p class="team-role">${m.role}</p>
                    <div class="team-social">
                        ${m.social ? m.social.map(s => `<span class="social-icon">${s}</span>`).join('') : ''}
                    </div>
                </div>
            `).join('')}
        </div>
    `,

    code: (slide) => {
        // We trigger Prism highlight after render
        setTimeout(() => Prism.highlightAll(), 100);
        return `
            <div class="code-container">
                <div class="code-header">
                    <span class="code-dot red"></span>
                    <span class="code-dot yellow"></span>
                    <span class="code-dot green"></span>
                    <span class="code-filename">${slide.filename || 'script.js'}</span>
                </div>
                <pre><code class="language-${slide.language || 'javascript'}">${slide.code}</code></pre>
            </div>
        `;
    },

    table: (slide) => `
        <div class="table-container">
            <table>
                <thead>
                    <tr>
                        ${slide.headers.map(h => `<th>${h}</th>`).join('')}
                    </tr>
                </thead>
                <tbody>
                    ${slide.rows.map(row => `
                        <tr>
                            ${row.map(cell => {
                                if (cell === true) return '<td class="cell-check">✓</td>';
                                if (cell === false) return '<td class="cell-cross">✗</td>';
                                return `<td>${cell}</td>`;
                            }).join('')}
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>
    `,

    testimonial: (slide) => `
        <div class="testimonial-container">
            <div class="testimonial-quote">"${slide.quote}"</div>
            <div class="testimonial-author">
                <div class="author-image" style="background-image: url('${slide.image}')"></div>
                <div class="author-info">
                    <div class="author-name">${slide.name}</div>
                    <div class="author-title">${slide.title}</div>
                </div>
            </div>
            ${slide.companyLogo ? `<img src="${slide.companyLogo}" class="company-logo-proof" alt="Company Logo">` : ''}
        </div>
    `,

    map: (slide) => `
        <div class="map-container">
            <svg viewBox="0 0 1000 500" class="world-map">
                <!-- Extremely simplified world map path for light weight -->
                <path d="M150,100 L200,100 L250,150 L200,200 L150,200 Z M400,50 L500,50 L550,150 L450,250 L350,150 Z M700,100 L850,100 L900,300 L750,400 L650,250 Z M200,300 L350,300 L400,450 L250,450 Z" fill="currentColor" opacity="0.2"/>
                ${slide.locations.map(loc => `
                    <g class="map-marker" style="--x: ${loc.x}; --y: ${loc.y}">
                        <circle cx="${loc.x}" cy="${loc.y}" r="8" fill="var(--green)"/>
                        <circle cx="${loc.x}" cy="${loc.y}" r="20" fill="var(--green)" opacity="0.3" class="ping"/>
                        <text x="${loc.x}" y="${loc.y + 25}" text-anchor="middle" class="marker-label">${loc.label}</text>
                    </g>
                `).join('')}
            </svg>
        </div>
    `
};