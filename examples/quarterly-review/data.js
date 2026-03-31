const presentationData = {
    globalTheme: "light",
    slides: [
        // ============================================================
        // QUARTERLY BUSINESS REVIEW PRESENTATION
        // Executive dashboard with metrics, trends, and performance
        // ============================================================

        {
            type: "cover",
            theme: "dark",
            title: "Q1 2026 Business Review",
            subtitle: "Executive Summary & Strategic Outlook",
            date: "March 31, 2026"
        },

        {
            type: "section-break",
            title: "Quarter Overview",
            subtitle: "Strong growth across all key metrics",
            theme: "light"
        },

        {
            type: "kpi",
            title: "Q1 2026 Performance Scorecard",
            metrics: [
                { label: "Total Revenue", value: "$42.3M", status: "up", detail: "+28% YoY" },
                { label: "Operating Margin", value: "22.5%", status: "up", detail: "+3.2 pts" },
                { label: "Customer Growth", value: "4,250", status: "up", detail: "+950 from Q4" },
                { label: "Churn Rate", value: "2.1%", status: "down", detail: "Target: 2%" }
            ]
        },

        {
            type: "number-highlight",
            title: "Best Quarter on Record",
            number: "+28%",
            text: "Year-over-year revenue growth driven by strong demand in enterprise segment and successful product launches"
        },

        {
            type: "section-break",
            title: "Revenue Analysis",
            subtitle: "Breakdown and trends",
            theme: "dark"
        },

        {
            type: "chart-bar",
            title: "Revenue by Business Segment",
            description: "Q1 2026 revenue mix ($42.3M total)",
            chartData: {
                labels: ["Enterprise", "Mid-Market", "Startup", "SMB"],
                datasets: [
                    { label: "Revenue ($M)", data: [18.5, 12.8, 8.2, 2.8] }
                ]
            }
        },

        {
            type: "chart-bar",
            title: "YoY Revenue Trend",
            description: "Consistent growth trajectory",
            chartData: {
                labels: ["Q1 2024", "Q2 2024", "Q3 2024", "Q4 2024", "Q1 2025", "Q2 2025", "Q3 2025", "Q4 2025", "Q1 2026"],
                datasets: [
                    { label: "Revenue ($M)", data: [18.2, 21.5, 25.3, 28.1, 29.5, 32.8, 35.2, 39.1, 42.3] }
                ]
            }
        },

        {
            type: "two-column",
            title: "Segment Performance",
            leftLabel: "Enterprise\n(+35% YoY)",
            rightLabel: "Mid-Market\n(+22% YoY)",
            leftContent: "<h3>Strong Performance</h3><p>18.5M revenue</p><p>15 new logos</p><p>Large contract wins</p><p>95% retention</p>",
            rightContent: "<h3>Solid Growth</h3><p>12.8M revenue</p><p>145 new customers</p><p>Consistent additions</p><p>92% retention</p>"
        },

        {
            type: "section-break",
            title: "Customer Metrics",
            subtitle: "Retention and satisfaction",
            theme: "light"
        },

        {
            type: "kpi",
            title: "Customer Health Dashboard",
            metrics: [
                { label: "Total Customers", value: "4,250", status: "up", detail: "+950 added" },
                { label: "Retention Rate", value: "97.9%", status: "up", detail "vs 96.8% last quarter" },
                { label: "NPS Score", value: "68", status: "up", detail: "+8 from Q4" },
                { label: "Avg Contract Value", value: "$9,950", status: "up", detail: "+12%" }
            ]
        },

        {
            type: "comparison",
            title: "Customer Segment Comparison",
            leftLabel: "Enterprise (Premium)",
            rightLabel: "Mid-Market (Standard)",
            leftItems: [
                "Highest lifetime value",
                "Strong product-market fit",
                "Executive sponsorship",
                "Complex implementations",
                "Dedicated success managers"
            ],
            rightItems: [
                "Fastest growing segment",
                "Self-service adoption",
                "Price sensitive",
                "Faster onboarding",
                "Community support model"
            ]
        },

        {
            type: "grid",
            title: "Customer Success Initiatives",
            description: "Q1 accomplishments",
            columns: 3,
            items: [
                {
                    title: "Training Program",
                    description: "Certified 150+ customer admins",
                    icon: "📚"
                },
                {
                    title: "User Conference",
                    description: "1,200 attendees, 98% satisfaction",
                    icon: "🎪"
                },
                {
                    title: "Support Hub",
                    description: "Launched AI-powered chatbot",
                    icon: "🤖"
                }
            ]
        },

        {
            type: "section-break",
            title: "Product Developments",
            subtitle: "Innovation and roadmap",
            theme: "dark"
        },

        {
            type: "workflow",
            title: "Q1 Product Releases",
            description: "Major features and improvements",
            steps: [
                { name: "AI Assistant", detail: "ML-powered analytics" },
                { name: "Mobile App", detail: "iOS & Android" },
                { name: "API v2.0", detail: "Expanded endpoints" },
                { name: "Security", detail: "SOC 2 certified" }
            ]
        },

        {
            type: "timeline",
            title: "H2 2026 Roadmap",
            events: [
                { date: "April", text: "Advanced API gateway release" },
                { date: "June", text: "Enterprise suite GA" },
                { date: "August", text: "Marketplace for integrations" },
                { date: "October", text: "AI automation features" }
            ]
        },

        {
            type: "section-break",
            title: "Operational Highlights",
            subtitle: "Team and efficiency",
            theme: "light"
        },

        {
            type: "grid",
            title: "Team Growth",
            description: "Strategic hiring and retention",
            columns: 3,
            items: [
                {
                    title: "Engineering",
                    description: "35 team members\n+8 hired in Q1",
                    icon: "👨‍💻"
                },
                {
                    title: "Sales",
                    description: "28 team members\n+5 hired in Q1",
                    icon: "📞"
                },
                {
                    title: "Operations",
                    description: "42 team members\n3% attrition",
                    icon: "⚙️"
                }
            ]
        },

        {
            type: "kpi",
            title: "Operational Metrics",
            metrics: [
                { label: "Total Headcount", value: "187", status: "up", detail: "+24 YoY" },
                { label: "Attrition Rate", value: "1.2%", status: "down", detail: "Target: 2%" },
                { label: "NPS (Internal)", value: "72", status: "up", detail: "+8 from Q4" },
                { label: "Training Hours", value: "480", status: "up", detail: "Per employee" }
            ]
        },

        {
            type: "section-break",
            title: "Financial Performance",
            subtitle: "Profitability and efficiency",
            theme: "dark"
        },

        {
            type: "comparison",
            title: "Profitability Improvement",
            leftLabel: "Q1 2025",
            rightLabel: "Q1 2026",
            leftItems: [
                "Revenue: $33M",
                "Operating Margin: 12.3%",
                "EBITDA: $4.05M",
                "CAC Payback: 18 months",
                "Burn Rate: $500K/month"
            ],
            rightItems: [
                "Revenue: $42.3M",
                "Operating Margin: 22.5%",
                "EBITDA: $9.52M",
                "CAC Payback: 12 months",
                "EBITDA Positive: Yes"
            ]
        },

        {
            type: "chart-bar",
            title: "Unit Economics",
            description: "Cost of customer acquisition vs lifetime value",
            chartData: {
                labels: ["Enterprise", "Mid-Market", "Startup"],
                datasets: [
                    { label: "CAC ($K)", data: [35, 18, 8] },
                    { label: "LTV ($K)", data: [280, 95, 35] }
                ]
            }
        },

        {
            type: "section-break",
            title: "Strategic Initiatives",
            subtitle: "What we're focusing on",
            theme: "light"
        },

        {
            type: "text",
            title: "Top Strategic Priorities",
            items: [
                "Accelerate enterprise segment growth (+50% target for H2)",
                "Expand into 3 new vertical markets (healthcare, finance, manufacturing)",
                "Build strategic partnerships with major cloud providers",
                "Invest in AI/ML capabilities (15% of R&D budget)",
                "Achieve profitability by Q4 2026"
            ]
        },

        {
            type: "two-column",
            title: "Market Expansion",
            leftLabel: "Geographic\nExpansion",
            rightLabel: "Market\nSegmentation",
            leftContent: "<h3>New Regions</h3><p>EMEA: London office opened</p><p>APAC: Singapore hub planned</p><p>LATAM: Partner model</p>",
            rightContent: "<h3>Verticals</h3><p>Retail (new)</p><p>Financial Services</p><p>Healthcare (new)</p><p>Manufacturing (new)</p>"
        },

        {
            type: "image-split",
            title: "Customer Success Stories",
            content: "<h3>Transforming Industries</h3><p>Our platform now serves:</p><ul><li>3 Fortune 500 companies</li><li>500+ mid-market firms</li><li>3,750+ small businesses</li><li>Across 25+ countries</li></ul>",
            image: "images/team.png"
        },

        {
            type: "section-break",
            title: "Outlook & Guidance",
            subtitle: "Q2 2026 expectations",
            theme: "dark"
        },

        {
            type: "text",
            title: "Forward Guidance",
            items: [
                "Q2 2026 revenue: $47M - $49M (+12% sequential growth)",
                "Operating margin: 24-26% (expanding due to operating leverage)",
                "New customer logos: 400-450 in Q2",
                "International revenue: 15-18% of total",
                "Headcount: 210-220 by end of Q2"
            ]
        },

        {
            type: "quote",
            theme: "dark",
            title: "CEO Message",
            quote: "Q1 was exceptional, but this is just the beginning. Our vision is to transform how companies leverage data. We have the team, technology, and market timing to achieve something truly special.",
            author: "CEO & Co-founder"
        },

        {
            type: "section-break",
            title: "Questions & Closing",
            subtitle: "Let's discuss next steps",
            theme: "light"
        },

        {
            type: "grid",
            title: "How You Can Help",
            description: "Ways to support our mission",
            columns: 3,
            items: [
                {
                    title: "Share Feedback",
                    description: "Feature requests & improvements",
                    icon: "💬"
                },
                {
                    title: "Refer Customers",
                    description: "Earn rewards for introductions",
                    icon: "🤝"
                },
                {
                    title: "Join Our Team",
                    description: "We're actively hiring",
                    icon: "💼"
                }
            ]
        },

        {
            type: "contact",
            theme: "dark",
            title: "Thank You",
            email: "investor@yourcompany.com",
            phone: "+1 (555) 123-4567",
            location: "San Francisco, CA"
        }

    ]
};
