import "../../styles/home.css";
import CLogo from "../logos/CLogo";
import CsharpLogo from "../logos/CsharpLogo";
import HtmlLogo from "../logos/HtmlLogo";
import JavaLogo from "../logos/JavaLogo";
import PythonLogo from "../logos/PythonLogo";
import TypeScriptLogo from "../logos/TypeScriptLogo";

interface Props {
  lightMode: "light" | "dark";
}

function Skills({ lightMode }: Props) {
  return (
    <div
      className={"row g-0 p-0 justify-content-center " + lightMode + "-primary"}
    >
      <div className="col-9 justify-content-center">
        <h1
          className={
            "primary-heading mt-2 mb-heading-vh" + lightMode + "-primary"
          }
        >
          Skills
        </h1>
        <div
          className="col my-0 justify-content-center align-items-center"
          style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
        >
          <div className="col-auto g-0 p-0 mx-1 mx-lg-2 mx-xxl-2-5">
            <CsharpLogo lightMode={lightMode} lg="lg-" />
          </div>
          <div className="col-auto g-0 p-0 me-1 me-lg-2 mr-xxl-2-5">
            <JavaLogo lightMode={lightMode} lg="lg-" />
          </div>
          <div className="col-auto g-0 p-0 mx-1 mx-lg-2 mx-xxl-2-5">
            <CLogo lightMode={lightMode} lg="lg-" />
          </div>
          <div className="col-auto g-0 p-0 mx-1 mx-lg-2 mx-xxl-2-5">
            <PythonLogo lightMode={lightMode} lg="lg-" />
          </div>
          <div className="col-auto g-0 p-0 mx-1 mx-lg-2 mx-xxl-2-5">
            <TypeScriptLogo lightMode={lightMode} lg="lg-" />
          </div>
          <div className="col-auto g-0 p-0 mx-1 mx-lg-2 mx-xxl-2-5">
            <HtmlLogo lightMode={lightMode} lg="lg-" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
