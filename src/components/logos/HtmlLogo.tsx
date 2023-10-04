import "../../styles/app.css";
import "../../styles/logos.css";

interface Props {
  lightMode: "light" | "dark";
  lg?: "lg-"; // Optional modifier to make icons large
}

function HtmlLogo({ lightMode, lg }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="7 5 34 38"
      id="html"
      className={lg ? lg + "sq-icon" : "sq-icon"}
    >
      <title>HTML</title>
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
        d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z"
      />
      <path
        className="icon-path"
        fill={lightMode === "light" ? "#eeeeee" : "#2f3337"}
        d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z"
      />
    </svg>
  );
}

export default HtmlLogo;
