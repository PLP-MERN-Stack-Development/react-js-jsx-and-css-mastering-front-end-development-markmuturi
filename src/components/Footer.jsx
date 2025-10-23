function Footer() {
    return (
        <footer className="fixed bottom-0 bg-slate-500 text-white w-screen py-8 mt-12">
            <div className="container mx-auto px-4 text-center">
                <div className="flex flex-col items-start">
                    <a href="" className="text-black hover:scale-105 hover:text-red-600 transition-all">Home</a>
                    <a href="" className="text-black hover:scale-105 hover:text-red-600 transition-all">Products</a>
                    <a href="" className="text-black hover:scale-105 hover:text-red-600 transition-all">Contact</a>
                </div>
                <p> &copy; 2025 Retailers Ltd. All Rights Reserved</p>
            </div>
        </footer>
    );
}

export default Footer;