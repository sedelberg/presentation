const presentationData = {
    globalTheme: "light",
    slides: [
        {
            type: "cover",
            theme: "dark",
            title: "Data&Analytics",
            subtitle: "Q1 Architecture & Performance Review",
            date: "March 2026"
        },
        {
            type: "quote",
            title: "Core Philosophy",
            quote: "Agility in analytics is not just about speed; it is about the fluidity of thought translating into actionable data.",
            author: "Data Factory Leadership"
        },
        {
            type: "agenda",
            title: "Agenda",
            items: [
                "Executive Summary & KPIs",
                "Data Pipeline Workflow",
                "Project Timeline",
                "Regional Data Growth",
                "Infrastructure Expansion"
            ]
        },
        {
            type: "kpi",
            title: "Performance Scorecard",
            metrics: [
                { label: "Data Processed", value: "1.2 PB", status: "up", detail: "+15% MoM" },
                { label: "Pipeline Uptime", value: "99.98%", status: "up", detail: "Target: 99.9%" },
                { label: "Processing Cost", value: "-12%", status: "down", detail: "Optimization savings" },
                { label: "Active Models", value: "45", status: "up", detail: "5 new deployed" }
            ]
        },
        {
            type: "number-highlight",
            title: "Efficiency Gains",
            number: "-45%",
            text: "Reduction in manual data processing time since implementing the new automation workflows."
        },
        {
            type: "workflow",
            title: "Data Factory Architecture",
            description: "Automated ingestion and transformation flow from source to dashboard.",
            steps: [
                { name: "Ingestion", detail: "ERP, SAP, APIs" },
                { name: "Processing", detail: "Data Factory Workflows" },
                { name: "Storage", detail: "Cloud Data Lake" },
                { name: "Analytics", detail: "Machine Learning Models" },
                { name: "Visualization", detail: "Live BI Dashboards" }
            ]
        },
        {
            type: "timeline",
            title: "Implementation Roadmap",
            events: [
                { date: "Jan 2026", text: "Legacy System Audit" },
                { date: "Feb 2026", text: "Pipeline Migration" },
                { date: "Mar 2026", text: "Model Validation" },
                { date: "Apr 2026", text: "Global Rollout" }
            ]
        },
        {
            type: "chart-bar",
            title: "Regional Data Volume",
            description: "Data ingestion volume (in Terabytes) broken down by primary operational regions.",
            chartData: {
                labels: ["North America", "LATAM", "EMEA", "APAC"],
                datasets: [{ label: "Terabytes (TB)", data: [120, 95, 60, 45] }]
            }
        },
        {
            type: "image-split",
            title: "Infrastructure Expansion",
            image: "images/office.png", 
            content: "<p>We have successfully expanded our physical and cloud infrastructure.</p><ul><li>Upgraded server nodes</li><li>Enhanced security protocols</li><li>Reduced latency by 40ms</li></ul>"
        },
        {
            type: "image-background",
            title: "Global Scale.",
            content: "Expanding our data footprint across 4 continents, ensuring real-time analytics and agile decision-making at every level of the organization.",
            image: "images/team.png" 
        },
        {
            type: "contact",
            theme: "dark",
            title: "Thank You",
            email: "example@gmail.com",
            location: "Mexico City, CDMX",
            phone: "55 5555 5555"
        }
    ]
};