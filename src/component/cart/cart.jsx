const Cart = ({ cartItems, onRemove, onCheckout }) => {
    const total = cartItems.reduce((acc, item) => acc + item.price, 0);

    return (
        <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-gray-100 p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Your Cart</h2>

            {cartItems.length === 0 ? (
                <div className="text-center py-10 text-gray-400">
                    Your cart is empty.
                </div>
            ) : (
                <div className="space-y-4">

                    {cartItems.map((item) => (
                        <div
                            key={item.id}
                            className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-gray-100"
                        >
                            <div className="flex items-center gap-4">

                                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-sm overflow-hidden border border-gray-100">
                                    <img src={item.icon} className="w-10 h-10" />
                                </div>

                                <div>
                                    <h4 className="font-bold text-slate-900">
                                        {item.title}
                                    </h4>
                                    <p className="text-sm text-gray-500">
                                        ${item.price}
                                    </p>
                                </div>
                            </div>


                            <button
                                onClick={() => onRemove(item.id)}
                                className="text-red-500 font-semibold hover:text-red-700 transition-colors"
                            >
                                Remove
                            </button>
                        </div>
                    ))}

                    {/* TOTAL */}
                    <div className="pt-6 border-t border-gray-100 mt-6 flex justify-between items-center">
                        <span className="text-gray-500 font-medium">Total:</span>
                        <span className="text-3xl font-bold text-slate-900">
                            ${total}
                        </span>
                    </div>

                    {/*  CHECKOUT BUTTON  */}
                    <button
                        onClick={onCheckout}
                        className="w-full bg-[#7c3aed] text-white py-4 rounded-full font-bold text-lg mt-6 hover:bg-[#6d28d9] transition-all active:scale-95"
                    >
                    </button>
                </div>
            )}
        </div>
    );
};

export default Cart;