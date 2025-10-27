import React from "react";

export default function Button({ variant = 'primary', children, ...props }) {
    const baseStyle = 'rounded-lg px-6 py-3 font-semibold transition-all hover:scale-105';
    const variants = {
        primary: 'bg-black text-white hover:bg-white hover:text-black',
        secondary: 'bg-slate-600 text-white hover:bg-slate-800 w-max',
        danger: 'bg-red-600 text-white hover:bg-white hover:text-red-600'
    };

    return (
        <button {...props} className={`${baseStyle} ${variants[variant]}`}>
            {children}
        </button>
    );
}