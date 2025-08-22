import * as React from "react"
import "./intro.scss"


const introData = {
  title: "Hello! ",
  beforeName: "I'm ",
  name: "Sakshi Patel",
  afterName: ", an aspiring GenAI Engineer and Data Specialist, building intelligent, data-driven systems that automate complex processes with innovative technologies.",
  contact: "Get in touch ",
  email: "sakshipatel2598@gmail.com",
  mailTo: "mailto:sakshipatel2598@gmail.com",
};
const Intro = () => {
  const [isHovering, setIsHovering] = React.useState(false);
  const onMouseOver = _ => {
    setIsHovering(true);
  };
  const onMouseOut = _ => {
    setIsHovering(false);
  };

  React.useEffect(() => {
    setTimeout(() => {
      setIsHovering(true);
      setTimeout(() => {
        setIsHovering(false);
      }, 2000);
    }, 1000);
  }, []);

  return <header className="intro">
    <h1 className="intro__hello">{introData.title}
      <span className={isHovering ? "emoji wave-hand animated wave" : "emoji wave-hand animated"} onMouseOver={onMouseOver} onMouseOut={onMouseOut} onFocus={onMouseOver} onBlur={onMouseOut} role="button" tabIndex={0} aria-label="wave hand"></span>
    </h1>

    <div className="intro__main">
      <h2 className="intro__tagline">{introData.beforeName}
        <span className="name">{introData.name}</span>{introData.afterName}
        <span className="emoji technologist"></span>
      </h2>
      <img src="/images/headshot.jpeg" alt="sakshi_patel" className="intro__headshot" />

    </div>

    <h3 className="intro__contact">
      <span>{introData.contact}</span>
      <span className="emoji pointer"></span>
      <span>
      <a href={introData.mailTo}
         className="highlight-link">{introData.email}</a>
    </span>
    </h3>
  </header>
};

export default Intro
