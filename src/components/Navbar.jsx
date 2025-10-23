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
            <div className='bg-slate-500 w-screen mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex justify-between items-center h-20'>
                    {/*Company Name */}
                    <div className='text-2xl font-bold text-gray-900'>
                        <h2> Complete Retailers</h2>
                    </div>

                    {/* Nav Links */}
                    <div className='hidden md:flex space-x-8 justify-center'>
                        <a href="" className='text-gray-800 hover:text-red-600 hover:bg-white rounded-lg px-3 py-2 transition-all duration-200'>Home</a>
                        <a href="" className='text-gray-800 hover:text-red-600 hover:bg-white rounded-lg px-3 py-2 transition-all duration-200'>Products</a>
                        <a href="" className='text-gray-800 hover:text-red-600 hover:bg-white rounded-lg px-3 py-2 transition-all duration-200'>About</a>
                        <a href="" className='text-gray-800 hover:text-red-600 hover:bg-white rounded-lg px-3 py-2 transition-all duration-200'>Contact</a>
                    </div>

                    {/*CTA Button */}
                    <button
                        className='bg-red-300 hover:bg-red-500 text-black px-8 py-3 rounded-lg font-bold transition-colors'
                    >
                        Browse Products
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;