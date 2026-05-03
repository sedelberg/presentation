/**
 * DATA-TEMPLATE.JS
 * 
 * Comprehensive examples of 25+ slide variations available in the HTML Presentation Framework.
 * 
 * This file demonstrates each slide type with realistic content examples.
 * Use this as a reference when creating your own presentations.
 * 
 * Copy sections to your data.js and customize as needed.
 */

const presentationData = {
    globalTheme: "light",  // "light" or "dark"
    slides: [

        // ============================================================
        // SECTION 1: TITLE SLIDES
        // ============================================================

        {
            type: "cover",
            theme: "dark",
            title: "Cinematic Presentations",
            subtitle: "A Comprehensive Guide to the 25+ Slide Library",
            date: "May 2026",
            notes: "Opening slide with cinematic entry animations."
        },

        // --- EXAMPLE: Cover Slide (Alternative) ---
        {
            type: "cover",
            theme: "light",
            title: "Your Company Name",
            subtitle: "Annual Strategic Review 2026",
            date: "Q1 2026"
        },

        // ============================================================
        // SECTION 2: CONTENT SLIDES (4 types)
        // ============================================================

        {
            type: "agenda",
            title: "Today's Agenda",
            items: [
                "Welcome & Executive Summary",
                "Market Analysis & Trends",
                "Product Roadmap & Innovations",
                "Financial Performance",
                "Team Highlights & Recognition",
                "Q&A & Next Steps"
            ]
        },

        // --- EXAMPLE: Text (Simple Bullet Points) ---
        {
            type: "text",
            title: "Key Strategic Initiatives",
            items: [
                "Expand into 5 new international markets",
                "Launch AI-powered product features",
                "Achieve carbon neutrality by 2027",
                "Double customer base through partnerships",
                "Invest $50M in R&D"
            ]
        },

        // --- EXAMPLE: Quote ---
        {
            type: "quote",
            theme: "dark",
            title: "Our Philosophy",
            quote: "Innovation is not about technology. It's about empowering people to do more with less.",
            author: "Leadership Team"
        },

        // --- EXAMPLE: Section-break (NEW) ---
        {
            type: "section-break",
            title: "Part 1: Market Analysis",
            subtitle: "Understanding Our Landscape",
            theme: "dark"
        },

        // ============================================================
        // SECTION 3: DATA VISUALIZATION (3 types)
        // ============================================================

        {
            type: "kpi",
            title: "Performance Scorecard",
            metrics: [
                { label: "Revenue", value: "$42.3M", status: "up", detail: "+28% YoY" },
                { label: "Market Share", value: "18.5%", status: "up", detail: "+3.2 pts" },
                { label: "Customer Churn", value: "2.1%", status: "down", detail: "Target: 2%" },
                { label: "Net Promoter Score", value: "68", status: "up", detail: "+12 from prev" },
                { label: "Net Promoter Score", value: "68", status: "up", detail: "+12 from prev" },
                { label: "Net Promoter Score", value: "68", status: "up", detail: "+12 from prev" }
            ]
        },

        // --- EXAMPLE: Number-highlight ---
        {
            type: "number-highlight",
            title: "Growth Achievement",
            number: "285%",
            text: "Year-over-year growth in customer acquisition powered by strategic partnerships and product innovation."
        },

        // --- EXAMPLE: Chart-bar ---
        {
            type: "chart-bar",
            title: "Revenue by Product Line",
            description: "FY2025 Revenue Distribution (in millions USD)",
            chartData: {
                labels: ["Enterprise", "Mid-Market", "Startup", "SMB"],
                datasets: [
                    { label: "Revenue ($M)", data: [18.5, 12.3, 8.2, 3.2] }
                ]
            }
        },

        // ============================================================
        // SECTION 4: LAYOUT & PROCESS SLIDES (3 types)
        // ============================================================

        {
            type: "workflow",
            title: "Our 5-Stage Customer Success Process",
            description: "From onboarding to product advocacy, we guide our customers to success.",
            steps: [
                { name: "Onboarding", detail: "Setup & Training" },
                { name: "Implementation", detail: "Deployment" },
                { name: "Optimization", detail: "Tuning" },
                { name: "Support", detail: "24/7 Help" },
                { name: "Advocacy", detail: "Case Studies" }
            ]
        },

        // --- EXAMPLE: Timeline ---
        {
            type: "timeline",
            title: "2026 Product Roadmap",
            events: [
                { date: "January", text: "AI Assistant launch" },
                { date: "March", text: "Mobile app beta release" },
                { date: "June", text: "API marketplace opens" },
                { date: "September", text: "Enterprise suite GA" }
            ]
        },

        // --- EXAMPLE: Two-column (NEW) ---
        {
            type: "two-column",
            title: "Traditional vs. Modern Approaches",
            leftLabel: "Legacy Systems",
            rightLabel: "Our Solution",
            leftContent: "<h3>Manual Processes</h3><p>Time-consuming manual workflows</p><p>Limited scalability and flexibility</p><p>High operational costs</p><p>Slow time-to-value</p>",
            rightContent: "<h3>Automated Platform</h3><p>Fully automated with AI intelligence</p><p>Scales to millions of transactions</p><p> 40% reduction in TCO</p><p>Live results in days</p>"
        },

        // ============================================================
        // SECTION 5: MULTI-COLUMN LAYOUTS (2 types)
        // ============================================================

        // --- EXAMPLE: Comparison (NEW) ---
        {
            type: "comparison",
            title: "Competitor Comparison Matrix",
            leftLabel: "Competitor A",
            rightLabel: "Our Platform",
            leftItems: [
                "Limited API access",
                "24-hour support only",
                "Basic analytics",
                "Expensive licensing",
                "Complex onboarding"
            ],
            rightItems: [
                "Complete REST API",
                "24/7 premium support",
                "Advanced ML insights",
                "Flexible pricing",
                "15-minute onboarding"
            ]
        },

        // --- EXAMPLE: Grid (NEW) ---
        {
            type: "grid",
            title: "Our Core Capabilities",
            description: "Five pillars that set us apart",
            columns: 3,
            items: [
                {
                    title: "Real-time Analytics",
                    description: "Live dashboards with instant insights",
                    icon: "📊"
                },
                {
                    title: "AI Intelligence",
                    description: "Machine learning-powered predictions",
                    icon: "🤖"
                },
                {
                    title: "Security First",
                    description: "Enterprise-grade encryption & compliance",
                    icon: "🔒"
                },
                {
                    title: "Global Scale",
                    description: "99.99% uptime across 6 continents",
                    icon: "🌍"
                },
                {
                    title: "Developer Friendly",
                    description: "Simple APIs and comprehensive docs",
                    icon: "👨‍💻"
                },
                {
                    title: "Expert Support",
                    description: "Dedicated success managers",
                    icon: "🤝"
                }
            ]
        },

        // ============================================================
        // SECTION 6: MEDIA SLIDES (4 types)
        // ============================================================

        {
            type: "image-split",
            title: "Our Global Headquarters",
            content: "<h3>Distributed Workforce</h3><p>Our team spans 5 continents, bringing diverse perspectives to every challenge.</p><ul><li>120+ employees worldwide</li><li>12 time zones covered</li><li>40+ years combined experience</li><li>Committed to diversity & inclusion</li></ul>",
            image: "images/office.png"
        },

        // --- EXAMPLE: Image-full ---
        {
            type: "image-full",
            title: "Advanced Dashboard",
            image: "images/office.png",
            caption: "View real-time analytics from a single unified interface"
        },

        // --- EXAMPLE: Image-background ---
        {
            type: "image-background",
            theme: "dark",
            title: "Innovation Starts Here",
            content: "Join our team and build the future of cloud technology. We're hiring across engineering, product, design, and sales.",
            image: "images/team.png"
        },

        // --- EXAMPLE: Video (NEW) ---
        {
            type: "video",
            title: "Product Demo",
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
            caption: "See how our platform transforms data into actionable insights"
        },

        // ============================================================
        // SECTION 7: ADVANCED EXAMPLES
        // ============================================================

        // --- ADVANCED GRID: Team Members (5 items) ---
        {
            type: "grid",
            title: "Executive Team",
            description: "Leadership driving our vision",
            columns: 2,
            items: [
                {
                    title: "Sarah Johnson",
                    description: "CEO & Co-founder | 15 years in SaaS",
                    icon: "👩‍💼"
                },
                {
                    title: "Michael Chen",
                    description: "CTO & Co-founder | Former Google engineer",
                    icon: "👨‍💻"
                },
                {
                    title: "Lisa Rodriguez",
                    description: "VP Sales | Built $100M+ pipelines",
                    icon: "📈"
                },
                {
                    title: "James Wilson",
                    description: "VP Engineering | Led 50+ person teams",
                    icon: "⚙️"
                }
            ]
        },

        // --- ADVANCED TWO-COLUMN: Features Comparison ---
        {
            type: "two-column",
            title: "Enterprise Security",
            leftLabel: "Authentication",
            rightLabel: "Data Protection",
            leftContent: "<h3>Multi-factor Auth</h3><p>SSO with SAML, OAuth2</p><p>API key rotation</p><p>IP whitelisting</p><h3>Audit Logs</h3><p>Complete activity tracking</p><p>Compliance exports</p>",
            rightContent: "<h3>Encryption</h3><p>AES-256 at rest</p><p>TLS 1.3 in transit</p><p>Key rotation policies</p><h3>Compliance</h3><p>SOC 2 Type II</p><p>GDPR, HIPAA ready</p>"
        },

        // --- ADVANCED COMPARISON: Pricing Tiers ---
        {
            type: "comparison",
            title: "Pricing Plans Comparison",
            leftLabel: "Startup Plan",
            rightLabel: "Enterprise Plan",
            leftItems: [
                "Up to 1 million API calls/month",
                "Email support (48-hour response)",
                "Basic analytics dashboard",
                "5 team members",
                "Community documentation"
            ],
            rightItems: [
                "Unlimited API calls",
                "Dedicated support manager",
                "Advanced ML analytics",
                "Unlimited team members",
                "Personalized training"
            ]
        },

        // --- SECTION BREAK: Final Section ---
        {
            type: "section-break",
            title: "Real Results",
            subtitle: "What our customers are achieving",
            theme: "light"
        },

        // --- FINAL KPI SLIDE: Customer Success Stories ---
        {
            type: "kpi",
            title: "Customer Success Stories",
            metrics: [
                { label: "Companies Served", value: "2,847", status: "up", detail: "+450 new this quarter" },
                { label: "Uptime Achieved", value: "99.97%", status: "up", detail: "Above guarantee" },
                { label: "Avg Implementation", value: "8 days", status: "down", detail: "Industry avg: 30" },
                { label: "Customer Satisfaction", value: "96%", status: "up", detail: "+8% YoY" }
            ]
        },

        // --- CLOSING CONTACT SLIDE ---
        {
            type: "contact",
            theme: "dark",
            title: "Let's Connect",
            email: "hello@example.com",
            phone: "+1 (555) 123-4567",
            location: "San Francisco, CA"
        }

    ]
};

