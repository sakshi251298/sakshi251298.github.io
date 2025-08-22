import * as React from "react"
import "./experience.scss"


const experienceData = [
  {
    "company": "Insight Global, Evergreen",
    "time": "January 2025 – May 2025",
    "position": "GenAI Engineer Intern",
    "description": ["Developed an AI-powered SOW generator using LangGraph with multi-agent orchestration, automating drafting, validation, and feedback loops to reduce manual effort by 30%.", "Built a Retrieval-Augmented Generation (RAG) system leveraging LLMs and NLP-driven automation, improving document accuracy by 25% and incorporating vector embeddings stored in PostgreSQL (pgvector).", "Created automated ETL pipelines using Python and SQL to extract, clean, and transform large-scale driver training data, enhancing data integrity and reducing processing time by 35%.", "Deployed the project on Azure, utilizing Azure Compute for scalable processing and Azure PostgreSQL for secure, high-performance data storage alongside integration with Azure OpenAI for LLM inference."]
  },
  {
    "company": "The University of Texas at Dallas",
    "time": "August 2024 - May 2025",
    "position": "Graduate Teaching Assistant, Big Data & Data Visualization",
    "description": ["Mentored 50+ students on AWS, Hadoop/Spark, Tableau, Power BI, and Python for real-world data analytics projects.", "Developed curriculum and provided feedback to enhance analytical skills"]
  },
  {
    "company": "LTIMindtree",
    "time": "July 2021 – August 2023",
    "position": "Data Analyst",
    "description": ["Engineered SQL-based automation and data integration scripts for 100M+ transaction records with 99.99% uptime and 94% transformation accuracy.", "Optimized data pipelines using Seeburger BIS and Python by introducing automation scripts and validation logic, decreasing system downtime by 30% and reducing manual interventions by 50%.", "Devised Tableau dashboards for operations and finance teams, driving a 20% increase in reporting efficiency and 15% faster decision-making cycles."]
  },
  {
    "company": "MarketLync",
    "time": "September 2020 – July 2021",
    "position": "Technology Analyst Intern",
    "description": ["Created Power BI and Tableau dashboards highlighting user retention and growth, increasing consultation-based revenue by 25%.", "Developed SQL queries and AWS Athena pipelines for real-time metrics and program performance analysis.", "Automated Excel-based stakeholder reports, reducing repetitive tasks by 50%"]
  },
  {
    "company": "ETMantra",
    "time": "December 2019 – June 2020",
    "position": "Analyst Intern",
    "description": ["Built and optimized SQL pipelines to extract and transform REST API data for business reporting, decreasing query response time by 40%.", "Designed and deployed Tableau dashboards for automated insights, reducing manual reporting by 20%."]
  },
]

const Experience = () => (
  <section className="section experience">
    <div className="section__title">Experience</div>
    <div className="section__content">
      <div className="jobs">
        {
          experienceData.map((data) => (
            <div className="job">
              <div className="time-place">
                <div className="job__company">
                  <a href={data.url} target="_blank" rel="noreferrer">{data.company}</a>
                </div>
                <div className="job__time">{data.time}</div>
              </div>
              <div className="job__position">{data.position}</div>
              <ul className="job__description">
                {
                  data.description && data.description.map((desc) => (
                    <li key={desc}>{desc}</li>
                  ))
                }
              </ul>
            </div>
          ))
        }
      </div>

      <a href="./Sakshi_Patel.pdf" target="_blank" rel="noreferrer" className="arrow-link">View My Resume</a>
    </div>
  </section>
)

export default Experience
