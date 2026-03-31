const presentationData = {
    globalTheme: "light",
    slides: [
        // ============================================================
        // SALES PITCH PRESENTATION
        // A complete B2B sales pitch with proven structure
        // ============================================================

        {
            type: "cover",
            theme: "dark",
            title: "Transforming Your Business",
            subtitle: "How [Your Company] Delivers Measurable Results",
            date: "2026"
        },

        {
            type: "section-break",
            title: "The Opportunity",
            subtitle: "Why your business should care",
            theme: "light"
        },

        {
            type: "text",
            title: "The Challenge You Face",
            items: [
                "Inefficient manual processes costing time and money",
                "Limited visibility into key business metrics",
                "Inability to scale without proportional cost increases",
                "Difficulty competing with digital-native competitors",
                "Risk of losing top talent due to outdated tooling"
            ]
        },

        {
            type: "number-highlight",
            title: "The Cost of Inaction",
            number: "-35%",
            text: "Average productivity loss for companies not modernizing their operations"
        },

        {
            type: "section-break",
            title: "Our Solution",
            subtitle: "Built for businesses like yours",
            theme: "dark"
        },

        {
            type: "image-background",
            theme: "dark",
            title: "Intelligent Automation Platform",
            content: "Enterprise-grade tools that work the way your team thinks",
            image: "images/office.png"
        },

        {
            type: "grid",
            title: "Why Choose Us",
            description: "Four reasons we're different",
            columns: 2,
            items: [
                {
                    title: "Easy Implementation",
                    description: "Live in 2 weeks, not 6 months",
                    icon: "⚡"
                },
                {
                    title: "Proven Track Record",
                    description: "500+ enterprise customers trust us",
                    icon: "✓"
                },
                {
                    title: "Expert Support",
                    description: "Dedicated success manager included",
                    icon: "🤝"
                },
                {
                    title: "Transparent Pricing",
                    description: "No surprise fees or long-term lock-ins",
                    icon: "💰"
                }
            ]
        },

        {
            type: "two-column",
            title: "Before & After",
            leftLabel: "Without Our Solution",
            rightLabel: "With Our Platform",
            leftContent: "<h3>Manual Processes</h3><p>Spreadsheets and emails</p><p>Slow approvals</p><p>Frequent errors</p><p>Limited reporting</p><p>High support costs</p>",
            rightContent: "<h3>Automated Workflows</h3><p>Single source of truth</p><p>Instant approvals</p><p>Zero defects</p><p>Real-time dashboards</p><p>Self-service analytics</p>"
        },

        {
            type: "section-break",
            title: "Proven Results",
            subtitle: "What our customers achieve",
            theme: "light"
        },

        {
            type: "kpi",
            title: "Customer Success Metrics",
            metrics: [
                { label: "Avg Time Savings", value: "40%", status: "up", detail: "15-20 hours/week per person" },
                { label: "Cost Reduction", value: "$500K", status: "down", detail: "Annual savings avg" },
                { label: "Implementation", value: "14 days", status: "up", detail: "Industry avg: 120+ days" },
                { label: "ROI Achieved", value: "250%", status: "up", detail: "Within 18 months" }
            ]
        },

        {
            type: "comparison",
            title: "Case Study: Fortune 500 Company",
            leftLabel: "Before",
            rightLabel: "After 6 Months",
            leftItems: [
                "Processing 1,000 transactions/day manually",
                "5 full-time staff managing approvals",
                "$2.5M annual operational costs",
                "Average 3-day processing time",
                "15% error rate requiring rework"
            ],
            rightItems: [
                "Processing 10,000 transactions/day automatically",
                "1 person overseeing exceptions only",
                "$800K annual operational costs",
                "Average 4-hour processing time",
                "< 0.5% error rate"
            ]
        },

        {
            type: "chart-bar",
            title: "Customer ROI Timeline",
            description: "Typical payback period: 9-12 months",
            chartData: {
                labels: ["Month 1", "Month 3", "Month 6", "Month 9", "Month 12"],
                datasets: [
                    { label: "Cumulative Savings ($K)", data: [50, 150, 300, 450, 550] }
                ]
            }
        },

        {
            type: "section-break",
            title: "Implementation",
            subtitle: "Fast, simple, and proven",
            theme: "dark"
        },

        {
            type: "workflow",
            title: "Our Implementation Process",
            description: "Onboarding complete in 2 weeks, not months",
            steps: [
                { name: "Discovery", detail: "Understand your needs" },
                { name: "Setup", detail: "Configure your workflows" },
                { name: "Training", detail: "Team adoption" },
                { name: "Launch", detail: "Go-live support" },
                { name: "Optimize", detail: "Continuous improvement" }
            ]
        },

        {
            type: "timeline",
            title: "Next 90 Days",
            events: [
                { date: "Week 1-2", text: "Discovery & Configuration" },
                { date: "Week 3-4", text: "Pilot Launch" },
                { date: "Week 5-6", text: "Full Rollout" },
                { date: "Week 7-12", text: "Optimization & Growth" }
            ]
        },

        {
            type: "section-break",
            title: "Pricing & Options",
            subtitle: "Flexible plans that scale with you",
            theme: "light"
        },

        {
            type: "grid",
            title: "Choose Your Plan",
            description: "All plans include dedicated support and training",
            columns: 3,
            items: [
                {
                    title: "Professional",
                    description: "$5K/month • Up to 10 users • 100 workflows",
                    icon: "📊"
                },
                {
                    title: "Enterprise",
                    description: "$15K/month • Unlimited users • Custom workflows",
                    icon: "🏢"
                },
                {
                    title: "Custom",
                    description: "Let's talk • Unique needs • White-label available",
                    icon: "⭐"
                }
            ]
        },

        {
            type: "quote",
            theme: "dark",
            title: "What Our Customers Say",
            quote: "Implementing this platform was the best decision we made for our operations. We're processing 10x the volume with the same headcount.",
            author: "Chief Operations Officer, Global Bank"
        },

        {
            type: "section-break",
            title: "Let's Get Started",
            subtitle: "Your transformation begins today",
            theme: "dark"
        },

        {
            type: "image-split",
            title: "Next Steps",
            content: "<h3>What Happens Now</h3><ol><li><strong>Demo Session:</strong> See it in action (30 min)</li><li><strong>Assessment:</strong> We review your processes (15 min)</li><li><strong>Executive Brief:</strong> ROI analysis & timeline (15 min)</li><li><strong>Proposal:</strong> Custom package for you (24 hrs)</li></ol>",
            image: "images/team.png"
        },

        {
            type: "contact",
            theme: "dark",
            title: "Ready to Transform?",
            email: "sales@yourcompany.com",
            phone: "+1 (555) 123-4567",
            location: "New York, San Francisco, London"
        }

    ]
};
