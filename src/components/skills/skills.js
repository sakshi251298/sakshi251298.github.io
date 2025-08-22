import * as React from "react"
import "./skills.scss"

const skillsData = {
  "languagesTitle": "Languages",
  "languages": ["Python", "JavaScript", "Typescript", "SQL", "Java", "R"],
  "frameworksTitle": "Frameworks & Tools",
  "frameworks": ["React.js", "Node.js", "LangGraph", "RAG", "GraphQL", "Git"],
  "toolsTitle": "Cloud & Database",
  "tools": ["MongoDB", "PostgreSQL", "Snowflake", "AWS", "Azure", "Seeburger BIS"],
  "designTitle": "Data Analysis & ML",
  "design": ["Tableau", "Power BI", "Grafana", "NLP", "Feature Engineering", "Statistical Modeling"],
}

const Skills = () => (
  <section className="section skills">
    <div className="section__title">Skills</div>
    <div className="section__content">
      <div className="skillz">
        <div className="skillz__category">
          <div className="skillz__category__label">{skillsData.languagesTitle}</div>
          <ul>
            {skillsData.languages.map((data) => <li className="skillz__category__item">{data}</li>)}
          </ul>
        </div>
        <div className="skillz__category">
          <div className="skillz__category__label">{skillsData.frameworksTitle}</div>
          <ul>
            {skillsData.frameworks.map((data) => <li className="skillz__category__item">{data}</li>)}
          </ul>
        </div>
        <div className="skillz__category">
          <div className="skillz__category__label">{skillsData.toolsTitle}</div>
          <ul>
            {skillsData.tools.map((data) => <li className="skillz__category__item">{data}</li>)}
          </ul>
        </div>
        <div className="skillz__category">
          <div className="skillz__category__label">{skillsData.designTitle}</div>
          <ul>
            {skillsData.design.map((data) => <li className="skillz__category__item">{data}</li>)}
          </ul>
        </div>
      </div>
    </div>
  </section>
)

export default Skills
