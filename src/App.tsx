import Navbar from "./components/Navbar.tsx";
import Alert from "./components/Alert.tsx";
import "./app.css";
import { useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const pages = ["Home", "Projects", "Skills"] as const;
export type Page = (typeof pages)[number];

function App() {
  const [lightMode, setLightMode] = useState<"light" | "dark">("dark");

  const flipLights = () => {
    if (lightMode === "dark") setLightMode("light");
    else setLightMode("dark");
  };

  const [page, setPage] = useState<Page>("Home");

  return (
    <div
      className={
        "container-fluid g-0 text-center h-100 min-vh-100 " +
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
      {page === "Home" && (
        <div className="row g-0 p-0 justify-content-center my-4">
          <div className="col-11">
            <Alert>Home</Alert>
          </div>
        </div>
      )}
      {page === "Projects" && (
        <div className="row g-0 p-0 justify-content-center my-4">
          <div className="col-11">
            <Alert>Projects</Alert>
          </div>
        </div>
      )}
      {page === "Skills" && (
        <div className="row g-0 p-0 justify-content-center my-4">
          <div className="col-11">
            <Alert>Skills</Alert>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