/**
 * ============================================================
 * TEMPLATE SNIPPETS - Copy & Paste to Your Own data.js
 * ============================================================
 */

// SNIPPET 1: Minimal Presentation (3 slides)
const minimalPresentation = {
    globalTheme: "light",
    slides: [
        {
            type: "cover",
            theme: "dark",
            title: "My Presentation",
            subtitle: "Getting Started",
            date: "March 2026"
        },
        {
            type: "text",
            title: "Key Points",
            items: ["Point 1", "Point 2", "Point 3"]
        },
        {
            type: "contact",
            theme: "dark",
            title: "Thank You",
            email: "you@email.com",
            phone: "+1 (555) 000-0000",
            location: "Your City"
        }
    ]
};

// SNIPPET 2: Data-Driven Presentation
const dataFocusedPresentation = {
    globalTheme: "light",
    slides: [
        { type: "cover", theme: "dark", title: "Quarterly Results", subtitle: "Q1 2026", date: "March 31, 2026" },
        { type: "kpi", title: "KPIs", metrics: [
            { label: "Revenue", value: "$10M", status: "up", detail: "+15%" },
            { label: "Users", value: "100K", status: "up", detail: "+20%" },
            { label: "Churn", value: "2%", status: "down", detail: "Target: 2%" },
            { label: "NPS", value: "70", status: "up", detail: "+5" }
        ]},
        { type: "chart-bar", title: "Regional Sales", description: "Sales by region", chartData: { labels: ["North", "South", "East", "West"], datasets: [{ label: "Sales", data: [100, 80, 120, 90] }] }},
        { type: "contact", theme: "dark", title: "Questions?", email: "sales@company.com", phone: "+1 (555) 123-4567", location: "HQ" }
    ]
};

