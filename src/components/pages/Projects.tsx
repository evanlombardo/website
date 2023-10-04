import "../../styles/app.css";
import CssLogo from "../logos/CssLogo";
import DescriptionList from "../DescriptionList";
import GitHubLogo from "../logos/GitHubLogo";
import LinkButtons from "../LinkButtons";
import ReactLogo from "../logos/ReactLogo";
import TypeScriptLogo from "../logos/TypeScriptLogo";
import JavaLogo from "../logos/JavaLogo";
import JUnitLogo from "../logos/JUnitLogo";
import YouTubeLogo from "../logos/YouTubeLogo";
import HtmlLogo from "../logos/HtmlLogo";
import PythonLogo from "../logos/PythonLogo";
import FlaskLogo from "../logos/FlaskLogo";
import MqttLogo from "../logos/MqttLogo";
import RustLogo from "../logos/RustLogo";
import CanLogo from "../logos/CanLogo";
import SpringLogo from "../logos/SpringLogo";

interface Props {
  lightMode: "light" | "dark";
}

function Projects({ lightMode }: Props) {
  const descriptions = [
    {
      heading: "BigHouse",
      subheading: "Aug. 2023 - Current",
      description: [
        "Programming IoT multi-tool to simplify and consolidate smart home features",
        "Designed with reusable, extendable modules and a module-generation tool",
        "Uses React TypeScript JSX frontend with Spring Boot backend",
      ],
      footing: (
        <>
          <div
            className="col my-0 justify-content-end align-items-center"
            style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
          >
            <div className="col-auto g-0 p-0 me-1 me-lg-2 mr-xxl-2-5">
              <JavaLogo lightMode={lightMode} />
            </div>
            <div className="col-auto g-0 p-0 mx-1 mx-lg-2 mx-xxl-2-5">
              <TypeScriptLogo lightMode={lightMode} />
            </div>
            <div className="col-auto g-0 mx-1 mx-lg-2 mx-xxl-2-5 p-0">
              <SpringLogo lightMode={lightMode} />
            </div>
            <div className="col-auto g-0 mx-1 mx-lg-2 mx-xxl-2-5 p-0">
              <ReactLogo lightMode={lightMode} />
            </div>
          </div>
        </>
      ),
    },
    {
      heading: "Odyssey",
      subheading: "Aug. 2023 - Current",
      description: [
        "Lead team of 6 developers for Northeastern University Electric Racing",
        "Developing and integrating custom MQTT server and Rust application to decode and send CAN data from our house-made formula electric car",
      ],
      footing: (
        <>
          <div
            className="col my-0 justify-content-end align-items-center"
            style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
          >
            <div className="col-auto g-0 p-0 me-1 me-lg-2 mr-xxl-2-5">
              <MqttLogo lightMode={lightMode} />
            </div>
            <div className="col-auto g-0 p-0 mx-1 mx-lg-2 mx-xxl-2-5">
              <RustLogo lightMode={lightMode} />
            </div>
            <div className="col-auto g-0 mx-1 mx-lg-2 mx-xxl-2-5 p-0">
              <PythonLogo lightMode={lightMode} />
            </div>
            <div className="col-auto g-0 mx-1 mx-lg-2 mx-xxl-2-5 p-0">
              <CanLogo lightMode={lightMode} />
            </div>
          </div>
        </>
      ),
    },
    {
      heading: "Portfolio Website",
      subheading: "Sept. 2023 - Oct. 2023",
      description: [
        "Developed professional website from scratch with React TypeScript JSX",
        "Stylized using custom CSS classes combined with Bootstrap",
        "Designed with reusability, extendability, and customizability in mind",
      ],
      footing: (
        <>
          <LinkButtons
            lightMode={lightMode}
            links={[
              {
                name: "View on GitHub",
                link: "https://github.com/evanlombardo/website",
                icon: <GitHubLogo lightMode={lightMode} />,
              },
            ]}
            divWidthPercent={2.386 * 0.75}
            minWidth="36px"
            buttonClass="m-0 py-0 icon-div align-icon"
            divClass="my-0 fit-content"
          />
          <div
            className="col my-0 justify-content-end align-items-center"
            style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
          >
            <div className="col-auto g-0 p-0 me-1 me-lg-2 mr-xxl-2-5">
              <TypeScriptLogo lightMode={lightMode} />
            </div>
            <div className="col-auto g-0 p-0 mx-1 mx-lg-2 mx-xxl-2-5">
              <ReactLogo lightMode={lightMode} />
            </div>
            <div className="col-auto g-0 mx-1 mx-lg-2 mx-xxl-2-5 p-0">
              <CssLogo lightMode={lightMode} />
            </div>
            <div className="col-auto g-0 mx-1 mx-lg-2 mx-xxl-2-5 p-0">
              <HtmlLogo lightMode={lightMode} />
            </div>
          </div>
        </>
      ),
    },
    {
      heading: "Collager Program",
      subheading: "Apr. 2023",
      description: [
        "Created an image processing software that can apply a dozen filters and layer images",
        "Images, filters, and layers are implemented in custom MVC-structured Java classes",
        "Rigorously tested using JUnit Java tests",
      ],
      footing: (
        <>
          <LinkButtons
            lightMode={lightMode}
            links={[
              {
                name: "View on GitHub",
                link: "https://github.com/evanlombardo/Collager",
                icon: <GitHubLogo lightMode={lightMode} />,
              },
            ]}
            divWidthPercent={2.386 * 0.75}
            minWidth="36px"
            buttonClass="m-0 py-0 icon-div align-icon"
            divClass="my-0 fit-content"
          />
          <div
            className="col my-0 justify-content-end align-items-center"
            style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
          >
            <div className="col-auto g-0 p-0 me-1 me-lg-2 mr-xxl-2-5">
              <JavaLogo lightMode={lightMode} />
            </div>
            <div className="col-auto g-0 p-0 mx-1 mx-lg-2 mx-xxl-2-5">
              <JUnitLogo lightMode={lightMode} />
            </div>
          </div>
        </>
      ),
    },
    {
      heading: "Seaside Service App",
      subheading: "Oct. 2021",
      description: [
        "Invented community service mobile app that won the 2021 Congressional App Challenge",
        "Made with Java in Android Studio",
      ],
      footing: (
        <>
          <LinkButtons
            lightMode={lightMode}
            links={[
              {
                name: "Watch Demo",
                link: "https://www.youtube.com/watch?v=TcR_4IEbmYI",
                icon: <YouTubeLogo lightMode={lightMode} />,
              },
            ]}
            divWidthPercent={2.386 * 0.75}
            minWidth="36px"
            buttonClass="m-0 py-0 icon-div align-icon"
            buttonId="youtube"
            divClass="my-0 fit-content"
          />
          <div
            className="col my-0 justify-content-end align-items-center"
            style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
          >
            <div className="col-auto g-0 p-0 me-1 me-lg-2 mr-xxl-2-5 ">
              <JavaLogo lightMode={lightMode} />
            </div>
            <div className="col-auto g-0 p-0 mx-1 mx-lg-2 mx-xxl-2-5">
              <HtmlLogo lightMode={lightMode} />
            </div>
            <div className="col-auto g-0 mx-1 mx-lg-2 mx-xxl-2-5 p-0">
              <CssLogo lightMode={lightMode} />
            </div>
          </div>
        </>
      ),
    },
    {
      heading: "Tic-Tac-Toe AI",
      subheading: "July 2021",
      description: [
        "Designed a machine-learning AI that trains by playing against itself in tic-tac-toe",
        "Trains in seconds and plays perfectly when trained",
        "Secured against attacks like HTML injection for a robust application",
      ],
      footing: (
        <>
          <LinkButtons
            lightMode={lightMode}
            links={[
              {
                name: "View on GitHub",
                link: "https://github.com/evanlombardo/TicTacToeAI",
                icon: <GitHubLogo lightMode={lightMode} />,
              },
            ]}
            divWidthPercent={2.386 * 0.75}
            minWidth="36px"
            buttonClass="m-0 py-0 icon-div align-icon"
            divClass="my-0 fit-content"
          />
          <div
            className="col my-0 justify-content-end align-items-center"
            style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
          >
            <div className="col-auto g-0 p-0 me-1 me-lg-2 mr-xxl-2-5">
              <PythonLogo lightMode={lightMode} />
            </div>
            <div className="col-auto g-0 p-0 mx-1 mx-lg-2 mx-xxl-2-5">
              <FlaskLogo lightMode={lightMode} />
            </div>
            <div className="col-auto g-0 p-0 mx-1 mx-lg-2 mx-xxl-2-5">
              <HtmlLogo lightMode={lightMode} />
            </div>
            <div className="col-auto g-0 p-0 mx-1 mx-lg-2 mx-xxl-2-5">
              <CssLogo lightMode={lightMode} />
            </div>
          </div>
        </>
      ),
    },
  ];

  return (
    <>
      <h1
        className={
          "primary-heading mt-2 mb-heading-vh " + lightMode + "-primary"
        }
      >
        Projects
      </h1>
      <DescriptionList lightMode={lightMode} descriptions={descriptions} />
    </>
  );
}

export default Projects;
