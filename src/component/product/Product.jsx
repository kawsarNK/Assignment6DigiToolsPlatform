import React, { use, useState } from 'react';
import Card from '../card/Card';
import Cart from '../cart/Cart'; // We will create this below

const Product = ({ cardPromise }) => {
    const cardData = use(cardPromise);
    const [activeTab, setActiveTab] = useState('products');
    const [cart, setCart] = useState([]);

    // Function to add items to cart
    const handleAddToCart = (product) => {
        // Prevent adding the same product multiple times if desired
        if (!cart.find(item => item.id === product.id)) {
            setCart([...cart, product]);
        }
    };

    // Function to remove items from cart
    const handleRemoveFromCart = (productId) => {
        setCart(cart.filter(item => item.id !== productId));
    };

    return (
        <div className='Container mx-auto bg-slate-50 py-10 px-6'>
            <div className="mx-auto w-10/12">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-slate-900 mb-3">Premium Digital Tools</h2>
                    <p className="text-gray-500 max-w-xl mx-auto mb-6">
                        Choose from our curated collection of premium digital products designed
                        to boost your productivity and creativity.
                    </p>

                    {/* Toggle Switch */}
                    <div className="inline-flex bg-white p-1.5 rounded-full border border-gray-100 shadow-sm">
                        <button 
                            onClick={() => setActiveTab('products')}
                            className={`${activeTab === 'products' ? 'bg-[#7c3aed] text-white' : 'text-gray-500'} px-6 py-2 rounded-full font-semibold transition-all`}
                        >
                            Products
                        </button>
                        <button 
                            onClick={() => setActiveTab('cart')}
                            className={`${activeTab === 'cart' ? 'bg-[#7c3aed] text-white' : 'text-gray-500'} px-6 py-2 rounded-full font-semibold transition-all`}
                        >
                            Cart ({cart.length})
                        </button>
                    </div>
                </div>
            </div>

            {/* Conditional Rendering */}
            {activeTab === 'products' ? (
                <Card cardData={cardData} onAddToCart={handleAddToCart} />
            ) : (
                <Cart cartItems={cart} onRemove={handleRemoveFromCart} />
            )}
        </div>
    );
};

export default Product;