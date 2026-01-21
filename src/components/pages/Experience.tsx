import "../../styles/app.css";
import DescriptionList from "../DescriptionList";
import AwsLogo from "../logos/AwsLogo";
import CLogo from "../logos/CLogo";
import CsharpLogo from "../logos/CsharpLogo";
import CucumberLogo from "../logos/CucumberLogo";
import DotnetLogo from "../logos/DotnetLogo";
import EQubeLogo from "../logos/EQubeLogo";
import GitLabLogo from "../logos/GitLabLogo";
import JavaLogo from "../logos/JavaLogo";
import KubernetesLogo from "../logos/KubernetesLogo";
import PythonLogo from "../logos/PythonLogo";
import ReactLogo from "../logos/ReactLogo";
import SpringLogo from "../logos/SpringLogo";

interface Props {
  lightMode: "light" | "dark";
}

function Experience({ lightMode }: Props) {
  const descriptions: {
    heading: string;
    headingDescription?: string;
    subheading?: string;
    description: string | string[];
    footing?: JSX.Element;
  }[] = [
    {
      heading: "Matterworks",
      headingDescription: "Software Engineer Co-Op",
      subheading: "Jan. 2025 - Dec. 2025",
      description: [
        "Accelerated training data ingestion by 96x, drastically shortening model development cycles",
        "Achieved 5x API response speed increases by optimizing SQL queries and tables",
        "Planned and executed large-scale project spanning 4 codebases, replacing error-prone manual workflows and enabling new AI model types on the platform",
        "Built 3 ETL pipelines in AWS Glue processing 20+ million records, handling database migration, metadata ingestion, and data validation with 90% anomaly detection",
        "Automated 5 recurring workflows (data uploads, quality checks, training prep), reducing longest process from 2 weeks manual effort to under 1 hour",
      ],
      footing: (
        <>
          <div
            className="col my-0 justify-content-end align-items-center"
            style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
          >
            <div className="col-auto g-0 p-0 me-1 me-lg-2 mr-xxl-2-5">
              <PythonLogo lightMode={lightMode} />
            </div>
            <div className="col-auto g-0 p-0 mx-1 mx-lg-2 mx-xxl-2-5">
              <ReactLogo lightMode={lightMode} />
            </div>
            <div className="col-auto g-0 p-0 mx-1 mx-lg-2 mx-xxl-2-5">
              <AwsLogo lightMode={lightMode} />
            </div>
          </div>
        </>
      )
    },
    {
      heading: "Massa Products Corporation",
      headingDescription: "Software & Firmware Engineer Co-Op",
      subheading: "Jan. 2024 - June 2024",
      description: [
        "Built multi-threaded socket server to collect data from 20+ ultrasonic sensors simultaneously, enabling real-time readings versus 1-minute delays with previous system",
        "Developed internal PicoScope application for frequency response analysis, accelerating PCB testing and iteration cycles by an estimated 10%",
        "Implemented TLS encryption for commercial ultrasonic sensor communications, enabling deployment to security-conscious clients",
        "Redesigned sensor monitoring application UI, improving navigation, adding large-screen support, and resolving critical usability issues",
      ],
      footing: (
        <>
          <div
            className="col my-0 justify-content-end align-items-center"
            style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
          >
            <div className="col-auto g-0 p-0 me-1 me-lg-2 mr-xxl-2-5">
              <CsharpLogo lightMode={lightMode} />
            </div>
            <div className="col-auto g-0 p-0 mx-1 mx-lg-2 mx-xxl-2-5">
              <CLogo lightMode={lightMode} />
            </div>
            <div className="col-auto g-0 p-0 mx-1 mx-lg-2 mx-xxl-2-5">
              <DotnetLogo lightMode={lightMode} />
            </div>
          </div>
        </>
      ),
    },
    {
      heading: "Lockheed Martin",
      headingDescription: "Software Engineer Intern, Enterprise Operations, MBx and EIS Teams",
      subheading: "May 2023 - Aug. 2023",
      description: [
        "Built Java Spring access-provisioning system with enterprise SSO integration and self-signed certificates, enabling secure onboarding for data platform with 100+ users",
        "Developed 50+ automations in eQube connecting internal databases and external vendors, replacing manual data workflows",
        "Executed Alembic migrations on millions of transaction records, coordinating late-night rollouts to minimize disruption to widely-used operations platform",
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
              <SpringLogo lightMode={lightMode} />
            </div>
            <div className="col-auto g-0 p-0 mx-1 mx-lg-2 mx-xxl-2-5">
              <EQubeLogo lightMode={lightMode} />
            </div>
            <div className="col-auto g-0 p-0 mx-1 mx-lg-2 mx-xxl-2-5">
              <AwsLogo lightMode={lightMode} />
            </div>
          </div>
        </>
      ),
    },
    {
      heading: "Lockheed Martin",
      headingDescription: "Software Engineer Intern, Enterprise Operations, MBSE SWF Tiger Team",
      subheading: "June 2022 - Aug. 2022",
      description: [
        "Led development of Apache Camel proof-of-concept with API integration and Cucumber testing, demoing to 500+ staff at internal conference",
        "Integrated reverse-proxy Ingress with SSO authentication into Kubernetes/Docker applications, enabling secure internal routing",
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
              <GitLabLogo lightMode={lightMode} />
            </div>
            <div className="col-auto g-0 p-0 mx-1 mx-lg-2 mx-xxl-2-5">
              <KubernetesLogo lightMode={lightMode} />
            </div>
            <div className="col-auto g-0 p-0 mx-1 mx-lg-2 mx-xxl-2-5">
              <CucumberLogo lightMode={lightMode} />
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
        Experience
      </h1>
      <DescriptionList lightMode={lightMode} descriptions={descriptions} />
    </>
  );
}

export default Experience;
