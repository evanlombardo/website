import "../../styles/app.css";
import "../../styles/logos.css";

interface Props {
  lightMode: "light" | "dark";
  lg?: "lg-"; // Optional modifier to make icons large
}

function DotnetLogo({ lightMode, lg }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="dotnet"
      className={lg ? lg + "sq-icon" : "sq-icon"}
      viewBox="0 0 322 322"
    >
      <title>.NET</title>
      <path
        className="icon-path"
        fill={lightMode === "light" ? "#2f3337" : "#eeeeee"}
        stroke="black"
        strokeWidth="0"
        d="M 43.00,101.00
           C 43.00,101.00 56.00,101.00 56.00,101.00
             56.00,101.00 63.79,102.02 63.79,102.02
             63.79,102.02 78.69,124.00 78.69,124.00
             78.69,124.00 107.58,170.00 107.58,170.00
             107.58,170.00 123.00,194.00 123.00,194.00
             123.00,194.00 122.00,157.00 122.00,157.00
             122.00,157.00 122.00,101.00 122.00,101.00
             122.00,101.00 140.00,101.00 140.00,101.00
             140.00,101.00 140.00,219.00 140.00,219.00
             140.00,219.00 127.00,219.00 127.00,219.00
             127.00,219.00 119.38,217.98 119.38,217.98
             119.38,217.98 105.05,197.00 105.05,197.00
             105.05,197.00 60.00,125.00 60.00,125.00
             60.00,125.00 60.00,219.00 60.00,219.00
             60.00,219.00 43.00,219.00 43.00,219.00
             43.00,219.00 43.00,101.00 43.00,101.00 Z
           M 166.00,101.00
           C 166.00,101.00 227.00,101.00 227.00,101.00
             227.00,101.00 227.00,117.00 227.00,117.00
             227.00,117.00 194.00,117.00 194.00,117.00
             191.46,117.01 187.52,116.68 185.60,118.60
             183.68,120.52 184.01,124.46 184.00,127.00
             184.00,127.00 184.00,144.00 184.00,144.00
             184.05,146.52 183.95,149.40 186.31,150.98
             188.16,152.21 191.81,152.00 194.00,152.00
             194.00,152.00 224.00,152.00 224.00,152.00
             224.00,152.00 224.00,167.00 224.00,167.00
             224.00,167.00 192.00,167.00 192.00,167.00
             189.48,167.05 186.60,166.95 185.02,169.31
             183.88,171.02 184.01,174.00 184.00,176.00
             184.00,176.00 184.00,203.00 184.00,203.00
             184.00,203.00 230.00,203.00 230.00,203.00
             230.00,203.00 230.00,219.00 230.00,219.00
             230.00,219.00 166.00,219.00 166.00,219.00
             166.00,219.00 166.00,101.00 166.00,101.00 Z
           M 238.00,101.00
           C 238.00,101.00 322.00,101.00 322.00,101.00
             322.00,101.00 322.00,117.00 322.00,117.00
             322.00,117.00 289.00,117.00 289.00,117.00
             289.00,117.00 289.00,219.00 289.00,219.00
             289.00,219.00 271.00,219.00 271.00,219.00
             271.00,219.00 271.00,141.00 271.00,141.00
             271.00,141.00 271.00,125.00 271.00,125.00
             271.00,125.00 269.40,118.60 269.40,118.60
             269.40,118.60 261.00,117.00 261.00,117.00
             261.00,117.00 238.00,117.00 238.00,117.00
             238.00,117.00 238.00,101.00 238.00,101.00 Z
           M 11.00,199.74
           C 27.52,200.88 24.90,221.00 11.00,220.80
             -1.46,220.63 -5.17,201.52 11.00,199.74 Z"
      />
    </svg>
  );
}

export default DotnetLogo;
