import "../../styles/app.css";
import "../../styles/logos.css";

interface Props {
  lightMode: "light" | "dark";
  lg?: "lg-"; // Optional modifier to make icons large
}

function JUnitLogo({ lightMode, lg }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      id="junit"
      className={lg ? lg + "sq-icon" : "sq-icon"}
    >
      <title>JUnit</title>
      <path
        id="left"
        className="icon-path"
        fill={lightMode === "light" ? "#2f3337" : "#eeeeee"}
        stroke="black"
        strokeWidth="0"
        d="M 142.00,485.00
           C 133.02,482.44 116.85,472.03 109.00,466.42
             87.64,451.16 71.67,436.56 55.20,416.00
             -10.06,334.55 -18.86,215.90 34.45,126.00
             59.63,83.54 93.69,51.73 137.00,28.31
             183.92,2.93 241.57,-5.19 294.00,2.58
             305.61,4.30 316.73,6.91 328.00,10.14
             330.65,10.90 339.72,13.52 341.43,15.08
             343.42,16.90 343.00,20.52 343.00,23.00
             343.00,23.00 343.00,77.00 343.00,77.00
             343.00,77.00 162.00,77.00 162.00,77.00
             162.00,77.00 158.09,124.00 158.09,124.00
             158.09,124.00 154.09,175.00 154.09,175.00
             154.09,175.00 152.83,195.00 152.83,195.00
             152.83,195.00 149.75,232.00 149.75,232.00
             149.65,235.83 148.08,243.29 149.75,246.79
             150.84,249.66 157.21,252.72 160.00,254.40
             163.04,256.22 171.02,261.43 174.00,262.02
             174.00,262.02 197.00,258.73 197.00,258.73
             227.36,254.35 269.75,251.54 293.96,274.17
             305.26,284.73 310.55,303.84 309.96,319.00
             308.91,346.06 298.64,367.52 272.00,377.58
             239.98,389.67 193.37,382.42 162.00,370.58
             162.00,370.58 141.00,361.00 141.00,361.00
             141.00,361.00 141.00,403.00 141.00,403.00
             141.00,403.00 142.00,420.00 142.00,420.00
             142.00,420.00 142.00,485.00 142.00,485.00 Z"
      />
      <path
        id="right"
        className="icon-path"
        fill={lightMode === "light" ? "#2f3337" : "#eeeeee"}
        stroke="black"
        strokeWidth="0"
        d="M 344.00,16.00
           C 352.75,17.37 366.84,24.61 375.00,28.76
             402.38,42.67 429.13,63.77 449.13,87.00
             480.86,123.84 502.42,168.76 509.57,217.00
             512.33,235.60 512.22,253.27 512.00,272.00
             512.00,272.00 511.08,282.00 511.08,282.00
             508.72,311.50 499.62,342.41 486.74,369.00
             474.31,394.66 457.10,417.90 437.00,438.00
             417.75,457.25 395.39,473.56 371.00,485.75
             343.11,499.70 301.29,511.95 270.00,512.00
             270.00,512.00 240.00,512.00 240.00,512.00
             227.62,511.85 207.19,508.17 195.00,505.13
             181.56,501.77 168.83,497.64 156.00,492.40
             143.47,487.28 142.02,487.09 142.00,478.00
             142.00,478.00 142.00,413.00 142.00,413.00
             153.95,417.02 153.73,419.31 172.00,424.12
             198.68,431.13 218.81,431.31 246.00,431.00
             266.97,430.75 296.99,423.27 315.00,412.55
             332.83,401.94 346.87,387.64 356.19,369.00
             363.29,354.79 367.98,333.88 368.00,318.00
             368.00,318.00 368.00,308.00 368.00,308.00
             367.95,277.37 353.97,247.79 329.00,229.74
             303.49,211.30 276.49,207.95 246.00,208.00
             246.00,208.00 204.00,213.00 204.00,213.00
             204.00,213.00 207.17,179.00 207.17,179.00
             207.17,179.00 212.00,128.00 212.00,128.00
             212.00,128.00 344.00,128.00 344.00,128.00
             344.00,128.00 344.00,16.00 344.00,16.00 Z"
      />
    </svg>
  );
}

export default JUnitLogo;
