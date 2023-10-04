import "../../styles/app.css";
import "../../styles/logos.css";

interface Props {
  lightMode: "light" | "dark";
  lg?: "lg-"; // Optional modifier to make icons large
}

function AwsLogo({ lightMode, lg }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="aws"
      className={lg ? lg + "sq-icon" : "sq-icon"}
      viewBox="39.5 65.3 119.24 71.45"
    >
      <title>AWS</title>
      <path
        className="icon-path"
        fill={lightMode === "light" ? "#2f3337" : "#eeeeee"}
        stroke="black"
        strokeWidth="0"
        d="M 48.00,73.00
          C 48.30,71.25 48.25,70.11 49.60,68.70
            53.92,64.19 67.56,65.13 71.15,70.21
            74.29,74.66 72.40,85.28 73.32,91.00
            73.65,93.01 75.05,96.75 74.34,98.57
            72.71,102.67 69.26,98.95 68.00,97.00
            62.79,100.91 55.37,104.44 49.22,99.99
            43.94,96.17 43.19,83.46 55.00,81.33
            59.17,80.58 62.92,81.27 67.00,82.00
            66.98,80.15 67.07,77.75 66.40,76.02
            63.38,68.15 53.89,71.67 48.00,73.00 Z
          M 128.00,95.00
          C 128.00,95.00 136.00,96.82 136.00,96.82
            144.81,97.86 149.09,93.44 145.45,89.52
            141.23,84.97 126.57,85.60 128.97,74.00
            131.09,63.77 147.00,64.83 150.41,68.51
            151.55,69.75 151.54,70.55 152.00,72.00
            152.00,72.00 145.00,71.09 145.00,71.09
            138.04,70.28 133.20,73.95 136.52,77.70
            140.33,81.99 158.20,83.01 152.34,95.96
            148.53,104.36 132.62,102.66 129.60,99.44
            128.26,98.02 128.29,96.76 128.00,95.00 Z
          M 78.00,67.00
          C 78.00,67.00 83.28,67.99 83.28,67.99
            83.28,67.99 86.37,76.00 86.37,76.00
            86.37,76.00 92.00,94.00 92.00,94.00
            92.41,89.03 95.30,75.80 96.85,71.06
            97.97,67.61 101.27,65.62 104.15,68.60
            105.85,70.36 106.68,75.54 107.21,78.00
            108.39,83.46 109.56,88.96 112.00,94.00
            112.00,94.00 116.13,77.00 116.13,77.00
            116.13,77.00 118.93,68.60 118.93,68.60
            118.93,68.60 125.00,67.00 125.00,67.00
            125.00,67.00 117.86,91.00 117.86,91.00
            117.01,93.95 115.91,99.13 112.78,100.38
            108.95,101.92 107.44,99.07 106.59,95.98
            105.13,90.63 102.44,80.22 102.00,75.00
            102.00,75.00 100.00,75.00 100.00,75.00
            99.74,80.48 97.25,90.58 95.61,95.98
            94.70,98.97 92.98,101.93 89.27,100.38
            86.58,99.26 85.50,94.58 84.72,92.00
            82.59,84.93 78.62,73.92 78.00,67.00 Z
          M 67.00,86.00
          C 64.70,85.59 62.35,85.04 60.00,85.13
            58.74,85.18 57.23,85.40 56.06,85.89
            51.36,87.85 51.36,93.15 53.60,95.40
            55.99,97.80 63.84,97.90 66.26,91.96
            67.02,90.09 66.95,87.98 67.00,86.00 Z"
      />
      <path
        id="smile"
        className="icon-path"
        fill={lightMode === "light" ? "#2f3337" : "#eeeeee"}
        stroke="black"
        strokeWidth="0"
        d="M 137.00,115.00
           C 138.22,113.72 138.44,113.22 140.11,112.06
             143.58,110.37 154.19,108.59 157.17,112.06
             160.28,115.19 155.85,125.79 153.21,128.71
             151.95,130.11 151.51,130.15 150.00,131.00
             150.67,127.27 153.74,120.46 152.39,117.23
             150.29,112.22 141.25,114.80 137.00,115.00 Z
           M 41.00,112.00
           C 64.60,124.47 78.41,128.04 105.00,128.00
             125.04,127.97 135.84,120.88 148.00,119.00
             145.44,126.58 129.34,131.49 122.00,133.37
             100.27,138.93 77.95,136.37 58.00,126.24
             51.67,123.03 44.55,118.47 40.00,113.00
             40.00,113.00 41.00,112.00 41.00,112.00 Z"
      />
    </svg>
  );
}

export default AwsLogo;