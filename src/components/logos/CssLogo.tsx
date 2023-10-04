import "../../styles/app.css";
import "../../styles/logos.css";

interface Props {
  lightMode: "light" | "dark";
  lg?: "lg-"; // Optional modifier to make icons large
}

function CssLogo({ lightMode, lg }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="7 5 34 38"
      className={lg ? lg + "sq-icon" : "sq-icon"}
      id="css"
    >
      <title>CSS</title>
      <path
        id="left"
        className="icon-path"
        fill={lightMode === "light" ? "#2f3337" : "#eeeeee"}
        d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"
      />
      <path
        id="right"
        className="icon-path"
        fill={lightMode === "light" ? "#212529" : "#ffffff"}
        d="M24 8L24 39.9 35.2 36.7 37.7 8z"
      />
      <path
        className="icon-path"
        fill={lightMode === "light" ? "#ffffff" : "#212529"}
        d="M33.1 13L24 13 24 17 28.9 17 28.6 21 24 21 24 25 28.4 25 28.1 29.5 24 30.9 24 35.1 31.9 32.5 32.6 21 32.6 21z"
      />
      <path
        className="icon-path"
        fill={lightMode === "light" ? "#eeeeee" : "#2f3337"}
        d="M24,13v4h-8.9l-0.3-4H24z M19.4,21l0.2,4H24v-4H19.4z M19.8,27h-4l0.3,5.5l7.9,2.6v-4.2l-4.1-1.4L19.8,27z"
      />
    </svg>
  );
}

export default CssLogo;
