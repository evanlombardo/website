import "../../styles/home.css";
import LinkButtons from "../LinkButtons";
import ClipboardLogo from "../logos/ClipboardLogo";
import EmailLogo from "../logos/EmailLogo";
import GitHubLogo from "../logos/GitHubLogo";
import LinkedInLogo from "../logos/LinkedInLogo";

interface Props {
  lightMode: "light" | "dark";
}

function Home({ lightMode }: Props) {
  const links: {
    name: string;
    link: string;
    icon?: JSX.Element;
    id?: string;
  }[] = [
    {
      name: "GitHub",
      link: "https://github.com/evanlombardo",
      icon: <GitHubLogo lightMode={lightMode} />,
      id: "github",
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/evan-lombardo/",
      icon: <LinkedInLogo lightMode={lightMode} />,
      id: "linkedin",
    },
    {
      name: "Resume",
      link: "https://drive.google.com/file/d/1lohOpKv5HTUjp4XXUygA0BbDY0psJhhc/view?usp=share_link",
      icon: <ClipboardLogo lightMode={lightMode} />,
      id: "clipboard",
    },
    {
      name: "Email",
      link: "mailto:evan.lombardo04@gmail.com",
      icon: <EmailLogo lightMode={lightMode} />,
      id: "email",
    },
  ];

  return (
    <div className="p-0 g-0 m-0 body-root">
      <div className="p-0 g-0 my-3">
        <div
          className={
            "row g-0 p-0 justify-content-center " + lightMode + "-primary"
          }
        >
          <div className="col-9 clearfix">
            <img src="me.jpeg" className="float-md-start my-face" />
            <h1 className="my-2 primary-heading">I'm Evan Lombardo</h1>
            <p className="text-start body-text">
            I lead a team of developers at Northeastern University Electric Racing, where we engineer innovative software for our custom electric Formula car, 
            including the use of Renode to emulate hardware components and designing MQTT telemetry systems. My most recent internship at Massa Products 
            Corporation involved creating multithreaded socket servers and refining firmware and UI/UX designs for sensor-based applications. Previously, 
            as a Lockheed Martin intern, I contributed to software projects using Kubernetes, AWS, and Spring, focusing on secure integration and high-level 
            APIs. I thrive on solving complex problems and look forward to bringing my skills to a cutting-edge tech company.
            </p>
          </div>
        </div>
        <div
          className={
            "row g-0 p-0 justify-content-center " + lightMode + "-primary"
          }
        >
          {/* The div that defines the width of the buttons is col-9, which is 75% */}
          <LinkButtons
            lightMode={lightMode}
            links={links}
            divWidthPercent={75.0}
            minWidth="150px"
            buttonClass="m-0 py-0 icon-div-height-2 align-icon"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
