import React from 'react';
import cartImg from '../../assets/shopping-cart.png';
const Navbar = ({ cartCount }) => {
    return (
        <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto bg-white w-10/12">

            <div className="text-3xl font-bold text-purple-700">DigiTools</div>


            <div className="hidden md:flex space-x-8 text-gray-600 font-medium">
                <a href="#" className="hover:text-purple-600">Products</a>
                <a href="#" className="hover:text-purple-600">Features</a>
                <a href="#" className="hover:text-purple-600">Pricing</a>
                <a href="#" className="hover:text-purple-600">Testimonials
                </a>
                <a href="#" className="hover:text-purple-600">FAQ</a>
            </div>

            <div className="flex items-center space-x-6">

                {/* CART ICON WITH COUNT */}
                <div className="relative">
                    <img src={cartImg} alt="Cart logo" className="w-6" />

                    {cartCount > 0 && (
                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                            {cartCount}
                        </span>
                    )}
                </div>

                <button className="font-semibold text-gray-700">
                    Login
                </button>

                <button className="bg-purple-600 text-white px-6 py-2.5 rounded-full font-semibold">
                    Get Started
                </button>
            </div>
        </nav>
    );
};
export default Navbar;