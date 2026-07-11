export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  details: string[];
  skills: string[];
}

export interface Education {
  institution: string;
  degree: string;
  location?: string;
}

export interface Certification {
  name: string;
  issuer: string;
}

export interface Award {
  name: string;
  description: string;
}

export const portfolioData = {
  name: "Arijit Sadhu",
  tagline: "Simplifying Big Data. Refining Process. Driving Growth.",
  location: "Hyderabad, Telangana, India",
  email: "as11.ishaan@gmail.com",
  linkedin: "https://www.linkedin.com/in/arijit-sadhu-data-analyst",
  
  summary: "Highly analytical and process-oriented data analyst with in-depth knowledge of research methodologies, big data capture, curation, manipulation, and visualization. Furnishing insights, analytics, and business intelligence used to advance opportunity identification, process re-engineering, and corporate growth.",
  
  topSkills: ["Prompt Engineering", "Project Management", "Presentations", "Business Intelligence", "Data Analytics"],
  
  technologies: [
    { name: "Python", category: "Languages" },
    { name: "SQL", category: "Databases" },
    { name: "Alteryx", category: "Data Preparation" },
    { name: "Tableau", category: "Visualization" },
    { name: "Power BI", category: "Visualization" },
    { name: "VBA", category: "Automation" },
    { name: "RPA", category: "Automation" },
    { name: "SAP Fico", category: "ERP/Finance" },
    { name: "Bloomberg", category: "Terminals" }
  ],
  
  experiences: [
    {
      id: "bofa-am",
      company: "Bank of America",
      role: "Assistant Manager & Officer (BCE - Data Intelligence & Insights)",
      period: "October 2024 - Present",
      location: "Hyderabad, Telangana, India",
      details: [
        "Managing Analytics, Reporting & Automation Projects within Client Equities domain using Tableau, Alteryx, Python & VBA.",
        "Leading cross-functional projects to transform massive scale datasets into high-impact operational dashboards.",
        "Developing automated data pipelines that eliminate manual reporting overhead and minimize operational risk."
      ],
      skills: ["Tableau", "Alteryx", "Python", "VBA", "Client Equities"]
    },
    {
      id: "bofa-tl",
      company: "Bank of America",
      role: "Team Leader & Officer (BCE - Business Control & Strategy Initiatives)",
      period: "December 2021 - September 2024",
      location: "Greater Ahmedabad Area (GIFT CITY)",
      details: [
        "Led critical business control and strategic automation projects, driving risk management and mitigation strategies.",
        "Created streamlined workflows that improved cross-team efficiency and process compliance across client-focused lines of business.",
        "Established standardized performance metrics and executive dashboard reporting."
      ],
      skills: ["Business Control", "Strategy", "Automation", "Risk Management"]
    },
    {
      id: "pwc",
      company: "PwC",
      role: "Advisory Associate (Investment Risk & Compliance)",
      period: "January 2019 - December 2021",
      location: "Kolkata Area, India",
      details: [
        "Delivered advisory services in investment risk and compliance, evaluating controls and verifying adherence to global regulatory frameworks.",
        "Analyzed complex financial data and compiled comprehensive compliance audits for top-tier global institutions.",
        "Automated recurring risk assessment computations, reducing audit cycle times."
      ],
      skills: ["Investment Risk", "Compliance", "Advisory", "Financial Analysis"]
    },
    {
      id: "genpact",
      company: "Genpact",
      role: "Process Associate (FP&A)",
      period: "December 2016 - December 2018",
      location: "Kolkata Area, India",
      details: [
        "Executed financial planning, forecasting, and expense variance analysis to guide leadership decision-making.",
        "Synthesized monthly financial reports and budget spreadsheets for client cost centers.",
        "Standardized forecasting models, enhancing projection accuracy across operational segments."
      ],
      skills: ["FP&A", "Financial Planning", "Forecasting", "Variance Analysis"]
    }
  ] as Experience[],

  education: [
    {
      institution: "Maulana Abul Kalam Azad University of Technology, West Bengal (formerly WBUT)",
      degree: "Post Graduation Diploma, Data Science & Machine Learning"
    },
    {
      institution: "University of Burdwan",
      degree: "Masters of Commerce, Accounting and Finance"
    },
    {
      institution: "Serampore College, Calcutta University",
      degree: "Bachelor of Commerce - BCom, Accounting and Finance"
    },
    {
      institution: "The Institute of Chartered Accountants of India",
      degree: "Inter(IPCC), Accounting, Taxation, Companies Act, Financial Management"
    }
  ] as Education[],

  certifications: [
    { name: "Generative AI Mastermind", issuer: "AI Institute" },
    { name: "SAP Fico", issuer: "SAP" },
    { name: "Microsoft Azure Data Fundamentals", issuer: "Microsoft" },
    { name: "Alteryx Foundation Micro Credential", issuer: "Alteryx" }
  ] as Certification[],

  awards: [
    { name: "The Bright Beginner", description: "Recognizing rapid excellence, adaptability, and high potential right from start." },
    { name: "YMAD - You Made A Difference", description: "Awarded for exceptional contributions that directly improved team outcomes." },
    { name: "The Rising Star", description: "Presented to top performers demonstrating consistent operational leadership." },
    { name: "Spot Award", description: "On-the-spot recognition for resolving critical reporting roadblocks under tight deadlines." },
    { name: "High Five Award", description: "Peer-nominated award for collaborative spirit, coaching, and support." }
  ] as Award[]
};
