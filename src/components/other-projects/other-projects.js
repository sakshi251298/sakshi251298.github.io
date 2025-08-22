import * as React from "react"
import Parser from 'html-react-parser';
import "./other-projects.scss"

const otherProjectsData = [
  {
    "name": "Big Data Analytics of Truck Fleet Risk Management",
    "description": "Built Hadoop/Spark infrastructure to process 10M+ records, reducing latency by 30%. And created React-based dashboard integrated with Tableau to track driver behavior and incident risk zones, reducing fleet accidents by 25%.",
    "used": []
  },
  {
    "name": "Instacart – Market Analysis",
    "description": "Analyzed 3M+ grocery transactions with Python & SQL, improving cross-sell strategy by 15% & forecast accuracy by 25%. And Visualized key insights using Tableau dashboards to support strategic planning and boost retention by 18%.",
    "used": [
      { "thing": "Python" },
      { "thing": "SQL" },
      { "thing": "Tableau" },
      { "thing": "MongoDB" },
    ]
  },
  {
    "name": "RAG Based Generative AI Chatbot",
    "description": "Integrated an internal knowledge management chatbot using LangChain and OpenAI, enabling employees to retrieve insights from 1,000+ documents with 85% retrieval accuracy.",
    "used": [
      { "thing": "LangChain" },
      { "thing": "OpenAI" },
      { "thing": "Python" },
      { "thing": "RAG" },
    ]
  },
]

const FeaturedProjects = () => (
  <section className="section other-projects">
    <div className="section__title">Projects</div>
    <div className="section__content">
      {
        otherProjectsData.map((project) => (
          <div className="project">
            <div className="project__name">
              <a href={project.url} target="_blank" rel="noreferrer" className="">{project.name}</a>
            </div>
            <p>{Parser(project.description)}</p>
            <div className="project__used">
              {
                project.used.map((item) => (
                  <span className="project__used__item">{item.thing}</span>
                ))
              }
            </div>
          </div>
        ))
      }
    </div>
  </section>
)

export default FeaturedProjects
