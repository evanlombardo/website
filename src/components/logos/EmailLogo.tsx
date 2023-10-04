import "../../styles/app.css";
import "../../styles/logos.css";

interface Props {
  lightMode: "light" | "dark";
}

function EmailLogo({ lightMode }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon"
      style={{ marginRight: "var(--icon-div-px)" }}
      viewBox="0 0 437 400"
    >
      <path
        className="icon-path"
        fill={lightMode === "light" ? "#2f3337" : "#eeeeee"}
        stroke="black"
        strokeWidth="0"
        d="M 35.00,49.12
           C 35.00,49.12 76.00,49.12 76.00,49.12
             76.00,49.12 153.00,49.12 153.00,49.12
             153.00,49.12 389.00,49.12 389.00,49.12
             394.80,49.01 403.58,49.79 409.00,51.70
             428.84,58.70 435.97,76.41 436.00,96.00
             436.00,96.00 436.00,301.00 436.00,301.00
             435.99,306.88 435.06,316.48 433.25,322.00
             425.99,344.16 406.07,349.97 385.00,350.00
             385.00,350.00 90.00,350.00 90.00,350.00
             90.00,350.00 60.00,350.00 60.00,350.00
             39.82,350.00 21.78,350.37 8.63,332.00
             6.55,329.09 4.47,324.43 3.36,321.00
             1.64,315.72 1.01,308.56 1.00,303.00
             1.00,303.00 1.00,94.00 1.00,94.00
             1.27,71.51 12.24,54.53 35.00,49.12 Z
           M 402.00,66.00
           C 393.70,63.98 378.82,63.96 370.00,64.00
             370.00,64.00 354.00,65.00 354.00,65.00
             354.00,65.00 325.00,65.00 325.00,65.00
             325.00,65.00 166.00,65.00 166.00,65.00
             166.00,65.00 67.00,65.00 67.00,65.00
             54.96,64.98 48.12,62.81 35.00,66.00
             38.79,70.86 46.23,76.87 51.00,81.17
             51.00,81.17 80.00,107.16 80.00,107.16
             80.00,107.16 174.00,190.28 174.00,190.28
             174.00,190.28 206.00,218.71 206.00,218.71
             209.42,221.71 215.13,227.53 220.00,226.44
             224.45,225.44 232.46,217.36 236.00,214.17
             236.00,214.17 270.00,184.15 270.00,184.15
             270.00,184.15 357.00,107.28 357.00,107.28
             357.00,107.28 383.00,84.42 383.00,84.42
             389.46,78.85 397.07,72.89 402.00,66.00 Z
           M 416.00,76.00
           C 416.00,76.00 383.00,103.85 383.00,103.85
             383.00,103.85 330.00,150.58 330.00,150.58
             330.00,150.58 309.00,169.15 309.00,169.15
             306.29,171.57 301.77,175.20 301.38,179.01
             300.92,183.49 305.23,187.95 308.00,191.00
             308.00,191.00 329.07,215.00 329.07,215.00
             329.07,215.00 383.58,277.00 383.58,277.00
             392.19,286.99 409.28,308.04 419.00,315.00
             420.56,308.60 419.69,307.84 420.09,302.00
             420.09,302.00 420.98,294.00 420.98,294.00
             420.98,294.00 420.98,275.00 420.98,275.00
             420.98,275.00 420.00,258.00 420.00,258.00
             420.00,258.00 420.00,150.00 420.00,150.00
             420.00,150.00 420.00,115.00 420.00,115.00
             420.03,97.23 423.52,94.95 416.00,76.00 Z
           M 18.00,316.00
           C 24.36,311.23 45.79,286.46 52.28,279.00
             52.28,279.00 110.15,213.00 110.15,213.00
             110.15,213.00 131.87,188.00 131.87,188.00
             133.85,185.68 138.12,181.49 136.83,178.17
             136.14,176.39 130.65,171.64 129.00,170.16
             129.00,170.16 109.00,152.42 109.00,152.42
             109.00,152.42 52.00,101.93 52.00,101.93
             52.00,101.93 34.00,86.00 34.00,86.00
             32.01,84.18 26.33,78.93 24.04,78.15
             17.39,75.89 17.01,89.23 17.00,93.00
             17.00,93.00 17.00,254.00 17.00,254.00
             17.00,254.00 16.00,269.00 16.00,269.00
             16.00,269.00 16.00,291.00 16.00,291.00
             16.00,291.00 16.91,302.00 16.91,302.00
             17.38,308.79 16.58,308.06 18.00,316.00 Z
           M 408.00,330.00
           C 405.98,323.91 402.49,320.78 398.42,316.00
             398.42,316.00 378.16,293.00 378.16,293.00
             378.16,293.00 316.85,223.00 316.85,223.00
             316.85,223.00 296.72,200.00 296.72,200.00
             294.20,197.15 290.13,192.27 286.00,192.37
             281.35,192.49 273.55,200.52 270.00,203.58
             270.00,203.58 234.00,235.28 234.00,235.28
             230.40,238.44 223.91,245.41 219.00,245.64
             213.22,245.92 205.18,237.04 201.00,233.42
             201.00,233.42 167.00,203.42 167.00,203.42
             164.40,201.18 155.56,192.98 153.00,192.15
             148.76,190.79 144.98,196.24 142.58,199.00
             142.58,199.00 120.84,223.00 120.84,223.00
             120.84,223.00 62.85,289.00 62.85,289.00
             62.85,289.00 28.00,330.00 28.00,330.00
             36.30,333.19 48.11,335.52 57.00,334.91
             57.00,334.91 69.00,334.00 69.00,334.00
             69.00,334.00 119.00,334.00 119.00,334.00
             119.00,334.00 311.00,334.00 311.00,334.00
             311.00,334.00 373.00,334.00 373.00,334.00
             373.00,334.00 383.00,334.90 383.00,334.90
             390.23,335.22 401.54,333.29 408.00,330.00 Z"
      />
    </svg>
  );
}

export default EmailLogo;
