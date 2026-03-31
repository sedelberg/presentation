const presentationData = {
    globalTheme: "light",
    slides: [
        // ============================================================
        // TRAINING MODULE PRESENTATION
        // Educational content with learning objectives
        // ============================================================

        {
            type: "cover",
            theme: "dark",
            title: "Data Analytics Fundamentals",
            subtitle: "A Comprehensive Training Program",
            date: "2026"
        },

        {
            type: "text",
            title: "Learning Objectives",
            items: [
                "Understand key concepts in data analytics",
                "Learn how to read and interpret dashboard metrics",
                "Apply analytics to real business problems",
                "Create data-driven recommendations",
                "Build your analytics foundation for advanced topics"
            ]
        },

        {
            type: "agenda",
            title: "Course Agenda",
            items: [
                "Module 1: Data Basics & Terminology",
                "Module 2: Dashboard Fundamentals",
                "Module 3: Interpreting Metrics",
                "Module 4: Real-World Case Studies",
                "Module 5: Building Your First Dashboard"
            ]
        },

        {
            type: "section-break",
            title: "Module 1: Data Basics",
            subtitle: "Foundation concepts you need to know",
            theme: "light"
        },

        {
            type: "text",
            title: "What is Data Analytics?",
            items: [
                "The science of examining data to draw insights",
                "Turning raw numbers into actionable intelligence",
                "Making decisions based on evidence, not intuition",
                "Identifying patterns, trends, and opportunities",
                "Measuring the impact of your actions"
            ]
        },

        {
            type: "grid",
            title: "Types of Analytics",
            description: "Four main categories you'll encounter",
            columns: 2,
            items: [
                {
                    title: "Descriptive",
                    description: "What happened? Looking at historical data",
                    icon: "📅"
                },
                {
                    title: "Diagnostic",
                    description: "Why did it happen? Understanding causes",
                    icon: "🔍"
                },
                {
                    title: "Predictive",
                    description: "What will happen? Forecasting future trends",
                    icon: "🔮"
                },
                {
                    title: "Prescriptive",
                    description: "What should we do? Recommended actions",
                    icon: "💡"
                }
            ]
        },

        {
            type: "two-column",
            title: "Data vs. Information",
            leftLabel: "Data",
            rightLabel: "Information",
            leftContent: "<h3>Raw Material</h3><p>100, 250, 410, 520</p><p>Meaningless on its own</p><p>Requires processing</p><p>Hundreds of data points</p>",
            rightContent: "<h3>Processed Knowledge</h3><p>Revenue increased 25% quarterly</p><p>Clear insight emerging</p><p>Ready for action</p><p>Summarized findings</p>"
        },

        {
            type: "section-break",
            title: "Module 2: Dashboards",
            subtitle: "Reading and understanding visualizations",
            theme: "dark"
        },

        {
            type: "text",
            title: "Dashboard Components",
            items: [
                "KPI Cards: High-level metrics at a glance",
                "Charts & Graphs: Visual representation of trends",
                "Tables: Detailed breakdowns of data",
                "Filters: Drill down into specific segments",
                "Alerts: Notifications when thresholds are breached"
            ]
        },

        {
            type: "kpi",
            title: "Example: Sales Dashboard",
            metrics: [
                { label: "Total Revenue", value: "$1.2M", status: "up", detail: "+15% vs last month" },
                { label: "Conversion Rate", value: "3.2%", status: "up", detail: "+0.5 percentage points" },
                { label: "Avg Order Value", value: "$245", status: "down", detail: "-$12 vs previous period" },
                { label: "Customer Lifetime Value", value: "$3,200", status: "up", detail: "+12% YoY" }
            ]
        },

        {
            type: "chart-bar",
            title: "Monthly Revenue Trend",
            description: "Historical performance over 6 months",
            chartData: {
                labels: ["January", "February", "March", "April", "May", "June"],
                datasets: [
                    { label: "Revenue ($K)", data: [850, 920, 1050, 1100, 1150, 1200] }
                ]
            }
        },

        {
            type: "section-break",
            title: "Module 3: Interpreting Metrics",
            subtitle: "How to read between the lines",
            theme: "light"
        },

        {
            type: "text",
            title: "Common Metrics Explained",
            items: [
                "Growth Rate: Percentage increase over a time period",
                "Variance: Difference between actual and expected results",
                "Trend: Direction data is moving (up, down, or stable)",
                "Benchmark: How you compare to standards or competitors",
                "Forecast: Prediction of future performance"
            ]
        },

        {
            type: "comparison",
            title: "Red Flags vs. Green Lights",
            leftLabel: "Warning Signs ⚠️",
            rightLabel: "Positive Indicators ✓",
            leftItems: [
                "Revenue declining for 3+ months",
                "Customer churn increasing",
                "Conversion rate below target",
                "High cost per acquisition",
                "Missed sustainability targets"
            ],
            rightItems: [
                "Consistent month-over-month growth",
                "Customer satisfaction increasing",
                "Conversion exceeding benchmark",
                "Low and improving CAC",
                "On track for goals"
            ]
        },

        {
            type: "workflow",
            title: "The Analytics Process",
            description: "5 steps from question to insight",
            steps: [
                { name: "Question", detail: "What do you need to know?" },
                { name: "Collect", detail: "Gather relevant data" },
                { name: "Analyze", detail: "Apply statistical methods" },
                { name: "Visualize", detail: "Create clear charts" },
                { name: "Act", detail: "Make decisions" }
            ]
        },

        {
            type: "section-break",
            title: "Module 4: Case Studies",
            subtitle: "Real-world applications",
            theme: "dark"
        },

        {
            type: "image-split",
            title: "Case Study: E-commerce Company",
            content: "<h3>The Challenge</h3><p>They had declining conversion rates but didn't understand why.</p><h3>The Solution</h3><p>We analyzed their user behavior and discovered 45% of users abandoned carts at checkout.</p><h3>The Result</h3><p>Simplified checkout process → 35% increase in conversions",
            image: "images/office.png"
        },

        {
            type: "quote",
            theme: "dark",
            title: "Learning from Others",
            quote: "The most valuable data is often found in the questions you stop asking. When you finally decide to measure something important, you'll be amazed at what you discover.",
            author: "Analytics Expert"
        },

        {
            type: "section-break",
            title: "Module 5: Your First Dashboard",
            subtitle: "Hands-on practice",
            theme: "light"
        },

        {
            type: "text",
            title: "Dashboard Best Practices",
            items: [
                "Start with ONE primary metric and expand from there",
                "Use consistent color coding (red=bad, green=good)",
                "Include context (targets, trends, comparisons)",
                "Update frequently to reflect reality",
                "Keep it simple - remove anything that doesn't inform decisions"
            ]
        },

        {
            type: "grid",
            title: "Tool Options",
            description: "Popular analytics platforms",
            columns: 3,
            items: [
                {
                    title: "Google Analytics",
                    description: "Website traffic & user behavior",
                    icon: "📈"
                },
                {
                    title: "Tableau",
                    description: "Enterprise-grade dashboards",
                    icon: "📊"
                },
                {
                    title: "Looker",
                    description: "Cloud-native BI platform",
                    icon: "☁️"
                }
            ]
        },

        {
            type: "timeline",
            title: "Your Learning Journey",
            events: [
                { date: "Week 1", text: "Master dashboard basics & metrics" },
                { date: "Week 2", text: "Analyze case studies & patterns" },
                { date: "Week 3", text: "Build your own sample dashboard" },
                { date: "Week 4", text: "Present insights to your team" }
            ]
        },

        {
            type: "section-break",
            title: "Key Takeaways",
            subtitle: "What you should remember",
            theme: "dark"
        },

        {
            type: "number-highlight",
            title: "The Power of Data",
            number: "5x",
            text: "Organizations that make data-driven decisions are 5x more likely to outperform their peers"
        },

        {
            type: "text",
            title: "Next Steps",
            items: [
                "✓ Review the 3 module slides multiple times",
                "✓ Explore the tools mentioned using free trials",
                "✓ Find a metric in your role to start tracking",
                "✓ Practice interpreting real dashboards",
                "✓ Ask mentor questions about your data"
            ]
        },

        {
            type: "contact",
            theme: "dark",
            title: "Ready to Learn More?",
            email: "training@yourcompany.com",
            phone: "+1 (555) 555-5555",
            location: "Online & On-site"
        }

    ]
};
