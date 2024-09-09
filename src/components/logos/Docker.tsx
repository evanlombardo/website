import "../../styles/app.css";
import "../../styles/logos.css";

interface Props {
  lightMode: "light" | "dark";
  lg?: "lg-"; // Optional modifier to make icons large
}

function DockerLogo({ lightMode, lg }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="docker"
      className={lg ? lg + "sq-icon" : "sq-icon"}
      viewBox="0 0 756 756"
    >
      <title>Docker</title>
      <path
        className="icon-path"
        fill={lightMode === "light" ? "#2f3337" : "#eeeeee"}
        stroke="black"
        strokeWidth="0"
        d="M 318.00,79.00
           C 318.00,79.00 401.00,79.00 401.00,79.00
             401.00,79.00 401.00,161.00 401.00,161.00
             401.00,161.00 318.00,161.00 318.00,161.00
             318.00,161.00 318.00,79.00 318.00,79.00 Z
           M 107.00,182.00
           C 107.00,182.00 190.00,182.00 190.00,182.00
             190.00,182.00 190.00,264.00 190.00,264.00
             190.00,264.00 107.00,264.00 107.00,264.00
             107.00,264.00 107.00,182.00 107.00,182.00 Z
           M 213.00,182.00
           C 213.00,182.00 296.00,182.00 296.00,182.00
             296.00,182.00 296.00,264.00 296.00,264.00
             296.00,264.00 213.00,264.00 213.00,264.00
             213.00,264.00 213.00,182.00 213.00,182.00 Z
           M 318.00,182.00
           C 318.00,182.00 401.00,182.00 401.00,182.00
             401.00,182.00 401.00,264.00 401.00,264.00
             401.00,264.00 318.00,264.00 318.00,264.00
             318.00,264.00 318.00,182.00 318.00,182.00 Z
           M 574.00,217.00
           C 582.68,218.77 592.36,227.69 599.00,233.42
             621.90,253.20 640.98,283.97 641.00,315.00
             651.75,313.55 662.05,311.02 673.00,311.00
             693.25,310.97 708.13,310.80 728.00,316.72
             737.19,319.46 740.06,321.03 748.00,326.33
             750.03,327.69 753.86,329.97 754.87,332.18
             756.30,335.29 753.16,340.18 751.75,343.00
             747.39,351.74 742.76,360.41 736.54,368.00
             714.01,395.48 684.40,405.54 650.00,407.02
             639.76,407.49 635.97,408.96 625.00,407.02
             620.74,422.07 603.59,456.21 595.78,471.00
             556.94,544.59 500.87,610.40 424.00,645.69
             387.29,662.55 348.23,672.28 308.00,675.09
             308.00,675.09 296.00,676.00 296.00,676.00
             296.00,676.00 259.00,676.00 259.00,676.00
             259.00,676.00 237.00,674.16 237.00,674.16
             177.53,667.80 122.88,647.94 79.00,605.96
             51.07,579.25 32.39,546.82 18.81,511.00
             8.96,485.04 2.93,454.66 0.91,427.00
             0.91,427.00 0.00,415.00 0.00,415.00
             0.00,415.00 0.00,390.00 0.00,390.00
             0.00,390.00 270.00,390.00 270.00,390.00
             270.00,390.00 406.00,390.00 406.00,390.00
             406.00,390.00 421.00,390.96 421.00,390.96
             421.00,390.96 435.00,390.96 435.00,390.96
             435.00,390.96 447.00,390.00 447.00,390.00
             473.17,389.96 503.53,390.16 529.00,384.12
             545.44,380.21 551.36,376.30 566.00,370.00
             561.49,362.79 558.98,360.32 555.43,352.00
             542.95,322.83 542.82,286.91 553.08,257.00
             559.64,237.86 564.94,233.14 574.00,217.00 Z
           M 2.00,285.00
           C 2.00,285.00 85.00,285.00 85.00,285.00
             85.00,285.00 85.00,348.00 85.00,348.00
             85.00,351.58 85.93,364.97 83.40,366.98
             81.81,368.23 77.99,368.00 76.00,368.00
             76.00,368.00 2.00,368.00 2.00,368.00
             2.00,368.00 2.00,285.00 2.00,285.00 Z
           M 107.00,285.00
           C 107.00,285.00 190.00,285.00 190.00,285.00
             190.00,285.00 190.00,368.00 190.00,368.00
             190.00,368.00 127.00,368.00 127.00,368.00
             123.42,368.00 110.03,368.93 108.02,366.40
             106.77,364.81 107.00,360.99 107.00,359.00
             107.00,359.00 107.00,285.00 107.00,285.00 Z
           M 213.00,285.00
           C 213.00,285.00 296.00,285.00 296.00,285.00
             296.00,285.00 296.00,348.00 296.00,348.00
             296.00,351.58 296.93,364.97 294.40,366.98
             292.81,368.23 288.99,368.00 287.00,368.00
             287.00,368.00 213.00,368.00 213.00,368.00
             213.00,368.00 213.00,285.00 213.00,285.00 Z
           M 401.00,368.00
           C 401.00,368.00 338.00,368.00 338.00,368.00
             334.42,368.00 321.03,368.93 319.02,366.40
             317.77,364.81 318.00,360.99 318.00,359.00
             318.00,359.00 318.00,304.00 318.00,304.00
             318.00,300.52 317.08,288.01 319.60,286.02
             321.19,284.77 325.01,285.00 327.00,285.00
             327.00,285.00 401.00,285.00 401.00,285.00
             401.00,285.00 401.00,368.00 401.00,368.00 Z
           M 424.00,285.00
           C 424.00,285.00 507.00,285.00 507.00,285.00
             507.00,285.00 507.00,348.00 507.00,348.00
             507.00,351.58 507.93,364.97 505.40,366.98
             503.81,368.23 499.99,368.00 498.00,368.00
             498.00,368.00 424.00,368.00 424.00,368.00
             424.00,368.00 424.00,285.00 424.00,285.00 Z"
      />
    </svg>
  );
}

export default DockerLogo;