import "../../styles/app.css";
import "../../styles/logos.css";

interface Props {
  lightMode: "light" | "dark";
  lg?: "lg-"; // Optional modifier to make icons large
}

function MqttLogo({ lightMode, lg }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="mqtt"
      className={lg ? lg + "sq-icon" : "sq-icon"}
      viewBox="0 0 638 638"
    >
      <title>MQTT</title>
      <path
        fill={lightMode === "light" ? "#2f3337" : "#eeeeee"}
        className="icon-path"
        stroke="black"
        strokeWidth="0"
        d="M 0.10,64.00
          C 0.10,64.00 0.10,42.00 0.10,42.00
            0.10,42.00 0.10,26.00 0.10,26.00
            1.95,14.83 10.36,5.27 21.00,1.75
            26.04,0.08 28.81,0.01 34.00,0.00
            34.00,0.00 227.00,0.00 227.00,0.00
            239.23,0.02 250.84,6.06 262.00,10.60
            286.14,20.43 310.16,32.15 333.00,44.70
            432.55,99.35 519.20,180.06 580.05,276.00
            596.72,302.27 612.20,329.55 624.86,358.00
            629.06,367.44 637.86,383.05 638.00,393.00
            638.00,393.00 638.00,496.00 638.00,496.00
            638.00,496.00 638.00,605.00 638.00,605.00
            637.76,624.82 624.86,637.97 605.00,638.00
            605.00,638.00 578.00,638.00 578.00,638.00
            578.00,480.27 508.06,327.29 393.00,220.09
            313.51,146.03 215.37,96.47 109.00,75.20
            86.16,70.63 63.21,67.53 40.00,65.91
            40.00,65.91 30.00,65.00 30.00,65.00
            30.00,65.00 9.00,64.00 9.00,64.00
            9.00,64.00 0.10,64.00 0.10,64.00 Z
          M 444.00,0.00
          C 444.00,0.00 604.00,0.00 604.00,0.00
            625.68,0.03 637.97,13.69 638.00,35.00
            638.00,35.00 638.00,190.00 638.00,190.00
            633.10,185.92 629.45,180.10 625.63,175.00
            625.63,175.00 606.92,151.00 606.92,151.00
            585.07,124.45 563.90,100.86 539.00,77.04
            520.42,59.26 497.62,40.84 477.00,25.37
            469.82,19.99 448.39,5.58 444.00,0.00 Z
          M 0.00,160.00
          C 0.00,160.00 12.00,160.96 12.00,160.96
            12.00,160.96 27.00,160.96 27.00,160.96
            27.00,160.96 37.00,161.91 37.00,161.91
            37.00,161.91 80.00,166.92 80.00,166.92
            122.40,173.94 163.92,186.36 203.00,204.31
            372.22,282.00 484.00,451.54 484.00,638.00
            484.00,638.00 376.00,638.00 376.00,638.00
            374.96,630.14 375.01,630.97 375.00,623.00
            375.00,623.00 370.73,582.00 370.73,582.00
            366.17,552.48 355.15,516.12 342.69,489.00
            292.51,379.71 196.29,300.90 79.00,274.35
            61.54,270.40 43.81,267.86 26.00,266.04
            26.00,266.04 16.00,266.04 16.00,266.04
            16.00,266.04 4.00,265.00 4.00,265.00
            4.00,265.00 0.00,265.00 0.00,265.00
            0.00,265.00 0.00,160.00 0.00,160.00 Z
          M 0.00,361.00
          C 8.17,362.08 8.91,361.96 17.00,362.00
            17.00,362.00 41.00,364.28 41.00,364.28
            66.64,367.74 95.50,376.52 119.00,387.31
            197.88,423.52 255.43,494.60 274.88,579.00
            278.25,593.64 280.06,608.05 281.09,623.00
            281.09,623.00 282.00,634.00 282.00,634.00
            282.00,634.00 282.00,638.00 282.00,638.00
            282.00,638.00 65.00,638.00 65.00,638.00
            65.00,638.00 43.00,638.00 43.00,638.00
            29.48,638.00 19.64,639.47 9.04,628.96
            5.33,625.28 3.02,621.96 1.36,617.00
            -0.10,612.62 0.01,610.49 0.00,606.00
            0.00,606.00 0.00,361.00 0.00,361.00 Z"
      />
    </svg>
  );
}

export default MqttLogo;
