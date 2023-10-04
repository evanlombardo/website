import "../../styles/app.css";
import "../../styles/logos.css";

interface Props {
  lightMode: "light" | "dark";
  lg?: "lg-"; // Optional modifier to make icons large
}

function FlaskLogo({ lightMode, lg }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="flask"
      className={lg ? lg + "sq-icon" : "sq-icon"}
      viewBox="0 0 200 200"
    >
      <title>Flask</title>
      <path
        id="main"
        className="icon-path"
        fill={lightMode === "light" ? "#eeeeee" : "#999999"}
        stroke="black"
        strokeWidth="0"
        d="M 144.00,200.00
          C 144.00,200.00 21.00,200.00 21.00,200.00
            7.11,199.83 0.02,191.48 0.00,178.00
            0.00,178.00 0.00,23.00 0.00,23.00
            0.02,8.06 8.10,0.02 23.00,0.00
            23.00,0.00 159.00,0.00 159.00,0.00
            173.98,0.00 192.60,-3.81 199.03,14.00
            200.15,17.08 199.99,19.79 200.00,23.00
            200.00,23.00 200.00,148.00 200.00,148.00
            193.63,143.44 180.30,129.30 174.00,123.00
            174.00,123.00 127.00,76.00 127.00,76.00
            127.00,76.00 110.17,59.00 110.17,59.00
            107.57,56.13 103.74,50.86 100.00,49.69
            96.55,48.61 90.33,52.00 87.00,53.42
            87.00,53.42 56.00,66.85 56.00,66.85
            52.94,68.16 44.56,71.00 43.59,74.21
            42.60,77.49 47.06,82.49 48.83,85.00
            55.16,93.99 50.37,95.07 62.00,107.00
            60.68,111.31 62.51,113.37 64.86,117.00
            68.29,122.30 75.50,130.45 80.00,135.00
            80.00,135.00 122.00,177.00 122.00,177.00
            127.94,182.94 139.55,193.78 144.00,200.00 Z"
      />
      <path
        id="horn"
        className="icon-path"
        fill={lightMode === "light" ? "#000000" : "#ffffff"}
        stroke="black"
        strokeWidth="0"
        d="M 57.00,102.00
           C 57.00,102.00 50.20,85.45 50.20,85.45
             48.04,82.49 42.71,78.54 43.81,74.22
             44.62,71.05 54.00,68.01 57.00,66.72
             57.00,66.72 100.00,49.00 100.00,49.00
             100.00,49.00 102.04,73.00 102.04,73.00
             102.04,73.00 102.04,81.30 102.04,81.30
             102.04,81.30 89.00,87.86 89.00,87.86
             89.00,87.86 57.00,102.00 57.00,102.00 Z
           M 104.00,89.00
           C 104.00,89.00 109.00,104.00 109.00,104.00
             109.00,104.00 82.00,117.25 82.00,117.25
             82.00,117.25 69.00,123.00 69.00,123.00
             69.00,123.00 61.00,108.00 61.00,108.00
             61.00,108.00 104.00,89.00 104.00,89.00 Z
           M 75.00,129.00
           C 75.00,129.00 112.00,111.00 112.00,111.00
             120.58,123.87 131.30,135.59 148.00,135.89
             149.56,136.02 152.45,136.04 153.91,135.89
             156.33,135.16 168.52,127.34 171.00,135.89
             171.91,139.14 168.59,140.69 166.42,142.19
             160.58,146.22 160.82,143.86 155.00,145.13
             155.00,145.13 144.00,148.37 144.00,148.37
             124.03,153.48 104.31,151.78 87.00,139.97
             81.82,136.44 78.71,134.14 75.00,129.00 Z"
      />
      <path
        id="shadow"
        className="icon-path"
        fill={lightMode === "light" ? "#bbbbbb" : "#2f3337"}
        stroke="black"
        strokeWidth="0"
        d="M 102.00,51.00
           C 108.40,55.58 122.60,70.60 129.00,77.00
             129.00,77.00 177.00,125.00 177.00,125.00
             177.00,125.00 192.00,140.00 192.00,140.00
             194.41,142.41 198.23,145.82 199.40,149.00
             200.12,150.94 200.00,153.91 200.00,156.00
             200.00,156.00 200.00,177.00 200.00,177.00
             199.99,180.21 200.15,182.92 199.03,186.00
             193.83,200.40 182.49,200.00 170.00,200.00
             170.00,200.00 153.00,200.00 153.00,200.00
             150.91,200.00 147.94,200.12 146.00,199.40
             142.15,197.98 134.26,189.26 131.00,186.00
             131.00,186.00 89.00,143.00 89.00,143.00
             89.00,143.00 108.00,150.10 108.00,150.10
             124.06,154.03 136.60,151.53 152.00,146.67
             158.47,144.63 159.09,145.90 162.00,145.11
             164.92,144.33 171.54,140.28 171.71,136.96
             171.79,135.22 169.80,131.69 169.00,130.00
             169.00,130.00 160.73,132.02 160.73,132.02
             155.04,133.56 157.48,135.20 148.00,134.99
             133.27,134.65 117.54,124.25 113.00,110.00
             106.80,111.77 91.62,119.92 85.00,123.25
             79.10,126.21 76.08,129.87 71.00,124.00
             71.00,124.00 110.00,104.00 110.00,104.00
             110.00,104.00 105.00,88.00 105.00,88.00
             105.00,88.00 72.00,102.86 72.00,102.86
             66.22,105.41 61.75,109.23 58.00,102.00
             58.00,102.00 91.00,87.69 91.00,87.69
             91.00,87.69 102.93,80.78 102.93,80.78
             102.93,80.78 102.93,72.00 102.93,72.00
             102.93,72.00 102.00,51.00 102.00,51.00 Z"
      />
    </svg>
  );
}

export default FlaskLogo;