import BI from "../assets/Courses/PowerBi.jpg";
import gcp from "../assets/Courses/Snowflek.jpg";
import ms from "../assets/Courses/ms.jpg";
import python from "../assets/Courses/python1.jpg";
import sql from "../assets/Courses/new.jpg";
import automate from "../assets/Courses/Automate.jpg";
import aws from "../assets/Courses/aws.png"
import snowflake from "../assets/Courses/Snowflek.jpg"
import ssis from "../assets/Courses/SSIS.png"
import excel from "../assets/Courses/EXCEL.png"

const allCourses = [

  {
    id: 1,
    title: "Excel",
    category: "Data Analytics",
    image:excel,
    description:
      "Master Excel for data analysis, dashboards, and reporting. Learn formulas, pivot tables, charts, and advanced functions used by data professionals.",
    info: "Excel remains a critical tool for data professionals. In this course, you’ll learn to clean, analyze, and visualize data effectively. Topics include advanced formulas, data validation, VLOOKUP/XLOOKUP, dashboards, and more—ideal for aspiring analysts and business professionals.",
  },
  {
    id: 2,
    title: "SQL",
    category: "Data Analytics",
    image: sql,
    description:
      "Learn how to query, manipulate, and manage databases using SQL. Understand how to work with relational databases like MySQL and PostgreSQL.",
    info: "This SQL course covers everything from basic SELECT queries to complex joins, subqueries, CTEs, and window functions. Ideal for analysts, BI developers, and backend developers who work with structured data regularly.",
  },
  {
    id: 3,
    title: "Power BI",
    category: "Data Analytics",
    image: BI,
    description:
      "Build stunning interactive dashboards and reports. Learn data modeling, DAX, and Power Query for business intelligence projects.",
    info: "Power BI empowers you to create rich visualizations and dashboards. You'll learn how to connect data sources, model data, write DAX measures, and publish reports—critical for BI roles and reporting automation.",
  },
  {
    id: 4,
    title: "Python",
    category: "Data Analytics",
    image: python,
    description:
      "Use Python for data manipulation, analysis, and automation. Learn libraries like Pandas, NumPy, and Matplotlib to uncover insights.",
    info: "Designed for those who want to enter the data science or analytics field, this Python course covers data structures, functions, data analysis using Pandas, and visualizations. Great for automating workflows and performing advanced analytics.",
  },
  {
    id: 5,
    title: "SSIS",
    category: "Data Analytics",
    image:ssis,
    description:
      "Learn to design ETL pipelines using SQL Server Integration Services (SSIS). Ideal for managing data extraction and transformation processes.",
    info: "This course focuses on building robust data pipelines, error handling, data flow tasks, and deployment strategies using SSIS. It's tailored for data engineers and professionals working in BI environments.",
  },

  // Category: Power Platform
  {
    id: 6,
    title: "Power BI",
    category: "Power Platform",
    image: BI,
    description:
      "Transform raw data into meaningful insights with interactive dashboards and DAX-driven KPIs using Power BI.",
    info: "This Power BI training is part of the Power Platform suite and focuses on Microsoft integration. You’ll build enterprise-level dashboards, use DAX for calculations, and publish reports for collaborative access.",
  },
  {
    id: 7,
    title: "Power Apps",
    category: "Power Platform",
    image: ms,
    description:
      "Build low-code apps rapidly for desktop and mobile using Power Apps. Empower business users to create and deploy solutions.",
    info: "This Power Apps course teaches you how to build apps using drag-and-drop features, connect to data sources like SharePoint and Excel, and automate user interactions. No prior coding experience is needed.",
  },
  {
    id: 8,
    title: "Power Automate",
    category: "Power Platform",
    image: automate,
    description:
      "Automate repetitive tasks, approvals, and integrations across Microsoft 365 services using Power Automate (formerly Flow).",
    info: "You’ll learn to create cloud flows, automate processes across SharePoint, Excel, Outlook, and third-party services. Great for improving workflow efficiency in business operations.",
  },

  // Category: Cloud Technologies
  {
    id: 9,
    title: "GCP",
    category: "Cloud Technologies",
    image:gcp,
    description:
      "Learn Google Cloud Platform fundamentals for storage, computing, and data processing. Start your journey with BigQuery, Cloud Storage, and more.",
    info: "This GCP course introduces cloud infrastructure, data engineering workflows, and scalable analytics using BigQuery. Ideal for those interested in modern data platforms and cloud-based projects.",
  },
  {
    id: 10,
    title: "Snowflake",
    category: "Cloud Technologies",
    image:snowflake,
    description:
      "Get hands-on with Snowflake – a cloud-based data warehouse built for speed, scalability, and real-time analytics.",
    info: "In this course, you'll learn Snowflake architecture, querying with SQL, time travel, zero-copy cloning, and building data pipelines. Designed for data engineers and analysts transitioning to cloud warehousing.",
  },
  {
    id: 11,
    title: "AWS",
    category: "Cloud Technologies",
    image:aws,
    description:
      "Explore key AWS services like S3, EC2, Lambda, and RDS. Learn how to build and manage scalable cloud solutions.",
    info: "This beginner-to-intermediate AWS course provides the foundation for deploying and managing services in the cloud. You'll learn IAM, serverless architecture, and core infrastructure concepts for certification or production use.",
  },
];

export default allCourses;
