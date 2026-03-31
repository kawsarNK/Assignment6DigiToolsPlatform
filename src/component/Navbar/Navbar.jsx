import React from 'react';

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto bg-white w-10/12">
            <div className="text-3xl font-bold text-purple-700">DigiTools</div>

            <div className="hidden md:flex space-x-8 text-gray-600 font-medium">
                <a href="#" className="hover:text-purple-600">Products</a>
                <a href="#" className="hover:text-purple-600">Features</a>
                <a href="#" className="hover:text-purple-600">Pricing</a>
                <a href="#" className="hover:text-purple-600">Testimonials</a>
                <a href="#" className="hover:text-purple-600">FAQ</a>
            </div>

            <div className="flex items-center space-x-6">
                <button className="text-gray-700 hover:text-purple-600">
                    {/* <ShoppingCart size={20} /> */}
                </button>
                <button className="font-semibold text-gray-700">Login</button>
                <button className="bg-purple-600 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-purple-700 transition">
                    Get Started
                </button>
            </div>
        </nav>
    );
};

export default Navbar;