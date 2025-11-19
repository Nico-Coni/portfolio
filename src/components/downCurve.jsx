import React from "react";

export default function DownCurve({
  color = "white",
  className = "",
}) {
  return (
    <svg
      viewBox="0 0 1440 80"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-full h-auto ${className}`}
    >
      <path
        d="M-100 0C-100 0 218.416 55.835 693.5 55.835C1168.58 55.835 1487 0 1487 0V81H-100V0Z"
        fill={color}
      />
    </svg>
  );
}
