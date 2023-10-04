import "../../styles/home.css";
import LinkButtons from "../LinkButtons";

interface Props {
  lightMode: "light" | "dark";
}

function Home({ lightMode }: Props) {
  const links: { name: string; link: string }[] = [
    { name: "GitHub", link: "https://github.com/evanlombardo" },
    { name: "LinkedIn", link: "https://www.linkedin.com/in/evan-lombardo/" },
    {
      name: "Resume",
      link: "https://drive.google.com/file/d/1lohOpKv5HTUjp4XXUygA0BbDY0psJhhc/view?usp=share_link",
    },
    { name: "Email", link: "mailto:evan.lombardo04@gmail.com" },
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
              I lead a team for Northeastern University Electric Racing, where
              we are developing and integrating a custom MQTT server and Rust
              application to decode and send CAN data from our house-made
              formula electric car. As an intern at Lockheed Martin the past two
              summers, I collaborated with the Enterprise Operations business
              area as part of the software engineering and programming teams. I
              grasp new concepts quickly and embrace challenges with creativity
              and tenacity, and I look forward to a coding-based internship at a
              forward-thinking tech company.
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
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
