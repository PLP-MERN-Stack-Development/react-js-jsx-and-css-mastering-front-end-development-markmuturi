import { useTheme } from "../context/ThemeContext";

function Footer() {
    const { theme } = useTheme();
    return (

        <footer
            className={`
                text-center py-6 mt-12 transition-all duration-300
                ${theme === 'light'
                    ? 'bg-gray-100 text-gray-900'
                    : 'bg-gray-800 text-gray-200'}
                `}
            >
            <div className="flex flex-col px-4">
                <a href="#about" className="text-1xl hover:text-red-500">About</a>
                <a href="#top" className="text-1xl hover:text-red-500">Go to Top</a>
            </div>

            <div className="flex justify-center">
                <p className="font-bold"> &copy; Mark Muturi, 2025. All Rights Reserved ©</p>
            </div>
        </footer>
    );
}

export default Footer;