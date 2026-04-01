import React, { use, useState } from 'react';
import Card from '../card/Card';
import Cart from '../cart/Cart';
import toast from 'react-hot-toast';

const Product = ({ cardPromise, cart, setCart }) => {
    const cardData = use(cardPromise);
    const [activeTab, setActiveTab] = useState('products');

    // ADD TO CART
    const handleAddToCart = (product) => {
        const exists = cart.find(item => item.id === product.id);

        if (!exists) {
            setCart([...cart, product]);
            toast.success("Product added successfully!");
        } else {
            toast.error("Already added!");
        }
    };

    //  REMOVE ITEM + TOAST
    const handleRemoveFromCart = (productId) => {
        setCart(cart.filter(item => item.id !== productId));
        toast.error("Product removed!");
    };

    //  CHECKOUT (CLEAR CART + TOAST)
    const handleCheckout = () => {
        console.log("Checkout clicked");

        if (cart.length === 0) {
            toast.error("Cart is empty!");
            return;
        }

        setCart(() => []);
        toast.success("Checkout successful!");
    };

    return (
        <div className='container mx-auto bg-slate-50 py-10 px-6'>
            <div className="mx-auto w-10/12">

                {/* HEADER */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-slate-900 mb-3">
                        Premium Digital Tools
                    </h2>

                    <p className="text-gray-500 max-w-xl mx-auto mb-6">
                        Choose from our curated collection of premium digital products.
                    </p>

                    {/*  KEEP YOUR DESIGN */}
                    <div className="inline-flex bg-white p-1.5 rounded-full border border-gray-100 shadow-sm">
                        <button
                            onClick={() => setActiveTab('products')}
                            className={`${activeTab === 'products'
                                ? 'bg-[#7c3aed] text-white'
                                : 'text-gray-500'
                                } px-6 py-2 rounded-full font-semibold transition-all`}
                        >
                            Products
                        </button>

                        <button
                            onClick={() => setActiveTab('cart')}
                            className={`${activeTab === 'cart'
                                ? 'bg-[#7c3aed] text-white'
                                : 'text-gray-500'
                                } px-6 py-2 rounded-full font-semibold transition-all`}
                        >
                            Cart ({cart.length})
                        </button>
                    </div>
                </div>
            </div>

            {/* CONTENT */}
            {activeTab === 'products' ? (
                <Card cardData={cardData} onAddToCart={handleAddToCart} />
            ) : (
                <Cart
                    cartItems={cart}
                    onRemove={handleRemoveFromCart}
                    onCheckout={handleCheckout}
                />
            )}
        </div>
    );
};

export default Product;