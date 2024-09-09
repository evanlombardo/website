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
      heading: "Massa Products Corporation",
      headingDescription:
        "Firmware & Software Engineer, Engineering Department",
      subheading: "Jan. 2024 - June 2024",
      description: [
        "Developed an asynchronous callback Socket server in C#",
        "Created a C# application to perform frequency response analysis using PicoScopes",
        "Made firmware refinements in C and improved UI/UX for WinForms apps",
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
            </div>
              <DotnetLogo lightMode={lightMode} />
          </div>
        </>
      ),
    },
    {
      heading: "Lockheed Martin",
      headingDescription:
        "College Student Tech, Enterprise Operations, MBx and EIS Teams",
      subheading: "May 2023 - Aug. 2023",
      description: [
        "Supported and programmed for two high-stakes software development teams",
        "Designed and implemented a Java Spring web server from scratch, integrated with AWS tools",
        "Developed high-level APIs in eQube, a cutting-edge connection integration software",
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
      headingDescription:
        "High School Student Tech, Enterprise Operations, MBSE SWF Tiger Team",
      subheading: "June 2022 - Aug. 2022",
      description: [
        "Integrated reverse-proxy Ingress security into Kubernetes/Docker applications",
        "Extended OSLC reference implementation to work with Cameo, GitLab and added capabilities",
        "Developed and integrated Cucumber test scripts with GitLab Pipelines",
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
