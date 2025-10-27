import React from 'react';
import { useTheme } from '../context/ThemeContext';


function Card({ children }) {
    const { theme } = useTheme();

    return (
        <div
            className={`
                rounded-2xl shadow-xl p-8 w-full max-w-2xl
                transition-all duration-500
                ${theme === 'light'
                    ? 'bg-white text-gray-900'
                    : 'bg-gray-900 text-white'}
            `}
        >
            {children}
        </div>
    );
}

export default Card;