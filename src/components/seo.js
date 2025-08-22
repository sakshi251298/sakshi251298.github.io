import * as React from "react"

const seoData = {
  "title": "Sakshi Patel",
  "description": "Aspiring Data Analyst | Skilled in Python, SQL, Excel, and Data Visualization | Passionate about transforming data into actionable insights | Eager to contribute to a dynamic team and drive business success through data-driven decision-making.",
  "author": "Sakshi Patel",
  "siteUrl": "https://sakshi251298.github.io/",
}

const Seo = () => (
  <>
    <title>{seoData.title}</title>
    <meta name="description" content={seoData.description} />
    <meta property="og:title" content={seoData.title} />
    <meta property="og:description" content={seoData.description} />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:creator" content={seoData.author} />
    <meta name="twitter:title" content={seoData.title} />
    <meta name="twitter:description" content={seoData.description} />
  </>
)

export default Seo
