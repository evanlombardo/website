import "../../styles/app.css";
import "../../styles/logos.css";

interface Props {
  lightMode: "light" | "dark";
}

function YouTubeLogo({ lightMode }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 253 178"
      className="sm-icon"
      style={{
        marginRight: "var(--icon-div-px)",
        height: "calc(var(--icon-height) - var(--icon-div-px))",
      }}
    >
      <path
        fill={lightMode === "light" ? "#2f3337" : "#eeeeee"}
        className="icon-path"
        stroke="black"
        strokeWidth="0"
        d="M 111.00,0.21
          C 111.00,0.21 136.00,0.21 136.00,0.21
            136.00,0.21 152.00,1.00 152.00,1.00
            152.00,1.00 186.00,2.00 186.00,2.00
            186.00,2.00 198.00,2.96 198.00,2.96
            211.62,3.56 230.46,3.82 240.54,14.30
            249.44,23.56 249.81,35.05 251.35,47.00
            253.73,66.91 254.11,111.32 251.35,131.00
            249.78,143.01 249.29,155.88 239.91,164.82
            230.36,173.92 216.37,174.22 204.00,175.09
            204.00,175.09 187.00,176.00 187.00,176.00
            187.00,176.00 172.00,177.00 172.00,177.00
            172.00,177.00 144.00,177.00 144.00,177.00
            144.00,177.00 125.00,178.00 125.00,178.00
            125.00,178.00 110.00,177.00 110.00,177.00
            110.00,177.00 82.00,177.00 82.00,177.00
            82.00,177.00 61.00,176.00 61.00,176.00
            61.00,176.00 51.00,175.09 51.00,175.09
            39.55,174.30 26.64,174.25 17.01,167.07
            5.73,158.66 4.13,143.99 2.88,131.00
            -0.33,95.85 -0.70,84.33 2.88,49.00
            4.26,34.68 5.19,19.96 18.00,10.79
            26.39,4.78 35.31,4.88 45.00,3.72
            45.00,3.72 77.00,2.00 77.00,2.00
            77.00,2.00 94.00,1.00 94.00,1.00
            99.69,0.99 105.35,1.23 111.00,0.21 Z
          M 168.00,88.00
          C 168.00,88.00 121.00,61.28 121.00,61.28
            121.00,61.28 101.00,51.00 101.00,51.00
            101.00,51.00 101.00,127.00 101.00,127.00
            108.32,125.61 117.33,119.08 124.00,115.28
            124.00,115.28 168.00,90.00 168.00,90.00
            168.00,90.00 168.00,88.00 168.00,88.00 Z"
      />
    </svg>
  );
}

export default YouTubeLogo;