// SNIPPET 3: Product Launch Presentation
const productLaunchPresentation = {
    globalTheme: "light",
    slides: [
        { type: "cover", theme: "dark", title: "Introducing ProductX", subtitle: "Revolutionizing the Industry", date: "April 2026" },
        { type: "section-break", title: "The Problem", subtitle: "What we're solving", theme: "light" },
        { type: "image-split", title: "Old Way vs New Way", content: "<p>Traditional approach is slow and error-prone</p>", image: "images/office.png" },
        { type: "grid", title: "Key Features", description: "What makes us different", columns: 3, items: [
            { title: "Feature 1", description: "Description", icon: "✨" },
            { title: "Feature 2", description: "Description", icon: "🚀" },
            { title: "Feature 3", description: "Description", icon: "💡" }
        ]},
        { type: "contact", theme: "dark", title: "Available Now", email: "sales@company.com", phone: "+1 (555) 123-4567", location: "Available Worldwide" }
    ]
};

// ============================================================
// NEW PROFESSIONAL SLIDE TYPES (registry reference)
// ============================================================

/*
    TEAM:
    {
        type: "team",
        title: "Our Leadership",
        members: [
            { name: "John Doe", role: "CEO", image: "images/team.png", social: ["𝕏", "💼"] }
        ]
    }

    CODE:
    {
        type: "code",
        title: "API Implementation",
        filename: "client.js",
        language: "javascript",
        code: "const api = new Client();"
    }

    TABLE:
    {
        type: "table",
        title: "Pricing Plans",
        headers: ["Feature", "Free", "Pro"],
        rows: [
            ["Support", false, true],
            ["Storage", "1GB", "100GB"]
        ]
    }

    TESTIMONIAL:
    {
        type: "testimonial",
        title: "Client Feedback",
        quote: "This is a game changer!",
        name: "Jane Doe",
        title: "CTO at StartupX",
        image: "images/team.png",
        companyLogo: "images/Logo.png"
    }

    MAP:
    {
        type: "map",
        title: "Global Reach",
        locations: [
            { x: 200, y: 150, label: "New York" }
        ]
    }
*/
