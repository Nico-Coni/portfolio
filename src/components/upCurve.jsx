import React from "react";

export default function UpCurve({ color = "white" }) {
    return (
        <svg
            viewBox="0 0 1440 80"
            preserveAspectRatio="none"
            className="absolute inset-x-0 bottom-0 w-full h-[120px] -z-10"
        >
            <path
                d="M-100 79C-100 79 218.416 23.165 693.5 23.165C1168.58 23.165 1487 79 1487 79V0H-100V79Z"
                fill={color}
            />
        </svg>
    );
} 
