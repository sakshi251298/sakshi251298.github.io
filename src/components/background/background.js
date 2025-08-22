import * as React from "react"


const backgroundData = {
  title: "Background",
  line1: (
    <>
      Recent graduate with a Master's in <strong>Information Technology and Management</strong>from The University of Texas at Dallas. I have a strong background in <strong>data engineering</strong> and <strong>generative AI</strong>, with a passion for building scalable, data-driven systems
    </>
    ),
  line2: (
    <>
      My recent experience as a <strong>GenAI Engineer Intern</strong> at <strong>Insight Global</strong> involved developing an AI- powered Statement of Work generator using <strong>LangGraph</strong> and a multi-agent approach.I also created a <strong>Retrieval - Augmented Generation(RAG)</strong> system that improved document accuracy
    </>
  ),
  line3: (
    <>
      Previously, I worked as a <strong>Data Analyst at LTIMindtree</strong>, where I engineered and automated data pipelines for over 100 million records, significantly reducing system downtime.I also developed <strong>Tableau</strong> dashboards that improved reporting efficiency and leveraged skills in <strong>Python</strong>, <strong>SQL</strong>, and <strong>ETL tools</strong>.
    </>
  ),
};
const Background = () => (
  <section className="section background">
    <div className="section__title">{backgroundData.title}</div>
    <div className="section__content">
      <p>
        {backgroundData.line1}
      </p>
      <p>
        {backgroundData.line2}
      </p>
      <p>
        {backgroundData.line3}
      </p>
    </div>
  </section>
)

export default Background
