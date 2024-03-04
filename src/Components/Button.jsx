import React from "react";

export default function Button({
    children,
    type = "button",
    bgColor = "bg-blue-600",
    textColor = "text-white",
    className = "",
    ...props
}) {
    return (
        <button className={`px-4 py-2 rounded-lg border-2 hover:bg-white hover:text-blue-600 hover:border-blue-600 ${bgColor} ${textColor} ${className}`} {...props}>
            {children}
        </button>
    );
}