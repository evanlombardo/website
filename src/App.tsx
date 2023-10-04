import Navbar from "./components/Navbar.tsx";
import Home from "./components/pages/Home.tsx";
import "./styles/app.css";
import { useState } from "react";
import { assertUnreachable } from "./assert-unreachable.ts";
import Projects from "./components/pages/Projects.tsx";
import Experience from "./components/pages/Experience.tsx";
import Skills from "./components/pages/Skills.tsx";

// eslint-disable-next-line react-refresh/only-export-components
export const pages = ["Home", "Projects", "Experience", "Skills"] as const;
export type Page = (typeof pages)[number];

function App() {
  const preferredLightMode =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: light)").matches
      ? "light"
      : "dark";

  const icon = document.getElementById("icon");
  if (icon && preferredLightMode === "dark") {
    (icon as HTMLLinkElement).href = "logo-dark.png";
  }

  const [lightMode, setLightMode] = useState<"light" | "dark">(
    preferredLightMode
  );

  const flipLights = () => {
    if (lightMode === "dark") setLightMode("light");
    else setLightMode("dark");
  };

  const [page, setPage] = useState<Page>("Home");

  const getPageBody: () => JSX.Element = () => {
    switch (page) {
      case "Home":
        return <Home lightMode={lightMode} />;
      case "Projects":
        return <Projects lightMode={lightMode} />;
      case "Skills":
        return <Skills lightMode={lightMode} />;
      case "Experience":
        return <Experience lightMode={lightMode} />;
      default:
        return assertUnreachable(page); // Ensures that all pages have an associated body
    }
  };

  return (
    <div
      className={
        "container-fluid g-0 text-center h-100 min-vh-100 root-container " +
        lightMode +
        "-primary"
      }
    >
      <Navbar
        lightMode={lightMode}
        flipLights={flipLights}
        currentPage={page}
        setPage={(page: Page) => {
          setPage(page);
        }}
      />
      {getPageBody()}
    </div>
  );
}

export default App;
