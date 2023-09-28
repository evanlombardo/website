import "../app.css";
import "../navbar.css";
import { Page } from "../App.tsx";
import { pages } from "../App.tsx";

interface Props {
  lightMode: "light" | "dark";
  flipLights: () => void;
  currentPage: Page;
  setPage: (page: Page) => void;
}

function Navbar({ lightMode, flipLights, currentPage, setPage }: Props) {
  return (
    <nav
      className={
        "navbar navbar-expand-md sticky-top bd-navbar " +
        lightMode +
        "-secondary"
      }
    >
      <div className="container-fluid">
        <img
          className="navbar-brand"
          src="vite.svg"
          onClick={() => setPage("Home")}
        />
        <button
          className="navbar-toggler ms-auto"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <div className={"navbar-" + lightMode + " p-0 g-0"}>
            <span className="navbar-toggler-icon"></span>
          </div>
        </button>
        <div
          className={"collapse navbar-collapse order-3 order-md-1 "}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav">
            {pages.map((page, index) => {
              if (page === "Home") return <></>;

              return (
                <li id={index.toString()} className="nav-item mx-2">
                  <a
                    className={
                      currentPage === page ? "nav-link active" : "nav-link"
                    }
                    onClick={() => setPage(page)}
                  >
                    {page}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="col-auto p-0 g-0 align-self-center order-2">
          <button
            className="btn shadow-none btn-no-outline"
            onClick={flipLights}
          >
            <img
              src={lightMode + ".svg"}
              className="image-fade"
              height={32}
              width={32}
            />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
