import { useState, useRef, useEffect } from 'react'


function Navbar() {
    const [scrolled, setScrolled] = useState(false);

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
                sticky top-0 z-50
                transition-all duration-300
                ${scrolled
                    ? 'bg-white/30 backdrop-blur-lg shadow-lg'
                    : 'bg-white/20 backdrop-blur-sm'
                }
            `}
        >
            
        </nav>
    );
}

export default Navbar;