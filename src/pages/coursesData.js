import BI from "../assets/Courses/PowerBi.jpg";
import gcp from "../assets/Courses/gcp.jpg";
import tableLu from "../assets/Courses/tablue.jpg";
import sql from "../assets/Courses/SQL.jpg";
import da from "../assets/Courses/DA.jpg";
import ms from "../assets/Courses/ms.jpg";
import python from "../assets/Courses/python1.jpg";
import automate from "../assets/Courses/automate.jpg";

const courses = [
  {
    id: 1,
    title: "Microsoft Power BI",
    description:
      "Unlock the full potential of your data with Power BI. Our training covers everything from basic data visualization to advanced analytics.",
    image: BI,
    category: "Our Courses",
    info: "Power BI is an integral part of the Microsoft Power Platform, which includes Power Apps, Power Automate, and Power Virtual Agents. At The Tools, we specialize in providing tailored Power BI training designed to empower learners at all levels, from beginners to professionals. Our hands-on training includes practical exercises, expert trainers, placement assistance, and industry-recognized certification. Explore how Power BI enhances your ability to visualize data, create insightful reports, and deepen your understanding of business intelligence within the Microsoft ecosystem. Join us today and take your career to the next level with our Power BI Training in Pune."
  },
  {
    id: 2,
    title: "Google Cloud Platform",
    description:
      "Master the Google Cloud Platform with our comprehensive training. Learn to deploy, manage, and scale applications with ease.",
    image: gcp,
    category: "Our Courses",
    info: " Learn Google Cloud Platform (GCP) easily with our special training in Pune. Our experienced teachers will guide you step by step, and you’ll get hands-on practice to become really good at GCP. Plus, you can earn an important certification.Our training covers everything you need to know about GCP, even if you’re just starting. You’ll learn about computers, storage, databases, the internet, and how to keep things safe. This knowledge will open up lots of job opportunities because many companies need people who are good at GCP."
  },
  {
    id: 3,
    title: "Tableau",
    description:
      "Become an expert in Tableau with our training program. Learn how to create beautiful dashboards and visualize complex data.",
    image: tableLu,
    category: "Our Courses",
    info: "Boost your data skills with our Tableau Training in Pune. Whether you’re new to Tableau or have some experience, our course offers hands-on practice with expert teachers. You will earn a valuable certification recognized in the industry. Learn to create clear data visuals, make insightful reports, and understand business data better. With practical lessons and real-world examples, you will gain the knowledge needed to succeed in business intelligence. Join us now and take your career to the next level."
  },
  {
    id: 4,
    title: "Advanced SQL",
    description:
      "Learn Advanced SQL from our expert trainers. Master complex queries, database management, and more.",
    image: sql,
    category: "Our Courses",
    info: "Looking to improve your data skills? Our SQL Training in Pune is perfect for you. Learn how to use SQL to handle, query, and analyze data effectively. Whether you’re new to SQL or have experience, our training provides hands-on practice and expert guidance. Get ready for jobs like Data Analyst, Database Administrator, or Data Engineer. Join us and open the door to new career opportunities in data management and analysis."
  },
  {
    id: 5,
    title: "Data Analytics",
    description:
      "Dive into the world of Data Analytics with our expert-led courses. Gain the tools to turn raw data into actionable insights.",
    image: da,
    category: "Trending Courses",
    info: "Boost your data analytics skills with our Data Analytics Training in Pune. Whether you’re starting out or have some experience, our course offers hands-on learning with expert guidance. Earn a respected certification in the industry. Learn to analyze data effectively, automate tasks, and derive actionable insights. With practical lessons and real-world examples, you’ll gain the skills needed to succeed in data analytics. Join us today and take your career to the next level."
  },
  {
    id: 6,
    title: "Microsoft Power BI",
    description:
      "Unlock the full potential of your data with Power BI. Our training covers everything from basic data visualization to advanced analytics.",
    image: BI,
    category: "Trending Courses",
    info: "Power BI is an integral part of the Microsoft Power Platform, which includes Power Apps, Power Automate, and Power Virtual Agents. At The Tools, we specialize in providing tailored Power BI training designed to empower learners at all levels, from beginners to professionals. Our hands-on training includes practical exercises, expert trainers, placement assistance, and industry-recognized certification. Explore how Power BI enhances your ability to visualize data, create insightful reports, and deepen your understanding of business intelligence within the Microsoft ecosystem. Join us today and take your career to the next level with our Power BI Training in Pune."
  },
  {
    id: 7,
    title: "Google Cloud Platform",
    description:
      "Master the Google Cloud Platform with our comprehensive training. Learn to deploy, manage, and scale applications.",
    image: gcp,
    category: "Trending Courses",
    info: "Step into the future of cloud computing with our Google Cloud Platform Training in Pune. Our easy-to-follow courses are perfect for everyone, from beginners to those with some experience. Enjoy hands-on practice, expert advice, and earn a certification that’s recognized in the industry. Improve your cloud knowledge and open new career opportunities. Join us at The Tools in Pune to start your GCP journey today!"
  },
  {
    id: 8,
    title: "Microsoft Power Platform",
    description:
      "Learn how to use Power Apps, Power Automate, and Power BI efficiently to boost your career opportunities.",
    image: ms,
    category: "Trending Courses",
    info: "Microsoft Power Platform Training in Pune is designed to empower participants with the skills to leverage Microsoft’s suite of tools – Power BI, Power Apps, Power Automate, and Power Virtual Agents for enhanced data analysis, process automation, and application development. Whether you are a beginner or looking to advance your skills, our course provides hands-on learning with expert instructors."
  },
  {
    id: 9,
    title: "Python",
    description:
      "Discover the power of Python through our training. Learn from basics to advanced data analysis and machine learning. Build strong applications and uncover insights easily.",
    image: python,
    category: "High in Demand Training",
    info: "Looking to enhance your programming skills? Our Python Training in Pune is ideal for you. Learn to leverage Python for data manipulation, analysis, and automation tasks effectively. Whether you’re a beginner or have some programming experience, our course offers practical exercises and expert guidance to help you excel. Prepare for roles such as Data Analyst, Software Developer, or Automation Engineer. Enroll today and unlock exciting career prospects in data science, software development, and automation."
  },
  {
    id: 10,
    title: "Advanced SQL",
    description:
      "Become an expert in Advanced SQL with our comprehensive training. Learn to tackle complex queries, improve performance, and manage databases efficiently with ease.",
    image: sql,
    category: "High in Demand Training",
    info: "The Tools is one of the Best SQL training institutes in Pune with industry expert trainers. SQL training includes basics to advanced SQL training. The database selection choice with the participants and they can select the database based on their preference.The SQL training in Pune is designed for the BI Developers, Application developers Business Analysts, ETL testing team and SMEs. It includes fundamentals of SQL and the advanced SQL training as we. The training includes some of the complex topics like CTE, Nested subquery, Analytical functions and joins."
  },
  {
    id: 11,
    title: "Microsoft Power BI",
    description:
      "Unlock the full potential of your data with Power BI. Our training covers data visualization to advanced analytics, enabling you to make data-driven decisions confidently.",
    image: BI,
    category: "High in Demand Training",
    info: "Build interactive dashboards and gain expertise in Power BI for enterprise-level data analysis, including integration with other Microsoft products like Azure and Excel.Microsoft Power BI is a fundamental part of the Microsoft Power Platform, offering robust tools for discovering, visualizing, analyzing, and collaboratively reporting data. Its seamless integration with other Microsoft products such as Excel, Azure services (like Azure Data Lakes and Azure DevOps), and Power Apps enhances its versatility in managing and interpreting data across various platforms.At The Tools, our in-house Power BI training in Pune caters to a diverse audience, from seasoned professionals to beginners, through both offline and online courses. We provide flexible learning schedules, convenient payment options, and a curriculum tailored with practical projects to ensure hands-on learning experiences."
  },
  {
    id: 12,
    title: "Power Automate",
    description:
      "Unlock the power of efficiency with Power Automate. Automate tasks easily, integrate apps smoothly, and supercharge your productivity without coding.",
    image: automate,
    category: "High in Demand Training",
    info: "Best Power Automate Training in Pune. In this Microsoft Power Automate Training will provide hands-on learning experience to our candidates. The training program shows how to design and build Power Automate for SharePoint Integration. Enroll yourself and get the industry oriented training from our Microsoft Certified Trainers. Our trainers are having more than 10 plus years in Power Automate Domain."
  },
];

export default courses;
