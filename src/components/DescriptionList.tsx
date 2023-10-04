import "../styles/app.css";
import "../styles/description-list.css";

interface Props {
  lightMode: "light" | "dark";
  descriptions: {
    heading: string;
    headingDescription?: string;
    subheading?: string;
    description: string | string[];
    footing?: JSX.Element;
  }[];
}

function DescriptionList({ lightMode, descriptions }: Props) {
  return (
    <>
      {descriptions.map(
        ({ heading, headingDescription, subheading, description, footing }) => {
          return (
            <div
              className={
                "row g-0 p-0 justify-content-center " + lightMode + "-primary"
              }
            >
              <div className="col-9 mb-3 mb-md-4 mb-xxl-5">
                <div className="row g-0 p-0 align-items-center">
                  <div
                    className="col-12 col-md-9 justify-content-start align-items-start"
                    style={{ display: "flex", flexDirection: "column" }}
                  >
                    <h1 className="mt-2 mb-0 mb-md-2 secondary-heading text-start">
                      {heading}
                    </h1>
                    <p className="body-text sub-text text-start">
                      {headingDescription}
                    </p>
                  </div>
                  <div className="col-12 col-md-3">
                    <p
                      className="mb-1 mb-md-2 date-align body-text sub-text"
                      style={{ transition: "1s" }}
                    >
                      {subheading}
                    </p>
                  </div>
                </div>
                <div className="row g-0 p-0 m-0">
                  <div className="col-12">
                    {typeof description === "string" ? (
                      <p className="text-start body-text mb-2">{description}</p>
                    ) : (
                      <ul className="ps-3 ps-md-4 ps-xxl-5">
                        {description.map((item, index) => {
                          return (
                            <li
                              id={index + ""}
                              className="text-start body-text mb-2"
                            >
                              {item}
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </div>
                </div>
                <div className="container-fluid g-0 p-0 my-2 align-items-center">
                  <div className="row align-items-center justify-content-start g-0 p-0 m-0">
                    {footing}
                  </div>
                </div>
              </div>
            </div>
          );
        }
      )}
    </>
  );
}

export default DescriptionList;
