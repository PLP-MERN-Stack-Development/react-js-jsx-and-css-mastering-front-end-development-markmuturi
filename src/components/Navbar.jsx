import { useState, useRef, useEffect } from 'react'
import { useTheme } from '../context/ThemeContext';


function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const { theme } = useTheme();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return() => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`
                sticky top-0 z-50 flex justify-center gap-10 py-5
                text-lg font-semibold transition-all duration-300
                ${scrolled
                    ? 'bg-black backdrop-blur-lg shadow-lg'
                    : 'bg-black backdrop-blur-sm'
                }
                ${theme === 'light'
                    ? 'bg-white/70 text-gray-900 backdrop-blur-lg shadow-md'
                    : 'bg-gray-900 text-white backdrop-blur-md shadow-md'
                }
            `}
        >
            <a href='#home' className='hover:text-blue-700'>Home</a>
            <a href='#app' className='hover:text-blue-700'>App</a>
        </nav>
    );
}

export default Navbar;